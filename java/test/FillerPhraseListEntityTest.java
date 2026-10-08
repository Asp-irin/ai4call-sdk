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
public class FillerPhraseListEntityTest {

  @Test
  public void instance() {
    Ai4callSDK testsdk = Ai4callSDK.testSDK();
    SdkEntity ent = testsdk.fillerPhraseList(null);
    assertNotNull(ent, "expected non-null filler_phrase_list entity");
  }

  @Test
  public void basic() {
    RunnerSupport.EntityTestSetup setup = fillerPhraseListBasicSetup(null);
    // Per-op sdk-test-control.json skip — basic test exercises a flow
    // with multiple ops; skipping any op skips the whole flow.
    String mode = setup.live ? "live" : "unit";
    for (String op : new String[] { "create", "update", "load", "remove" }) {
      String reason = RunnerSupport.skipReason("entityOp", "filler_phrase_list." + op, mode);
      Assumptions.assumeTrue(reason == null,
          reason == null || "".equals(reason)
              ? "skipped via sdk-test-control.json" : reason);
    }
    // The basic flow consumes synthetic IDs from the fixture. In live mode
    // without an *_ENTID env override, those IDs hit the live API and 4xx.
    Assumptions.assumeFalse(setup.syntheticOnly,
        "live entity test uses synthetic IDs from fixture — set AI4CALL_TEST_FILLER_PHRASE_LIST_ENTID JSON to run live");
    Ai4callSDK client = setup.client;

    // CREATE
    SdkEntity fillerPhraseListRef01Ent = client.fillerPhraseList(null);
    Map<String, Object> fillerPhraseListRef01Data = Helpers.toMapAny(Struct.getprop(
        Struct.getpath(setup.data, "new.filler_phrase_list"), "filler_phrase_list_ref01"));

    Object fillerPhraseListRef01DataResult = fillerPhraseListRef01Ent.create(fillerPhraseListRef01Data, null);
    fillerPhraseListRef01Data = Helpers.toMapAny(fillerPhraseListRef01DataResult instanceof SdkEntity ? ((SdkEntity) fillerPhraseListRef01DataResult).data() : fillerPhraseListRef01DataResult);
    assertNotNull(fillerPhraseListRef01Data, "expected create result to be a map");
    assertNotNull(fillerPhraseListRef01Data.get("id"), "expected created entity to have an id");

    // UPDATE
    Map<String, Object> fillerPhraseListRef01DataUp0Up = new LinkedHashMap<>();
    fillerPhraseListRef01DataUp0Up.put("id", fillerPhraseListRef01Data.get("id"));

    String fillerPhraseListRef01MarkdefUp0Name = "message";
    String fillerPhraseListRef01MarkdefUp0Value = "Mark01-filler_phrase_list_ref01_" + setup.now;
    fillerPhraseListRef01DataUp0Up.put(fillerPhraseListRef01MarkdefUp0Name, fillerPhraseListRef01MarkdefUp0Value);

    Object fillerPhraseListRef01ResdataUp0Result = fillerPhraseListRef01Ent.update(fillerPhraseListRef01DataUp0Up, null);
    Map<String, Object> fillerPhraseListRef01ResdataUp0 = Helpers.toMapAny(fillerPhraseListRef01ResdataUp0Result instanceof SdkEntity ? ((SdkEntity) fillerPhraseListRef01ResdataUp0Result).data() : fillerPhraseListRef01ResdataUp0Result);
    assertNotNull(fillerPhraseListRef01ResdataUp0, "expected update result to be a map");
    assertEquals(fillerPhraseListRef01DataUp0Up.get("id"), fillerPhraseListRef01ResdataUp0.get("id"),
        "expected update result id to match");
    assertEquals(fillerPhraseListRef01MarkdefUp0Value, fillerPhraseListRef01ResdataUp0.get(fillerPhraseListRef01MarkdefUp0Name),
        "expected " + fillerPhraseListRef01MarkdefUp0Name + " to be updated");

    // LOAD
    Map<String, Object> fillerPhraseListRef01MatchDt0 = new LinkedHashMap<>();
    fillerPhraseListRef01MatchDt0.put("id", fillerPhraseListRef01Data.get("id"));
    Object fillerPhraseListRef01DataDt0Loaded = fillerPhraseListRef01Ent.load(fillerPhraseListRef01MatchDt0, null);
    Map<String, Object> fillerPhraseListRef01DataDt0LoadResult = Helpers.toMapAny(fillerPhraseListRef01DataDt0Loaded instanceof SdkEntity ? ((SdkEntity) fillerPhraseListRef01DataDt0Loaded).data() : fillerPhraseListRef01DataDt0Loaded);
    assertNotNull(fillerPhraseListRef01DataDt0LoadResult, "expected load result to be a map");
    assertEquals(fillerPhraseListRef01Data.get("id"), fillerPhraseListRef01DataDt0LoadResult.get("id"),
        "expected load result id to match");

    // REMOVE
    Map<String, Object> fillerPhraseListRef01MatchRm0 = new LinkedHashMap<>();
    fillerPhraseListRef01MatchRm0.put("id", fillerPhraseListRef01Data.get("id"));
    fillerPhraseListRef01Ent.remove(fillerPhraseListRef01MatchRm0, null);

  }

  static RunnerSupport.EntityTestSetup fillerPhraseListBasicSetup(Map<String, Object> extra) {
    RunnerSupport.loadEnvLocal();

    Map<String, Object> entityData;
    try {
      String entityDataSource = Files.readString(Path.of(
          "..", ".sdk", "test", "entity", "filler_phrase_list", "FillerPhraseListTestData.json"));
      entityData = Helpers.toMapAny(Json.parse(entityDataSource));
    }
    catch (Exception e) {
      throw new AssertionError("failed to read filler_phrase_list test data: " + e.getMessage(), e);
    }

    Map<String, Object> options = new LinkedHashMap<>();
    options.put("entity", entityData.get("existing"));

    Ai4callSDK client = Ai4callSDK.testSDK(options, extra);

    // Generate idmap via transform, matching TS pattern.
    List<Object> idnames = new ArrayList<>();
    idnames.add("filler_phrase_list01");
    idnames.add("filler_phrase_list02");
    idnames.add("filler_phrase_list03");
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
    String entidEnvRaw = RunnerSupport.getenv("AI4CALL_TEST_FILLER_PHRASE_LIST_ENTID");
    boolean idmapOverridden = entidEnvRaw != null
        && entidEnvRaw.trim().startsWith("{");

    Map<String, Object> envm = new LinkedHashMap<>();
    envm.put("AI4CALL_TEST_FILLER_PHRASE_LIST_ENTID", idmap);
    envm.put("AI4CALL_TEST_LIVE", "FALSE");
    envm.put("AI4CALL_TEST_EXPLAIN", "FALSE");
    envm.put("AI4CALL_APIKEY", "");
    Map<String, Object> env = RunnerSupport.envOverride(envm);

    Map<String, Object> idmapResolved = Helpers.toMapAny(env.get("AI4CALL_TEST_FILLER_PHRASE_LIST_ENTID"));
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
