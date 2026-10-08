package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/ai4call-sdk/go"
	"github.com/voxgig-sdk/ai4call-sdk/go/core"

	vs "github.com/voxgig-sdk/ai4call-sdk/go/utility/struct"
)

func TestKnowledgeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Knowledge(nil)
		if ent == nil {
			t.Fatal("expected non-nil KnowledgeEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := knowledgeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "knowledge." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set AI4CALL_TEST_KNOWLEDGE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		knowledgeRef01Ent := client.Knowledge(nil)
		knowledgeRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "knowledge"}), "knowledge_ref01"))

		knowledgeRef01DataResult, err := knowledgeRef01Ent.Create(knowledgeRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		knowledgeRef01Data = core.ToMapAny(entityData(knowledgeRef01DataResult))
		if knowledgeRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if knowledgeRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		knowledgeRef01DataUp0Up := map[string]any{
			"id": knowledgeRef01Data["id"],
		}

		knowledgeRef01MarkdefUp0Name := "defaultPostAction"
		knowledgeRef01MarkdefUp0Value := fmt.Sprintf("Mark01-knowledge_ref01_%d", setup.now)
		knowledgeRef01DataUp0Up[knowledgeRef01MarkdefUp0Name] = knowledgeRef01MarkdefUp0Value

		knowledgeRef01ResdataUp0Result, err := knowledgeRef01Ent.Update(knowledgeRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		knowledgeRef01ResdataUp0 := core.ToMapAny(entityData(knowledgeRef01ResdataUp0Result))
		if knowledgeRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if knowledgeRef01ResdataUp0["id"] != knowledgeRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if knowledgeRef01ResdataUp0[knowledgeRef01MarkdefUp0Name] != knowledgeRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", knowledgeRef01MarkdefUp0Name, knowledgeRef01ResdataUp0[knowledgeRef01MarkdefUp0Name])
		}

		// LOAD
		knowledgeRef01MatchDt0 := map[string]any{
			"id": knowledgeRef01Data["id"],
		}
		knowledgeRef01DataDt0Loaded, err := knowledgeRef01Ent.Load(knowledgeRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		knowledgeRef01DataDt0LoadResult := core.ToMapAny(entityData(knowledgeRef01DataDt0Loaded))
		if knowledgeRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if knowledgeRef01DataDt0LoadResult["id"] != knowledgeRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		knowledgeRef01MatchRm0 := map[string]any{
			"id": knowledgeRef01Data["id"],
		}
		_, err = knowledgeRef01Ent.Remove(knowledgeRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func knowledgeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "knowledge", "KnowledgeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read knowledge test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse knowledge test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"knowledge01", "knowledge02", "knowledge03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("AI4CALL_TEST_KNOWLEDGE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"AI4CALL_TEST_KNOWLEDGE_ENTID": idmap,
		"AI4CALL_TEST_LIVE":      "FALSE",
		"AI4CALL_TEST_EXPLAIN":   "FALSE",
		"AI4CALL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["AI4CALL_TEST_KNOWLEDGE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["AI4CALL_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["AI4CALL_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewAi4callSDK(core.ToMapAny(mergedOpts))
	}

	live := env["AI4CALL_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["AI4CALL_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
