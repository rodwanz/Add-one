goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14462){
var map__14464 = p__14462;
var map__14464__$1 = cljs.core.__destructure_map(map__14464);
var runtime = map__14464__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14464__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15774 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15774)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14469 = runtime;
var G__14470 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15774);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14469,G__14470) : shadow.remote.runtime.shared.process.call(null,G__14469,G__14470));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14473,res){
var map__14474 = p__14473;
var map__14474__$1 = cljs.core.__destructure_map(map__14474);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14474__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14474__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14475 = res;
var G__14475__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14475,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14475);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14475__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14475__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14483 = arguments.length;
switch (G__14483) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14484,msg,handlers,timeout_after_ms){
var map__14486 = p__14484;
var map__14486__$1 = cljs.core.__destructure_map(map__14486);
var runtime = map__14486__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14486__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___15792 = arguments.length;
var i__5877__auto___15793 = (0);
while(true){
if((i__5877__auto___15793 < len__5876__auto___15792)){
args__5882__auto__.push((arguments[i__5877__auto___15793]));

var G__15797 = (i__5877__auto___15793 + (1));
i__5877__auto___15793 = G__15797;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14559,ev,args){
var map__14560 = p__14559;
var map__14560__$1 = cljs.core.__destructure_map(map__14560);
var runtime = map__14560__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14560__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14561 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14564 = null;
var count__14565 = (0);
var i__14566 = (0);
while(true){
if((i__14566 < count__14565)){
var ext = chunk__14564.cljs$core$IIndexed$_nth$arity$2(null,i__14566);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15802 = seq__14561;
var G__15803 = chunk__14564;
var G__15804 = count__14565;
var G__15805 = (i__14566 + (1));
seq__14561 = G__15802;
chunk__14564 = G__15803;
count__14565 = G__15804;
i__14566 = G__15805;
continue;
} else {
var G__15806 = seq__14561;
var G__15807 = chunk__14564;
var G__15808 = count__14565;
var G__15809 = (i__14566 + (1));
seq__14561 = G__15806;
chunk__14564 = G__15807;
count__14565 = G__15808;
i__14566 = G__15809;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14561);
if(temp__5825__auto__){
var seq__14561__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14561__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14561__$1);
var G__15811 = cljs.core.chunk_rest(seq__14561__$1);
var G__15812 = c__5673__auto__;
var G__15813 = cljs.core.count(c__5673__auto__);
var G__15814 = (0);
seq__14561 = G__15811;
chunk__14564 = G__15812;
count__14565 = G__15813;
i__14566 = G__15814;
continue;
} else {
var ext = cljs.core.first(seq__14561__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15819 = cljs.core.next(seq__14561__$1);
var G__15820 = null;
var G__15821 = (0);
var G__15822 = (0);
seq__14561 = G__15819;
chunk__14564 = G__15820;
count__14565 = G__15821;
i__14566 = G__15822;
continue;
} else {
var G__15824 = cljs.core.next(seq__14561__$1);
var G__15825 = null;
var G__15826 = (0);
var G__15827 = (0);
seq__14561 = G__15824;
chunk__14564 = G__15825;
count__14565 = G__15826;
i__14566 = G__15827;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14502){
var G__14503 = cljs.core.first(seq14502);
var seq14502__$1 = cljs.core.next(seq14502);
var G__14504 = cljs.core.first(seq14502__$1);
var seq14502__$2 = cljs.core.next(seq14502__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14503,G__14504,seq14502__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14595,p__14596){
var map__14597 = p__14595;
var map__14597__$1 = cljs.core.__destructure_map(map__14597);
var runtime = map__14597__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14597__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14598 = p__14596;
var map__14598__$1 = cljs.core.__destructure_map(map__14598);
var msg = map__14598__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14603 = cljs.core.deref(state_ref);
var map__14603__$1 = cljs.core.__destructure_map(map__14603);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14603__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14603__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14617,msg){
var map__14618 = p__14617;
var map__14618__$1 = cljs.core.__destructure_map(map__14618);
var runtime = map__14618__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14618__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14636,key,p__14637){
var map__14640 = p__14636;
var map__14640__$1 = cljs.core.__destructure_map(map__14640);
var state = map__14640__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14640__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14643 = p__14637;
var map__14643__$1 = cljs.core.__destructure_map(map__14643);
var spec = map__14643__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14643__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14643__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14654,key,spec){
var map__14655 = p__14654;
var map__14655__$1 = cljs.core.__destructure_map(map__14655);
var runtime = map__14655__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14655__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___15916 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___15916 == null)){
} else {
var on_welcome_15917 = temp__5829__auto___15916;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_15917.cljs$core$IFn$_invoke$arity$0 ? on_welcome_15917.cljs$core$IFn$_invoke$arity$0() : on_welcome_15917.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14664_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14664_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14665_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14665_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14666_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14666_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14667_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14667_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14668_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14668_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__15666,key){
var map__15667 = p__15666;
var map__15667__$1 = cljs.core.__destructure_map(map__15667);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15667__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__15677,msg){
var map__15678 = p__15677;
var map__15678__$1 = cljs.core.__destructure_map(map__15678);
var runtime = map__15678__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__15688,p__15689){
var map__15690 = p__15688;
var map__15690__$1 = cljs.core.__destructure_map(map__15690);
var runtime = map__15690__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15690__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15691 = p__15689;
var map__15691__$1 = cljs.core.__destructure_map(map__15691);
var msg = map__15691__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15691__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15691__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__15705 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15707 = null;
var count__15708 = (0);
var i__15709 = (0);
while(true){
if((i__15709 < count__15708)){
var map__15751 = chunk__15707.cljs$core$IIndexed$_nth$arity$2(null,i__15709);
var map__15751__$1 = cljs.core.__destructure_map(map__15751);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15751__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15950 = seq__15705;
var G__15951 = chunk__15707;
var G__15952 = count__15708;
var G__15953 = (i__15709 + (1));
seq__15705 = G__15950;
chunk__15707 = G__15951;
count__15708 = G__15952;
i__15709 = G__15953;
continue;
} else {
var G__15954 = seq__15705;
var G__15955 = chunk__15707;
var G__15956 = count__15708;
var G__15957 = (i__15709 + (1));
seq__15705 = G__15954;
chunk__15707 = G__15955;
count__15708 = G__15956;
i__15709 = G__15957;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15705);
if(temp__5825__auto__){
var seq__15705__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15705__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15705__$1);
var G__15958 = cljs.core.chunk_rest(seq__15705__$1);
var G__15959 = c__5673__auto__;
var G__15960 = cljs.core.count(c__5673__auto__);
var G__15961 = (0);
seq__15705 = G__15958;
chunk__15707 = G__15959;
count__15708 = G__15960;
i__15709 = G__15961;
continue;
} else {
var map__15763 = cljs.core.first(seq__15705__$1);
var map__15763__$1 = cljs.core.__destructure_map(map__15763);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15763__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15962 = cljs.core.next(seq__15705__$1);
var G__15963 = null;
var G__15964 = (0);
var G__15965 = (0);
seq__15705 = G__15962;
chunk__15707 = G__15963;
count__15708 = G__15964;
i__15709 = G__15965;
continue;
} else {
var G__15966 = cljs.core.next(seq__15705__$1);
var G__15967 = null;
var G__15968 = (0);
var G__15969 = (0);
seq__15705 = G__15966;
chunk__15707 = G__15967;
count__15708 = G__15968;
i__15709 = G__15969;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
