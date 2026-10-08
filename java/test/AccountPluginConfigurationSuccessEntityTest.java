package voxgig.ai4callsdk.sdktest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;

import voxgig.ai4callsdk.core.Helpers;
import voxgig.ai4callsdk.core.SdkEntity;
import voxgig.ai4callsdk.core.Ai4callSDK;
import voxgig.ai4callsdk.utility.Json;
import voxgig.ai4callsdk.utility.struct.Struct;

@SuppressWarnings({"unchecked", "unused"})
public class AccountPluginConfigurationSuccessEntityTest {

  @Test
  public void instance() {
    Ai4callSDK testsdk = Ai4callSDK.testSDK();
    SdkEntity ent = testsdk.accountPluginConfigurationSuccess(null);
    assertNotNull(ent, "expected non-null account_plugin_configuration_success entity");
  }

  @Test
  public void basic() {
    RunnerSupport.EntityTestSetup setup = accountPluginConfigurationSuccessBasicSetup(null);
    // Per-op sdk-test-control.json skip — basic test exercises a flow
    // with multiple ops; skipping any op skips the whole flow.
    String mode = setup.live ? "live" : "unit";
    for (String op : new String[] { "update", "load" }) {
      String reason = RunnerSupport.skipReason("entityOp", "account_plugin_configuration_success." + op, mode);
      Assumptions.assumeTrue(reason == null,
          reason == null || "".equals(reason)
              ? "skipped via sdk-test-control.json" : reason);
    }
    // The basic flow consumes synthetic IDs from the fixture. In live mode
    // without an *_ENTID env override, those IDs hit the live API and 4xx.
    Assumptions.assumeFalse(setup.syntheticOnly,
        "live entity test uses synthetic IDs from fixture — set AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID JSON to run live");
    Ai4callSDK client = setup.client;

    // Bootstrap entity data from existing test data (no create step in flow).
    List<List<Object>> accountPluginConfigurationSuccessRef01DataRaw = Struct.items(Helpers.toMapAny(
        Struct.getpath(setup.data, "existing.account_plugin_configuration_success")));
    Map<String, Object> accountPluginConfigurationSuccessRef01Data = accountPluginConfigurationSuccessRef01DataRaw.isEmpty()
        ? null : Helpers.toMapAny(accountPluginConfigurationSuccessRef01DataRaw.get(0).get(1));

    // UPDATE
    SdkEntity accountPluginConfigurationSuccessRef01Ent = client.accountPluginConfigurationSuccess(null);
    Map<String, Object> accountPluginConfigurationSuccessRef01DataUp0Up = new LinkedHashMap<>();

    String accountPluginConfigurationSuccessRef01MarkdefUp0Name = "instanceName";
    String accountPluginConfigurationSuccessRef01MarkdefUp0Value = "Mark01-account_plugin_configuration_success_ref01_" + setup.now;
    accountPluginConfigurationSuccessRef01DataUp0Up.put(accountPluginConfigurationSuccessRef01MarkdefUp0Name, accountPluginConfigurationSuccessRef01MarkdefUp0Value);

    Object accountPluginConfigurationSuccessRef01ResdataUp0Result = accountPluginConfigurationSuccessRef01Ent.update(accountPluginConfigurationSuccessRef01DataUp0Up, null);
    Map<String, Object> accountPluginConfigurationSuccessRef01ResdataUp0 = Helpers.toMapAny(accountPluginConfigurationSuccessRef01ResdataUp0Result instanceof SdkEntity ? ((SdkEntity) accountPluginConfigurationSuccessRef01ResdataUp0Result).data() : accountPluginConfigurationSuccessRef01ResdataUp0Result);
    assertNotNull(accountPluginConfigurationSuccessRef01ResdataUp0, "expected update result to be a map");
    assertEquals(accountPluginConfigurationSuccessRef01MarkdefUp0Value, accountPluginConfigurationSuccessRef01ResdataUp0.get(accountPluginConfigurationSuccessRef01MarkdefUp0Name),
        "expected " + accountPluginConfigurationSuccessRef01MarkdefUp0Name + " to be updated");

    // LOAD
    Map<String, Object> accountPluginConfigurationSuccessRef01MatchDt0 = new LinkedHashMap<>();
    Object accountPluginConfigurationSuccessRef01DataDt0Loaded = accountPluginConfigurationSuccessRef01Ent.load(accountPluginConfigurationSuccessRef01MatchDt0, null);
    assertNotNull(accountPluginConfigurationSuccessRef01DataDt0Loaded, "expected load result to be non-null");

  }

  static RunnerSupport.EntityTestSetup accountPluginConfigurationSuccessBasicSetup(Map<String, Object> extra) {
    RunnerSupport.loadEnvLocal();

    Map<String, Object> entityData;
    try {
      String entityDataSource = Files.readString(Path.of(
          "..", ".sdk", "test", "entity", "account_plugin_configuration_success", "AccountPluginConfigurationSuccessTestData.json"));
      entityData = Helpers.toMapAny(Json.parse(entityDataSource));
    }
    catch (Exception e) {
      throw new AssertionError("failed to read account_plugin_configuration_success test data: " + e.getMessage(), e);
    }

    Map<String, Object> options = new LinkedHashMap<>();
    options.put("entity", entityData.get("existing"));

    Ai4callSDK client = Ai4callSDK.testSDK(options, extra);

    // Generate idmap via transform, matching TS pattern.
    List<Object> idnames = new ArrayList<>();
    idnames.add("account_plugin_configuration_success01");
    idnames.add("account_plugin_configuration_success02");
    idnames.add("account_plugin_configuration_success03");
    Object idmap = Struct.transform(idnames, Json.parse(
        "{\"`$PACK`\": [\"\", {"
        + "\"`$KEY`\": \"`$COPY`\","
        + "\"`$VAL`\": [\"`$FORMAT`\", \"upper\", \"`$COPY`\"]"
        + "}]}"));

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against
    // synthetic IDs from the fixture and 4xx's. Surface this so the test
    // can skip.
    String entidEnvRaw = RunnerSupport.getenv("AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID");
    boolean idmapOverridden = entidEnvRaw != null
        && entidEnvRaw.trim().startsWith("{");

    Map<String, Object> envm = new LinkedHashMap<>();
    envm.put("AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID", idmap);
    envm.put("AI4CALL_TEST_LIVE", "FALSE");
    envm.put("AI4CALL_TEST_EXPLAIN", "FALSE");
    envm.put("AI4CALL_APIKEY", "");
    Map<String, Object> env = RunnerSupport.envOverride(envm);

    Map<String, Object> idmapResolved = Helpers.toMapAny(env.get("AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID"));
    if (idmapResolved == null) {
      idmapResolved = Helpers.toMapAny(idmap);
    }

    boolean live = "TRUE".equals(env.get("AI4CALL_TEST_LIVE"));
    if (live) {
      // sdk-test-control.json's test.client.options seeds the live
      // client; the generated fields below overwrite anything they name.
      Map<String, Object> liveOpts =
          new LinkedHashMap<>(RunnerSupport.liveClientOptions());
      liveOpts.put("apikey", env.get("AI4CALL_APIKEY"));
      // An empty map, not a null one: merge answers null when its last
      // entry is null, and basicSetup is normally called with no extras -
      // so a bare null silently discarded the apikey and server values
      // above.
      Map<String, Object> extraOpts =
          extra == null ? new LinkedHashMap<>() : extra;
      Object mergedOpts = Struct.merge(Struct.jt(liveOpts, extraOpts));
      client = new Ai4callSDK(Helpers.toMapAny(mergedOpts));
    }

    RunnerSupport.EntityTestSetup setup = new RunnerSupport.EntityTestSetup();
    setup.client = client;
    setup.data = entityData;
    setup.idmap = idmapResolved;
    setup.env = env;
    setup.explain = "TRUE".equals(env.get("AI4CALL_TEST_EXPLAIN"));
    setup.live = live;
    setup.syntheticOnly = live && !idmapOverridden;
    setup.now = System.currentTimeMillis();
    return setup;
  }
}
