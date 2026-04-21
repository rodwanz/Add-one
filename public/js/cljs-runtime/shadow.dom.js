goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12527 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12527(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12544 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12544(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11777 = coll;
var G__11778 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11777,G__11778) : shadow.dom.lazy_native_coll_seq.call(null,G__11777,G__11778));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11790 = arguments.length;
switch (G__11790) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11796 = arguments.length;
switch (G__11796) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11803 = arguments.length;
switch (G__11803) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11806 = arguments.length;
switch (G__11806) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11810 = arguments.length;
switch (G__11810) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11820 = arguments.length;
switch (G__11820) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11821){if((e11821 instanceof Object)){
var e = e11821;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11821;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11822 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11823 = null;
var count__11824 = (0);
var i__11825 = (0);
while(true){
if((i__11825 < count__11824)){
var el = chunk__11823.cljs$core$IIndexed$_nth$arity$2(null,i__11825);
var handler_12589__$1 = ((function (seq__11822,chunk__11823,count__11824,i__11825,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11822,chunk__11823,count__11824,i__11825,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12589__$1);


var G__12594 = seq__11822;
var G__12595 = chunk__11823;
var G__12596 = count__11824;
var G__12597 = (i__11825 + (1));
seq__11822 = G__12594;
chunk__11823 = G__12595;
count__11824 = G__12596;
i__11825 = G__12597;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__11822);
if(temp__5825__auto__){
var seq__11822__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11822__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11822__$1);
var G__12603 = cljs.core.chunk_rest(seq__11822__$1);
var G__12604 = c__5673__auto__;
var G__12605 = cljs.core.count(c__5673__auto__);
var G__12606 = (0);
seq__11822 = G__12603;
chunk__11823 = G__12604;
count__11824 = G__12605;
i__11825 = G__12606;
continue;
} else {
var el = cljs.core.first(seq__11822__$1);
var handler_12607__$1 = ((function (seq__11822,chunk__11823,count__11824,i__11825,el,seq__11822__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11822,chunk__11823,count__11824,i__11825,el,seq__11822__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12607__$1);


var G__12608 = cljs.core.next(seq__11822__$1);
var G__12609 = null;
var G__12610 = (0);
var G__12611 = (0);
seq__11822 = G__12608;
chunk__11823 = G__12609;
count__11824 = G__12610;
i__11825 = G__12611;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11832 = arguments.length;
switch (G__11832) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11833 = cljs.core.seq(events);
var chunk__11834 = null;
var count__11835 = (0);
var i__11836 = (0);
while(true){
if((i__11836 < count__11835)){
var vec__11843 = chunk__11834.cljs$core$IIndexed$_nth$arity$2(null,i__11836);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12625 = seq__11833;
var G__12626 = chunk__11834;
var G__12627 = count__11835;
var G__12628 = (i__11836 + (1));
seq__11833 = G__12625;
chunk__11834 = G__12626;
count__11835 = G__12627;
i__11836 = G__12628;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__11833);
if(temp__5825__auto__){
var seq__11833__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11833__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11833__$1);
var G__12631 = cljs.core.chunk_rest(seq__11833__$1);
var G__12632 = c__5673__auto__;
var G__12633 = cljs.core.count(c__5673__auto__);
var G__12634 = (0);
seq__11833 = G__12631;
chunk__11834 = G__12632;
count__11835 = G__12633;
i__11836 = G__12634;
continue;
} else {
var vec__11846 = cljs.core.first(seq__11833__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12635 = cljs.core.next(seq__11833__$1);
var G__12636 = null;
var G__12637 = (0);
var G__12638 = (0);
seq__11833 = G__12635;
chunk__11834 = G__12636;
count__11835 = G__12637;
i__11836 = G__12638;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11849 = cljs.core.seq(styles);
var chunk__11850 = null;
var count__11851 = (0);
var i__11852 = (0);
while(true){
if((i__11852 < count__11851)){
var vec__11865 = chunk__11850.cljs$core$IIndexed$_nth$arity$2(null,i__11852);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11865,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11865,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12641 = seq__11849;
var G__12642 = chunk__11850;
var G__12643 = count__11851;
var G__12644 = (i__11852 + (1));
seq__11849 = G__12641;
chunk__11850 = G__12642;
count__11851 = G__12643;
i__11852 = G__12644;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__11849);
if(temp__5825__auto__){
var seq__11849__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11849__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11849__$1);
var G__12645 = cljs.core.chunk_rest(seq__11849__$1);
var G__12646 = c__5673__auto__;
var G__12647 = cljs.core.count(c__5673__auto__);
var G__12648 = (0);
seq__11849 = G__12645;
chunk__11850 = G__12646;
count__11851 = G__12647;
i__11852 = G__12648;
continue;
} else {
var vec__11868 = cljs.core.first(seq__11849__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11868,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11868,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12651 = cljs.core.next(seq__11849__$1);
var G__12652 = null;
var G__12653 = (0);
var G__12654 = (0);
seq__11849 = G__12651;
chunk__11850 = G__12652;
count__11851 = G__12653;
i__11852 = G__12654;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11871_12656 = key;
var G__11871_12657__$1 = (((G__11871_12656 instanceof cljs.core.Keyword))?G__11871_12656.fqn:null);
switch (G__11871_12657__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12670 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_12670,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_12670,"aria-");
}
})())){
el.setAttribute(ks_12670,value);
} else {
(el[ks_12670] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11889){
var map__11891 = p__11889;
var map__11891__$1 = cljs.core.__destructure_map(map__11891);
var props = map__11891__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11891__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11894 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11898 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11898,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11898;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11900 = arguments.length;
switch (G__11900) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11904){
var vec__11905 = p__11904;
var seq__11906 = cljs.core.seq(vec__11905);
var first__11907 = cljs.core.first(seq__11906);
var seq__11906__$1 = cljs.core.next(seq__11906);
var nn = first__11907;
var first__11907__$1 = cljs.core.first(seq__11906__$1);
var seq__11906__$2 = cljs.core.next(seq__11906__$1);
var np = first__11907__$1;
var nc = seq__11906__$2;
var node = vec__11905;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11911 = nn;
var G__11912 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11911,G__11912) : create_fn.call(null,G__11911,G__11912));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11913 = nn;
var G__11914 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11913,G__11914) : create_fn.call(null,G__11913,G__11914));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11920 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11920,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11920,(1),null);
var seq__11923_12703 = cljs.core.seq(node_children);
var chunk__11924_12704 = null;
var count__11925_12705 = (0);
var i__11926_12706 = (0);
while(true){
if((i__11926_12706 < count__11925_12705)){
var child_struct_12708 = chunk__11924_12704.cljs$core$IIndexed$_nth$arity$2(null,i__11926_12706);
var children_12711 = shadow.dom.dom_node(child_struct_12708);
if(cljs.core.seq_QMARK_(children_12711)){
var seq__11992_12712 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12711));
var chunk__11994_12713 = null;
var count__11995_12714 = (0);
var i__11996_12715 = (0);
while(true){
if((i__11996_12715 < count__11995_12714)){
var child_12717 = chunk__11994_12713.cljs$core$IIndexed$_nth$arity$2(null,i__11996_12715);
if(cljs.core.truth_(child_12717)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12717);


var G__12719 = seq__11992_12712;
var G__12720 = chunk__11994_12713;
var G__12721 = count__11995_12714;
var G__12722 = (i__11996_12715 + (1));
seq__11992_12712 = G__12719;
chunk__11994_12713 = G__12720;
count__11995_12714 = G__12721;
i__11996_12715 = G__12722;
continue;
} else {
var G__12724 = seq__11992_12712;
var G__12725 = chunk__11994_12713;
var G__12726 = count__11995_12714;
var G__12727 = (i__11996_12715 + (1));
seq__11992_12712 = G__12724;
chunk__11994_12713 = G__12725;
count__11995_12714 = G__12726;
i__11996_12715 = G__12727;
continue;
}
} else {
var temp__5825__auto___12728 = cljs.core.seq(seq__11992_12712);
if(temp__5825__auto___12728){
var seq__11992_12729__$1 = temp__5825__auto___12728;
if(cljs.core.chunked_seq_QMARK_(seq__11992_12729__$1)){
var c__5673__auto___12730 = cljs.core.chunk_first(seq__11992_12729__$1);
var G__12731 = cljs.core.chunk_rest(seq__11992_12729__$1);
var G__12732 = c__5673__auto___12730;
var G__12733 = cljs.core.count(c__5673__auto___12730);
var G__12734 = (0);
seq__11992_12712 = G__12731;
chunk__11994_12713 = G__12732;
count__11995_12714 = G__12733;
i__11996_12715 = G__12734;
continue;
} else {
var child_12735 = cljs.core.first(seq__11992_12729__$1);
if(cljs.core.truth_(child_12735)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12735);


var G__12738 = cljs.core.next(seq__11992_12729__$1);
var G__12739 = null;
var G__12740 = (0);
var G__12741 = (0);
seq__11992_12712 = G__12738;
chunk__11994_12713 = G__12739;
count__11995_12714 = G__12740;
i__11996_12715 = G__12741;
continue;
} else {
var G__12742 = cljs.core.next(seq__11992_12729__$1);
var G__12743 = null;
var G__12744 = (0);
var G__12745 = (0);
seq__11992_12712 = G__12742;
chunk__11994_12713 = G__12743;
count__11995_12714 = G__12744;
i__11996_12715 = G__12745;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12711);
}


var G__12747 = seq__11923_12703;
var G__12748 = chunk__11924_12704;
var G__12749 = count__11925_12705;
var G__12750 = (i__11926_12706 + (1));
seq__11923_12703 = G__12747;
chunk__11924_12704 = G__12748;
count__11925_12705 = G__12749;
i__11926_12706 = G__12750;
continue;
} else {
var temp__5825__auto___12751 = cljs.core.seq(seq__11923_12703);
if(temp__5825__auto___12751){
var seq__11923_12752__$1 = temp__5825__auto___12751;
if(cljs.core.chunked_seq_QMARK_(seq__11923_12752__$1)){
var c__5673__auto___12753 = cljs.core.chunk_first(seq__11923_12752__$1);
var G__12754 = cljs.core.chunk_rest(seq__11923_12752__$1);
var G__12755 = c__5673__auto___12753;
var G__12756 = cljs.core.count(c__5673__auto___12753);
var G__12757 = (0);
seq__11923_12703 = G__12754;
chunk__11924_12704 = G__12755;
count__11925_12705 = G__12756;
i__11926_12706 = G__12757;
continue;
} else {
var child_struct_12758 = cljs.core.first(seq__11923_12752__$1);
var children_12760 = shadow.dom.dom_node(child_struct_12758);
if(cljs.core.seq_QMARK_(children_12760)){
var seq__12008_12761 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12760));
var chunk__12010_12762 = null;
var count__12011_12763 = (0);
var i__12012_12764 = (0);
while(true){
if((i__12012_12764 < count__12011_12763)){
var child_12767 = chunk__12010_12762.cljs$core$IIndexed$_nth$arity$2(null,i__12012_12764);
if(cljs.core.truth_(child_12767)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12767);


var G__12768 = seq__12008_12761;
var G__12769 = chunk__12010_12762;
var G__12770 = count__12011_12763;
var G__12771 = (i__12012_12764 + (1));
seq__12008_12761 = G__12768;
chunk__12010_12762 = G__12769;
count__12011_12763 = G__12770;
i__12012_12764 = G__12771;
continue;
} else {
var G__12772 = seq__12008_12761;
var G__12773 = chunk__12010_12762;
var G__12774 = count__12011_12763;
var G__12775 = (i__12012_12764 + (1));
seq__12008_12761 = G__12772;
chunk__12010_12762 = G__12773;
count__12011_12763 = G__12774;
i__12012_12764 = G__12775;
continue;
}
} else {
var temp__5825__auto___12776__$1 = cljs.core.seq(seq__12008_12761);
if(temp__5825__auto___12776__$1){
var seq__12008_12777__$1 = temp__5825__auto___12776__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12008_12777__$1)){
var c__5673__auto___12779 = cljs.core.chunk_first(seq__12008_12777__$1);
var G__12780 = cljs.core.chunk_rest(seq__12008_12777__$1);
var G__12781 = c__5673__auto___12779;
var G__12782 = cljs.core.count(c__5673__auto___12779);
var G__12783 = (0);
seq__12008_12761 = G__12780;
chunk__12010_12762 = G__12781;
count__12011_12763 = G__12782;
i__12012_12764 = G__12783;
continue;
} else {
var child_12784 = cljs.core.first(seq__12008_12777__$1);
if(cljs.core.truth_(child_12784)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12784);


var G__12785 = cljs.core.next(seq__12008_12777__$1);
var G__12786 = null;
var G__12787 = (0);
var G__12788 = (0);
seq__12008_12761 = G__12785;
chunk__12010_12762 = G__12786;
count__12011_12763 = G__12787;
i__12012_12764 = G__12788;
continue;
} else {
var G__12789 = cljs.core.next(seq__12008_12777__$1);
var G__12790 = null;
var G__12791 = (0);
var G__12792 = (0);
seq__12008_12761 = G__12789;
chunk__12010_12762 = G__12790;
count__12011_12763 = G__12791;
i__12012_12764 = G__12792;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12760);
}


var G__12793 = cljs.core.next(seq__11923_12752__$1);
var G__12794 = null;
var G__12795 = (0);
var G__12796 = (0);
seq__11923_12703 = G__12793;
chunk__11924_12704 = G__12794;
count__11925_12705 = G__12795;
i__11926_12706 = G__12796;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12034 = cljs.core.seq(node);
var chunk__12035 = null;
var count__12036 = (0);
var i__12037 = (0);
while(true){
if((i__12037 < count__12036)){
var n = chunk__12035.cljs$core$IIndexed$_nth$arity$2(null,i__12037);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12810 = seq__12034;
var G__12811 = chunk__12035;
var G__12812 = count__12036;
var G__12813 = (i__12037 + (1));
seq__12034 = G__12810;
chunk__12035 = G__12811;
count__12036 = G__12812;
i__12037 = G__12813;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12034);
if(temp__5825__auto__){
var seq__12034__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12034__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12034__$1);
var G__12814 = cljs.core.chunk_rest(seq__12034__$1);
var G__12815 = c__5673__auto__;
var G__12816 = cljs.core.count(c__5673__auto__);
var G__12817 = (0);
seq__12034 = G__12814;
chunk__12035 = G__12815;
count__12036 = G__12816;
i__12037 = G__12817;
continue;
} else {
var n = cljs.core.first(seq__12034__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12820 = cljs.core.next(seq__12034__$1);
var G__12821 = null;
var G__12822 = (0);
var G__12823 = (0);
seq__12034 = G__12820;
chunk__12035 = G__12821;
count__12036 = G__12822;
i__12037 = G__12823;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12045 = arguments.length;
switch (G__12045) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12051 = arguments.length;
switch (G__12051) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12066 = arguments.length;
switch (G__12066) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___12849 = arguments.length;
var i__5877__auto___12850 = (0);
while(true){
if((i__5877__auto___12850 < len__5876__auto___12849)){
args__5882__auto__.push((arguments[i__5877__auto___12850]));

var G__12851 = (i__5877__auto___12850 + (1));
i__5877__auto___12850 = G__12851;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12076_12854 = cljs.core.seq(nodes);
var chunk__12077_12855 = null;
var count__12078_12856 = (0);
var i__12079_12857 = (0);
while(true){
if((i__12079_12857 < count__12078_12856)){
var node_12858 = chunk__12077_12855.cljs$core$IIndexed$_nth$arity$2(null,i__12079_12857);
fragment.appendChild(shadow.dom._to_dom(node_12858));


var G__12860 = seq__12076_12854;
var G__12861 = chunk__12077_12855;
var G__12862 = count__12078_12856;
var G__12863 = (i__12079_12857 + (1));
seq__12076_12854 = G__12860;
chunk__12077_12855 = G__12861;
count__12078_12856 = G__12862;
i__12079_12857 = G__12863;
continue;
} else {
var temp__5825__auto___12864 = cljs.core.seq(seq__12076_12854);
if(temp__5825__auto___12864){
var seq__12076_12866__$1 = temp__5825__auto___12864;
if(cljs.core.chunked_seq_QMARK_(seq__12076_12866__$1)){
var c__5673__auto___12867 = cljs.core.chunk_first(seq__12076_12866__$1);
var G__12868 = cljs.core.chunk_rest(seq__12076_12866__$1);
var G__12869 = c__5673__auto___12867;
var G__12870 = cljs.core.count(c__5673__auto___12867);
var G__12871 = (0);
seq__12076_12854 = G__12868;
chunk__12077_12855 = G__12869;
count__12078_12856 = G__12870;
i__12079_12857 = G__12871;
continue;
} else {
var node_12873 = cljs.core.first(seq__12076_12866__$1);
fragment.appendChild(shadow.dom._to_dom(node_12873));


var G__12876 = cljs.core.next(seq__12076_12866__$1);
var G__12877 = null;
var G__12878 = (0);
var G__12879 = (0);
seq__12076_12854 = G__12876;
chunk__12077_12855 = G__12877;
count__12078_12856 = G__12878;
i__12079_12857 = G__12879;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12075){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12075));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12080_12884 = cljs.core.seq(scripts);
var chunk__12081_12885 = null;
var count__12082_12886 = (0);
var i__12083_12887 = (0);
while(true){
if((i__12083_12887 < count__12082_12886)){
var vec__12090_12889 = chunk__12081_12885.cljs$core$IIndexed$_nth$arity$2(null,i__12083_12887);
var script_tag_12890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12090_12889,(0),null);
var script_body_12891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12090_12889,(1),null);
eval(script_body_12891);


var G__12893 = seq__12080_12884;
var G__12894 = chunk__12081_12885;
var G__12895 = count__12082_12886;
var G__12896 = (i__12083_12887 + (1));
seq__12080_12884 = G__12893;
chunk__12081_12885 = G__12894;
count__12082_12886 = G__12895;
i__12083_12887 = G__12896;
continue;
} else {
var temp__5825__auto___12897 = cljs.core.seq(seq__12080_12884);
if(temp__5825__auto___12897){
var seq__12080_12898__$1 = temp__5825__auto___12897;
if(cljs.core.chunked_seq_QMARK_(seq__12080_12898__$1)){
var c__5673__auto___12900 = cljs.core.chunk_first(seq__12080_12898__$1);
var G__12901 = cljs.core.chunk_rest(seq__12080_12898__$1);
var G__12902 = c__5673__auto___12900;
var G__12903 = cljs.core.count(c__5673__auto___12900);
var G__12904 = (0);
seq__12080_12884 = G__12901;
chunk__12081_12885 = G__12902;
count__12082_12886 = G__12903;
i__12083_12887 = G__12904;
continue;
} else {
var vec__12093_12907 = cljs.core.first(seq__12080_12898__$1);
var script_tag_12908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12093_12907,(0),null);
var script_body_12909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12093_12907,(1),null);
eval(script_body_12909);


var G__12912 = cljs.core.next(seq__12080_12898__$1);
var G__12913 = null;
var G__12914 = (0);
var G__12915 = (0);
seq__12080_12884 = G__12912;
chunk__12081_12885 = G__12913;
count__12082_12886 = G__12914;
i__12083_12887 = G__12915;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12096){
var vec__12097 = p__12096;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12097,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12097,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12104 = arguments.length;
switch (G__12104) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12106 = cljs.core.seq(style_keys);
var chunk__12107 = null;
var count__12108 = (0);
var i__12109 = (0);
while(true){
if((i__12109 < count__12108)){
var it = chunk__12107.cljs$core$IIndexed$_nth$arity$2(null,i__12109);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12935 = seq__12106;
var G__12936 = chunk__12107;
var G__12937 = count__12108;
var G__12938 = (i__12109 + (1));
seq__12106 = G__12935;
chunk__12107 = G__12936;
count__12108 = G__12937;
i__12109 = G__12938;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12106);
if(temp__5825__auto__){
var seq__12106__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12106__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12106__$1);
var G__12940 = cljs.core.chunk_rest(seq__12106__$1);
var G__12941 = c__5673__auto__;
var G__12942 = cljs.core.count(c__5673__auto__);
var G__12943 = (0);
seq__12106 = G__12940;
chunk__12107 = G__12941;
count__12108 = G__12942;
i__12109 = G__12943;
continue;
} else {
var it = cljs.core.first(seq__12106__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12946 = cljs.core.next(seq__12106__$1);
var G__12947 = null;
var G__12948 = (0);
var G__12949 = (0);
seq__12106 = G__12946;
chunk__12107 = G__12947;
count__12108 = G__12948;
i__12109 = G__12949;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12111,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12127 = k12111;
var G__12127__$1 = (((G__12127 instanceof cljs.core.Keyword))?G__12127.fqn:null);
switch (G__12127__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12111,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12134){
var vec__12135 = p__12134;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12135,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12135,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12110){
var self__ = this;
var G__12110__$1 = this;
return (new cljs.core.RecordIter((0),G__12110__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12112,other12113){
var self__ = this;
var this12112__$1 = this;
return (((!((other12113 == null)))) && ((((this12112__$1.constructor === other12113.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12112__$1.x,other12113.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12112__$1.y,other12113.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12112__$1.__extmap,other12113.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12111){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12138 = k12111;
var G__12138__$1 = (((G__12138 instanceof cljs.core.Keyword))?G__12138.fqn:null);
switch (G__12138__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12111);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12110){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12139 = cljs.core.keyword_identical_QMARK_;
var expr__12140 = k__5457__auto__;
if(cljs.core.truth_((pred__12139.cljs$core$IFn$_invoke$arity$2 ? pred__12139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12140) : pred__12139.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12140)))){
return (new shadow.dom.Coordinate(G__12110,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12139.cljs$core$IFn$_invoke$arity$2 ? pred__12139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12140) : pred__12139.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12140)))){
return (new shadow.dom.Coordinate(self__.x,G__12110,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12110),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12110){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12110,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12126){
var extmap__5490__auto__ = (function (){var G__12146 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12126,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12126)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12146);
} else {
return G__12146;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12126),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12126),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12153,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12157 = k12153;
var G__12157__$1 = (((G__12157 instanceof cljs.core.Keyword))?G__12157.fqn:null);
switch (G__12157__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12153,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12158){
var vec__12159 = p__12158;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12152){
var self__ = this;
var G__12152__$1 = this;
return (new cljs.core.RecordIter((0),G__12152__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12154,other12155){
var self__ = this;
var this12154__$1 = this;
return (((!((other12155 == null)))) && ((((this12154__$1.constructor === other12155.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12154__$1.w,other12155.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12154__$1.h,other12155.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12154__$1.__extmap,other12155.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12153){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12162 = k12153;
var G__12162__$1 = (((G__12162 instanceof cljs.core.Keyword))?G__12162.fqn:null);
switch (G__12162__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12153);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12152){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12163 = cljs.core.keyword_identical_QMARK_;
var expr__12164 = k__5457__auto__;
if(cljs.core.truth_((pred__12163.cljs$core$IFn$_invoke$arity$2 ? pred__12163.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12164) : pred__12163.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12164)))){
return (new shadow.dom.Size(G__12152,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12163.cljs$core$IFn$_invoke$arity$2 ? pred__12163.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12164) : pred__12163.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12164)))){
return (new shadow.dom.Size(self__.w,G__12152,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12152),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12152){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12152,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12156){
var extmap__5490__auto__ = (function (){var G__12170 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12156,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12156)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12170);
} else {
return G__12170;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12156),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12156),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__13037 = (i + (1));
var G__13038 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13037;
ret = G__13038;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12178){
var vec__12179 = p__12178;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12179,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12187 = arguments.length;
switch (G__12187) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13048 = ps;
var G__13049 = (i + (1));
el__$1 = G__13048;
i = G__13049;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12195 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12195,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12195,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12195,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12200_13060 = cljs.core.seq(props);
var chunk__12201_13061 = null;
var count__12202_13062 = (0);
var i__12203_13063 = (0);
while(true){
if((i__12203_13063 < count__12202_13062)){
var vec__12216_13064 = chunk__12201_13061.cljs$core$IIndexed$_nth$arity$2(null,i__12203_13063);
var k_13065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12216_13064,(0),null);
var v_13066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12216_13064,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_13065);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13065),v_13066);


var G__13070 = seq__12200_13060;
var G__13071 = chunk__12201_13061;
var G__13072 = count__12202_13062;
var G__13073 = (i__12203_13063 + (1));
seq__12200_13060 = G__13070;
chunk__12201_13061 = G__13071;
count__12202_13062 = G__13072;
i__12203_13063 = G__13073;
continue;
} else {
var temp__5825__auto___13076 = cljs.core.seq(seq__12200_13060);
if(temp__5825__auto___13076){
var seq__12200_13078__$1 = temp__5825__auto___13076;
if(cljs.core.chunked_seq_QMARK_(seq__12200_13078__$1)){
var c__5673__auto___13079 = cljs.core.chunk_first(seq__12200_13078__$1);
var G__13080 = cljs.core.chunk_rest(seq__12200_13078__$1);
var G__13081 = c__5673__auto___13079;
var G__13082 = cljs.core.count(c__5673__auto___13079);
var G__13083 = (0);
seq__12200_13060 = G__13080;
chunk__12201_13061 = G__13081;
count__12202_13062 = G__13082;
i__12203_13063 = G__13083;
continue;
} else {
var vec__12222_13084 = cljs.core.first(seq__12200_13078__$1);
var k_13085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12222_13084,(0),null);
var v_13086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12222_13084,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_13085);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13085),v_13086);


var G__13087 = cljs.core.next(seq__12200_13078__$1);
var G__13088 = null;
var G__13089 = (0);
var G__13090 = (0);
seq__12200_13060 = G__13087;
chunk__12201_13061 = G__13088;
count__12202_13062 = G__13089;
i__12203_13063 = G__13090;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12234 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12234,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12234,(1),null);
var seq__12239_13097 = cljs.core.seq(node_children);
var chunk__12241_13098 = null;
var count__12242_13099 = (0);
var i__12243_13100 = (0);
while(true){
if((i__12243_13100 < count__12242_13099)){
var child_struct_13101 = chunk__12241_13098.cljs$core$IIndexed$_nth$arity$2(null,i__12243_13100);
if((!((child_struct_13101 == null)))){
if(typeof child_struct_13101 === 'string'){
var text_13102 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13102)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13101)));
} else {
var children_13104 = shadow.dom.svg_node(child_struct_13101);
if(cljs.core.seq_QMARK_(children_13104)){
var seq__12346_13105 = cljs.core.seq(children_13104);
var chunk__12348_13106 = null;
var count__12349_13107 = (0);
var i__12350_13108 = (0);
while(true){
if((i__12350_13108 < count__12349_13107)){
var child_13110 = chunk__12348_13106.cljs$core$IIndexed$_nth$arity$2(null,i__12350_13108);
if(cljs.core.truth_(child_13110)){
node.appendChild(child_13110);


var G__13111 = seq__12346_13105;
var G__13112 = chunk__12348_13106;
var G__13113 = count__12349_13107;
var G__13114 = (i__12350_13108 + (1));
seq__12346_13105 = G__13111;
chunk__12348_13106 = G__13112;
count__12349_13107 = G__13113;
i__12350_13108 = G__13114;
continue;
} else {
var G__13116 = seq__12346_13105;
var G__13117 = chunk__12348_13106;
var G__13118 = count__12349_13107;
var G__13119 = (i__12350_13108 + (1));
seq__12346_13105 = G__13116;
chunk__12348_13106 = G__13117;
count__12349_13107 = G__13118;
i__12350_13108 = G__13119;
continue;
}
} else {
var temp__5825__auto___13120 = cljs.core.seq(seq__12346_13105);
if(temp__5825__auto___13120){
var seq__12346_13121__$1 = temp__5825__auto___13120;
if(cljs.core.chunked_seq_QMARK_(seq__12346_13121__$1)){
var c__5673__auto___13123 = cljs.core.chunk_first(seq__12346_13121__$1);
var G__13124 = cljs.core.chunk_rest(seq__12346_13121__$1);
var G__13125 = c__5673__auto___13123;
var G__13126 = cljs.core.count(c__5673__auto___13123);
var G__13127 = (0);
seq__12346_13105 = G__13124;
chunk__12348_13106 = G__13125;
count__12349_13107 = G__13126;
i__12350_13108 = G__13127;
continue;
} else {
var child_13129 = cljs.core.first(seq__12346_13121__$1);
if(cljs.core.truth_(child_13129)){
node.appendChild(child_13129);


var G__13131 = cljs.core.next(seq__12346_13121__$1);
var G__13132 = null;
var G__13133 = (0);
var G__13134 = (0);
seq__12346_13105 = G__13131;
chunk__12348_13106 = G__13132;
count__12349_13107 = G__13133;
i__12350_13108 = G__13134;
continue;
} else {
var G__13136 = cljs.core.next(seq__12346_13121__$1);
var G__13137 = null;
var G__13138 = (0);
var G__13139 = (0);
seq__12346_13105 = G__13136;
chunk__12348_13106 = G__13137;
count__12349_13107 = G__13138;
i__12350_13108 = G__13139;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13104);
}
}


var G__13140 = seq__12239_13097;
var G__13141 = chunk__12241_13098;
var G__13142 = count__12242_13099;
var G__13143 = (i__12243_13100 + (1));
seq__12239_13097 = G__13140;
chunk__12241_13098 = G__13141;
count__12242_13099 = G__13142;
i__12243_13100 = G__13143;
continue;
} else {
var G__13144 = seq__12239_13097;
var G__13145 = chunk__12241_13098;
var G__13146 = count__12242_13099;
var G__13147 = (i__12243_13100 + (1));
seq__12239_13097 = G__13144;
chunk__12241_13098 = G__13145;
count__12242_13099 = G__13146;
i__12243_13100 = G__13147;
continue;
}
} else {
var temp__5825__auto___13149 = cljs.core.seq(seq__12239_13097);
if(temp__5825__auto___13149){
var seq__12239_13150__$1 = temp__5825__auto___13149;
if(cljs.core.chunked_seq_QMARK_(seq__12239_13150__$1)){
var c__5673__auto___13151 = cljs.core.chunk_first(seq__12239_13150__$1);
var G__13152 = cljs.core.chunk_rest(seq__12239_13150__$1);
var G__13153 = c__5673__auto___13151;
var G__13154 = cljs.core.count(c__5673__auto___13151);
var G__13155 = (0);
seq__12239_13097 = G__13152;
chunk__12241_13098 = G__13153;
count__12242_13099 = G__13154;
i__12243_13100 = G__13155;
continue;
} else {
var child_struct_13157 = cljs.core.first(seq__12239_13150__$1);
if((!((child_struct_13157 == null)))){
if(typeof child_struct_13157 === 'string'){
var text_13159 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13159)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13157)));
} else {
var children_13160 = shadow.dom.svg_node(child_struct_13157);
if(cljs.core.seq_QMARK_(children_13160)){
var seq__12397_13161 = cljs.core.seq(children_13160);
var chunk__12399_13162 = null;
var count__12400_13163 = (0);
var i__12401_13164 = (0);
while(true){
if((i__12401_13164 < count__12400_13163)){
var child_13165 = chunk__12399_13162.cljs$core$IIndexed$_nth$arity$2(null,i__12401_13164);
if(cljs.core.truth_(child_13165)){
node.appendChild(child_13165);


var G__13168 = seq__12397_13161;
var G__13169 = chunk__12399_13162;
var G__13170 = count__12400_13163;
var G__13171 = (i__12401_13164 + (1));
seq__12397_13161 = G__13168;
chunk__12399_13162 = G__13169;
count__12400_13163 = G__13170;
i__12401_13164 = G__13171;
continue;
} else {
var G__13172 = seq__12397_13161;
var G__13173 = chunk__12399_13162;
var G__13174 = count__12400_13163;
var G__13175 = (i__12401_13164 + (1));
seq__12397_13161 = G__13172;
chunk__12399_13162 = G__13173;
count__12400_13163 = G__13174;
i__12401_13164 = G__13175;
continue;
}
} else {
var temp__5825__auto___13176__$1 = cljs.core.seq(seq__12397_13161);
if(temp__5825__auto___13176__$1){
var seq__12397_13177__$1 = temp__5825__auto___13176__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12397_13177__$1)){
var c__5673__auto___13179 = cljs.core.chunk_first(seq__12397_13177__$1);
var G__13180 = cljs.core.chunk_rest(seq__12397_13177__$1);
var G__13181 = c__5673__auto___13179;
var G__13182 = cljs.core.count(c__5673__auto___13179);
var G__13183 = (0);
seq__12397_13161 = G__13180;
chunk__12399_13162 = G__13181;
count__12400_13163 = G__13182;
i__12401_13164 = G__13183;
continue;
} else {
var child_13184 = cljs.core.first(seq__12397_13177__$1);
if(cljs.core.truth_(child_13184)){
node.appendChild(child_13184);


var G__13186 = cljs.core.next(seq__12397_13177__$1);
var G__13187 = null;
var G__13188 = (0);
var G__13189 = (0);
seq__12397_13161 = G__13186;
chunk__12399_13162 = G__13187;
count__12400_13163 = G__13188;
i__12401_13164 = G__13189;
continue;
} else {
var G__13190 = cljs.core.next(seq__12397_13177__$1);
var G__13191 = null;
var G__13192 = (0);
var G__13193 = (0);
seq__12397_13161 = G__13190;
chunk__12399_13162 = G__13191;
count__12400_13163 = G__13192;
i__12401_13164 = G__13193;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13160);
}
}


var G__13195 = cljs.core.next(seq__12239_13150__$1);
var G__13196 = null;
var G__13198 = (0);
var G__13199 = (0);
seq__12239_13097 = G__13195;
chunk__12241_13098 = G__13196;
count__12242_13099 = G__13198;
i__12243_13100 = G__13199;
continue;
} else {
var G__13200 = cljs.core.next(seq__12239_13150__$1);
var G__13201 = null;
var G__13202 = (0);
var G__13203 = (0);
seq__12239_13097 = G__13200;
chunk__12241_13098 = G__13201;
count__12242_13099 = G__13202;
i__12243_13100 = G__13203;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___13210 = arguments.length;
var i__5877__auto___13211 = (0);
while(true){
if((i__5877__auto___13211 < len__5876__auto___13210)){
args__5882__auto__.push((arguments[i__5877__auto___13211]));

var G__13214 = (i__5877__auto___13211 + (1));
i__5877__auto___13211 = G__13214;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12478){
var G__12480 = cljs.core.first(seq12478);
var seq12478__$1 = cljs.core.next(seq12478);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12480,seq12478__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
