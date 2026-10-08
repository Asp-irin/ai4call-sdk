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
public class KnowledgeEntityTest {

  @Test
  public void instance() {
    Ai4callSDK testsdk = Ai4callSDK.testSDK();
    SdkEntity ent = testsdk.knowledge(null);
    assertNotNull(ent, "expected non-null knowledge entity");
  }

  @Test
  public void basic() {
    RunnerSupport.EntityTestSetup setup = knowledgeBasicSetup(null);
    // Per-op sdk-test-control.json skip — basic test exercises a flow
    // with multiple ops; skipping any op skips the whole flow.
    String mode = setup.live ? "live" : "unit";
    for (String op : new String[] { "create", "update", "load", "remove" }) {
      String reason = RunnerSupport.skipReason("entityOp", "knowledge." + op, mode);
      Assumptions.assumeTrue(reason == null,
          reason == null || "".equals(reason)
              ? "skipped via sdk-test-control.json" : reason);
    }
    // The basic flow consumes synthetic IDs from the fixture. In live mode
    // without an *_ENTID env override, those IDs hit the live API and 4xx.
    Assumptions.assumeFalse(setup.syntheticOnly,
        "live entity test uses synthetic IDs from fixture — set AI4CALL_TEST_KNOWLEDGE_ENTID JSON to run live");
    Ai4callSDK client = setup.client;

    // CREATE
    SdkEntity knowledgeRef01Ent = client.knowledge(null);
    Map<String, Object> knowledgeRef01Data = Helpers.toMapAny(Struct.getprop(
        Struct.getpath(setup.data, "new.knowledge"), "knowledge_ref01"));

    Object knowledgeRef01DataResult = knowledgeRef01Ent.create(knowledgeRef01Data, null);
    knowledgeRef01Data = Helpers.toMapAny(knowledgeRef01DataResult instanceof SdkEntity ? ((SdkEntity) knowledgeRef01DataResult).data() : knowledgeRef01DataResult);
    assertNotNull(knowledgeRef01Data, "expected create result to be a map");
    assertNotNull(knowledgeRef01Data.get("id"), "expected created entity to have an id");

    // UPDATE
    Map<String, Object> knowledgeRef01DataUp0Up = new LinkedHashMap<>();
    knowledgeRef01DataUp0Up.put("id", knowledgeRef01Data.get("id"));

    String knowledgeRef01MarkdefUp0Name = "defaultPostAction";
    String knowledgeRef01MarkdefUp0Value = "Mark01-knowledge_ref01_" + setup.now;
    knowledgeRef01DataUp0Up.put(knowledgeRef01MarkdefUp0Name, knowledgeRef01MarkdefUp0Value);

    Object knowledgeRef01ResdataUp0Result = knowledgeRef01Ent.update(knowledgeRef01DataUp0Up, null);
    Map<String, Object> knowledgeRef01ResdataUp0 = Helpers.toMapAny(knowledgeRef01ResdataUp0Result instanceof SdkEntity ? ((SdkEntity) knowledgeRef01ResdataUp0Result).data() : knowledgeRef01ResdataUp0Result);
    assertNotNull(knowledgeRef01ResdataUp0, "expected update result to be a map");
    assertEquals(knowledgeRef01DataUp0Up.get("id"), knowledgeRef01ResdataUp0.get("id"),
        "expected update result id to match");
    assertEquals(knowledgeRef01MarkdefUp0Value, knowledgeRef01ResdataUp0.get(knowledgeRef01MarkdefUp0Name),
        "expected " + knowledgeRef01MarkdefUp0Name + " to be updated");

    // LOAD
    Map<String, Object> knowledgeRef01MatchDt0 = new LinkedHashMap<>();
    knowledgeRef01MatchDt0.put("id", knowledgeRef01Data.get("id"));
    Object knowledgeRef01DataDt0Loaded = knowledgeRef01Ent.load(knowledgeRef01MatchDt0, null);
    Map<String, Object> knowledgeRef01DataDt0LoadResult = Helpers.toMapAny(knowledgeRef01DataDt0Loaded instanceof SdkEntity ? ((SdkEntity) knowledgeRef01DataDt0Loaded).data() : knowledgeRef01DataDt0Loaded);
    assertNotNull(knowledgeRef01DataDt0LoadResult, "expected load result to be a map");
    assertEquals(knowledgeRef01Data.get("id"), knowledgeRef01DataDt0LoadResult.get("id"),
        "expected load result id to match");

    // REMOVE
    Map<String, Object> knowledgeRef01MatchRm0 = new LinkedHashMap<>();
    knowledgeRef01MatchRm0.put("id", knowledgeRef01Data.get("id"));
    knowledgeRef01Ent.remove(knowledgeRef01MatchRm0, null);

  }

  static RunnerSupport.EntityTestSetup knowledgeBasicSetup(Map<String, Object> extra) {
    RunnerSupport.loadEnvLocal();

    Map<String, Object> entityData;
    try {
      String entityDataSource = Files.readString(Path.of(
          "..", ".sdk", "test", "entity", "knowledge", "KnowledgeTestData.json"));
      entityData = Helpers.toMapAny(Json.parse(entityDataSource));
    }
    catch (Exception e) {
      throw new AssertionError("failed to read knowledge test data: " + e.getMessage(), e);
    }

    Map<String, Object> options = new LinkedHashMap<>();
    options.put("entity", entityData.get("existing"));

    Ai4callSDK client = Ai4callSDK.testSDK(options, extra);

    // Generate idmap via transform, matching TS pattern.
    List<Object> idnames = new ArrayList<>();
    idnames.add("knowledge01");
    idnames.add("knowledge02");
    idnames.add("knowledge03");
    Object idmap = Struct.transform(idnames, Json.parse(
        "{\"`$PACK`\": [\"\", {"
        + "\"`$KEY`\": \"`$COPY`\","
        + "\"`$VAL`\": [\"`$FORMAT`\", \"upper\", \"`$COPY`\"]"
        + "}]}"));

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against
    // synthetic IDs from the fixture and 4xx's. Surface this so the test
    // can skip.
    String entidEnvRaw = RunnerSupport.getenv("AI4CALL_TEST_KNOWLEDGE_ENTID");
    boolean idmapOverridden = entidEnvRaw != null
        && entidEnvRaw.trim().startsWith("{");

    Map<String, Object> envm = new LinkedHashMap<>();
    envm.put("AI4CALL_TEST_KNOWLEDGE_ENTID", idmap);
    envm.put("AI4CALL_TEST_LIVE", "FALSE");
    envm.put("AI4CALL_TEST_EXPLAIN", "FALSE");
    envm.put("AI4CALL_APIKEY", "");
    Map<String, Object> env = RunnerSupport.envOverride(envm);

    Map<String, Object> idmapResolved = Helpers.toMapAny(env.get("AI4CALL_TEST_KNOWLEDGE_ENTID"));
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
