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
public class AssistantEntityTest {

  @Test
  public void instance() {
    Ai4callSDK testsdk = Ai4callSDK.testSDK();
    SdkEntity ent = testsdk.assistant(null);
    assertNotNull(ent, "expected non-null assistant entity");
  }

  @Test
  public void basic() {
    RunnerSupport.EntityTestSetup setup = assistantBasicSetup(null);
    // Per-op sdk-test-control.json skip — basic test exercises a flow
    // with multiple ops; skipping any op skips the whole flow.
    String mode = setup.live ? "live" : "unit";
    for (String op : new String[] { "create", "update", "load", "remove" }) {
      String reason = RunnerSupport.skipReason("entityOp", "assistant." + op, mode);
      Assumptions.assumeTrue(reason == null,
          reason == null || "".equals(reason)
              ? "skipped via sdk-test-control.json" : reason);
    }
    // The basic flow consumes synthetic IDs from the fixture. In live mode
    // without an *_ENTID env override, those IDs hit the live API and 4xx.
    Assumptions.assumeFalse(setup.syntheticOnly,
        "live entity test uses synthetic IDs from fixture — set AI4CALL_TEST_ASSISTANT_ENTID JSON to run live");
    Ai4callSDK client = setup.client;

    // CREATE
    SdkEntity assistantRef01Ent = client.assistant(null);
    Map<String, Object> assistantRef01Data = Helpers.toMapAny(Struct.getprop(
        Struct.getpath(setup.data, "new.assistant"), "assistant_ref01"));

    Object assistantRef01DataResult = assistantRef01Ent.create(assistantRef01Data, null);
    assistantRef01Data = Helpers.toMapAny(assistantRef01DataResult instanceof SdkEntity ? ((SdkEntity) assistantRef01DataResult).data() : assistantRef01DataResult);
    assertNotNull(assistantRef01Data, "expected create result to be a map");
    assertNotNull(assistantRef01Data.get("id"), "expected created entity to have an id");

    // UPDATE
    Map<String, Object> assistantRef01DataUp0Up = new LinkedHashMap<>();
    assistantRef01DataUp0Up.put("id", assistantRef01Data.get("id"));

    String assistantRef01MarkdefUp0Name = "description";
    String assistantRef01MarkdefUp0Value = "Mark01-assistant_ref01_" + setup.now;
    assistantRef01DataUp0Up.put(assistantRef01MarkdefUp0Name, assistantRef01MarkdefUp0Value);

    Object assistantRef01ResdataUp0Result = assistantRef01Ent.update(assistantRef01DataUp0Up, null);
    Map<String, Object> assistantRef01ResdataUp0 = Helpers.toMapAny(assistantRef01ResdataUp0Result instanceof SdkEntity ? ((SdkEntity) assistantRef01ResdataUp0Result).data() : assistantRef01ResdataUp0Result);
    assertNotNull(assistantRef01ResdataUp0, "expected update result to be a map");
    assertEquals(assistantRef01DataUp0Up.get("id"), assistantRef01ResdataUp0.get("id"),
        "expected update result id to match");
    assertEquals(assistantRef01MarkdefUp0Value, assistantRef01ResdataUp0.get(assistantRef01MarkdefUp0Name),
        "expected " + assistantRef01MarkdefUp0Name + " to be updated");

    // LOAD
    Map<String, Object> assistantRef01MatchDt0 = new LinkedHashMap<>();
    assistantRef01MatchDt0.put("id", assistantRef01Data.get("id"));
    Object assistantRef01DataDt0Loaded = assistantRef01Ent.load(assistantRef01MatchDt0, null);
    Map<String, Object> assistantRef01DataDt0LoadResult = Helpers.toMapAny(assistantRef01DataDt0Loaded instanceof SdkEntity ? ((SdkEntity) assistantRef01DataDt0Loaded).data() : assistantRef01DataDt0Loaded);
    assertNotNull(assistantRef01DataDt0LoadResult, "expected load result to be a map");
    assertEquals(assistantRef01Data.get("id"), assistantRef01DataDt0LoadResult.get("id"),
        "expected load result id to match");

    // REMOVE
    Map<String, Object> assistantRef01MatchRm0 = new LinkedHashMap<>();
    assistantRef01MatchRm0.put("id", assistantRef01Data.get("id"));
    assistantRef01Ent.remove(assistantRef01MatchRm0, null);

  }

  static RunnerSupport.EntityTestSetup assistantBasicSetup(Map<String, Object> extra) {
    RunnerSupport.loadEnvLocal();

    Map<String, Object> entityData;
    try {
      String entityDataSource = Files.readString(Path.of(
          "..", ".sdk", "test", "entity", "assistant", "AssistantTestData.json"));
      entityData = Helpers.toMapAny(Json.parse(entityDataSource));
    }
    catch (Exception e) {
      throw new AssertionError("failed to read assistant test data: " + e.getMessage(), e);
    }

    Map<String, Object> options = new LinkedHashMap<>();
    options.put("entity", entityData.get("existing"));

    Ai4callSDK client = Ai4callSDK.testSDK(options, extra);

    // Generate idmap via transform, matching TS pattern.
    List<Object> idnames = new ArrayList<>();
    idnames.add("assistant01");
    idnames.add("assistant02");
    idnames.add("assistant03");
    Object idmap = Struct.transform(idnames, Json.parse(
        "{\"`$PACK`\": [\"\", {"
        + "\"`$KEY`\": \"`$COPY`\","
        + "\"`$VAL`\": [\"`$FORMAT`\", \"upper\", \"`$COPY`\"]"
        + "}]}"));

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against
    // synthetic IDs from the fixture and 4xx's. Surface this so the test
    // can skip.
    String entidEnvRaw = RunnerSupport.getenv("AI4CALL_TEST_ASSISTANT_ENTID");
    boolean idmapOverridden = entidEnvRaw != null
        && entidEnvRaw.trim().startsWith("{");

    Map<String, Object> envm = new LinkedHashMap<>();
    envm.put("AI4CALL_TEST_ASSISTANT_ENTID", idmap);
    envm.put("AI4CALL_TEST_LIVE", "FALSE");
    envm.put("AI4CALL_TEST_EXPLAIN", "FALSE");
    envm.put("AI4CALL_APIKEY", "");
    Map<String, Object> env = RunnerSupport.envOverride(envm);

    Map<String, Object> idmapResolved = Helpers.toMapAny(env.get("AI4CALL_TEST_ASSISTANT_ENTID"));
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
