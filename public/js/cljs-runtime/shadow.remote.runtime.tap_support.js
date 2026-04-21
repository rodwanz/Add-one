goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20783,p__20784){
var map__20785 = p__20783;
var map__20785__$1 = cljs.core.__destructure_map(map__20785);
var svc = map__20785__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20786 = p__20784;
var map__20786__$1 = cljs.core.__destructure_map(map__20786);
var msg = map__20786__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20786__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20787,p__20788){
var map__20789 = p__20787;
var map__20789__$1 = cljs.core.__destructure_map(map__20789);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20789__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20790 = p__20788;
var map__20790__$1 = cljs.core.__destructure_map(map__20790);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20790__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20796,p__20797){
var map__20798 = p__20796;
var map__20798__$1 = cljs.core.__destructure_map(map__20798);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20799 = p__20797;
var map__20799__$1 = cljs.core.__destructure_map(map__20799);
var msg = map__20799__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20799__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20803,tid){
var map__20804 = p__20803;
var map__20804__$1 = cljs.core.__destructure_map(map__20804);
var svc = map__20804__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20804__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20826 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20827 = null;
var count__20828 = (0);
var i__20829 = (0);
while(true){
if((i__20829 < count__20828)){
var vec__20843 = chunk__20827.cljs$core$IIndexed$_nth$arity$2(null,i__20829);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20843,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20843,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20860 = seq__20826;
var G__20861 = chunk__20827;
var G__20862 = count__20828;
var G__20863 = (i__20829 + (1));
seq__20826 = G__20860;
chunk__20827 = G__20861;
count__20828 = G__20862;
i__20829 = G__20863;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20826);
if(temp__5825__auto__){
var seq__20826__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20826__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__20826__$1);
var G__20864 = cljs.core.chunk_rest(seq__20826__$1);
var G__20865 = c__5673__auto__;
var G__20866 = cljs.core.count(c__5673__auto__);
var G__20867 = (0);
seq__20826 = G__20864;
chunk__20827 = G__20865;
count__20828 = G__20866;
i__20829 = G__20867;
continue;
} else {
var vec__20848 = cljs.core.first(seq__20826__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20848,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20848,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20873 = cljs.core.next(seq__20826__$1);
var G__20874 = null;
var G__20875 = (0);
var G__20876 = (0);
seq__20826 = G__20873;
chunk__20827 = G__20874;
count__20828 = G__20875;
i__20829 = G__20876;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20820_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20820_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20821_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20821_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20822_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20822_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20823_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20823_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20857){
var map__20858 = p__20857;
var map__20858__$1 = cljs.core.__destructure_map(map__20858);
var svc = map__20858__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20858__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20858__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
