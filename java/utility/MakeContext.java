package voxgig.ai4callsdk.utility;

import java.util.Map;

import voxgig.ai4callsdk.core.Context;

final class MakeContext {

  private MakeContext() {}

  static Context makeContext(Map<String, Object> ctxmap, Context basectx) {
    return new Context(ctxmap, basectx);
  }
}
