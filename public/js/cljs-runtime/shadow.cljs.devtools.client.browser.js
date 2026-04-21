goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21685 = arguments.length;
var i__5877__auto___21686 = (0);
while(true){
if((i__5877__auto___21686 < len__5876__auto___21685)){
args__5882__auto__.push((arguments[i__5877__auto___21686]));

var G__21691 = (i__5877__auto___21686 + (1));
i__5877__auto___21686 = G__21691;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21269){
var G__21271 = cljs.core.first(seq21269);
var seq21269__$1 = cljs.core.next(seq21269);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21271,seq21269__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21273 = cljs.core.seq(sources);
var chunk__21274 = null;
var count__21275 = (0);
var i__21276 = (0);
while(true){
if((i__21276 < count__21275)){
var map__21286 = chunk__21274.cljs$core$IIndexed$_nth$arity$2(null,i__21276);
var map__21286__$1 = cljs.core.__destructure_map(map__21286);
var src = map__21286__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21286__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21286__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21286__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21286__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21287){var e_21692 = e21287;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21692);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21692.message))));
}

var G__21693 = seq__21273;
var G__21694 = chunk__21274;
var G__21695 = count__21275;
var G__21696 = (i__21276 + (1));
seq__21273 = G__21693;
chunk__21274 = G__21694;
count__21275 = G__21695;
i__21276 = G__21696;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21273);
if(temp__5825__auto__){
var seq__21273__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21273__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21273__$1);
var G__21697 = cljs.core.chunk_rest(seq__21273__$1);
var G__21698 = c__5673__auto__;
var G__21699 = cljs.core.count(c__5673__auto__);
var G__21700 = (0);
seq__21273 = G__21697;
chunk__21274 = G__21698;
count__21275 = G__21699;
i__21276 = G__21700;
continue;
} else {
var map__21288 = cljs.core.first(seq__21273__$1);
var map__21288__$1 = cljs.core.__destructure_map(map__21288);
var src = map__21288__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21289){var e_21705 = e21289;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21705);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21705.message))));
}

var G__21707 = cljs.core.next(seq__21273__$1);
var G__21708 = null;
var G__21709 = (0);
var G__21710 = (0);
seq__21273 = G__21707;
chunk__21274 = G__21708;
count__21275 = G__21709;
i__21276 = G__21710;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21292 = cljs.core.seq(js_requires);
var chunk__21293 = null;
var count__21294 = (0);
var i__21295 = (0);
while(true){
if((i__21295 < count__21294)){
var js_ns = chunk__21293.cljs$core$IIndexed$_nth$arity$2(null,i__21295);
var require_str_21727 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21727);


var G__21729 = seq__21292;
var G__21730 = chunk__21293;
var G__21731 = count__21294;
var G__21732 = (i__21295 + (1));
seq__21292 = G__21729;
chunk__21293 = G__21730;
count__21294 = G__21731;
i__21295 = G__21732;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21292);
if(temp__5825__auto__){
var seq__21292__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21292__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21292__$1);
var G__21734 = cljs.core.chunk_rest(seq__21292__$1);
var G__21735 = c__5673__auto__;
var G__21736 = cljs.core.count(c__5673__auto__);
var G__21737 = (0);
seq__21292 = G__21734;
chunk__21293 = G__21735;
count__21294 = G__21736;
i__21295 = G__21737;
continue;
} else {
var js_ns = cljs.core.first(seq__21292__$1);
var require_str_21738 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21738);


var G__21739 = cljs.core.next(seq__21292__$1);
var G__21740 = null;
var G__21741 = (0);
var G__21742 = (0);
seq__21292 = G__21739;
chunk__21293 = G__21740;
count__21294 = G__21741;
i__21295 = G__21742;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21297){
var map__21298 = p__21297;
var map__21298__$1 = cljs.core.__destructure_map(map__21298);
var msg = map__21298__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21298__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21298__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21299(s__21300){
return (new cljs.core.LazySeq(null,(function (){
var s__21300__$1 = s__21300;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21300__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__21305 = cljs.core.first(xs__6385__auto__);
var map__21305__$1 = cljs.core.__destructure_map(map__21305);
var src = map__21305__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21305__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21300__$1,map__21305,map__21305__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21298,map__21298__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21299_$_iter__21301(s__21302){
return (new cljs.core.LazySeq(null,((function (s__21300__$1,map__21305,map__21305__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21298,map__21298__$1,msg,info,reload_info){
return (function (){
var s__21302__$1 = s__21302;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21302__$1);
if(temp__5825__auto____$1){
var s__21302__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21302__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21302__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21304 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21303 = (0);
while(true){
if((i__21303 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21303);
cljs.core.chunk_append(b__21304,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21744 = (i__21303 + (1));
i__21303 = G__21744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21304),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21299_$_iter__21301(cljs.core.chunk_rest(s__21302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21304),null);
}
} else {
var warning = cljs.core.first(s__21302__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21299_$_iter__21301(cljs.core.rest(s__21302__$2)));
}
} else {
return null;
}
break;
}
});})(s__21300__$1,map__21305,map__21305__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21298,map__21298__$1,msg,info,reload_info))
,null,null));
});})(s__21300__$1,map__21305,map__21305__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21298,map__21298__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21299(cljs.core.rest(s__21300__$1)));
} else {
var G__21747 = cljs.core.rest(s__21300__$1);
s__21300__$1 = G__21747;
continue;
}
} else {
var G__21749 = cljs.core.rest(s__21300__$1);
s__21300__$1 = G__21749;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21308_21750 = cljs.core.seq(warnings);
var chunk__21309_21751 = null;
var count__21310_21752 = (0);
var i__21311_21753 = (0);
while(true){
if((i__21311_21753 < count__21310_21752)){
var map__21314_21755 = chunk__21309_21751.cljs$core$IIndexed$_nth$arity$2(null,i__21311_21753);
var map__21314_21756__$1 = cljs.core.__destructure_map(map__21314_21755);
var w_21757 = map__21314_21756__$1;
var msg_21758__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21314_21756__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21314_21756__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21314_21756__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21314_21756__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21761)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21759)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21760)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21758__$1)));


var G__21762 = seq__21308_21750;
var G__21763 = chunk__21309_21751;
var G__21764 = count__21310_21752;
var G__21765 = (i__21311_21753 + (1));
seq__21308_21750 = G__21762;
chunk__21309_21751 = G__21763;
count__21310_21752 = G__21764;
i__21311_21753 = G__21765;
continue;
} else {
var temp__5825__auto___21766 = cljs.core.seq(seq__21308_21750);
if(temp__5825__auto___21766){
var seq__21308_21767__$1 = temp__5825__auto___21766;
if(cljs.core.chunked_seq_QMARK_(seq__21308_21767__$1)){
var c__5673__auto___21768 = cljs.core.chunk_first(seq__21308_21767__$1);
var G__21769 = cljs.core.chunk_rest(seq__21308_21767__$1);
var G__21770 = c__5673__auto___21768;
var G__21771 = cljs.core.count(c__5673__auto___21768);
var G__21772 = (0);
seq__21308_21750 = G__21769;
chunk__21309_21751 = G__21770;
count__21310_21752 = G__21771;
i__21311_21753 = G__21772;
continue;
} else {
var map__21318_21773 = cljs.core.first(seq__21308_21767__$1);
var map__21318_21774__$1 = cljs.core.__destructure_map(map__21318_21773);
var w_21775 = map__21318_21774__$1;
var msg_21776__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21318_21774__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21318_21774__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21318_21774__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21318_21774__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21779)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21777)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21778)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21776__$1)));


var G__21782 = cljs.core.next(seq__21308_21767__$1);
var G__21783 = null;
var G__21784 = (0);
var G__21785 = (0);
seq__21308_21750 = G__21782;
chunk__21309_21751 = G__21783;
count__21310_21752 = G__21784;
i__21311_21753 = G__21785;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21296_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21296_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21323 = node_uri;
G__21323.setQuery(null);

G__21323.setPath(new$);

return G__21323;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21324){
var map__21325 = p__21324;
var map__21325__$1 = cljs.core.__destructure_map(map__21325);
var msg = map__21325__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21325__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21325__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21326 = cljs.core.seq(updates);
var chunk__21328 = null;
var count__21329 = (0);
var i__21330 = (0);
while(true){
if((i__21330 < count__21329)){
var path = chunk__21328.cljs$core$IIndexed$_nth$arity$2(null,i__21330);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21477_21791 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21481_21792 = null;
var count__21482_21793 = (0);
var i__21483_21794 = (0);
while(true){
if((i__21483_21794 < count__21482_21793)){
var node_21795 = chunk__21481_21792.cljs$core$IIndexed$_nth$arity$2(null,i__21483_21794);
if(cljs.core.not(node_21795.shadow$old)){
var path_match_21796 = shadow.cljs.devtools.client.browser.match_paths(node_21795.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21796)){
var new_link_21797 = (function (){var G__21520 = node_21795.cloneNode(true);
G__21520.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21796)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21520;
})();
(node_21795.shadow$old = true);

(new_link_21797.onload = ((function (seq__21477_21791,chunk__21481_21792,count__21482_21793,i__21483_21794,seq__21326,chunk__21328,count__21329,i__21330,new_link_21797,path_match_21796,node_21795,path,map__21325,map__21325__$1,msg,updates,reload_info){
return (function (e){
var seq__21524_21798 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21526_21799 = null;
var count__21527_21800 = (0);
var i__21528_21801 = (0);
while(true){
if((i__21528_21801 < count__21527_21800)){
var map__21532_21802 = chunk__21526_21799.cljs$core$IIndexed$_nth$arity$2(null,i__21528_21801);
var map__21532_21803__$1 = cljs.core.__destructure_map(map__21532_21802);
var task_21804 = map__21532_21803__$1;
var fn_str_21805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21532_21803__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21532_21803__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21807 = goog.getObjectByName(fn_str_21805,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21806)));

(fn_obj_21807.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21807.cljs$core$IFn$_invoke$arity$2(path,new_link_21797) : fn_obj_21807.call(null,path,new_link_21797));


var G__21808 = seq__21524_21798;
var G__21809 = chunk__21526_21799;
var G__21810 = count__21527_21800;
var G__21811 = (i__21528_21801 + (1));
seq__21524_21798 = G__21808;
chunk__21526_21799 = G__21809;
count__21527_21800 = G__21810;
i__21528_21801 = G__21811;
continue;
} else {
var temp__5825__auto___21812 = cljs.core.seq(seq__21524_21798);
if(temp__5825__auto___21812){
var seq__21524_21813__$1 = temp__5825__auto___21812;
if(cljs.core.chunked_seq_QMARK_(seq__21524_21813__$1)){
var c__5673__auto___21814 = cljs.core.chunk_first(seq__21524_21813__$1);
var G__21815 = cljs.core.chunk_rest(seq__21524_21813__$1);
var G__21816 = c__5673__auto___21814;
var G__21817 = cljs.core.count(c__5673__auto___21814);
var G__21818 = (0);
seq__21524_21798 = G__21815;
chunk__21526_21799 = G__21816;
count__21527_21800 = G__21817;
i__21528_21801 = G__21818;
continue;
} else {
var map__21533_21819 = cljs.core.first(seq__21524_21813__$1);
var map__21533_21820__$1 = cljs.core.__destructure_map(map__21533_21819);
var task_21821 = map__21533_21820__$1;
var fn_str_21822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21533_21820__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21533_21820__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21824 = goog.getObjectByName(fn_str_21822,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21823)));

(fn_obj_21824.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21824.cljs$core$IFn$_invoke$arity$2(path,new_link_21797) : fn_obj_21824.call(null,path,new_link_21797));


var G__21825 = cljs.core.next(seq__21524_21813__$1);
var G__21826 = null;
var G__21827 = (0);
var G__21828 = (0);
seq__21524_21798 = G__21825;
chunk__21526_21799 = G__21826;
count__21527_21800 = G__21827;
i__21528_21801 = G__21828;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21795);
});})(seq__21477_21791,chunk__21481_21792,count__21482_21793,i__21483_21794,seq__21326,chunk__21328,count__21329,i__21330,new_link_21797,path_match_21796,node_21795,path,map__21325,map__21325__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21796], 0));

goog.dom.insertSiblingAfter(new_link_21797,node_21795);


var G__21829 = seq__21477_21791;
var G__21830 = chunk__21481_21792;
var G__21831 = count__21482_21793;
var G__21832 = (i__21483_21794 + (1));
seq__21477_21791 = G__21829;
chunk__21481_21792 = G__21830;
count__21482_21793 = G__21831;
i__21483_21794 = G__21832;
continue;
} else {
var G__21833 = seq__21477_21791;
var G__21834 = chunk__21481_21792;
var G__21835 = count__21482_21793;
var G__21836 = (i__21483_21794 + (1));
seq__21477_21791 = G__21833;
chunk__21481_21792 = G__21834;
count__21482_21793 = G__21835;
i__21483_21794 = G__21836;
continue;
}
} else {
var G__21837 = seq__21477_21791;
var G__21838 = chunk__21481_21792;
var G__21839 = count__21482_21793;
var G__21840 = (i__21483_21794 + (1));
seq__21477_21791 = G__21837;
chunk__21481_21792 = G__21838;
count__21482_21793 = G__21839;
i__21483_21794 = G__21840;
continue;
}
} else {
var temp__5825__auto___21841 = cljs.core.seq(seq__21477_21791);
if(temp__5825__auto___21841){
var seq__21477_21842__$1 = temp__5825__auto___21841;
if(cljs.core.chunked_seq_QMARK_(seq__21477_21842__$1)){
var c__5673__auto___21843 = cljs.core.chunk_first(seq__21477_21842__$1);
var G__21844 = cljs.core.chunk_rest(seq__21477_21842__$1);
var G__21845 = c__5673__auto___21843;
var G__21846 = cljs.core.count(c__5673__auto___21843);
var G__21847 = (0);
seq__21477_21791 = G__21844;
chunk__21481_21792 = G__21845;
count__21482_21793 = G__21846;
i__21483_21794 = G__21847;
continue;
} else {
var node_21848 = cljs.core.first(seq__21477_21842__$1);
if(cljs.core.not(node_21848.shadow$old)){
var path_match_21849 = shadow.cljs.devtools.client.browser.match_paths(node_21848.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21849)){
var new_link_21850 = (function (){var G__21536 = node_21848.cloneNode(true);
G__21536.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21849)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21536;
})();
(node_21848.shadow$old = true);

(new_link_21850.onload = ((function (seq__21477_21791,chunk__21481_21792,count__21482_21793,i__21483_21794,seq__21326,chunk__21328,count__21329,i__21330,new_link_21850,path_match_21849,node_21848,seq__21477_21842__$1,temp__5825__auto___21841,path,map__21325,map__21325__$1,msg,updates,reload_info){
return (function (e){
var seq__21539_21851 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21541_21852 = null;
var count__21542_21853 = (0);
var i__21543_21854 = (0);
while(true){
if((i__21543_21854 < count__21542_21853)){
var map__21547_21855 = chunk__21541_21852.cljs$core$IIndexed$_nth$arity$2(null,i__21543_21854);
var map__21547_21856__$1 = cljs.core.__destructure_map(map__21547_21855);
var task_21857 = map__21547_21856__$1;
var fn_str_21858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21547_21856__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21547_21856__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21860 = goog.getObjectByName(fn_str_21858,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21859)));

(fn_obj_21860.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21860.cljs$core$IFn$_invoke$arity$2(path,new_link_21850) : fn_obj_21860.call(null,path,new_link_21850));


var G__21861 = seq__21539_21851;
var G__21862 = chunk__21541_21852;
var G__21863 = count__21542_21853;
var G__21864 = (i__21543_21854 + (1));
seq__21539_21851 = G__21861;
chunk__21541_21852 = G__21862;
count__21542_21853 = G__21863;
i__21543_21854 = G__21864;
continue;
} else {
var temp__5825__auto___21865__$1 = cljs.core.seq(seq__21539_21851);
if(temp__5825__auto___21865__$1){
var seq__21539_21866__$1 = temp__5825__auto___21865__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21539_21866__$1)){
var c__5673__auto___21867 = cljs.core.chunk_first(seq__21539_21866__$1);
var G__21868 = cljs.core.chunk_rest(seq__21539_21866__$1);
var G__21869 = c__5673__auto___21867;
var G__21870 = cljs.core.count(c__5673__auto___21867);
var G__21871 = (0);
seq__21539_21851 = G__21868;
chunk__21541_21852 = G__21869;
count__21542_21853 = G__21870;
i__21543_21854 = G__21871;
continue;
} else {
var map__21550_21872 = cljs.core.first(seq__21539_21866__$1);
var map__21550_21873__$1 = cljs.core.__destructure_map(map__21550_21872);
var task_21874 = map__21550_21873__$1;
var fn_str_21875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21550_21873__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21550_21873__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21877 = goog.getObjectByName(fn_str_21875,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21876)));

(fn_obj_21877.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21877.cljs$core$IFn$_invoke$arity$2(path,new_link_21850) : fn_obj_21877.call(null,path,new_link_21850));


var G__21878 = cljs.core.next(seq__21539_21866__$1);
var G__21879 = null;
var G__21880 = (0);
var G__21881 = (0);
seq__21539_21851 = G__21878;
chunk__21541_21852 = G__21879;
count__21542_21853 = G__21880;
i__21543_21854 = G__21881;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21848);
});})(seq__21477_21791,chunk__21481_21792,count__21482_21793,i__21483_21794,seq__21326,chunk__21328,count__21329,i__21330,new_link_21850,path_match_21849,node_21848,seq__21477_21842__$1,temp__5825__auto___21841,path,map__21325,map__21325__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21849], 0));

goog.dom.insertSiblingAfter(new_link_21850,node_21848);


var G__21882 = cljs.core.next(seq__21477_21842__$1);
var G__21883 = null;
var G__21884 = (0);
var G__21885 = (0);
seq__21477_21791 = G__21882;
chunk__21481_21792 = G__21883;
count__21482_21793 = G__21884;
i__21483_21794 = G__21885;
continue;
} else {
var G__21886 = cljs.core.next(seq__21477_21842__$1);
var G__21887 = null;
var G__21888 = (0);
var G__21889 = (0);
seq__21477_21791 = G__21886;
chunk__21481_21792 = G__21887;
count__21482_21793 = G__21888;
i__21483_21794 = G__21889;
continue;
}
} else {
var G__21890 = cljs.core.next(seq__21477_21842__$1);
var G__21891 = null;
var G__21892 = (0);
var G__21893 = (0);
seq__21477_21791 = G__21890;
chunk__21481_21792 = G__21891;
count__21482_21793 = G__21892;
i__21483_21794 = G__21893;
continue;
}
}
} else {
}
}
break;
}


var G__21894 = seq__21326;
var G__21895 = chunk__21328;
var G__21896 = count__21329;
var G__21897 = (i__21330 + (1));
seq__21326 = G__21894;
chunk__21328 = G__21895;
count__21329 = G__21896;
i__21330 = G__21897;
continue;
} else {
var G__21898 = seq__21326;
var G__21899 = chunk__21328;
var G__21900 = count__21329;
var G__21901 = (i__21330 + (1));
seq__21326 = G__21898;
chunk__21328 = G__21899;
count__21329 = G__21900;
i__21330 = G__21901;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21326);
if(temp__5825__auto__){
var seq__21326__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21326__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21326__$1);
var G__21902 = cljs.core.chunk_rest(seq__21326__$1);
var G__21903 = c__5673__auto__;
var G__21904 = cljs.core.count(c__5673__auto__);
var G__21905 = (0);
seq__21326 = G__21902;
chunk__21328 = G__21903;
count__21329 = G__21904;
i__21330 = G__21905;
continue;
} else {
var path = cljs.core.first(seq__21326__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21551_21906 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21555_21907 = null;
var count__21556_21908 = (0);
var i__21557_21909 = (0);
while(true){
if((i__21557_21909 < count__21556_21908)){
var node_21910 = chunk__21555_21907.cljs$core$IIndexed$_nth$arity$2(null,i__21557_21909);
if(cljs.core.not(node_21910.shadow$old)){
var path_match_21911 = shadow.cljs.devtools.client.browser.match_paths(node_21910.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21911)){
var new_link_21912 = (function (){var G__21584 = node_21910.cloneNode(true);
G__21584.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21911)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21584;
})();
(node_21910.shadow$old = true);

(new_link_21912.onload = ((function (seq__21551_21906,chunk__21555_21907,count__21556_21908,i__21557_21909,seq__21326,chunk__21328,count__21329,i__21330,new_link_21912,path_match_21911,node_21910,path,seq__21326__$1,temp__5825__auto__,map__21325,map__21325__$1,msg,updates,reload_info){
return (function (e){
var seq__21585_21913 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21587_21914 = null;
var count__21588_21915 = (0);
var i__21589_21916 = (0);
while(true){
if((i__21589_21916 < count__21588_21915)){
var map__21595_21917 = chunk__21587_21914.cljs$core$IIndexed$_nth$arity$2(null,i__21589_21916);
var map__21595_21918__$1 = cljs.core.__destructure_map(map__21595_21917);
var task_21919 = map__21595_21918__$1;
var fn_str_21920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21595_21918__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21595_21918__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21922 = goog.getObjectByName(fn_str_21920,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21921)));

(fn_obj_21922.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21922.cljs$core$IFn$_invoke$arity$2(path,new_link_21912) : fn_obj_21922.call(null,path,new_link_21912));


var G__21923 = seq__21585_21913;
var G__21924 = chunk__21587_21914;
var G__21925 = count__21588_21915;
var G__21926 = (i__21589_21916 + (1));
seq__21585_21913 = G__21923;
chunk__21587_21914 = G__21924;
count__21588_21915 = G__21925;
i__21589_21916 = G__21926;
continue;
} else {
var temp__5825__auto___21927__$1 = cljs.core.seq(seq__21585_21913);
if(temp__5825__auto___21927__$1){
var seq__21585_21928__$1 = temp__5825__auto___21927__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21585_21928__$1)){
var c__5673__auto___21929 = cljs.core.chunk_first(seq__21585_21928__$1);
var G__21930 = cljs.core.chunk_rest(seq__21585_21928__$1);
var G__21931 = c__5673__auto___21929;
var G__21932 = cljs.core.count(c__5673__auto___21929);
var G__21933 = (0);
seq__21585_21913 = G__21930;
chunk__21587_21914 = G__21931;
count__21588_21915 = G__21932;
i__21589_21916 = G__21933;
continue;
} else {
var map__21596_21934 = cljs.core.first(seq__21585_21928__$1);
var map__21596_21935__$1 = cljs.core.__destructure_map(map__21596_21934);
var task_21936 = map__21596_21935__$1;
var fn_str_21937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21596_21935__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21596_21935__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21939 = goog.getObjectByName(fn_str_21937,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21938)));

(fn_obj_21939.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21939.cljs$core$IFn$_invoke$arity$2(path,new_link_21912) : fn_obj_21939.call(null,path,new_link_21912));


var G__21940 = cljs.core.next(seq__21585_21928__$1);
var G__21941 = null;
var G__21942 = (0);
var G__21943 = (0);
seq__21585_21913 = G__21940;
chunk__21587_21914 = G__21941;
count__21588_21915 = G__21942;
i__21589_21916 = G__21943;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21910);
});})(seq__21551_21906,chunk__21555_21907,count__21556_21908,i__21557_21909,seq__21326,chunk__21328,count__21329,i__21330,new_link_21912,path_match_21911,node_21910,path,seq__21326__$1,temp__5825__auto__,map__21325,map__21325__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21911], 0));

goog.dom.insertSiblingAfter(new_link_21912,node_21910);


var G__21944 = seq__21551_21906;
var G__21945 = chunk__21555_21907;
var G__21946 = count__21556_21908;
var G__21947 = (i__21557_21909 + (1));
seq__21551_21906 = G__21944;
chunk__21555_21907 = G__21945;
count__21556_21908 = G__21946;
i__21557_21909 = G__21947;
continue;
} else {
var G__21948 = seq__21551_21906;
var G__21949 = chunk__21555_21907;
var G__21950 = count__21556_21908;
var G__21951 = (i__21557_21909 + (1));
seq__21551_21906 = G__21948;
chunk__21555_21907 = G__21949;
count__21556_21908 = G__21950;
i__21557_21909 = G__21951;
continue;
}
} else {
var G__21952 = seq__21551_21906;
var G__21953 = chunk__21555_21907;
var G__21954 = count__21556_21908;
var G__21955 = (i__21557_21909 + (1));
seq__21551_21906 = G__21952;
chunk__21555_21907 = G__21953;
count__21556_21908 = G__21954;
i__21557_21909 = G__21955;
continue;
}
} else {
var temp__5825__auto___21956__$1 = cljs.core.seq(seq__21551_21906);
if(temp__5825__auto___21956__$1){
var seq__21551_21957__$1 = temp__5825__auto___21956__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21551_21957__$1)){
var c__5673__auto___21958 = cljs.core.chunk_first(seq__21551_21957__$1);
var G__21959 = cljs.core.chunk_rest(seq__21551_21957__$1);
var G__21960 = c__5673__auto___21958;
var G__21961 = cljs.core.count(c__5673__auto___21958);
var G__21962 = (0);
seq__21551_21906 = G__21959;
chunk__21555_21907 = G__21960;
count__21556_21908 = G__21961;
i__21557_21909 = G__21962;
continue;
} else {
var node_21963 = cljs.core.first(seq__21551_21957__$1);
if(cljs.core.not(node_21963.shadow$old)){
var path_match_21964 = shadow.cljs.devtools.client.browser.match_paths(node_21963.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21964)){
var new_link_21965 = (function (){var G__21597 = node_21963.cloneNode(true);
G__21597.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21964)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21597;
})();
(node_21963.shadow$old = true);

(new_link_21965.onload = ((function (seq__21551_21906,chunk__21555_21907,count__21556_21908,i__21557_21909,seq__21326,chunk__21328,count__21329,i__21330,new_link_21965,path_match_21964,node_21963,seq__21551_21957__$1,temp__5825__auto___21956__$1,path,seq__21326__$1,temp__5825__auto__,map__21325,map__21325__$1,msg,updates,reload_info){
return (function (e){
var seq__21602_21966 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21604_21967 = null;
var count__21605_21968 = (0);
var i__21606_21969 = (0);
while(true){
if((i__21606_21969 < count__21605_21968)){
var map__21612_21970 = chunk__21604_21967.cljs$core$IIndexed$_nth$arity$2(null,i__21606_21969);
var map__21612_21971__$1 = cljs.core.__destructure_map(map__21612_21970);
var task_21972 = map__21612_21971__$1;
var fn_str_21973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612_21971__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612_21971__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21975 = goog.getObjectByName(fn_str_21973,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21974)));

(fn_obj_21975.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21975.cljs$core$IFn$_invoke$arity$2(path,new_link_21965) : fn_obj_21975.call(null,path,new_link_21965));


var G__21976 = seq__21602_21966;
var G__21977 = chunk__21604_21967;
var G__21978 = count__21605_21968;
var G__21979 = (i__21606_21969 + (1));
seq__21602_21966 = G__21976;
chunk__21604_21967 = G__21977;
count__21605_21968 = G__21978;
i__21606_21969 = G__21979;
continue;
} else {
var temp__5825__auto___21980__$2 = cljs.core.seq(seq__21602_21966);
if(temp__5825__auto___21980__$2){
var seq__21602_21981__$1 = temp__5825__auto___21980__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21602_21981__$1)){
var c__5673__auto___21982 = cljs.core.chunk_first(seq__21602_21981__$1);
var G__21983 = cljs.core.chunk_rest(seq__21602_21981__$1);
var G__21984 = c__5673__auto___21982;
var G__21985 = cljs.core.count(c__5673__auto___21982);
var G__21986 = (0);
seq__21602_21966 = G__21983;
chunk__21604_21967 = G__21984;
count__21605_21968 = G__21985;
i__21606_21969 = G__21986;
continue;
} else {
var map__21613_21987 = cljs.core.first(seq__21602_21981__$1);
var map__21613_21988__$1 = cljs.core.__destructure_map(map__21613_21987);
var task_21989 = map__21613_21988__$1;
var fn_str_21990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613_21988__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613_21988__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21992 = goog.getObjectByName(fn_str_21990,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21991)));

(fn_obj_21992.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21992.cljs$core$IFn$_invoke$arity$2(path,new_link_21965) : fn_obj_21992.call(null,path,new_link_21965));


var G__21993 = cljs.core.next(seq__21602_21981__$1);
var G__21994 = null;
var G__21995 = (0);
var G__21996 = (0);
seq__21602_21966 = G__21993;
chunk__21604_21967 = G__21994;
count__21605_21968 = G__21995;
i__21606_21969 = G__21996;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21963);
});})(seq__21551_21906,chunk__21555_21907,count__21556_21908,i__21557_21909,seq__21326,chunk__21328,count__21329,i__21330,new_link_21965,path_match_21964,node_21963,seq__21551_21957__$1,temp__5825__auto___21956__$1,path,seq__21326__$1,temp__5825__auto__,map__21325,map__21325__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21964], 0));

goog.dom.insertSiblingAfter(new_link_21965,node_21963);


var G__21997 = cljs.core.next(seq__21551_21957__$1);
var G__21998 = null;
var G__21999 = (0);
var G__22000 = (0);
seq__21551_21906 = G__21997;
chunk__21555_21907 = G__21998;
count__21556_21908 = G__21999;
i__21557_21909 = G__22000;
continue;
} else {
var G__22001 = cljs.core.next(seq__21551_21957__$1);
var G__22002 = null;
var G__22003 = (0);
var G__22004 = (0);
seq__21551_21906 = G__22001;
chunk__21555_21907 = G__22002;
count__21556_21908 = G__22003;
i__21557_21909 = G__22004;
continue;
}
} else {
var G__22005 = cljs.core.next(seq__21551_21957__$1);
var G__22006 = null;
var G__22007 = (0);
var G__22008 = (0);
seq__21551_21906 = G__22005;
chunk__21555_21907 = G__22006;
count__21556_21908 = G__22007;
i__21557_21909 = G__22008;
continue;
}
}
} else {
}
}
break;
}


var G__22009 = cljs.core.next(seq__21326__$1);
var G__22010 = null;
var G__22011 = (0);
var G__22012 = (0);
seq__21326 = G__22009;
chunk__21328 = G__22010;
count__21329 = G__22011;
i__21330 = G__22012;
continue;
} else {
var G__22013 = cljs.core.next(seq__21326__$1);
var G__22014 = null;
var G__22015 = (0);
var G__22016 = (0);
seq__21326 = G__22013;
chunk__21328 = G__22014;
count__21329 = G__22015;
i__21330 = G__22016;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21627 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21627) : success.call(null,G__21627));
}catch (e21626){var e = e21626;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21628,success,fail){
var map__21629 = p__21628;
var map__21629__$1 = cljs.core.__destructure_map(map__21629);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21629__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21631 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21631) : success.call(null,G__21631));
}catch (e21630){var e = e21630;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21632,done,error){
var map__21633 = p__21632;
var map__21633__$1 = cljs.core.__destructure_map(map__21633);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21633__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21634,done,error){
var map__21635 = p__21634;
var map__21635__$1 = cljs.core.__destructure_map(map__21635);
var msg = map__21635__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21635__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21635__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21635__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21636){
var map__21637 = p__21636;
var map__21637__$1 = cljs.core.__destructure_map(map__21637);
var src = map__21637__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21640 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21640) : done.call(null,G__21640));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21641){
var map__21642 = p__21641;
var map__21642__$1 = cljs.core.__destructure_map(map__21642);
var msg__$1 = map__21642__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21642__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21647){var ex = e21647;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21648){
var map__21649 = p__21648;
var map__21649__$1 = cljs.core.__destructure_map(map__21649);
var env = map__21649__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21652){
var map__21653 = p__21652;
var map__21653__$1 = cljs.core.__destructure_map(map__21653);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21654){
var map__21655 = p__21654;
var map__21655__$1 = cljs.core.__destructure_map(map__21655);
var svc = map__21655__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
