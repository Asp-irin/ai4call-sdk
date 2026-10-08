package sdktest

import (
	"encoding/json"
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

func TestAssistantSettingsConfigurationSuccessEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AssistantSettingsConfigurationSuccess(nil)
		if ent == nil {
			t.Fatal("expected non-nil AssistantSettingsConfigurationSuccessEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := assistant_settings_configuration_successBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "assistant_settings_configuration_success." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set AI4CALL_TEST_ASSISTANT_SETTINGS_CONFIGURATION_SUCCESS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		assistantSettingsConfigurationSuccessRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.assistant_settings_configuration_success")))
		var assistantSettingsConfigurationSuccessRef01Data map[string]any
		if len(assistantSettingsConfigurationSuccessRef01DataRaw) > 0 {
			assistantSettingsConfigurationSuccessRef01Data = core.ToMapAny(assistantSettingsConfigurationSuccessRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = assistantSettingsConfigurationSuccessRef01Data

		// LOAD
		assistantSettingsConfigurationSuccessRef01Ent := client.AssistantSettingsConfigurationSuccess(nil)
		assistantSettingsConfigurationSuccessRef01MatchDt0 := map[string]any{
			"id": assistantSettingsConfigurationSuccessRef01Data["id"],
		}
		assistantSettingsConfigurationSuccessRef01DataDt0Loaded, err := assistantSettingsConfigurationSuccessRef01Ent.Load(assistantSettingsConfigurationSuccessRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		assistantSettingsConfigurationSuccessRef01DataDt0LoadResult := core.ToMapAny(entityData(assistantSettingsConfigurationSuccessRef01DataDt0Loaded))
		if assistantSettingsConfigurationSuccessRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if assistantSettingsConfigurationSuccessRef01DataDt0LoadResult["id"] != assistantSettingsConfigurationSuccessRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func assistant_settings_configuration_successBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "assistant_settings_configuration_success", "AssistantSettingsConfigurationSuccessTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read assistant_settings_configuration_success test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse assistant_settings_configuration_success test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"assistant_settings_configuration_success01", "assistant_settings_configuration_success02", "assistant_settings_configuration_success03"},
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
	entidEnvRaw := os.Getenv("AI4CALL_TEST_ASSISTANT_SETTINGS_CONFIGURATION_SUCCESS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"AI4CALL_TEST_ASSISTANT_SETTINGS_CONFIGURATION_SUCCESS_ENTID": idmap,
		"AI4CALL_TEST_LIVE":      "FALSE",
		"AI4CALL_TEST_EXPLAIN":   "FALSE",
		"AI4CALL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["AI4CALL_TEST_ASSISTANT_SETTINGS_CONFIGURATION_SUCCESS_ENTID"])
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
