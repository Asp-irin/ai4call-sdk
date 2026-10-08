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
public class AccountPluginInstanceSuccessEntityTest {

  @Test
  public void instance() {
    Ai4callSDK testsdk = Ai4callSDK.testSDK();
    SdkEntity ent = testsdk.accountPluginInstanceSuccess(null);
    assertNotNull(ent, "expected non-null account_plugin_instance_success entity");
  }

  @Test
  public void basic() {
    RunnerSupport.EntityTestSetup setup = accountPluginInstanceSuccessBasicSetup(null);
    // Per-op sdk-test-control.json skip — basic test exercises a flow
    // with multiple ops; skipping any op skips the whole flow.
    String mode = setup.live ? "live" : "unit";
    for (String op : new String[] { "create", "update", "load", "remove" }) {
      String reason = RunnerSupport.skipReason("entityOp", "account_plugin_instance_success." + op, mode);
      Assumptions.assumeTrue(reason == null,
          reason == null || "".equals(reason)
              ? "skipped via sdk-test-control.json" : reason);
    }
    // The basic flow consumes synthetic IDs from the fixture. In live mode
    // without an *_ENTID env override, those IDs hit the live API and 4xx.
    Assumptions.assumeFalse(setup.syntheticOnly,
        "live entity test uses synthetic IDs from fixture — set AI4CALL_TEST_ACCOUNT_PLUGIN_INSTANCE_SUCCESS_ENTID JSON to run live");
    Ai4callSDK client = setup.client;

    // CREATE
    SdkEntity accountPluginInstanceSuccessRef01Ent = client.accountPluginInstanceSuccess(null);
    Map<String, Object> accountPluginInstanceSuccessRef01Data = Helpers.toMapAny(Struct.getprop(
        Struct.getpath(setup.data, "new.account_plugin_instance_success"), "account_plugin_instance_success_ref01"));

    Object accountPluginInstanceSuccessRef01DataResult = accountPluginInstanceSuccessRef01Ent.create(accountPluginInstanceSuccessRef01Data, null);
    accountPluginInstanceSuccessRef01Data = Helpers.toMapAny(accountPluginInstanceSuccessRef01DataResult instanceof SdkEntity ? ((SdkEntity) accountPluginInstanceSuccessRef01DataResult).data() : accountPluginInstanceSuccessRef01DataResult);
    assertNotNull(accountPluginInstanceSuccessRef01Data, "expected create result to be a map");

    // UPDATE
    Map<String, Object> accountPluginInstanceSuccessRef01DataUp0Up = new LinkedHashMap<>();

    String accountPluginInstanceSuccessRef01MarkdefUp0Name = "instanceName";
    String accountPluginInstanceSuccessRef01MarkdefUp0Value = "Mark01-account_plugin_instance_success_ref01_" + setup.now;
    accountPluginInstanceSuccessRef01DataUp0Up.put(accountPluginInstanceSuccessRef01MarkdefUp0Name, accountPluginInstanceSuccessRef01MarkdefUp0Value);

    Object accountPluginInstanceSuccessRef01ResdataUp0Result = accountPluginInstanceSuccessRef01Ent.update(accountPluginInstanceSuccessRef01DataUp0Up, null);
    Map<String, Object> accountPluginInstanceSuccessRef01ResdataUp0 = Helpers.toMapAny(accountPluginInstanceSuccessRef01ResdataUp0Result instanceof SdkEntity ? ((SdkEntity) accountPluginInstanceSuccessRef01ResdataUp0Result).data() : accountPluginInstanceSuccessRef01ResdataUp0Result);
    assertNotNull(accountPluginInstanceSuccessRef01ResdataUp0, "expected update result to be a map");
    assertEquals(accountPluginInstanceSuccessRef01MarkdefUp0Value, accountPluginInstanceSuccessRef01ResdataUp0.get(accountPluginInstanceSuccessRef01MarkdefUp0Name),
        "expected " + accountPluginInstanceSuccessRef01MarkdefUp0Name + " to be updated");

    // LOAD
    Map<String, Object> accountPluginInstanceSuccessRef01MatchDt0 = new LinkedHashMap<>();
    Object accountPluginInstanceSuccessRef01DataDt0Loaded = accountPluginInstanceSuccessRef01Ent.load(accountPluginInstanceSuccessRef01MatchDt0, null);
    assertNotNull(accountPluginInstanceSuccessRef01DataDt0Loaded, "expected load result to be non-null");

    // REMOVE
    Map<String, Object> accountPluginInstanceSuccessRef01MatchRm0 = new LinkedHashMap<>();
    accountPluginInstanceSuccessRef01MatchRm0.put("id", accountPluginInstanceSuccessRef01Data.get("id"));
    accountPluginInstanceSuccessRef01Ent.remove(accountPluginInstanceSuccessRef01MatchRm0, null);

  }

  static RunnerSupport.EntityTestSetup accountPluginInstanceSuccessBasicSetup(Map<String, Object> extra) {
    RunnerSupport.loadEnvLocal();

    Map<String, Object> entityData;
    try {
      String entityDataSource = Files.readString(Path.of(
          "..", ".sdk", "test", "entity", "account_plugin_instance_success", "AccountPluginInstanceSuccessTestData.json"));
      entityData = Helpers.toMapAny(Json.parse(entityDataSource));
    }
    catch (Exception e) {
      throw new AssertionError("failed to read account_plugin_instance_success test data: " + e.getMessage(), e);
    }

    Map<String, Object> options = new LinkedHashMap<>();
    options.put("entity", entityData.get("existing"));

    Ai4callSDK client = Ai4callSDK.testSDK(options, extra);

    // Generate idmap via transform, matching TS pattern.
    List<Object> idnames = new ArrayList<>();
    idnames.add("account_plugin_instance_success01");
    idnames.add("account_plugin_instance_success02");
    idnames.add("account_plugin_instance_success03");
    Object idmap = Struct.transform(idnames, Json.parse(
        "{\"`$PACK`\": [\"\", {"
        + "\"`$KEY`\": \"`$COPY`\","
        + "\"`$VAL`\": [\"`$FORMAT`\", \"upper\", \"`$COPY`\"]"
        + "}]}"));

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against
    // synthetic IDs from the fixture and 4xx's. Surface this so the test
    // can skip.
    String entidEnvRaw = RunnerSupport.getenv("AI4CALL_TEST_ACCOUNT_PLUGIN_INSTANCE_SUCCESS_ENTID");
    boolean idmapOverridden = entidEnvRaw != null
        && entidEnvRaw.trim().startsWith("{");

    Map<String, Object> envm = new LinkedHashMap<>();
    envm.put("AI4CALL_TEST_ACCOUNT_PLUGIN_INSTANCE_SUCCESS_ENTID", idmap);
    envm.put("AI4CALL_TEST_LIVE", "FALSE");
    envm.put("AI4CALL_TEST_EXPLAIN", "FALSE");
    envm.put("AI4CALL_APIKEY", "");
    Map<String, Object> env = RunnerSupport.envOverride(envm);

    Map<String, Object> idmapResolved = Helpers.toMapAny(env.get("AI4CALL_TEST_ACCOUNT_PLUGIN_INSTANCE_SUCCESS_ENTID"));
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
