package voxgig.ai4callsdk.entity;

import java.util.LinkedHashMap;
import java.util.Map;

import voxgig.ai4callsdk.core.Context;
import voxgig.ai4callsdk.core.Entity;
import voxgig.ai4callsdk.core.Helpers;
import voxgig.ai4callsdk.core.SdkClient;
import voxgig.ai4callsdk.utility.struct.Struct;

/** PublicRagSearchSuccess entity client for the Ai4call SDK. */
@SuppressWarnings({"unchecked", "unused"})
public class PublicRagSearchSuccessEntity extends EntityBase {

  public PublicRagSearchSuccessEntity(SdkClient client, Map<String, Object> entopts) {
    super("public_rag_search_success", client, entopts);
  }

  @Override
  public Entity make() {
    Map<String, Object> opts = new LinkedHashMap<>(this.entopts);
    return new PublicRagSearchSuccessEntity(this.client, opts);
  }

  @Override
  public Object load(Map<String, Object> req, Map<String, Object> ctrl) {
    throw Helpers.unsupportedOp("load", this.name);
  }


  @Override
  public Object list(Map<String, Object> req, Map<String, Object> ctrl) {
    throw Helpers.unsupportedOp("list", this.name);
  }



  @Override
  public Object create(Map<String, Object> reqdata, Map<String, Object> ctrl) {
    Map<String, Object> ctxmap = new LinkedHashMap<>();
    ctxmap.put("opname", "create");
    ctxmap.put("ctrl", ctrl);
    ctxmap.put("match", this.match);
    ctxmap.put("data", this.data);
    ctxmap.put("reqdata", reqdata);
    Context ctx = this.utility.makeContext.apply(ctxmap, this.entctx);

    return runOp(ctx, () -> {
      if (ctx.result != null) {
        if (ctx.result.resdata != null) {
          Map<String, Object> d = Helpers.toMapAny(Struct.clone(ctx.result.resdata));
          this.data = d == null ? new LinkedHashMap<>() : d;
        }
      }
    });
  }



  @Override
  public Object update(Map<String, Object> req, Map<String, Object> ctrl) {
    throw Helpers.unsupportedOp("update", this.name);
  }


  @Override
  public Object remove(Map<String, Object> req, Map<String, Object> ctrl) {
    throw Helpers.unsupportedOp("remove", this.name);
  }

}
