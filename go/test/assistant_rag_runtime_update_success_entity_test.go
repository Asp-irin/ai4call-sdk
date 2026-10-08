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

func TestAssistantRagRuntimeUpdateSuccessEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AssistantRagRuntimeUpdateSuccess(nil)
		if ent == nil {
			t.Fatal("expected non-nil AssistantRagRuntimeUpdateSuccessEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := assistant_rag_runtime_update_successBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "assistant_rag_runtime_update_success." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set AI4CALL_TEST_ASSISTANT_RAG_RUNTIME_UPDATE_SUCCESS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		assistantRagRuntimeUpdateSuccessRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.assistant_rag_runtime_update_success")))
		var assistantRagRuntimeUpdateSuccessRef01Data map[string]any
		if len(assistantRagRuntimeUpdateSuccessRef01DataRaw) > 0 {
			assistantRagRuntimeUpdateSuccessRef01Data = core.ToMapAny(assistantRagRuntimeUpdateSuccessRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = assistantRagRuntimeUpdateSuccessRef01Data

		// UPDATE
		assistantRagRuntimeUpdateSuccessRef01Ent := client.AssistantRagRuntimeUpdateSuccess(nil)
		assistantRagRuntimeUpdateSuccessRef01DataUp0Up := map[string]any{
		}

		assistantRagRuntimeUpdateSuccessRef01MarkdefUp0Name := "assistantApiKey"
		assistantRagRuntimeUpdateSuccessRef01MarkdefUp0Value := fmt.Sprintf("Mark01-assistant_rag_runtime_update_success_ref01_%d", setup.now)
		assistantRagRuntimeUpdateSuccessRef01DataUp0Up[assistantRagRuntimeUpdateSuccessRef01MarkdefUp0Name] = assistantRagRuntimeUpdateSuccessRef01MarkdefUp0Value

		assistantRagRuntimeUpdateSuccessRef01ResdataUp0Result, err := assistantRagRuntimeUpdateSuccessRef01Ent.Update(assistantRagRuntimeUpdateSuccessRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		assistantRagRuntimeUpdateSuccessRef01ResdataUp0 := core.ToMapAny(entityData(assistantRagRuntimeUpdateSuccessRef01ResdataUp0Result))
		if assistantRagRuntimeUpdateSuccessRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if assistantRagRuntimeUpdateSuccessRef01ResdataUp0[assistantRagRuntimeUpdateSuccessRef01MarkdefUp0Name] != assistantRagRuntimeUpdateSuccessRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", assistantRagRuntimeUpdateSuccessRef01MarkdefUp0Name, assistantRagRuntimeUpdateSuccessRef01ResdataUp0[assistantRagRuntimeUpdateSuccessRef01MarkdefUp0Name])
		}

	})
}

func assistant_rag_runtime_update_successBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "assistant_rag_runtime_update_success", "AssistantRagRuntimeUpdateSuccessTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read assistant_rag_runtime_update_success test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse assistant_rag_runtime_update_success test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"assistant_rag_runtime_update_success01", "assistant_rag_runtime_update_success02", "assistant_rag_runtime_update_success03", "assistant01", "assistant02", "assistant03"},
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
	entidEnvRaw := os.Getenv("AI4CALL_TEST_ASSISTANT_RAG_RUNTIME_UPDATE_SUCCESS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"AI4CALL_TEST_ASSISTANT_RAG_RUNTIME_UPDATE_SUCCESS_ENTID": idmap,
		"AI4CALL_TEST_LIVE":      "FALSE",
		"AI4CALL_TEST_EXPLAIN":   "FALSE",
		"AI4CALL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["AI4CALL_TEST_ASSISTANT_RAG_RUNTIME_UPDATE_SUCCESS_ENTID"])
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
