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

func TestAccountPluginConfigurationSuccessEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AccountPluginConfigurationSuccess(nil)
		if ent == nil {
			t.Fatal("expected non-nil AccountPluginConfigurationSuccessEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := account_plugin_configuration_successBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "account_plugin_configuration_success." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		accountPluginConfigurationSuccessRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.account_plugin_configuration_success")))
		var accountPluginConfigurationSuccessRef01Data map[string]any
		if len(accountPluginConfigurationSuccessRef01DataRaw) > 0 {
			accountPluginConfigurationSuccessRef01Data = core.ToMapAny(accountPluginConfigurationSuccessRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = accountPluginConfigurationSuccessRef01Data

		// UPDATE
		accountPluginConfigurationSuccessRef01Ent := client.AccountPluginConfigurationSuccess(nil)
		accountPluginConfigurationSuccessRef01DataUp0Up := map[string]any{
		}

		accountPluginConfigurationSuccessRef01MarkdefUp0Name := "instanceName"
		accountPluginConfigurationSuccessRef01MarkdefUp0Value := fmt.Sprintf("Mark01-account_plugin_configuration_success_ref01_%d", setup.now)
		accountPluginConfigurationSuccessRef01DataUp0Up[accountPluginConfigurationSuccessRef01MarkdefUp0Name] = accountPluginConfigurationSuccessRef01MarkdefUp0Value

		accountPluginConfigurationSuccessRef01ResdataUp0Result, err := accountPluginConfigurationSuccessRef01Ent.Update(accountPluginConfigurationSuccessRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		accountPluginConfigurationSuccessRef01ResdataUp0 := core.ToMapAny(entityData(accountPluginConfigurationSuccessRef01ResdataUp0Result))
		if accountPluginConfigurationSuccessRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if accountPluginConfigurationSuccessRef01ResdataUp0[accountPluginConfigurationSuccessRef01MarkdefUp0Name] != accountPluginConfigurationSuccessRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", accountPluginConfigurationSuccessRef01MarkdefUp0Name, accountPluginConfigurationSuccessRef01ResdataUp0[accountPluginConfigurationSuccessRef01MarkdefUp0Name])
		}

		// LOAD
		accountPluginConfigurationSuccessRef01MatchDt0 := map[string]any{}
		accountPluginConfigurationSuccessRef01DataDt0Loaded, err := accountPluginConfigurationSuccessRef01Ent.Load(accountPluginConfigurationSuccessRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if accountPluginConfigurationSuccessRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func account_plugin_configuration_successBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "account_plugin_configuration_success", "AccountPluginConfigurationSuccessTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read account_plugin_configuration_success test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse account_plugin_configuration_success test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"account_plugin_configuration_success01", "account_plugin_configuration_success02", "account_plugin_configuration_success03"},
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
	entidEnvRaw := os.Getenv("AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID": idmap,
		"AI4CALL_TEST_LIVE":      "FALSE",
		"AI4CALL_TEST_EXPLAIN":   "FALSE",
		"AI4CALL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID"])
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
