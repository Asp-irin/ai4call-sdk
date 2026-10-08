package voxgig.ai4callsdk.utility;

import voxgig.ai4callsdk.core.Context;
import voxgig.ai4callsdk.core.Response;
import voxgig.ai4callsdk.core.Result;

final class ResultBody {

  private ResultBody() {}

  static Result resultBody(Context ctx) {
    Response response = ctx.response;
    Result result = ctx.result;

    if (result != null) {
      if (response != null && response.jsonFunc != null && response.body != null) {
        result.body = response.jsonFunc.get();
      }
    }

    return result;
  }
}
