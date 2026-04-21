goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19903){
var map__19904 = p__19903;
var map__19904__$1 = cljs.core.__destructure_map(map__19904);
var m = map__19904__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19904__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19908_20273 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19909_20274 = null;
var count__19910_20275 = (0);
var i__19911_20276 = (0);
while(true){
if((i__19911_20276 < count__19910_20275)){
var f_20277 = chunk__19909_20274.cljs$core$IIndexed$_nth$arity$2(null,i__19911_20276);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20277], 0));


var G__20278 = seq__19908_20273;
var G__20279 = chunk__19909_20274;
var G__20280 = count__19910_20275;
var G__20281 = (i__19911_20276 + (1));
seq__19908_20273 = G__20278;
chunk__19909_20274 = G__20279;
count__19910_20275 = G__20280;
i__19911_20276 = G__20281;
continue;
} else {
var temp__5825__auto___20282 = cljs.core.seq(seq__19908_20273);
if(temp__5825__auto___20282){
var seq__19908_20283__$1 = temp__5825__auto___20282;
if(cljs.core.chunked_seq_QMARK_(seq__19908_20283__$1)){
var c__5673__auto___20284 = cljs.core.chunk_first(seq__19908_20283__$1);
var G__20285 = cljs.core.chunk_rest(seq__19908_20283__$1);
var G__20286 = c__5673__auto___20284;
var G__20287 = cljs.core.count(c__5673__auto___20284);
var G__20288 = (0);
seq__19908_20273 = G__20285;
chunk__19909_20274 = G__20286;
count__19910_20275 = G__20287;
i__19911_20276 = G__20288;
continue;
} else {
var f_20289 = cljs.core.first(seq__19908_20283__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20289], 0));


var G__20290 = cljs.core.next(seq__19908_20283__$1);
var G__20291 = null;
var G__20292 = (0);
var G__20293 = (0);
seq__19908_20273 = G__20290;
chunk__19909_20274 = G__20291;
count__19910_20275 = G__20292;
i__19911_20276 = G__20293;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20294 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20294], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20294)))?cljs.core.second(arglists_20294):arglists_20294)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19948_20299 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19949_20300 = null;
var count__19950_20301 = (0);
var i__19951_20302 = (0);
while(true){
if((i__19951_20302 < count__19950_20301)){
var vec__19965_20303 = chunk__19949_20300.cljs$core$IIndexed$_nth$arity$2(null,i__19951_20302);
var name_20304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19965_20303,(0),null);
var map__19968_20305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19965_20303,(1),null);
var map__19968_20306__$1 = cljs.core.__destructure_map(map__19968_20305);
var doc_20307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968_20306__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968_20306__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20304], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20308], 0));

if(cljs.core.truth_(doc_20307)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20307], 0));
} else {
}


var G__20309 = seq__19948_20299;
var G__20310 = chunk__19949_20300;
var G__20311 = count__19950_20301;
var G__20312 = (i__19951_20302 + (1));
seq__19948_20299 = G__20309;
chunk__19949_20300 = G__20310;
count__19950_20301 = G__20311;
i__19951_20302 = G__20312;
continue;
} else {
var temp__5825__auto___20314 = cljs.core.seq(seq__19948_20299);
if(temp__5825__auto___20314){
var seq__19948_20315__$1 = temp__5825__auto___20314;
if(cljs.core.chunked_seq_QMARK_(seq__19948_20315__$1)){
var c__5673__auto___20316 = cljs.core.chunk_first(seq__19948_20315__$1);
var G__20317 = cljs.core.chunk_rest(seq__19948_20315__$1);
var G__20318 = c__5673__auto___20316;
var G__20319 = cljs.core.count(c__5673__auto___20316);
var G__20320 = (0);
seq__19948_20299 = G__20317;
chunk__19949_20300 = G__20318;
count__19950_20301 = G__20319;
i__19951_20302 = G__20320;
continue;
} else {
var vec__19972_20322 = cljs.core.first(seq__19948_20315__$1);
var name_20323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972_20322,(0),null);
var map__19975_20324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972_20322,(1),null);
var map__19975_20325__$1 = cljs.core.__destructure_map(map__19975_20324);
var doc_20326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19975_20325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19975_20325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20323], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20327], 0));

if(cljs.core.truth_(doc_20326)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20326], 0));
} else {
}


var G__20334 = cljs.core.next(seq__19948_20315__$1);
var G__20335 = null;
var G__20336 = (0);
var G__20337 = (0);
seq__19948_20299 = G__20334;
chunk__19949_20300 = G__20335;
count__19950_20301 = G__20336;
i__19951_20302 = G__20337;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19976 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19977 = null;
var count__19978 = (0);
var i__19979 = (0);
while(true){
if((i__19979 < count__19978)){
var role = chunk__19977.cljs$core$IIndexed$_nth$arity$2(null,i__19979);
var temp__5825__auto___20345__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___20345__$1)){
var spec_20347 = temp__5825__auto___20345__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_20347)], 0));
} else {
}


var G__20348 = seq__19976;
var G__20349 = chunk__19977;
var G__20350 = count__19978;
var G__20351 = (i__19979 + (1));
seq__19976 = G__20348;
chunk__19977 = G__20349;
count__19978 = G__20350;
i__19979 = G__20351;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__19976);
if(temp__5825__auto____$1){
var seq__19976__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19976__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__19976__$1);
var G__20354 = cljs.core.chunk_rest(seq__19976__$1);
var G__20355 = c__5673__auto__;
var G__20356 = cljs.core.count(c__5673__auto__);
var G__20357 = (0);
seq__19976 = G__20354;
chunk__19977 = G__20355;
count__19978 = G__20356;
i__19979 = G__20357;
continue;
} else {
var role = cljs.core.first(seq__19976__$1);
var temp__5825__auto___20359__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___20359__$2)){
var spec_20360 = temp__5825__auto___20359__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_20360)], 0));
} else {
}


var G__20361 = cljs.core.next(seq__19976__$1);
var G__20362 = null;
var G__20363 = (0);
var G__20364 = (0);
seq__19976 = G__20361;
chunk__19977 = G__20362;
count__19978 = G__20363;
i__19979 = G__20364;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20082 = datafied_throwable;
var map__20082__$1 = cljs.core.__destructure_map(map__20082);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20082__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20082__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20082__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20087 = cljs.core.last(via);
var map__20087__$1 = cljs.core.__destructure_map(map__20087);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20087__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20087__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20087__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20088 = data;
var map__20088__$1 = cljs.core.__destructure_map(map__20088);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20088__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20088__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20088__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20089 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20089__$1 = cljs.core.__destructure_map(map__20089);
var top_data = map__20089__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20089__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20109 = phase;
var G__20109__$1 = (((G__20109 instanceof cljs.core.Keyword))?G__20109.fqn:null);
switch (G__20109__$1) {
case "read-source":
var map__20112 = data;
var map__20112__$1 = cljs.core.__destructure_map(map__20112);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20112__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20112__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20117 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20117__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20117,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20117);
var G__20117__$2 = (cljs.core.truth_((function (){var fexpr__20124 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20124.cljs$core$IFn$_invoke$arity$1 ? fexpr__20124.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20124.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20117__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20117__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20117__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20117__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20126 = top_data;
var G__20126__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20126,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20126);
var G__20126__$2 = (cljs.core.truth_((function (){var fexpr__20127 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20127.cljs$core$IFn$_invoke$arity$1 ? fexpr__20127.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20127.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20126__$1);
var G__20126__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20126__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20126__$2);
var G__20126__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20126__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20126__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20126__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20126__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20129 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20129,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20129,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20129,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20129,(3),null);
var G__20133 = top_data;
var G__20133__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20133,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20133);
var G__20133__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20133__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20133__$1);
var G__20133__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20133__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20133__$2);
var G__20133__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20133__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20133__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20133__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20133__$4;
}

break;
case "execution":
var vec__20137 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20137,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20137,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20137,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20137,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20074_SHARP_){
var or__5142__auto__ = (p1__20074_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__20153 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20153.cljs$core$IFn$_invoke$arity$1 ? fexpr__20153.cljs$core$IFn$_invoke$arity$1(p1__20074_SHARP_) : fexpr__20153.call(null,p1__20074_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__20167 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20167__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20167,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20167);
var G__20167__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20167__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20167__$1);
var G__20167__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20167__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20167__$2);
var G__20167__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20167__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20167__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20167__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20167__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20109__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20198){
var map__20199 = p__20198;
var map__20199__$1 = cljs.core.__destructure_map(map__20199);
var triage_data = map__20199__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__20217 = phase;
var G__20217__$1 = (((G__20217 instanceof cljs.core.Keyword))?G__20217.fqn:null);
switch (G__20217__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20221 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20222 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20223 = loc;
var G__20224 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20230_20371 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20231_20372 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20232_20373 = true;
var _STAR_print_fn_STAR__temp_val__20233_20374 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20232_20373);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20233_20374);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20195_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20195_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20231_20372);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20230_20371);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20221,G__20222,G__20223,G__20224) : format.call(null,G__20221,G__20222,G__20223,G__20224));

break;
case "macroexpansion":
var G__20239 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20240 = cause_type;
var G__20241 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20242 = loc;
var G__20243 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20239,G__20240,G__20241,G__20242,G__20243) : format.call(null,G__20239,G__20240,G__20241,G__20242,G__20243));

break;
case "compile-syntax-check":
var G__20244 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20245 = cause_type;
var G__20246 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20247 = loc;
var G__20248 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20244,G__20245,G__20246,G__20247,G__20248) : format.call(null,G__20244,G__20245,G__20246,G__20247,G__20248));

break;
case "compilation":
var G__20249 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20250 = cause_type;
var G__20251 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20252 = loc;
var G__20253 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20249,G__20250,G__20251,G__20252,G__20253) : format.call(null,G__20249,G__20250,G__20251,G__20252,G__20253));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20254 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20255 = symbol;
var G__20256 = loc;
var G__20257 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20258_20376 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20259_20377 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20260_20378 = true;
var _STAR_print_fn_STAR__temp_val__20261_20379 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20260_20378);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20261_20379);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20197_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20197_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20259_20377);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20258_20376);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20254,G__20255,G__20256,G__20257) : format.call(null,G__20254,G__20255,G__20256,G__20257));
} else {
var G__20265 = "Execution error%s at %s(%s).\n%s\n";
var G__20266 = cause_type;
var G__20267 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20268 = loc;
var G__20269 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20265,G__20266,G__20267,G__20268,G__20269) : format.call(null,G__20265,G__20266,G__20267,G__20268,G__20269));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20217__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
