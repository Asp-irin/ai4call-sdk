# Ai4call SDK utility: make_context

from projectname_sdk.core.context import Ai4callContext


def make_context_util(ctxmap, basectx):
    return Ai4callContext(ctxmap, basectx)
