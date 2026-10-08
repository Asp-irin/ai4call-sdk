package voxgig.ai4callsdk.core;

import java.util.Map;

import voxgig.ai4callsdk.utility.Json;

/**
 * Ai4call Java SDK: generated schemas. Do not edit.
 *
 * <p>Generated from the model: {@code main.kit.optspec} and each feature's
 * {@code config.options} for OPTSPEC; entity {@code fields{}.type} for
 * ENTITYSPEC.
 */
@SuppressWarnings({"unchecked"})
public final class Schema {

  private Schema() {}

  // Parsed ONCE, on first use. The spec is read on every client construction
  // and never mutated, so a per-call parse would be pure waste — and a shared
  // map is safe for the same reason the spec is a constant: MakeOptions
  // validates AGAINST it and writes into the options, never into the spec.
  //
  // Initialization-on-demand holder, as Config.sharedConfig uses: the JLS
  // guarantees the class initializer runs once, lazily, and safely under
  // concurrency, with no locking on the read path.
  private static final class OptHolder {
    static final Map<String, Object> VALUE =
        (Map<String, Object>) Json.parse(optspecJson());
  }

  private static final class EntityHolder {
    static final Map<String, Object> VALUE =
        (Map<String, Object>) Json.parse(entityspecJson());
  }

  /** The option spec MakeOptions validates client options against. */
  public static Map<String, Object> optspec() {
    return OptHolder.VALUE;
  }

  /** Per-entity data and request specs, keyed by entity name. */
  public static Map<String, Object> entityspec() {
    return EntityHolder.VALUE;
  }

  private static String optspecJson() {
    StringBuilder b = new StringBuilder();
    b.append("{");
    b.append(" \"allow\": {");
    b.append("  \"method\": \"GET,PUT,POST,PATCH,DELETE,OPTIONS\",");
    b.append("  \"op\": \"create,update,load,list,remove,command,direct,graphql\"");
    b.append(" },");
    b.append(" \"apikey\": \"\",");
    b.append(" \"auth\": {");
    b.append("  \"basic\": false,");
    b.append("  \"in\": \"\",");
    b.append("  \"name\": \"\",");
    b.append("  \"prefix\": \"\"");
    b.append(" },");
    b.append(" \"base\": \"http://localhost:8000\",");
    b.append(" \"clean\": {");
    b.append("  \"keys\": \"key,token,id\"");
    b.append(" },");
    b.append(" \"entity\": {");
    b.append("  \"`$CHILD`\": {");
    b.append("   \"`$OPEN`\": true,");
    b.append("   \"active\": false,");
    b.append("   \"alias\": {}");
    b.append("  }");
    b.append(" },");
    b.append(" \"extend\": \"`$ANY`\",");
    b.append(" \"headers\": {");
    b.append("  \"`$CHILD`\": \"`$STRING`\"");
    b.append(" },");
    b.append(" \"prefix\": \"\",");
    b.append(" \"secret\": \"\",");
    b.append(" \"server\": {");
    b.append("  \"`$CHILD`\": \"\"");
    b.append(" },");
    b.append(" \"suffix\": \"\",");
    b.append(" \"system\": {");
    b.append("  \"fetch\": \"`$ANY`\"");
    b.append(" },");
    b.append(" \"test\": {");
    b.append("  \"active\": false,");
    b.append("  \"entity\": {");
    b.append("   \"`$OPEN`\": true");
    b.append("  }");
    b.append(" },");
    b.append(" \"utility\": {},");
    b.append(" \"feature\": {");
    b.append("  \"`$CHILD`\": {");
    b.append("   \"`$OPEN`\": true,");
    b.append("   \"active\": false");
    b.append("  },");
    b.append("  \"test\": [");
    b.append("   \"`$ONE`\",");
    b.append("   {");
    b.append("    \"`$OPEN`\": true,");
    b.append("    \"active\": [");
    b.append("     \"`$ONE`\",");
    b.append("     \"`$BOOLEAN`\",");
    b.append("     \"`$NIL`\"");
    b.append("    ],");
    b.append("    \"entity\": [");
    b.append("     \"`$ONE`\",");
    b.append("     \"`$MAP`\",");
    b.append("     \"`$NIL`\"");
    b.append("    ],");
    b.append("    \"net\": [");
    b.append("     \"`$ONE`\",");
    b.append("     \"`$MAP`\",");
    b.append("     \"`$NIL`\"");
    b.append("    ]");
    b.append("   },");
    b.append("   \"`$NIL`\"");
    b.append("  ]");
    b.append(" }");
    b.append("}");
    return b.toString();
  }

  private static String entityspecJson() {
    StringBuilder b = new StringBuilder();
    b.append("{}");
    return b.toString();
  }
}
