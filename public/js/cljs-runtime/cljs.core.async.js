goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14401 = (function (f,blockable,meta14402){
this.f = f;
this.blockable = blockable;
this.meta14402 = meta14402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14403,meta14402__$1){
var self__ = this;
var _14403__$1 = this;
return (new cljs.core.async.t_cljs$core$async14401(self__.f,self__.blockable,meta14402__$1));
}));

(cljs.core.async.t_cljs$core$async14401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14403){
var self__ = this;
var _14403__$1 = this;
return self__.meta14402;
}));

(cljs.core.async.t_cljs$core$async14401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14402","meta14402",-560515445,null)], null);
}));

(cljs.core.async.t_cljs$core$async14401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14401");

(cljs.core.async.t_cljs$core$async14401.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14401.
 */
cljs.core.async.__GT_t_cljs$core$async14401 = (function cljs$core$async$__GT_t_cljs$core$async14401(f,blockable,meta14402){
return (new cljs.core.async.t_cljs$core$async14401(f,blockable,meta14402));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14397 = arguments.length;
switch (G__14397) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14401(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14417 = arguments.length;
switch (G__14417) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14422 = arguments.length;
switch (G__14422) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14424 = arguments.length;
switch (G__14424) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17489 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17489) : fn1.call(null,val_17489));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17489) : fn1.call(null,val_17489));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14427 = arguments.length;
switch (G__14427) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___17499 = n;
var x_17500 = (0);
while(true){
if((x_17500 < n__5741__auto___17499)){
(a[x_17500] = x_17500);

var G__17501 = (x_17500 + (1));
x_17500 = G__17501;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14437 = (function (flag,meta14438){
this.flag = flag;
this.meta14438 = meta14438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14439,meta14438__$1){
var self__ = this;
var _14439__$1 = this;
return (new cljs.core.async.t_cljs$core$async14437(self__.flag,meta14438__$1));
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14439){
var self__ = this;
var _14439__$1 = this;
return self__.meta14438;
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14438","meta14438",-1544687244,null)], null);
}));

(cljs.core.async.t_cljs$core$async14437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14437");

(cljs.core.async.t_cljs$core$async14437.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14437.
 */
cljs.core.async.__GT_t_cljs$core$async14437 = (function cljs$core$async$__GT_t_cljs$core$async14437(flag,meta14438){
return (new cljs.core.async.t_cljs$core$async14437(flag,meta14438));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14437(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14448 = (function (flag,cb,meta14449){
this.flag = flag;
this.cb = cb;
this.meta14449 = meta14449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14450,meta14449__$1){
var self__ = this;
var _14450__$1 = this;
return (new cljs.core.async.t_cljs$core$async14448(self__.flag,self__.cb,meta14449__$1));
}));

(cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14450){
var self__ = this;
var _14450__$1 = this;
return self__.meta14449;
}));

(cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14448.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14449","meta14449",776320280,null)], null);
}));

(cljs.core.async.t_cljs$core$async14448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14448");

(cljs.core.async.t_cljs$core$async14448.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14448.
 */
cljs.core.async.__GT_t_cljs$core$async14448 = (function cljs$core$async$__GT_t_cljs$core$async14448(flag,cb,meta14449){
return (new cljs.core.async.t_cljs$core$async14448(flag,cb,meta14449));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14448(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_17506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_17506)){
if((!(((port_17506.cljs$core$IFn$_invoke$arity$1 ? port_17506.cljs$core$IFn$_invoke$arity$1((1)) : port_17506.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__17508 = (i + (1));
i = G__17508;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14466_SHARP_){
var G__14480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14466_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14480) : fret.call(null,G__14480));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14467_SHARP_){
var G__14482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14467_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14482) : fret.call(null,G__14482));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17514 = (i + (1));
i = G__17514;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17518 = arguments.length;
var i__5877__auto___17519 = (0);
while(true){
if((i__5877__auto___17519 < len__5876__auto___17518)){
args__5882__auto__.push((arguments[i__5877__auto___17519]));

var G__17520 = (i__5877__auto___17519 + (1));
i__5877__auto___17519 = G__17520;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14491){
var map__14492 = p__14491;
var map__14492__$1 = cljs.core.__destructure_map(map__14492);
var opts = map__14492__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14487){
var G__14488 = cljs.core.first(seq14487);
var seq14487__$1 = cljs.core.next(seq14487);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14488,seq14487__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14505 = arguments.length;
switch (G__14505) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14335__auto___17522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_14545){
var state_val_14546 = (state_14545[(1)]);
if((state_val_14546 === (7))){
var inst_14537 = (state_14545[(2)]);
var state_14545__$1 = state_14545;
var statearr_14554_17523 = state_14545__$1;
(statearr_14554_17523[(2)] = inst_14537);

(statearr_14554_17523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (1))){
var state_14545__$1 = state_14545;
var statearr_14558_17524 = state_14545__$1;
(statearr_14558_17524[(2)] = null);

(statearr_14558_17524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (4))){
var inst_14516 = (state_14545[(7)]);
var inst_14516__$1 = (state_14545[(2)]);
var inst_14521 = (inst_14516__$1 == null);
var state_14545__$1 = (function (){var statearr_14569 = state_14545;
(statearr_14569[(7)] = inst_14516__$1);

return statearr_14569;
})();
if(cljs.core.truth_(inst_14521)){
var statearr_14571_17525 = state_14545__$1;
(statearr_14571_17525[(1)] = (5));

} else {
var statearr_14573_17533 = state_14545__$1;
(statearr_14573_17533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (13))){
var state_14545__$1 = state_14545;
var statearr_14576_17543 = state_14545__$1;
(statearr_14576_17543[(2)] = null);

(statearr_14576_17543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (6))){
var inst_14516 = (state_14545[(7)]);
var state_14545__$1 = state_14545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14545__$1,(11),to,inst_14516);
} else {
if((state_val_14546 === (3))){
var inst_14540 = (state_14545[(2)]);
var state_14545__$1 = state_14545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14545__$1,inst_14540);
} else {
if((state_val_14546 === (12))){
var state_14545__$1 = state_14545;
var statearr_14583_17552 = state_14545__$1;
(statearr_14583_17552[(2)] = null);

(statearr_14583_17552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (2))){
var state_14545__$1 = state_14545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14545__$1,(4),from);
} else {
if((state_val_14546 === (11))){
var inst_14530 = (state_14545[(2)]);
var state_14545__$1 = state_14545;
if(cljs.core.truth_(inst_14530)){
var statearr_14587_17555 = state_14545__$1;
(statearr_14587_17555[(1)] = (12));

} else {
var statearr_14588_17556 = state_14545__$1;
(statearr_14588_17556[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (9))){
var state_14545__$1 = state_14545;
var statearr_14592_17557 = state_14545__$1;
(statearr_14592_17557[(2)] = null);

(statearr_14592_17557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (5))){
var state_14545__$1 = state_14545;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14593_17559 = state_14545__$1;
(statearr_14593_17559[(1)] = (8));

} else {
var statearr_14594_17560 = state_14545__$1;
(statearr_14594_17560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (14))){
var inst_14535 = (state_14545[(2)]);
var state_14545__$1 = state_14545;
var statearr_14600_17566 = state_14545__$1;
(statearr_14600_17566[(2)] = inst_14535);

(statearr_14600_17566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (10))){
var inst_14527 = (state_14545[(2)]);
var state_14545__$1 = state_14545;
var statearr_14602_17570 = state_14545__$1;
(statearr_14602_17570[(2)] = inst_14527);

(statearr_14602_17570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14546 === (8))){
var inst_14524 = cljs.core.async.close_BANG_(to);
var state_14545__$1 = state_14545;
var statearr_14604_17572 = state_14545__$1;
(statearr_14604_17572[(2)] = inst_14524);

(statearr_14604_17572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_14616 = [null,null,null,null,null,null,null,null];
(statearr_14616[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_14616[(1)] = (1));

return statearr_14616;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_14545){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_14545);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e14622){var ex__14145__auto__ = e14622;
var statearr_14623_17587 = state_14545;
(statearr_14623_17587[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_14545[(4)]))){
var statearr_14624_17589 = state_14545;
(statearr_14624_17589[(1)] = cljs.core.first((state_14545[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17590 = state_14545;
state_14545 = G__17590;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_14545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_14545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_14628 = f__14336__auto__();
(statearr_14628[(6)] = c__14335__auto___17522);

return statearr_14628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14638){
var vec__14639 = p__14638;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14639,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14639,(1),null);
var job = vec__14639;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14335__auto___17593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_14648){
var state_val_14649 = (state_14648[(1)]);
if((state_val_14649 === (1))){
var state_14648__$1 = state_14648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14648__$1,(2),res,v);
} else {
if((state_val_14649 === (2))){
var inst_14645 = (state_14648[(2)]);
var inst_14646 = cljs.core.async.close_BANG_(res);
var state_14648__$1 = (function (){var statearr_14652 = state_14648;
(statearr_14652[(7)] = inst_14645);

return statearr_14652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14648__$1,inst_14646);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0 = (function (){
var statearr_14656 = [null,null,null,null,null,null,null,null];
(statearr_14656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__);

(statearr_14656[(1)] = (1));

return statearr_14656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1 = (function (state_14648){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_14648);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e14658){var ex__14145__auto__ = e14658;
var statearr_14659_17595 = state_14648;
(statearr_14659_17595[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_14648[(4)]))){
var statearr_14663_17596 = state_14648;
(statearr_14663_17596[(1)] = cljs.core.first((state_14648[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17597 = state_14648;
state_14648 = G__17597;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = function(state_14648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1.call(this,state_14648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_14669 = f__14336__auto__();
(statearr_14669[(6)] = c__14335__auto___17593);

return statearr_14669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14674){
var vec__14675 = p__14674;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14675,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14675,(1),null);
var job = vec__14675;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___17603 = n;
var __17604 = (0);
while(true){
if((__17604 < n__5741__auto___17603)){
var G__14678_17605 = type;
var G__14678_17606__$1 = (((G__14678_17605 instanceof cljs.core.Keyword))?G__14678_17605.fqn:null);
switch (G__14678_17606__$1) {
case "compute":
var c__14335__auto___17608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17604,c__14335__auto___17608,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async){
return (function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = ((function (__17604,c__14335__auto___17608,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async){
return (function (state_14691){
var state_val_14692 = (state_14691[(1)]);
if((state_val_14692 === (1))){
var state_14691__$1 = state_14691;
var statearr_14693_17610 = state_14691__$1;
(statearr_14693_17610[(2)] = null);

(statearr_14693_17610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (2))){
var state_14691__$1 = state_14691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14691__$1,(4),jobs);
} else {
if((state_val_14692 === (3))){
var inst_14689 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14691__$1,inst_14689);
} else {
if((state_val_14692 === (4))){
var inst_14681 = (state_14691[(2)]);
var inst_14682 = process__$1(inst_14681);
var state_14691__$1 = state_14691;
if(cljs.core.truth_(inst_14682)){
var statearr_14694_17625 = state_14691__$1;
(statearr_14694_17625[(1)] = (5));

} else {
var statearr_14695_17626 = state_14691__$1;
(statearr_14695_17626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (5))){
var state_14691__$1 = state_14691;
var statearr_14696_17627 = state_14691__$1;
(statearr_14696_17627[(2)] = null);

(statearr_14696_17627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (6))){
var state_14691__$1 = state_14691;
var statearr_14697_17628 = state_14691__$1;
(statearr_14697_17628[(2)] = null);

(statearr_14697_17628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (7))){
var inst_14687 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14698_17629 = state_14691__$1;
(statearr_14698_17629[(2)] = inst_14687);

(statearr_14698_17629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17604,c__14335__auto___17608,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async))
;
return ((function (__17604,switch__14141__auto__,c__14335__auto___17608,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0 = (function (){
var statearr_14699 = [null,null,null,null,null,null,null];
(statearr_14699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__);

(statearr_14699[(1)] = (1));

return statearr_14699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1 = (function (state_14691){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_14691);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e14700){var ex__14145__auto__ = e14700;
var statearr_14701_17633 = state_14691;
(statearr_14701_17633[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_14691[(4)]))){
var statearr_14702_17634 = state_14691;
(statearr_14702_17634[(1)] = cljs.core.first((state_14691[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17636 = state_14691;
state_14691 = G__17636;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = function(state_14691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1.call(this,state_14691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__;
})()
;})(__17604,switch__14141__auto__,c__14335__auto___17608,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async))
})();
var state__14337__auto__ = (function (){var statearr_14703 = f__14336__auto__();
(statearr_14703[(6)] = c__14335__auto___17608);

return statearr_14703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
});})(__17604,c__14335__auto___17608,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async))
);


break;
case "async":
var c__14335__auto___17640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17604,c__14335__auto___17640,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async){
return (function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = ((function (__17604,c__14335__auto___17640,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async){
return (function (state_14716){
var state_val_14717 = (state_14716[(1)]);
if((state_val_14717 === (1))){
var state_14716__$1 = state_14716;
var statearr_14718_17646 = state_14716__$1;
(statearr_14718_17646[(2)] = null);

(statearr_14718_17646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14717 === (2))){
var state_14716__$1 = state_14716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14716__$1,(4),jobs);
} else {
if((state_val_14717 === (3))){
var inst_14714 = (state_14716[(2)]);
var state_14716__$1 = state_14716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14716__$1,inst_14714);
} else {
if((state_val_14717 === (4))){
var inst_14706 = (state_14716[(2)]);
var inst_14707 = async(inst_14706);
var state_14716__$1 = state_14716;
if(cljs.core.truth_(inst_14707)){
var statearr_14719_17650 = state_14716__$1;
(statearr_14719_17650[(1)] = (5));

} else {
var statearr_14720_17651 = state_14716__$1;
(statearr_14720_17651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14717 === (5))){
var state_14716__$1 = state_14716;
var statearr_14721_17652 = state_14716__$1;
(statearr_14721_17652[(2)] = null);

(statearr_14721_17652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14717 === (6))){
var state_14716__$1 = state_14716;
var statearr_14722_17654 = state_14716__$1;
(statearr_14722_17654[(2)] = null);

(statearr_14722_17654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14717 === (7))){
var inst_14712 = (state_14716[(2)]);
var state_14716__$1 = state_14716;
var statearr_14723_17655 = state_14716__$1;
(statearr_14723_17655[(2)] = inst_14712);

(statearr_14723_17655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17604,c__14335__auto___17640,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async))
;
return ((function (__17604,switch__14141__auto__,c__14335__auto___17640,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0 = (function (){
var statearr_14724 = [null,null,null,null,null,null,null];
(statearr_14724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__);

(statearr_14724[(1)] = (1));

return statearr_14724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1 = (function (state_14716){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_14716);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e14725){var ex__14145__auto__ = e14725;
var statearr_14726_17656 = state_14716;
(statearr_14726_17656[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_14716[(4)]))){
var statearr_14727_17657 = state_14716;
(statearr_14727_17657[(1)] = cljs.core.first((state_14716[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17658 = state_14716;
state_14716 = G__17658;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = function(state_14716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1.call(this,state_14716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__;
})()
;})(__17604,switch__14141__auto__,c__14335__auto___17640,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async))
})();
var state__14337__auto__ = (function (){var statearr_14728 = f__14336__auto__();
(statearr_14728[(6)] = c__14335__auto___17640);

return statearr_14728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
});})(__17604,c__14335__auto___17640,G__14678_17605,G__14678_17606__$1,n__5741__auto___17603,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14678_17606__$1))));

}

var G__17659 = (__17604 + (1));
__17604 = G__17659;
continue;
} else {
}
break;
}

var c__14335__auto___17660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_14751){
var state_val_14752 = (state_14751[(1)]);
if((state_val_14752 === (7))){
var inst_14747 = (state_14751[(2)]);
var state_14751__$1 = state_14751;
var statearr_14754_17661 = state_14751__$1;
(statearr_14754_17661[(2)] = inst_14747);

(statearr_14754_17661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14752 === (1))){
var state_14751__$1 = state_14751;
var statearr_14755_17662 = state_14751__$1;
(statearr_14755_17662[(2)] = null);

(statearr_14755_17662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14752 === (4))){
var inst_14731 = (state_14751[(7)]);
var inst_14731__$1 = (state_14751[(2)]);
var inst_14732 = (inst_14731__$1 == null);
var state_14751__$1 = (function (){var statearr_14756 = state_14751;
(statearr_14756[(7)] = inst_14731__$1);

return statearr_14756;
})();
if(cljs.core.truth_(inst_14732)){
var statearr_14757_17663 = state_14751__$1;
(statearr_14757_17663[(1)] = (5));

} else {
var statearr_14758_17664 = state_14751__$1;
(statearr_14758_17664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14752 === (6))){
var inst_14731 = (state_14751[(7)]);
var inst_14736 = (state_14751[(8)]);
var inst_14736__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14738 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14739 = [inst_14731,inst_14736__$1];
var inst_14740 = (new cljs.core.PersistentVector(null,2,(5),inst_14738,inst_14739,null));
var state_14751__$1 = (function (){var statearr_14759 = state_14751;
(statearr_14759[(8)] = inst_14736__$1);

return statearr_14759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14751__$1,(8),jobs,inst_14740);
} else {
if((state_val_14752 === (3))){
var inst_14749 = (state_14751[(2)]);
var state_14751__$1 = state_14751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14751__$1,inst_14749);
} else {
if((state_val_14752 === (2))){
var state_14751__$1 = state_14751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14751__$1,(4),from);
} else {
if((state_val_14752 === (9))){
var inst_14744 = (state_14751[(2)]);
var state_14751__$1 = (function (){var statearr_14778 = state_14751;
(statearr_14778[(9)] = inst_14744);

return statearr_14778;
})();
var statearr_14780_17681 = state_14751__$1;
(statearr_14780_17681[(2)] = null);

(statearr_14780_17681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14752 === (5))){
var inst_14734 = cljs.core.async.close_BANG_(jobs);
var state_14751__$1 = state_14751;
var statearr_14785_17683 = state_14751__$1;
(statearr_14785_17683[(2)] = inst_14734);

(statearr_14785_17683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14752 === (8))){
var inst_14736 = (state_14751[(8)]);
var inst_14742 = (state_14751[(2)]);
var state_14751__$1 = (function (){var statearr_14786 = state_14751;
(statearr_14786[(10)] = inst_14742);

return statearr_14786;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14751__$1,(9),results,inst_14736);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0 = (function (){
var statearr_14787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__);

(statearr_14787[(1)] = (1));

return statearr_14787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1 = (function (state_14751){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_14751);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e14788){var ex__14145__auto__ = e14788;
var statearr_14789_17704 = state_14751;
(statearr_14789_17704[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_14751[(4)]))){
var statearr_14790_17705 = state_14751;
(statearr_14790_17705[(1)] = cljs.core.first((state_14751[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17706 = state_14751;
state_14751 = G__17706;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = function(state_14751){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1.call(this,state_14751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_14791 = f__14336__auto__();
(statearr_14791[(6)] = c__14335__auto___17660);

return statearr_14791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


var c__14335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_14830){
var state_val_14831 = (state_14830[(1)]);
if((state_val_14831 === (7))){
var inst_14826 = (state_14830[(2)]);
var state_14830__$1 = state_14830;
var statearr_14834_17709 = state_14830__$1;
(statearr_14834_17709[(2)] = inst_14826);

(statearr_14834_17709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (20))){
var state_14830__$1 = state_14830;
var statearr_14835_17715 = state_14830__$1;
(statearr_14835_17715[(2)] = null);

(statearr_14835_17715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (1))){
var state_14830__$1 = state_14830;
var statearr_14836_17716 = state_14830__$1;
(statearr_14836_17716[(2)] = null);

(statearr_14836_17716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (4))){
var inst_14794 = (state_14830[(7)]);
var inst_14794__$1 = (state_14830[(2)]);
var inst_14795 = (inst_14794__$1 == null);
var state_14830__$1 = (function (){var statearr_14837 = state_14830;
(statearr_14837[(7)] = inst_14794__$1);

return statearr_14837;
})();
if(cljs.core.truth_(inst_14795)){
var statearr_14838_17717 = state_14830__$1;
(statearr_14838_17717[(1)] = (5));

} else {
var statearr_14839_17718 = state_14830__$1;
(statearr_14839_17718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (15))){
var inst_14808 = (state_14830[(8)]);
var state_14830__$1 = state_14830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14830__$1,(18),to,inst_14808);
} else {
if((state_val_14831 === (21))){
var inst_14821 = (state_14830[(2)]);
var state_14830__$1 = state_14830;
var statearr_14840_17719 = state_14830__$1;
(statearr_14840_17719[(2)] = inst_14821);

(statearr_14840_17719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (13))){
var inst_14823 = (state_14830[(2)]);
var state_14830__$1 = (function (){var statearr_14841 = state_14830;
(statearr_14841[(9)] = inst_14823);

return statearr_14841;
})();
var statearr_14842_17720 = state_14830__$1;
(statearr_14842_17720[(2)] = null);

(statearr_14842_17720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (6))){
var inst_14794 = (state_14830[(7)]);
var state_14830__$1 = state_14830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14830__$1,(11),inst_14794);
} else {
if((state_val_14831 === (17))){
var inst_14816 = (state_14830[(2)]);
var state_14830__$1 = state_14830;
if(cljs.core.truth_(inst_14816)){
var statearr_14853_17722 = state_14830__$1;
(statearr_14853_17722[(1)] = (19));

} else {
var statearr_14855_17723 = state_14830__$1;
(statearr_14855_17723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (3))){
var inst_14828 = (state_14830[(2)]);
var state_14830__$1 = state_14830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14830__$1,inst_14828);
} else {
if((state_val_14831 === (12))){
var inst_14804 = (state_14830[(10)]);
var state_14830__$1 = state_14830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14830__$1,(14),inst_14804);
} else {
if((state_val_14831 === (2))){
var state_14830__$1 = state_14830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14830__$1,(4),results);
} else {
if((state_val_14831 === (19))){
var state_14830__$1 = state_14830;
var statearr_14866_17724 = state_14830__$1;
(statearr_14866_17724[(2)] = null);

(statearr_14866_17724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (11))){
var inst_14804 = (state_14830[(2)]);
var state_14830__$1 = (function (){var statearr_14867 = state_14830;
(statearr_14867[(10)] = inst_14804);

return statearr_14867;
})();
var statearr_14868_17725 = state_14830__$1;
(statearr_14868_17725[(2)] = null);

(statearr_14868_17725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (9))){
var state_14830__$1 = state_14830;
var statearr_14869_17728 = state_14830__$1;
(statearr_14869_17728[(2)] = null);

(statearr_14869_17728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (5))){
var state_14830__$1 = state_14830;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14874_17731 = state_14830__$1;
(statearr_14874_17731[(1)] = (8));

} else {
var statearr_14875_17732 = state_14830__$1;
(statearr_14875_17732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (14))){
var inst_14808 = (state_14830[(8)]);
var inst_14810 = (state_14830[(11)]);
var inst_14808__$1 = (state_14830[(2)]);
var inst_14809 = (inst_14808__$1 == null);
var inst_14810__$1 = cljs.core.not(inst_14809);
var state_14830__$1 = (function (){var statearr_14884 = state_14830;
(statearr_14884[(8)] = inst_14808__$1);

(statearr_14884[(11)] = inst_14810__$1);

return statearr_14884;
})();
if(inst_14810__$1){
var statearr_14890_17737 = state_14830__$1;
(statearr_14890_17737[(1)] = (15));

} else {
var statearr_14895_17738 = state_14830__$1;
(statearr_14895_17738[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (16))){
var inst_14810 = (state_14830[(11)]);
var state_14830__$1 = state_14830;
var statearr_14896_17739 = state_14830__$1;
(statearr_14896_17739[(2)] = inst_14810);

(statearr_14896_17739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (10))){
var inst_14801 = (state_14830[(2)]);
var state_14830__$1 = state_14830;
var statearr_14901_17742 = state_14830__$1;
(statearr_14901_17742[(2)] = inst_14801);

(statearr_14901_17742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (18))){
var inst_14813 = (state_14830[(2)]);
var state_14830__$1 = state_14830;
var statearr_14910_17743 = state_14830__$1;
(statearr_14910_17743[(2)] = inst_14813);

(statearr_14910_17743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (8))){
var inst_14798 = cljs.core.async.close_BANG_(to);
var state_14830__$1 = state_14830;
var statearr_14920_17745 = state_14830__$1;
(statearr_14920_17745[(2)] = inst_14798);

(statearr_14920_17745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0 = (function (){
var statearr_14921 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__);

(statearr_14921[(1)] = (1));

return statearr_14921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1 = (function (state_14830){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_14830);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e14922){var ex__14145__auto__ = e14922;
var statearr_14923_17756 = state_14830;
(statearr_14923_17756[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_14830[(4)]))){
var statearr_14924_17760 = state_14830;
(statearr_14924_17760[(1)] = cljs.core.first((state_14830[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17762 = state_14830;
state_14830 = G__17762;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__ = function(state_14830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1.call(this,state_14830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_14926 = f__14336__auto__();
(statearr_14926[(6)] = c__14335__auto__);

return statearr_14926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));

return c__14335__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14928 = arguments.length;
switch (G__14928) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14930 = arguments.length;
switch (G__14930) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14954 = arguments.length;
switch (G__14954) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14335__auto___17803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_14988){
var state_val_14989 = (state_14988[(1)]);
if((state_val_14989 === (7))){
var inst_14984 = (state_14988[(2)]);
var state_14988__$1 = state_14988;
var statearr_14995_17804 = state_14988__$1;
(statearr_14995_17804[(2)] = inst_14984);

(statearr_14995_17804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (1))){
var state_14988__$1 = state_14988;
var statearr_14996_17808 = state_14988__$1;
(statearr_14996_17808[(2)] = null);

(statearr_14996_17808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (4))){
var inst_14961 = (state_14988[(7)]);
var inst_14961__$1 = (state_14988[(2)]);
var inst_14964 = (inst_14961__$1 == null);
var state_14988__$1 = (function (){var statearr_14998 = state_14988;
(statearr_14998[(7)] = inst_14961__$1);

return statearr_14998;
})();
if(cljs.core.truth_(inst_14964)){
var statearr_14999_17811 = state_14988__$1;
(statearr_14999_17811[(1)] = (5));

} else {
var statearr_15002_17813 = state_14988__$1;
(statearr_15002_17813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (13))){
var state_14988__$1 = state_14988;
var statearr_15005_17816 = state_14988__$1;
(statearr_15005_17816[(2)] = null);

(statearr_15005_17816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (6))){
var inst_14961 = (state_14988[(7)]);
var inst_14971 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14961) : p.call(null,inst_14961));
var state_14988__$1 = state_14988;
if(cljs.core.truth_(inst_14971)){
var statearr_15007_17819 = state_14988__$1;
(statearr_15007_17819[(1)] = (9));

} else {
var statearr_15008_17820 = state_14988__$1;
(statearr_15008_17820[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (3))){
var inst_14986 = (state_14988[(2)]);
var state_14988__$1 = state_14988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14988__$1,inst_14986);
} else {
if((state_val_14989 === (12))){
var state_14988__$1 = state_14988;
var statearr_15010_17824 = state_14988__$1;
(statearr_15010_17824[(2)] = null);

(statearr_15010_17824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (2))){
var state_14988__$1 = state_14988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14988__$1,(4),ch);
} else {
if((state_val_14989 === (11))){
var inst_14961 = (state_14988[(7)]);
var inst_14975 = (state_14988[(2)]);
var state_14988__$1 = state_14988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14988__$1,(8),inst_14975,inst_14961);
} else {
if((state_val_14989 === (9))){
var state_14988__$1 = state_14988;
var statearr_15016_17828 = state_14988__$1;
(statearr_15016_17828[(2)] = tc);

(statearr_15016_17828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (5))){
var inst_14966 = cljs.core.async.close_BANG_(tc);
var inst_14967 = cljs.core.async.close_BANG_(fc);
var state_14988__$1 = (function (){var statearr_15017 = state_14988;
(statearr_15017[(8)] = inst_14966);

return statearr_15017;
})();
var statearr_15018_17829 = state_14988__$1;
(statearr_15018_17829[(2)] = inst_14967);

(statearr_15018_17829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (14))){
var inst_14982 = (state_14988[(2)]);
var state_14988__$1 = state_14988;
var statearr_15022_17830 = state_14988__$1;
(statearr_15022_17830[(2)] = inst_14982);

(statearr_15022_17830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (10))){
var state_14988__$1 = state_14988;
var statearr_15024_17833 = state_14988__$1;
(statearr_15024_17833[(2)] = fc);

(statearr_15024_17833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14989 === (8))){
var inst_14977 = (state_14988[(2)]);
var state_14988__$1 = state_14988;
if(cljs.core.truth_(inst_14977)){
var statearr_15025_17834 = state_14988__$1;
(statearr_15025_17834[(1)] = (12));

} else {
var statearr_15026_17835 = state_14988__$1;
(statearr_15026_17835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_15031 = [null,null,null,null,null,null,null,null,null];
(statearr_15031[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_15031[(1)] = (1));

return statearr_15031;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_14988){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_14988);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e15035){var ex__14145__auto__ = e15035;
var statearr_15036_17839 = state_14988;
(statearr_15036_17839[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_14988[(4)]))){
var statearr_15038_17840 = state_14988;
(statearr_15038_17840[(1)] = cljs.core.first((state_14988[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17842 = state_14988;
state_14988 = G__17842;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_14988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_14988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_15040 = f__14336__auto__();
(statearr_15040[(6)] = c__14335__auto___17803);

return statearr_15040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_15071){
var state_val_15072 = (state_15071[(1)]);
if((state_val_15072 === (7))){
var inst_15063 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15075_17848 = state_15071__$1;
(statearr_15075_17848[(2)] = inst_15063);

(statearr_15075_17848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (1))){
var inst_15046 = init;
var inst_15047 = inst_15046;
var state_15071__$1 = (function (){var statearr_15078 = state_15071;
(statearr_15078[(7)] = inst_15047);

return statearr_15078;
})();
var statearr_15080_17852 = state_15071__$1;
(statearr_15080_17852[(2)] = null);

(statearr_15080_17852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (4))){
var inst_15050 = (state_15071[(8)]);
var inst_15050__$1 = (state_15071[(2)]);
var inst_15051 = (inst_15050__$1 == null);
var state_15071__$1 = (function (){var statearr_15090 = state_15071;
(statearr_15090[(8)] = inst_15050__$1);

return statearr_15090;
})();
if(cljs.core.truth_(inst_15051)){
var statearr_15091_17856 = state_15071__$1;
(statearr_15091_17856[(1)] = (5));

} else {
var statearr_15093_17857 = state_15071__$1;
(statearr_15093_17857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (6))){
var inst_15047 = (state_15071[(7)]);
var inst_15050 = (state_15071[(8)]);
var inst_15054 = (state_15071[(9)]);
var inst_15054__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15047,inst_15050) : f.call(null,inst_15047,inst_15050));
var inst_15055 = cljs.core.reduced_QMARK_(inst_15054__$1);
var state_15071__$1 = (function (){var statearr_15096 = state_15071;
(statearr_15096[(9)] = inst_15054__$1);

return statearr_15096;
})();
if(inst_15055){
var statearr_15099_17858 = state_15071__$1;
(statearr_15099_17858[(1)] = (8));

} else {
var statearr_15100_17860 = state_15071__$1;
(statearr_15100_17860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (3))){
var inst_15066 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15071__$1,inst_15066);
} else {
if((state_val_15072 === (2))){
var state_15071__$1 = state_15071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15071__$1,(4),ch);
} else {
if((state_val_15072 === (9))){
var inst_15054 = (state_15071[(9)]);
var inst_15047 = inst_15054;
var state_15071__$1 = (function (){var statearr_15108 = state_15071;
(statearr_15108[(7)] = inst_15047);

return statearr_15108;
})();
var statearr_15111_17872 = state_15071__$1;
(statearr_15111_17872[(2)] = null);

(statearr_15111_17872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (5))){
var inst_15047 = (state_15071[(7)]);
var state_15071__$1 = state_15071;
var statearr_15112_17873 = state_15071__$1;
(statearr_15112_17873[(2)] = inst_15047);

(statearr_15112_17873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (10))){
var inst_15061 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15113_17875 = state_15071__$1;
(statearr_15113_17875[(2)] = inst_15061);

(statearr_15113_17875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (8))){
var inst_15054 = (state_15071[(9)]);
var inst_15057 = cljs.core.deref(inst_15054);
var state_15071__$1 = state_15071;
var statearr_15119_17877 = state_15071__$1;
(statearr_15119_17877[(2)] = inst_15057);

(statearr_15119_17877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14142__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14142__auto____0 = (function (){
var statearr_15122 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15122[(0)] = cljs$core$async$reduce_$_state_machine__14142__auto__);

(statearr_15122[(1)] = (1));

return statearr_15122;
});
var cljs$core$async$reduce_$_state_machine__14142__auto____1 = (function (state_15071){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_15071);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e15123){var ex__14145__auto__ = e15123;
var statearr_15125_17879 = state_15071;
(statearr_15125_17879[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_15071[(4)]))){
var statearr_15128_17880 = state_15071;
(statearr_15128_17880[(1)] = cljs.core.first((state_15071[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17881 = state_15071;
state_15071 = G__17881;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14142__auto__ = function(state_15071){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14142__auto____1.call(this,state_15071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14142__auto____0;
cljs$core$async$reduce_$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14142__auto____1;
return cljs$core$async$reduce_$_state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_15130 = f__14336__auto__();
(statearr_15130[(6)] = c__14335__auto__);

return statearr_15130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));

return c__14335__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_15140){
var state_val_15141 = (state_15140[(1)]);
if((state_val_15141 === (1))){
var inst_15135 = cljs.core.async.reduce(f__$1,init,ch);
var state_15140__$1 = state_15140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15140__$1,(2),inst_15135);
} else {
if((state_val_15141 === (2))){
var inst_15137 = (state_15140[(2)]);
var inst_15138 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15137) : f__$1.call(null,inst_15137));
var state_15140__$1 = state_15140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15140__$1,inst_15138);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14142__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14142__auto____0 = (function (){
var statearr_15146 = [null,null,null,null,null,null,null];
(statearr_15146[(0)] = cljs$core$async$transduce_$_state_machine__14142__auto__);

(statearr_15146[(1)] = (1));

return statearr_15146;
});
var cljs$core$async$transduce_$_state_machine__14142__auto____1 = (function (state_15140){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_15140);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e15147){var ex__14145__auto__ = e15147;
var statearr_15148_17884 = state_15140;
(statearr_15148_17884[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_15140[(4)]))){
var statearr_15149_17885 = state_15140;
(statearr_15149_17885[(1)] = cljs.core.first((state_15140[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17886 = state_15140;
state_15140 = G__17886;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14142__auto__ = function(state_15140){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14142__auto____1.call(this,state_15140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14142__auto____0;
cljs$core$async$transduce_$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14142__auto____1;
return cljs$core$async$transduce_$_state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_15151 = f__14336__auto__();
(statearr_15151[(6)] = c__14335__auto__);

return statearr_15151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));

return c__14335__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15156 = arguments.length;
switch (G__15156) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_15185){
var state_val_15186 = (state_15185[(1)]);
if((state_val_15186 === (7))){
var inst_15167 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15187_17895 = state_15185__$1;
(statearr_15187_17895[(2)] = inst_15167);

(statearr_15187_17895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (1))){
var inst_15161 = cljs.core.seq(coll);
var inst_15162 = inst_15161;
var state_15185__$1 = (function (){var statearr_15188 = state_15185;
(statearr_15188[(7)] = inst_15162);

return statearr_15188;
})();
var statearr_15189_17902 = state_15185__$1;
(statearr_15189_17902[(2)] = null);

(statearr_15189_17902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (4))){
var inst_15162 = (state_15185[(7)]);
var inst_15165 = cljs.core.first(inst_15162);
var state_15185__$1 = state_15185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15185__$1,(7),ch,inst_15165);
} else {
if((state_val_15186 === (13))){
var inst_15179 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15195_17903 = state_15185__$1;
(statearr_15195_17903[(2)] = inst_15179);

(statearr_15195_17903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (6))){
var inst_15170 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
if(cljs.core.truth_(inst_15170)){
var statearr_15196_17904 = state_15185__$1;
(statearr_15196_17904[(1)] = (8));

} else {
var statearr_15198_17905 = state_15185__$1;
(statearr_15198_17905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (3))){
var inst_15183 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15185__$1,inst_15183);
} else {
if((state_val_15186 === (12))){
var state_15185__$1 = state_15185;
var statearr_15204_17906 = state_15185__$1;
(statearr_15204_17906[(2)] = null);

(statearr_15204_17906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (2))){
var inst_15162 = (state_15185[(7)]);
var state_15185__$1 = state_15185;
if(cljs.core.truth_(inst_15162)){
var statearr_15205_17907 = state_15185__$1;
(statearr_15205_17907[(1)] = (4));

} else {
var statearr_15206_17908 = state_15185__$1;
(statearr_15206_17908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (11))){
var inst_15176 = cljs.core.async.close_BANG_(ch);
var state_15185__$1 = state_15185;
var statearr_15212_17910 = state_15185__$1;
(statearr_15212_17910[(2)] = inst_15176);

(statearr_15212_17910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (9))){
var state_15185__$1 = state_15185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15213_17912 = state_15185__$1;
(statearr_15213_17912[(1)] = (11));

} else {
var statearr_15214_17913 = state_15185__$1;
(statearr_15214_17913[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (5))){
var inst_15162 = (state_15185[(7)]);
var state_15185__$1 = state_15185;
var statearr_15216_17914 = state_15185__$1;
(statearr_15216_17914[(2)] = inst_15162);

(statearr_15216_17914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (10))){
var inst_15181 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15217_17918 = state_15185__$1;
(statearr_15217_17918[(2)] = inst_15181);

(statearr_15217_17918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (8))){
var inst_15162 = (state_15185[(7)]);
var inst_15172 = cljs.core.next(inst_15162);
var inst_15162__$1 = inst_15172;
var state_15185__$1 = (function (){var statearr_15218 = state_15185;
(statearr_15218[(7)] = inst_15162__$1);

return statearr_15218;
})();
var statearr_15219_17919 = state_15185__$1;
(statearr_15219_17919[(2)] = null);

(statearr_15219_17919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_15220 = [null,null,null,null,null,null,null,null];
(statearr_15220[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_15220[(1)] = (1));

return statearr_15220;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_15185){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_15185);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e15221){var ex__14145__auto__ = e15221;
var statearr_15222_17920 = state_15185;
(statearr_15222_17920[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_15185[(4)]))){
var statearr_15226_17921 = state_15185;
(statearr_15226_17921[(1)] = cljs.core.first((state_15185[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17922 = state_15185;
state_15185 = G__17922;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_15185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_15185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_15239 = f__14336__auto__();
(statearr_15239[(6)] = c__14335__auto__);

return statearr_15239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));

return c__14335__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15254 = arguments.length;
switch (G__15254) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17939 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17939(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17943 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17943(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17944 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17944(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17958 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17958(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15350 = (function (ch,cs,meta15351){
this.ch = ch;
this.cs = cs;
this.meta15351 = meta15351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15352,meta15351__$1){
var self__ = this;
var _15352__$1 = this;
return (new cljs.core.async.t_cljs$core$async15350(self__.ch,self__.cs,meta15351__$1));
}));

(cljs.core.async.t_cljs$core$async15350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15352){
var self__ = this;
var _15352__$1 = this;
return self__.meta15351;
}));

(cljs.core.async.t_cljs$core$async15350.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15350.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15350.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15350.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15350.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15351","meta15351",941650125,null)], null);
}));

(cljs.core.async.t_cljs$core$async15350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15350");

(cljs.core.async.t_cljs$core$async15350.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15350.
 */
cljs.core.async.__GT_t_cljs$core$async15350 = (function cljs$core$async$__GT_t_cljs$core$async15350(ch,cs,meta15351){
return (new cljs.core.async.t_cljs$core$async15350(ch,cs,meta15351));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15350(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14335__auto___17962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_15657){
var state_val_15658 = (state_15657[(1)]);
if((state_val_15658 === (7))){
var inst_15649 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15662_17966 = state_15657__$1;
(statearr_15662_17966[(2)] = inst_15649);

(statearr_15662_17966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (20))){
var inst_15416 = (state_15657[(7)]);
var inst_15565 = cljs.core.first(inst_15416);
var inst_15566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15565,(0),null);
var inst_15567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15565,(1),null);
var state_15657__$1 = (function (){var statearr_15663 = state_15657;
(statearr_15663[(8)] = inst_15566);

return statearr_15663;
})();
if(cljs.core.truth_(inst_15567)){
var statearr_15664_17967 = state_15657__$1;
(statearr_15664_17967[(1)] = (22));

} else {
var statearr_15665_17968 = state_15657__$1;
(statearr_15665_17968[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (27))){
var inst_15596 = (state_15657[(9)]);
var inst_15598 = (state_15657[(10)]);
var inst_15603 = (state_15657[(11)]);
var inst_15385 = (state_15657[(12)]);
var inst_15603__$1 = cljs.core._nth(inst_15596,inst_15598);
var inst_15604 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15603__$1,inst_15385,done);
var state_15657__$1 = (function (){var statearr_15669 = state_15657;
(statearr_15669[(11)] = inst_15603__$1);

return statearr_15669;
})();
if(cljs.core.truth_(inst_15604)){
var statearr_15671_17977 = state_15657__$1;
(statearr_15671_17977[(1)] = (30));

} else {
var statearr_15672_17978 = state_15657__$1;
(statearr_15672_17978[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (1))){
var state_15657__$1 = state_15657;
var statearr_15676_17979 = state_15657__$1;
(statearr_15676_17979[(2)] = null);

(statearr_15676_17979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (24))){
var inst_15416 = (state_15657[(7)]);
var inst_15573 = (state_15657[(2)]);
var inst_15574 = cljs.core.next(inst_15416);
var inst_15394 = inst_15574;
var inst_15395 = null;
var inst_15396 = (0);
var inst_15397 = (0);
var state_15657__$1 = (function (){var statearr_15679 = state_15657;
(statearr_15679[(13)] = inst_15573);

(statearr_15679[(14)] = inst_15394);

(statearr_15679[(15)] = inst_15395);

(statearr_15679[(16)] = inst_15396);

(statearr_15679[(17)] = inst_15397);

return statearr_15679;
})();
var statearr_15680_17985 = state_15657__$1;
(statearr_15680_17985[(2)] = null);

(statearr_15680_17985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (39))){
var state_15657__$1 = state_15657;
var statearr_15684_17986 = state_15657__$1;
(statearr_15684_17986[(2)] = null);

(statearr_15684_17986[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (4))){
var inst_15385 = (state_15657[(12)]);
var inst_15385__$1 = (state_15657[(2)]);
var inst_15386 = (inst_15385__$1 == null);
var state_15657__$1 = (function (){var statearr_15685 = state_15657;
(statearr_15685[(12)] = inst_15385__$1);

return statearr_15685;
})();
if(cljs.core.truth_(inst_15386)){
var statearr_15694_17987 = state_15657__$1;
(statearr_15694_17987[(1)] = (5));

} else {
var statearr_15696_17988 = state_15657__$1;
(statearr_15696_17988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (15))){
var inst_15397 = (state_15657[(17)]);
var inst_15394 = (state_15657[(14)]);
var inst_15395 = (state_15657[(15)]);
var inst_15396 = (state_15657[(16)]);
var inst_15412 = (state_15657[(2)]);
var inst_15413 = (inst_15397 + (1));
var tmp15681 = inst_15394;
var tmp15682 = inst_15396;
var tmp15683 = inst_15395;
var inst_15394__$1 = tmp15681;
var inst_15395__$1 = tmp15683;
var inst_15396__$1 = tmp15682;
var inst_15397__$1 = inst_15413;
var state_15657__$1 = (function (){var statearr_15698 = state_15657;
(statearr_15698[(18)] = inst_15412);

(statearr_15698[(14)] = inst_15394__$1);

(statearr_15698[(15)] = inst_15395__$1);

(statearr_15698[(16)] = inst_15396__$1);

(statearr_15698[(17)] = inst_15397__$1);

return statearr_15698;
})();
var statearr_15699_17995 = state_15657__$1;
(statearr_15699_17995[(2)] = null);

(statearr_15699_17995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (21))){
var inst_15577 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15704_17996 = state_15657__$1;
(statearr_15704_17996[(2)] = inst_15577);

(statearr_15704_17996[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (31))){
var inst_15603 = (state_15657[(11)]);
var inst_15607 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15603);
var state_15657__$1 = state_15657;
var statearr_15711_18001 = state_15657__$1;
(statearr_15711_18001[(2)] = inst_15607);

(statearr_15711_18001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (32))){
var inst_15598 = (state_15657[(10)]);
var inst_15595 = (state_15657[(19)]);
var inst_15596 = (state_15657[(9)]);
var inst_15597 = (state_15657[(20)]);
var inst_15609 = (state_15657[(2)]);
var inst_15610 = (inst_15598 + (1));
var tmp15701 = inst_15597;
var tmp15702 = inst_15595;
var tmp15703 = inst_15596;
var inst_15595__$1 = tmp15702;
var inst_15596__$1 = tmp15703;
var inst_15597__$1 = tmp15701;
var inst_15598__$1 = inst_15610;
var state_15657__$1 = (function (){var statearr_15716 = state_15657;
(statearr_15716[(21)] = inst_15609);

(statearr_15716[(19)] = inst_15595__$1);

(statearr_15716[(9)] = inst_15596__$1);

(statearr_15716[(20)] = inst_15597__$1);

(statearr_15716[(10)] = inst_15598__$1);

return statearr_15716;
})();
var statearr_15724_18015 = state_15657__$1;
(statearr_15724_18015[(2)] = null);

(statearr_15724_18015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (40))){
var inst_15622 = (state_15657[(22)]);
var inst_15626 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15622);
var state_15657__$1 = state_15657;
var statearr_15725_18016 = state_15657__$1;
(statearr_15725_18016[(2)] = inst_15626);

(statearr_15725_18016[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (33))){
var inst_15613 = (state_15657[(23)]);
var inst_15615 = cljs.core.chunked_seq_QMARK_(inst_15613);
var state_15657__$1 = state_15657;
if(inst_15615){
var statearr_15728_18017 = state_15657__$1;
(statearr_15728_18017[(1)] = (36));

} else {
var statearr_15729_18019 = state_15657__$1;
(statearr_15729_18019[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (13))){
var inst_15406 = (state_15657[(24)]);
var inst_15409 = cljs.core.async.close_BANG_(inst_15406);
var state_15657__$1 = state_15657;
var statearr_15734_18020 = state_15657__$1;
(statearr_15734_18020[(2)] = inst_15409);

(statearr_15734_18020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (22))){
var inst_15566 = (state_15657[(8)]);
var inst_15570 = cljs.core.async.close_BANG_(inst_15566);
var state_15657__$1 = state_15657;
var statearr_15735_18021 = state_15657__$1;
(statearr_15735_18021[(2)] = inst_15570);

(statearr_15735_18021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (36))){
var inst_15613 = (state_15657[(23)]);
var inst_15617 = cljs.core.chunk_first(inst_15613);
var inst_15618 = cljs.core.chunk_rest(inst_15613);
var inst_15619 = cljs.core.count(inst_15617);
var inst_15595 = inst_15618;
var inst_15596 = inst_15617;
var inst_15597 = inst_15619;
var inst_15598 = (0);
var state_15657__$1 = (function (){var statearr_15737 = state_15657;
(statearr_15737[(19)] = inst_15595);

(statearr_15737[(9)] = inst_15596);

(statearr_15737[(20)] = inst_15597);

(statearr_15737[(10)] = inst_15598);

return statearr_15737;
})();
var statearr_15738_18022 = state_15657__$1;
(statearr_15738_18022[(2)] = null);

(statearr_15738_18022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (41))){
var inst_15613 = (state_15657[(23)]);
var inst_15628 = (state_15657[(2)]);
var inst_15629 = cljs.core.next(inst_15613);
var inst_15595 = inst_15629;
var inst_15596 = null;
var inst_15597 = (0);
var inst_15598 = (0);
var state_15657__$1 = (function (){var statearr_15739 = state_15657;
(statearr_15739[(25)] = inst_15628);

(statearr_15739[(19)] = inst_15595);

(statearr_15739[(9)] = inst_15596);

(statearr_15739[(20)] = inst_15597);

(statearr_15739[(10)] = inst_15598);

return statearr_15739;
})();
var statearr_15740_18024 = state_15657__$1;
(statearr_15740_18024[(2)] = null);

(statearr_15740_18024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (43))){
var state_15657__$1 = state_15657;
var statearr_15741_18027 = state_15657__$1;
(statearr_15741_18027[(2)] = null);

(statearr_15741_18027[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (29))){
var inst_15637 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15742_18029 = state_15657__$1;
(statearr_15742_18029[(2)] = inst_15637);

(statearr_15742_18029[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (44))){
var inst_15646 = (state_15657[(2)]);
var state_15657__$1 = (function (){var statearr_15744 = state_15657;
(statearr_15744[(26)] = inst_15646);

return statearr_15744;
})();
var statearr_15745_18030 = state_15657__$1;
(statearr_15745_18030[(2)] = null);

(statearr_15745_18030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (6))){
var inst_15587 = (state_15657[(27)]);
var inst_15586 = cljs.core.deref(cs);
var inst_15587__$1 = cljs.core.keys(inst_15586);
var inst_15588 = cljs.core.count(inst_15587__$1);
var inst_15589 = cljs.core.reset_BANG_(dctr,inst_15588);
var inst_15594 = cljs.core.seq(inst_15587__$1);
var inst_15595 = inst_15594;
var inst_15596 = null;
var inst_15597 = (0);
var inst_15598 = (0);
var state_15657__$1 = (function (){var statearr_15746 = state_15657;
(statearr_15746[(27)] = inst_15587__$1);

(statearr_15746[(28)] = inst_15589);

(statearr_15746[(19)] = inst_15595);

(statearr_15746[(9)] = inst_15596);

(statearr_15746[(20)] = inst_15597);

(statearr_15746[(10)] = inst_15598);

return statearr_15746;
})();
var statearr_15747_18031 = state_15657__$1;
(statearr_15747_18031[(2)] = null);

(statearr_15747_18031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (28))){
var inst_15595 = (state_15657[(19)]);
var inst_15613 = (state_15657[(23)]);
var inst_15613__$1 = cljs.core.seq(inst_15595);
var state_15657__$1 = (function (){var statearr_15748 = state_15657;
(statearr_15748[(23)] = inst_15613__$1);

return statearr_15748;
})();
if(inst_15613__$1){
var statearr_15749_18032 = state_15657__$1;
(statearr_15749_18032[(1)] = (33));

} else {
var statearr_15750_18033 = state_15657__$1;
(statearr_15750_18033[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (25))){
var inst_15598 = (state_15657[(10)]);
var inst_15597 = (state_15657[(20)]);
var inst_15600 = (inst_15598 < inst_15597);
var inst_15601 = inst_15600;
var state_15657__$1 = state_15657;
if(cljs.core.truth_(inst_15601)){
var statearr_15752_18034 = state_15657__$1;
(statearr_15752_18034[(1)] = (27));

} else {
var statearr_15754_18035 = state_15657__$1;
(statearr_15754_18035[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (34))){
var state_15657__$1 = state_15657;
var statearr_15755_18040 = state_15657__$1;
(statearr_15755_18040[(2)] = null);

(statearr_15755_18040[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (17))){
var state_15657__$1 = state_15657;
var statearr_15757_18041 = state_15657__$1;
(statearr_15757_18041[(2)] = null);

(statearr_15757_18041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (3))){
var inst_15651 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15657__$1,inst_15651);
} else {
if((state_val_15658 === (12))){
var inst_15582 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15761_18042 = state_15657__$1;
(statearr_15761_18042[(2)] = inst_15582);

(statearr_15761_18042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (2))){
var state_15657__$1 = state_15657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15657__$1,(4),ch);
} else {
if((state_val_15658 === (23))){
var state_15657__$1 = state_15657;
var statearr_15764_18043 = state_15657__$1;
(statearr_15764_18043[(2)] = null);

(statearr_15764_18043[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (35))){
var inst_15635 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15765_18044 = state_15657__$1;
(statearr_15765_18044[(2)] = inst_15635);

(statearr_15765_18044[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (19))){
var inst_15416 = (state_15657[(7)]);
var inst_15557 = cljs.core.chunk_first(inst_15416);
var inst_15558 = cljs.core.chunk_rest(inst_15416);
var inst_15559 = cljs.core.count(inst_15557);
var inst_15394 = inst_15558;
var inst_15395 = inst_15557;
var inst_15396 = inst_15559;
var inst_15397 = (0);
var state_15657__$1 = (function (){var statearr_15767 = state_15657;
(statearr_15767[(14)] = inst_15394);

(statearr_15767[(15)] = inst_15395);

(statearr_15767[(16)] = inst_15396);

(statearr_15767[(17)] = inst_15397);

return statearr_15767;
})();
var statearr_15771_18045 = state_15657__$1;
(statearr_15771_18045[(2)] = null);

(statearr_15771_18045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (11))){
var inst_15394 = (state_15657[(14)]);
var inst_15416 = (state_15657[(7)]);
var inst_15416__$1 = cljs.core.seq(inst_15394);
var state_15657__$1 = (function (){var statearr_15772 = state_15657;
(statearr_15772[(7)] = inst_15416__$1);

return statearr_15772;
})();
if(inst_15416__$1){
var statearr_15775_18046 = state_15657__$1;
(statearr_15775_18046[(1)] = (16));

} else {
var statearr_15776_18047 = state_15657__$1;
(statearr_15776_18047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (9))){
var inst_15584 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15778_18051 = state_15657__$1;
(statearr_15778_18051[(2)] = inst_15584);

(statearr_15778_18051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (5))){
var inst_15392 = cljs.core.deref(cs);
var inst_15393 = cljs.core.seq(inst_15392);
var inst_15394 = inst_15393;
var inst_15395 = null;
var inst_15396 = (0);
var inst_15397 = (0);
var state_15657__$1 = (function (){var statearr_15779 = state_15657;
(statearr_15779[(14)] = inst_15394);

(statearr_15779[(15)] = inst_15395);

(statearr_15779[(16)] = inst_15396);

(statearr_15779[(17)] = inst_15397);

return statearr_15779;
})();
var statearr_15781_18052 = state_15657__$1;
(statearr_15781_18052[(2)] = null);

(statearr_15781_18052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (14))){
var state_15657__$1 = state_15657;
var statearr_15782_18053 = state_15657__$1;
(statearr_15782_18053[(2)] = null);

(statearr_15782_18053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (45))){
var inst_15643 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15783_18054 = state_15657__$1;
(statearr_15783_18054[(2)] = inst_15643);

(statearr_15783_18054[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (26))){
var inst_15587 = (state_15657[(27)]);
var inst_15639 = (state_15657[(2)]);
var inst_15640 = cljs.core.seq(inst_15587);
var state_15657__$1 = (function (){var statearr_15788 = state_15657;
(statearr_15788[(29)] = inst_15639);

return statearr_15788;
})();
if(inst_15640){
var statearr_15790_18055 = state_15657__$1;
(statearr_15790_18055[(1)] = (42));

} else {
var statearr_15791_18056 = state_15657__$1;
(statearr_15791_18056[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (16))){
var inst_15416 = (state_15657[(7)]);
var inst_15555 = cljs.core.chunked_seq_QMARK_(inst_15416);
var state_15657__$1 = state_15657;
if(inst_15555){
var statearr_15794_18058 = state_15657__$1;
(statearr_15794_18058[(1)] = (19));

} else {
var statearr_15795_18059 = state_15657__$1;
(statearr_15795_18059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (38))){
var inst_15632 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15798_18079 = state_15657__$1;
(statearr_15798_18079[(2)] = inst_15632);

(statearr_15798_18079[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (30))){
var state_15657__$1 = state_15657;
var statearr_15799_18082 = state_15657__$1;
(statearr_15799_18082[(2)] = null);

(statearr_15799_18082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (10))){
var inst_15395 = (state_15657[(15)]);
var inst_15397 = (state_15657[(17)]);
var inst_15405 = cljs.core._nth(inst_15395,inst_15397);
var inst_15406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15405,(0),null);
var inst_15407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15405,(1),null);
var state_15657__$1 = (function (){var statearr_15810 = state_15657;
(statearr_15810[(24)] = inst_15406);

return statearr_15810;
})();
if(cljs.core.truth_(inst_15407)){
var statearr_15817_18089 = state_15657__$1;
(statearr_15817_18089[(1)] = (13));

} else {
var statearr_15818_18090 = state_15657__$1;
(statearr_15818_18090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (18))){
var inst_15580 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15838_18091 = state_15657__$1;
(statearr_15838_18091[(2)] = inst_15580);

(statearr_15838_18091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (42))){
var state_15657__$1 = state_15657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15657__$1,(45),dchan);
} else {
if((state_val_15658 === (37))){
var inst_15613 = (state_15657[(23)]);
var inst_15622 = (state_15657[(22)]);
var inst_15385 = (state_15657[(12)]);
var inst_15622__$1 = cljs.core.first(inst_15613);
var inst_15623 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15622__$1,inst_15385,done);
var state_15657__$1 = (function (){var statearr_15840 = state_15657;
(statearr_15840[(22)] = inst_15622__$1);

return statearr_15840;
})();
if(cljs.core.truth_(inst_15623)){
var statearr_15844_18096 = state_15657__$1;
(statearr_15844_18096[(1)] = (39));

} else {
var statearr_15846_18098 = state_15657__$1;
(statearr_15846_18098[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (8))){
var inst_15397 = (state_15657[(17)]);
var inst_15396 = (state_15657[(16)]);
var inst_15399 = (inst_15397 < inst_15396);
var inst_15400 = inst_15399;
var state_15657__$1 = state_15657;
if(cljs.core.truth_(inst_15400)){
var statearr_15851_18113 = state_15657__$1;
(statearr_15851_18113[(1)] = (10));

} else {
var statearr_15853_18114 = state_15657__$1;
(statearr_15853_18114[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14142__auto__ = null;
var cljs$core$async$mult_$_state_machine__14142__auto____0 = (function (){
var statearr_15859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15859[(0)] = cljs$core$async$mult_$_state_machine__14142__auto__);

(statearr_15859[(1)] = (1));

return statearr_15859;
});
var cljs$core$async$mult_$_state_machine__14142__auto____1 = (function (state_15657){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_15657);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e15861){var ex__14145__auto__ = e15861;
var statearr_15862_18121 = state_15657;
(statearr_15862_18121[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_15657[(4)]))){
var statearr_15865_18122 = state_15657;
(statearr_15865_18122[(1)] = cljs.core.first((state_15657[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18123 = state_15657;
state_15657 = G__18123;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14142__auto__ = function(state_15657){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14142__auto____1.call(this,state_15657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14142__auto____0;
cljs$core$async$mult_$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14142__auto____1;
return cljs$core$async$mult_$_state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_15871 = f__14336__auto__();
(statearr_15871[(6)] = c__14335__auto___17962);

return statearr_15871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15878 = arguments.length;
switch (G__15878) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18127 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18127(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18133 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18133(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18139 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18139(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18140 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18140(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18146 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18146(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18152 = arguments.length;
var i__5877__auto___18153 = (0);
while(true){
if((i__5877__auto___18153 < len__5876__auto___18152)){
args__5882__auto__.push((arguments[i__5877__auto___18153]));

var G__18154 = (i__5877__auto___18153 + (1));
i__5877__auto___18153 = G__18154;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15971){
var map__15974 = p__15971;
var map__15974__$1 = cljs.core.__destructure_map(map__15974);
var opts = map__15974__$1;
var statearr_15975_18155 = state;
(statearr_15975_18155[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15977_18156 = state;
(statearr_15977_18156[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_15979_18157 = state;
(statearr_15979_18157[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15944){
var G__15945 = cljs.core.first(seq15944);
var seq15944__$1 = cljs.core.next(seq15944);
var G__15946 = cljs.core.first(seq15944__$1);
var seq15944__$2 = cljs.core.next(seq15944__$1);
var G__15947 = cljs.core.first(seq15944__$2);
var seq15944__$3 = cljs.core.next(seq15944__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15945,G__15946,G__15947,seq15944__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15999 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16000){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16000 = meta16000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16001,meta16000__$1){
var self__ = this;
var _16001__$1 = this;
return (new cljs.core.async.t_cljs$core$async15999(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16000__$1));
}));

(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16001){
var self__ = this;
var _16001__$1 = this;
return self__.meta16000;
}));

(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15999.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16000","meta16000",-1763846137,null)], null);
}));

(cljs.core.async.t_cljs$core$async15999.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15999");

(cljs.core.async.t_cljs$core$async15999.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15999");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15999.
 */
cljs.core.async.__GT_t_cljs$core$async15999 = (function cljs$core$async$__GT_t_cljs$core$async15999(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16000){
return (new cljs.core.async.t_cljs$core$async15999(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16000));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15999(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14335__auto___18171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_16093){
var state_val_16094 = (state_16093[(1)]);
if((state_val_16094 === (7))){
var inst_16048 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
if(cljs.core.truth_(inst_16048)){
var statearr_16095_18172 = state_16093__$1;
(statearr_16095_18172[(1)] = (8));

} else {
var statearr_16096_18173 = state_16093__$1;
(statearr_16096_18173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (20))){
var inst_16041 = (state_16093[(7)]);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16093__$1,(23),out,inst_16041);
} else {
if((state_val_16094 === (1))){
var inst_16024 = calc_state();
var inst_16025 = cljs.core.__destructure_map(inst_16024);
var inst_16026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16025,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16025,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16025,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16029 = inst_16024;
var state_16093__$1 = (function (){var statearr_16097 = state_16093;
(statearr_16097[(8)] = inst_16026);

(statearr_16097[(9)] = inst_16027);

(statearr_16097[(10)] = inst_16028);

(statearr_16097[(11)] = inst_16029);

return statearr_16097;
})();
var statearr_16099_18174 = state_16093__$1;
(statearr_16099_18174[(2)] = null);

(statearr_16099_18174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (24))){
var inst_16032 = (state_16093[(12)]);
var inst_16029 = inst_16032;
var state_16093__$1 = (function (){var statearr_16103 = state_16093;
(statearr_16103[(11)] = inst_16029);

return statearr_16103;
})();
var statearr_16104_18175 = state_16093__$1;
(statearr_16104_18175[(2)] = null);

(statearr_16104_18175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (4))){
var inst_16041 = (state_16093[(7)]);
var inst_16043 = (state_16093[(13)]);
var inst_16040 = (state_16093[(2)]);
var inst_16041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16040,(0),null);
var inst_16042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16040,(1),null);
var inst_16043__$1 = (inst_16041__$1 == null);
var state_16093__$1 = (function (){var statearr_16112 = state_16093;
(statearr_16112[(7)] = inst_16041__$1);

(statearr_16112[(14)] = inst_16042);

(statearr_16112[(13)] = inst_16043__$1);

return statearr_16112;
})();
if(cljs.core.truth_(inst_16043__$1)){
var statearr_16115_18176 = state_16093__$1;
(statearr_16115_18176[(1)] = (5));

} else {
var statearr_16116_18177 = state_16093__$1;
(statearr_16116_18177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (15))){
var inst_16033 = (state_16093[(15)]);
var inst_16063 = (state_16093[(16)]);
var inst_16063__$1 = cljs.core.empty_QMARK_(inst_16033);
var state_16093__$1 = (function (){var statearr_16118 = state_16093;
(statearr_16118[(16)] = inst_16063__$1);

return statearr_16118;
})();
if(inst_16063__$1){
var statearr_16119_18183 = state_16093__$1;
(statearr_16119_18183[(1)] = (17));

} else {
var statearr_16121_18184 = state_16093__$1;
(statearr_16121_18184[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (21))){
var inst_16032 = (state_16093[(12)]);
var inst_16029 = inst_16032;
var state_16093__$1 = (function (){var statearr_16124 = state_16093;
(statearr_16124[(11)] = inst_16029);

return statearr_16124;
})();
var statearr_16126_18189 = state_16093__$1;
(statearr_16126_18189[(2)] = null);

(statearr_16126_18189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (13))){
var inst_16055 = (state_16093[(2)]);
var inst_16056 = calc_state();
var inst_16029 = inst_16056;
var state_16093__$1 = (function (){var statearr_16128 = state_16093;
(statearr_16128[(17)] = inst_16055);

(statearr_16128[(11)] = inst_16029);

return statearr_16128;
})();
var statearr_16129_18197 = state_16093__$1;
(statearr_16129_18197[(2)] = null);

(statearr_16129_18197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (22))){
var inst_16086 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16130_18198 = state_16093__$1;
(statearr_16130_18198[(2)] = inst_16086);

(statearr_16130_18198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (6))){
var inst_16042 = (state_16093[(14)]);
var inst_16046 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16042,change);
var state_16093__$1 = state_16093;
var statearr_16135_18199 = state_16093__$1;
(statearr_16135_18199[(2)] = inst_16046);

(statearr_16135_18199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (25))){
var state_16093__$1 = state_16093;
var statearr_16136_18201 = state_16093__$1;
(statearr_16136_18201[(2)] = null);

(statearr_16136_18201[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (17))){
var inst_16034 = (state_16093[(18)]);
var inst_16042 = (state_16093[(14)]);
var inst_16066 = (inst_16034.cljs$core$IFn$_invoke$arity$1 ? inst_16034.cljs$core$IFn$_invoke$arity$1(inst_16042) : inst_16034.call(null,inst_16042));
var inst_16067 = cljs.core.not(inst_16066);
var state_16093__$1 = state_16093;
var statearr_16137_18202 = state_16093__$1;
(statearr_16137_18202[(2)] = inst_16067);

(statearr_16137_18202[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (3))){
var inst_16090 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16093__$1,inst_16090);
} else {
if((state_val_16094 === (12))){
var state_16093__$1 = state_16093;
var statearr_16139_18203 = state_16093__$1;
(statearr_16139_18203[(2)] = null);

(statearr_16139_18203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (2))){
var inst_16029 = (state_16093[(11)]);
var inst_16032 = (state_16093[(12)]);
var inst_16032__$1 = cljs.core.__destructure_map(inst_16029);
var inst_16033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16032__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16032__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16032__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16093__$1 = (function (){var statearr_16140 = state_16093;
(statearr_16140[(12)] = inst_16032__$1);

(statearr_16140[(15)] = inst_16033);

(statearr_16140[(18)] = inst_16034);

return statearr_16140;
})();
return cljs.core.async.ioc_alts_BANG_(state_16093__$1,(4),inst_16035);
} else {
if((state_val_16094 === (23))){
var inst_16076 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
if(cljs.core.truth_(inst_16076)){
var statearr_16141_18204 = state_16093__$1;
(statearr_16141_18204[(1)] = (24));

} else {
var statearr_16142_18208 = state_16093__$1;
(statearr_16142_18208[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (19))){
var inst_16070 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16143_18209 = state_16093__$1;
(statearr_16143_18209[(2)] = inst_16070);

(statearr_16143_18209[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (11))){
var inst_16042 = (state_16093[(14)]);
var inst_16052 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16042);
var state_16093__$1 = state_16093;
var statearr_16145_18212 = state_16093__$1;
(statearr_16145_18212[(2)] = inst_16052);

(statearr_16145_18212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (9))){
var inst_16033 = (state_16093[(15)]);
var inst_16042 = (state_16093[(14)]);
var inst_16060 = (state_16093[(19)]);
var inst_16060__$1 = (inst_16033.cljs$core$IFn$_invoke$arity$1 ? inst_16033.cljs$core$IFn$_invoke$arity$1(inst_16042) : inst_16033.call(null,inst_16042));
var state_16093__$1 = (function (){var statearr_16146 = state_16093;
(statearr_16146[(19)] = inst_16060__$1);

return statearr_16146;
})();
if(cljs.core.truth_(inst_16060__$1)){
var statearr_16147_18219 = state_16093__$1;
(statearr_16147_18219[(1)] = (14));

} else {
var statearr_16148_18220 = state_16093__$1;
(statearr_16148_18220[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (5))){
var inst_16043 = (state_16093[(13)]);
var state_16093__$1 = state_16093;
var statearr_16149_18224 = state_16093__$1;
(statearr_16149_18224[(2)] = inst_16043);

(statearr_16149_18224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (14))){
var inst_16060 = (state_16093[(19)]);
var state_16093__$1 = state_16093;
var statearr_16150_18225 = state_16093__$1;
(statearr_16150_18225[(2)] = inst_16060);

(statearr_16150_18225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (26))){
var inst_16082 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16151_18226 = state_16093__$1;
(statearr_16151_18226[(2)] = inst_16082);

(statearr_16151_18226[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (16))){
var inst_16073 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
if(cljs.core.truth_(inst_16073)){
var statearr_16153_18227 = state_16093__$1;
(statearr_16153_18227[(1)] = (20));

} else {
var statearr_16154_18231 = state_16093__$1;
(statearr_16154_18231[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (10))){
var inst_16088 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16158_18232 = state_16093__$1;
(statearr_16158_18232[(2)] = inst_16088);

(statearr_16158_18232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (18))){
var inst_16063 = (state_16093[(16)]);
var state_16093__$1 = state_16093;
var statearr_16161_18233 = state_16093__$1;
(statearr_16161_18233[(2)] = inst_16063);

(statearr_16161_18233[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (8))){
var inst_16041 = (state_16093[(7)]);
var inst_16050 = (inst_16041 == null);
var state_16093__$1 = state_16093;
if(cljs.core.truth_(inst_16050)){
var statearr_16162_18234 = state_16093__$1;
(statearr_16162_18234[(1)] = (11));

} else {
var statearr_16163_18235 = state_16093__$1;
(statearr_16163_18235[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14142__auto__ = null;
var cljs$core$async$mix_$_state_machine__14142__auto____0 = (function (){
var statearr_16164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16164[(0)] = cljs$core$async$mix_$_state_machine__14142__auto__);

(statearr_16164[(1)] = (1));

return statearr_16164;
});
var cljs$core$async$mix_$_state_machine__14142__auto____1 = (function (state_16093){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_16093);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e16165){var ex__14145__auto__ = e16165;
var statearr_16166_18240 = state_16093;
(statearr_16166_18240[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_16093[(4)]))){
var statearr_16169_18243 = state_16093;
(statearr_16169_18243[(1)] = cljs.core.first((state_16093[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18244 = state_16093;
state_16093 = G__18244;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14142__auto__ = function(state_16093){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14142__auto____1.call(this,state_16093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14142__auto____0;
cljs$core$async$mix_$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14142__auto____1;
return cljs$core$async$mix_$_state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_16170 = f__14336__auto__();
(statearr_16170[(6)] = c__14335__auto___18171);

return statearr_16170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18253 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18253(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18258 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18258(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18260 = (function() {
var G__18261 = null;
var G__18261__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18261__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18261 = function(p,v){
switch(arguments.length){
case 1:
return G__18261__1.call(this,p);
case 2:
return G__18261__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18261.cljs$core$IFn$_invoke$arity$1 = G__18261__1;
G__18261.cljs$core$IFn$_invoke$arity$2 = G__18261__2;
return G__18261;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16201 = arguments.length;
switch (G__16201) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18260(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18260(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16210 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16211){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16211 = meta16211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16212,meta16211__$1){
var self__ = this;
var _16212__$1 = this;
return (new cljs.core.async.t_cljs$core$async16210(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16211__$1));
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16212){
var self__ = this;
var _16212__$1 = this;
return self__.meta16211;
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16211","meta16211",1532395786,null)], null);
}));

(cljs.core.async.t_cljs$core$async16210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16210");

(cljs.core.async.t_cljs$core$async16210.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16210.
 */
cljs.core.async.__GT_t_cljs$core$async16210 = (function cljs$core$async$__GT_t_cljs$core$async16210(ch,topic_fn,buf_fn,mults,ensure_mult,meta16211){
return (new cljs.core.async.t_cljs$core$async16210(ch,topic_fn,buf_fn,mults,ensure_mult,meta16211));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16206 = arguments.length;
switch (G__16206) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16203_SHARP_){
if(cljs.core.truth_((p1__16203_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16203_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16203_SHARP_.call(null,topic)))){
return p1__16203_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16203_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16210(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14335__auto___18288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_16293){
var state_val_16294 = (state_16293[(1)]);
if((state_val_16294 === (7))){
var inst_16289 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16295_18296 = state_16293__$1;
(statearr_16295_18296[(2)] = inst_16289);

(statearr_16295_18296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (20))){
var state_16293__$1 = state_16293;
var statearr_16296_18300 = state_16293__$1;
(statearr_16296_18300[(2)] = null);

(statearr_16296_18300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (1))){
var state_16293__$1 = state_16293;
var statearr_16297_18322 = state_16293__$1;
(statearr_16297_18322[(2)] = null);

(statearr_16297_18322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (24))){
var inst_16270 = (state_16293[(7)]);
var inst_16281 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16270);
var state_16293__$1 = state_16293;
var statearr_16300_18323 = state_16293__$1;
(statearr_16300_18323[(2)] = inst_16281);

(statearr_16300_18323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (4))){
var inst_16221 = (state_16293[(8)]);
var inst_16221__$1 = (state_16293[(2)]);
var inst_16222 = (inst_16221__$1 == null);
var state_16293__$1 = (function (){var statearr_16301 = state_16293;
(statearr_16301[(8)] = inst_16221__$1);

return statearr_16301;
})();
if(cljs.core.truth_(inst_16222)){
var statearr_16302_18325 = state_16293__$1;
(statearr_16302_18325[(1)] = (5));

} else {
var statearr_16303_18326 = state_16293__$1;
(statearr_16303_18326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (15))){
var inst_16264 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16304_18327 = state_16293__$1;
(statearr_16304_18327[(2)] = inst_16264);

(statearr_16304_18327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (21))){
var inst_16286 = (state_16293[(2)]);
var state_16293__$1 = (function (){var statearr_16305 = state_16293;
(statearr_16305[(9)] = inst_16286);

return statearr_16305;
})();
var statearr_16306_18342 = state_16293__$1;
(statearr_16306_18342[(2)] = null);

(statearr_16306_18342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (13))){
var inst_16246 = (state_16293[(10)]);
var inst_16248 = cljs.core.chunked_seq_QMARK_(inst_16246);
var state_16293__$1 = state_16293;
if(inst_16248){
var statearr_16307_18343 = state_16293__$1;
(statearr_16307_18343[(1)] = (16));

} else {
var statearr_16308_18345 = state_16293__$1;
(statearr_16308_18345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (22))){
var inst_16277 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
if(cljs.core.truth_(inst_16277)){
var statearr_16309_18346 = state_16293__$1;
(statearr_16309_18346[(1)] = (23));

} else {
var statearr_16310_18348 = state_16293__$1;
(statearr_16310_18348[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (6))){
var inst_16221 = (state_16293[(8)]);
var inst_16270 = (state_16293[(7)]);
var inst_16272 = (state_16293[(11)]);
var inst_16270__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16221) : topic_fn.call(null,inst_16221));
var inst_16271 = cljs.core.deref(mults);
var inst_16272__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16271,inst_16270__$1);
var state_16293__$1 = (function (){var statearr_16311 = state_16293;
(statearr_16311[(7)] = inst_16270__$1);

(statearr_16311[(11)] = inst_16272__$1);

return statearr_16311;
})();
if(cljs.core.truth_(inst_16272__$1)){
var statearr_16312_18352 = state_16293__$1;
(statearr_16312_18352[(1)] = (19));

} else {
var statearr_16313_18353 = state_16293__$1;
(statearr_16313_18353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (25))){
var inst_16283 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16314_18354 = state_16293__$1;
(statearr_16314_18354[(2)] = inst_16283);

(statearr_16314_18354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (17))){
var inst_16246 = (state_16293[(10)]);
var inst_16255 = cljs.core.first(inst_16246);
var inst_16256 = cljs.core.async.muxch_STAR_(inst_16255);
var inst_16257 = cljs.core.async.close_BANG_(inst_16256);
var inst_16258 = cljs.core.next(inst_16246);
var inst_16231 = inst_16258;
var inst_16232 = null;
var inst_16233 = (0);
var inst_16234 = (0);
var state_16293__$1 = (function (){var statearr_16315 = state_16293;
(statearr_16315[(12)] = inst_16257);

(statearr_16315[(13)] = inst_16231);

(statearr_16315[(14)] = inst_16232);

(statearr_16315[(15)] = inst_16233);

(statearr_16315[(16)] = inst_16234);

return statearr_16315;
})();
var statearr_16316_18357 = state_16293__$1;
(statearr_16316_18357[(2)] = null);

(statearr_16316_18357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (3))){
var inst_16291 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16293__$1,inst_16291);
} else {
if((state_val_16294 === (12))){
var inst_16266 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16317_18358 = state_16293__$1;
(statearr_16317_18358[(2)] = inst_16266);

(statearr_16317_18358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (2))){
var state_16293__$1 = state_16293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16293__$1,(4),ch);
} else {
if((state_val_16294 === (23))){
var state_16293__$1 = state_16293;
var statearr_16319_18359 = state_16293__$1;
(statearr_16319_18359[(2)] = null);

(statearr_16319_18359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (19))){
var inst_16272 = (state_16293[(11)]);
var inst_16221 = (state_16293[(8)]);
var inst_16275 = cljs.core.async.muxch_STAR_(inst_16272);
var state_16293__$1 = state_16293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16293__$1,(22),inst_16275,inst_16221);
} else {
if((state_val_16294 === (11))){
var inst_16231 = (state_16293[(13)]);
var inst_16246 = (state_16293[(10)]);
var inst_16246__$1 = cljs.core.seq(inst_16231);
var state_16293__$1 = (function (){var statearr_16322 = state_16293;
(statearr_16322[(10)] = inst_16246__$1);

return statearr_16322;
})();
if(inst_16246__$1){
var statearr_16323_18360 = state_16293__$1;
(statearr_16323_18360[(1)] = (13));

} else {
var statearr_16324_18361 = state_16293__$1;
(statearr_16324_18361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (9))){
var inst_16268 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16325_18362 = state_16293__$1;
(statearr_16325_18362[(2)] = inst_16268);

(statearr_16325_18362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (5))){
var inst_16228 = cljs.core.deref(mults);
var inst_16229 = cljs.core.vals(inst_16228);
var inst_16230 = cljs.core.seq(inst_16229);
var inst_16231 = inst_16230;
var inst_16232 = null;
var inst_16233 = (0);
var inst_16234 = (0);
var state_16293__$1 = (function (){var statearr_16326 = state_16293;
(statearr_16326[(13)] = inst_16231);

(statearr_16326[(14)] = inst_16232);

(statearr_16326[(15)] = inst_16233);

(statearr_16326[(16)] = inst_16234);

return statearr_16326;
})();
var statearr_16327_18363 = state_16293__$1;
(statearr_16327_18363[(2)] = null);

(statearr_16327_18363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (14))){
var state_16293__$1 = state_16293;
var statearr_16332_18364 = state_16293__$1;
(statearr_16332_18364[(2)] = null);

(statearr_16332_18364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (16))){
var inst_16246 = (state_16293[(10)]);
var inst_16250 = cljs.core.chunk_first(inst_16246);
var inst_16251 = cljs.core.chunk_rest(inst_16246);
var inst_16252 = cljs.core.count(inst_16250);
var inst_16231 = inst_16251;
var inst_16232 = inst_16250;
var inst_16233 = inst_16252;
var inst_16234 = (0);
var state_16293__$1 = (function (){var statearr_16333 = state_16293;
(statearr_16333[(13)] = inst_16231);

(statearr_16333[(14)] = inst_16232);

(statearr_16333[(15)] = inst_16233);

(statearr_16333[(16)] = inst_16234);

return statearr_16333;
})();
var statearr_16334_18365 = state_16293__$1;
(statearr_16334_18365[(2)] = null);

(statearr_16334_18365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (10))){
var inst_16232 = (state_16293[(14)]);
var inst_16234 = (state_16293[(16)]);
var inst_16231 = (state_16293[(13)]);
var inst_16233 = (state_16293[(15)]);
var inst_16239 = cljs.core._nth(inst_16232,inst_16234);
var inst_16241 = cljs.core.async.muxch_STAR_(inst_16239);
var inst_16242 = cljs.core.async.close_BANG_(inst_16241);
var inst_16243 = (inst_16234 + (1));
var tmp16328 = inst_16233;
var tmp16329 = inst_16232;
var tmp16330 = inst_16231;
var inst_16231__$1 = tmp16330;
var inst_16232__$1 = tmp16329;
var inst_16233__$1 = tmp16328;
var inst_16234__$1 = inst_16243;
var state_16293__$1 = (function (){var statearr_16336 = state_16293;
(statearr_16336[(17)] = inst_16242);

(statearr_16336[(13)] = inst_16231__$1);

(statearr_16336[(14)] = inst_16232__$1);

(statearr_16336[(15)] = inst_16233__$1);

(statearr_16336[(16)] = inst_16234__$1);

return statearr_16336;
})();
var statearr_16338_18366 = state_16293__$1;
(statearr_16338_18366[(2)] = null);

(statearr_16338_18366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (18))){
var inst_16261 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16341_18368 = state_16293__$1;
(statearr_16341_18368[(2)] = inst_16261);

(statearr_16341_18368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16294 === (8))){
var inst_16234 = (state_16293[(16)]);
var inst_16233 = (state_16293[(15)]);
var inst_16236 = (inst_16234 < inst_16233);
var inst_16237 = inst_16236;
var state_16293__$1 = state_16293;
if(cljs.core.truth_(inst_16237)){
var statearr_16342_18369 = state_16293__$1;
(statearr_16342_18369[(1)] = (10));

} else {
var statearr_16343_18370 = state_16293__$1;
(statearr_16343_18370[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_16347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16347[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_16347[(1)] = (1));

return statearr_16347;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_16293){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_16293);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e16351){var ex__14145__auto__ = e16351;
var statearr_16352_18374 = state_16293;
(statearr_16352_18374[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_16293[(4)]))){
var statearr_16353_18375 = state_16293;
(statearr_16353_18375[(1)] = cljs.core.first((state_16293[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18377 = state_16293;
state_16293 = G__18377;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_16293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_16293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_16355 = f__14336__auto__();
(statearr_16355[(6)] = c__14335__auto___18288);

return statearr_16355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16362 = arguments.length;
switch (G__16362) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16377 = arguments.length;
switch (G__16377) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16387 = arguments.length;
switch (G__16387) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14335__auto___18383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_16444){
var state_val_16445 = (state_16444[(1)]);
if((state_val_16445 === (7))){
var state_16444__$1 = state_16444;
var statearr_16457_18384 = state_16444__$1;
(statearr_16457_18384[(2)] = null);

(statearr_16457_18384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (1))){
var state_16444__$1 = state_16444;
var statearr_16459_18385 = state_16444__$1;
(statearr_16459_18385[(2)] = null);

(statearr_16459_18385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (4))){
var inst_16397 = (state_16444[(7)]);
var inst_16396 = (state_16444[(8)]);
var inst_16399 = (inst_16397 < inst_16396);
var state_16444__$1 = state_16444;
if(cljs.core.truth_(inst_16399)){
var statearr_16463_18386 = state_16444__$1;
(statearr_16463_18386[(1)] = (6));

} else {
var statearr_16464_18387 = state_16444__$1;
(statearr_16464_18387[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (15))){
var inst_16429 = (state_16444[(9)]);
var inst_16434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16429);
var state_16444__$1 = state_16444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16444__$1,(17),out,inst_16434);
} else {
if((state_val_16445 === (13))){
var inst_16429 = (state_16444[(9)]);
var inst_16429__$1 = (state_16444[(2)]);
var inst_16430 = cljs.core.some(cljs.core.nil_QMARK_,inst_16429__$1);
var state_16444__$1 = (function (){var statearr_16481 = state_16444;
(statearr_16481[(9)] = inst_16429__$1);

return statearr_16481;
})();
if(cljs.core.truth_(inst_16430)){
var statearr_16482_18391 = state_16444__$1;
(statearr_16482_18391[(1)] = (14));

} else {
var statearr_16484_18392 = state_16444__$1;
(statearr_16484_18392[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (6))){
var state_16444__$1 = state_16444;
var statearr_16485_18393 = state_16444__$1;
(statearr_16485_18393[(2)] = null);

(statearr_16485_18393[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (17))){
var inst_16436 = (state_16444[(2)]);
var state_16444__$1 = (function (){var statearr_16493 = state_16444;
(statearr_16493[(10)] = inst_16436);

return statearr_16493;
})();
var statearr_16495_18394 = state_16444__$1;
(statearr_16495_18394[(2)] = null);

(statearr_16495_18394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (3))){
var inst_16441 = (state_16444[(2)]);
var state_16444__$1 = state_16444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16444__$1,inst_16441);
} else {
if((state_val_16445 === (12))){
var _ = (function (){var statearr_16497 = state_16444;
(statearr_16497[(4)] = cljs.core.rest((state_16444[(4)])));

return statearr_16497;
})();
var state_16444__$1 = state_16444;
var ex16490 = (state_16444__$1[(2)]);
var statearr_16498_18395 = state_16444__$1;
(statearr_16498_18395[(5)] = ex16490);


if((ex16490 instanceof Object)){
var statearr_16513_18396 = state_16444__$1;
(statearr_16513_18396[(1)] = (11));

(statearr_16513_18396[(5)] = null);

} else {
throw ex16490;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (2))){
var inst_16394 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16396 = cnt;
var inst_16397 = (0);
var state_16444__$1 = (function (){var statearr_16518 = state_16444;
(statearr_16518[(11)] = inst_16394);

(statearr_16518[(8)] = inst_16396);

(statearr_16518[(7)] = inst_16397);

return statearr_16518;
})();
var statearr_16521_18397 = state_16444__$1;
(statearr_16521_18397[(2)] = null);

(statearr_16521_18397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (11))){
var inst_16405 = (state_16444[(2)]);
var inst_16406 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16444__$1 = (function (){var statearr_16523 = state_16444;
(statearr_16523[(12)] = inst_16405);

return statearr_16523;
})();
var statearr_16525_18398 = state_16444__$1;
(statearr_16525_18398[(2)] = inst_16406);

(statearr_16525_18398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (9))){
var inst_16397 = (state_16444[(7)]);
var _ = (function (){var statearr_16528 = state_16444;
(statearr_16528[(4)] = cljs.core.cons((12),(state_16444[(4)])));

return statearr_16528;
})();
var inst_16412 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16397) : chs__$1.call(null,inst_16397));
var inst_16414 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16397) : done.call(null,inst_16397));
var inst_16415 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16412,inst_16414);
var ___$1 = (function (){var statearr_16530 = state_16444;
(statearr_16530[(4)] = cljs.core.rest((state_16444[(4)])));

return statearr_16530;
})();
var state_16444__$1 = state_16444;
var statearr_16532_18406 = state_16444__$1;
(statearr_16532_18406[(2)] = inst_16415);

(statearr_16532_18406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (5))){
var inst_16427 = (state_16444[(2)]);
var state_16444__$1 = (function (){var statearr_16533 = state_16444;
(statearr_16533[(13)] = inst_16427);

return statearr_16533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16444__$1,(13),dchan);
} else {
if((state_val_16445 === (14))){
var inst_16432 = cljs.core.async.close_BANG_(out);
var state_16444__$1 = state_16444;
var statearr_16537_18411 = state_16444__$1;
(statearr_16537_18411[(2)] = inst_16432);

(statearr_16537_18411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (16))){
var inst_16439 = (state_16444[(2)]);
var state_16444__$1 = state_16444;
var statearr_16539_18415 = state_16444__$1;
(statearr_16539_18415[(2)] = inst_16439);

(statearr_16539_18415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (10))){
var inst_16397 = (state_16444[(7)]);
var inst_16419 = (state_16444[(2)]);
var inst_16420 = (inst_16397 + (1));
var inst_16397__$1 = inst_16420;
var state_16444__$1 = (function (){var statearr_16542 = state_16444;
(statearr_16542[(14)] = inst_16419);

(statearr_16542[(7)] = inst_16397__$1);

return statearr_16542;
})();
var statearr_16544_18417 = state_16444__$1;
(statearr_16544_18417[(2)] = null);

(statearr_16544_18417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (8))){
var inst_16424 = (state_16444[(2)]);
var state_16444__$1 = state_16444;
var statearr_16545_18418 = state_16444__$1;
(statearr_16545_18418[(2)] = inst_16424);

(statearr_16545_18418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_16548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16548[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_16548[(1)] = (1));

return statearr_16548;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_16444){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_16444);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e16551){var ex__14145__auto__ = e16551;
var statearr_16556_18452 = state_16444;
(statearr_16556_18452[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_16444[(4)]))){
var statearr_16558_18453 = state_16444;
(statearr_16558_18453[(1)] = cljs.core.first((state_16444[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18457 = state_16444;
state_16444 = G__18457;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_16444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_16444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_16562 = f__14336__auto__();
(statearr_16562[(6)] = c__14335__auto___18383);

return statearr_16562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16568 = arguments.length;
switch (G__16568) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14335__auto___18466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_16611){
var state_val_16612 = (state_16611[(1)]);
if((state_val_16612 === (7))){
var inst_16587 = (state_16611[(7)]);
var inst_16588 = (state_16611[(8)]);
var inst_16587__$1 = (state_16611[(2)]);
var inst_16588__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16587__$1,(0),null);
var inst_16591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16587__$1,(1),null);
var inst_16592 = (inst_16588__$1 == null);
var state_16611__$1 = (function (){var statearr_16620 = state_16611;
(statearr_16620[(7)] = inst_16587__$1);

(statearr_16620[(8)] = inst_16588__$1);

(statearr_16620[(9)] = inst_16591);

return statearr_16620;
})();
if(cljs.core.truth_(inst_16592)){
var statearr_16624_18472 = state_16611__$1;
(statearr_16624_18472[(1)] = (8));

} else {
var statearr_16625_18473 = state_16611__$1;
(statearr_16625_18473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16612 === (1))){
var inst_16575 = cljs.core.vec(chs);
var inst_16576 = inst_16575;
var state_16611__$1 = (function (){var statearr_16632 = state_16611;
(statearr_16632[(10)] = inst_16576);

return statearr_16632;
})();
var statearr_16633_18481 = state_16611__$1;
(statearr_16633_18481[(2)] = null);

(statearr_16633_18481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16612 === (4))){
var inst_16576 = (state_16611[(10)]);
var state_16611__$1 = state_16611;
return cljs.core.async.ioc_alts_BANG_(state_16611__$1,(7),inst_16576);
} else {
if((state_val_16612 === (6))){
var inst_16606 = (state_16611[(2)]);
var state_16611__$1 = state_16611;
var statearr_16637_18483 = state_16611__$1;
(statearr_16637_18483[(2)] = inst_16606);

(statearr_16637_18483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16612 === (3))){
var inst_16608 = (state_16611[(2)]);
var state_16611__$1 = state_16611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16611__$1,inst_16608);
} else {
if((state_val_16612 === (2))){
var inst_16576 = (state_16611[(10)]);
var inst_16580 = cljs.core.count(inst_16576);
var inst_16581 = (inst_16580 > (0));
var state_16611__$1 = state_16611;
if(cljs.core.truth_(inst_16581)){
var statearr_16643_18485 = state_16611__$1;
(statearr_16643_18485[(1)] = (4));

} else {
var statearr_16644_18486 = state_16611__$1;
(statearr_16644_18486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16612 === (11))){
var inst_16576 = (state_16611[(10)]);
var inst_16599 = (state_16611[(2)]);
var tmp16639 = inst_16576;
var inst_16576__$1 = tmp16639;
var state_16611__$1 = (function (){var statearr_16647 = state_16611;
(statearr_16647[(11)] = inst_16599);

(statearr_16647[(10)] = inst_16576__$1);

return statearr_16647;
})();
var statearr_16648_18487 = state_16611__$1;
(statearr_16648_18487[(2)] = null);

(statearr_16648_18487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16612 === (9))){
var inst_16588 = (state_16611[(8)]);
var state_16611__$1 = state_16611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16611__$1,(11),out,inst_16588);
} else {
if((state_val_16612 === (5))){
var inst_16604 = cljs.core.async.close_BANG_(out);
var state_16611__$1 = state_16611;
var statearr_16657_18489 = state_16611__$1;
(statearr_16657_18489[(2)] = inst_16604);

(statearr_16657_18489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16612 === (10))){
var inst_16602 = (state_16611[(2)]);
var state_16611__$1 = state_16611;
var statearr_16661_18490 = state_16611__$1;
(statearr_16661_18490[(2)] = inst_16602);

(statearr_16661_18490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16612 === (8))){
var inst_16576 = (state_16611[(10)]);
var inst_16587 = (state_16611[(7)]);
var inst_16588 = (state_16611[(8)]);
var inst_16591 = (state_16611[(9)]);
var inst_16594 = (function (){var cs = inst_16576;
var vec__16583 = inst_16587;
var v = inst_16588;
var c = inst_16591;
return (function (p1__16564_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16564_SHARP_);
});
})();
var inst_16595 = cljs.core.filterv(inst_16594,inst_16576);
var inst_16576__$1 = inst_16595;
var state_16611__$1 = (function (){var statearr_16664 = state_16611;
(statearr_16664[(10)] = inst_16576__$1);

return statearr_16664;
})();
var statearr_16667_18491 = state_16611__$1;
(statearr_16667_18491[(2)] = null);

(statearr_16667_18491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_16670 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16670[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_16670[(1)] = (1));

return statearr_16670;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_16611){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_16611);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e16671){var ex__14145__auto__ = e16671;
var statearr_16672_18492 = state_16611;
(statearr_16672_18492[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_16611[(4)]))){
var statearr_16673_18493 = state_16611;
(statearr_16673_18493[(1)] = cljs.core.first((state_16611[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18494 = state_16611;
state_16611 = G__18494;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_16611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_16611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_16675 = f__14336__auto__();
(statearr_16675[(6)] = c__14335__auto___18466);

return statearr_16675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16687 = arguments.length;
switch (G__16687) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14335__auto___18500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_16728){
var state_val_16729 = (state_16728[(1)]);
if((state_val_16729 === (7))){
var inst_16706 = (state_16728[(7)]);
var inst_16706__$1 = (state_16728[(2)]);
var inst_16707 = (inst_16706__$1 == null);
var inst_16708 = cljs.core.not(inst_16707);
var state_16728__$1 = (function (){var statearr_16762 = state_16728;
(statearr_16762[(7)] = inst_16706__$1);

return statearr_16762;
})();
if(inst_16708){
var statearr_16763_18501 = state_16728__$1;
(statearr_16763_18501[(1)] = (8));

} else {
var statearr_16765_18502 = state_16728__$1;
(statearr_16765_18502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (1))){
var inst_16700 = (0);
var state_16728__$1 = (function (){var statearr_16767 = state_16728;
(statearr_16767[(8)] = inst_16700);

return statearr_16767;
})();
var statearr_16769_18503 = state_16728__$1;
(statearr_16769_18503[(2)] = null);

(statearr_16769_18503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (4))){
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16728__$1,(7),ch);
} else {
if((state_val_16729 === (6))){
var inst_16721 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16773_18504 = state_16728__$1;
(statearr_16773_18504[(2)] = inst_16721);

(statearr_16773_18504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (3))){
var inst_16723 = (state_16728[(2)]);
var inst_16725 = cljs.core.async.close_BANG_(out);
var state_16728__$1 = (function (){var statearr_16777 = state_16728;
(statearr_16777[(9)] = inst_16723);

return statearr_16777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16728__$1,inst_16725);
} else {
if((state_val_16729 === (2))){
var inst_16700 = (state_16728[(8)]);
var inst_16703 = (inst_16700 < n);
var state_16728__$1 = state_16728;
if(cljs.core.truth_(inst_16703)){
var statearr_16778_18507 = state_16728__$1;
(statearr_16778_18507[(1)] = (4));

} else {
var statearr_16779_18508 = state_16728__$1;
(statearr_16779_18508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (11))){
var inst_16700 = (state_16728[(8)]);
var inst_16711 = (state_16728[(2)]);
var inst_16712 = (inst_16700 + (1));
var inst_16700__$1 = inst_16712;
var state_16728__$1 = (function (){var statearr_16780 = state_16728;
(statearr_16780[(10)] = inst_16711);

(statearr_16780[(8)] = inst_16700__$1);

return statearr_16780;
})();
var statearr_16781_18515 = state_16728__$1;
(statearr_16781_18515[(2)] = null);

(statearr_16781_18515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (9))){
var state_16728__$1 = state_16728;
var statearr_16783_18516 = state_16728__$1;
(statearr_16783_18516[(2)] = null);

(statearr_16783_18516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (5))){
var state_16728__$1 = state_16728;
var statearr_16784_18517 = state_16728__$1;
(statearr_16784_18517[(2)] = null);

(statearr_16784_18517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (10))){
var inst_16717 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16785_18518 = state_16728__$1;
(statearr_16785_18518[(2)] = inst_16717);

(statearr_16785_18518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (8))){
var inst_16706 = (state_16728[(7)]);
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16728__$1,(11),out,inst_16706);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_16791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16791[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_16791[(1)] = (1));

return statearr_16791;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_16728){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_16728);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e16792){var ex__14145__auto__ = e16792;
var statearr_16794_18538 = state_16728;
(statearr_16794_18538[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_16728[(4)]))){
var statearr_16795_18539 = state_16728;
(statearr_16795_18539[(1)] = cljs.core.first((state_16728[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18544 = state_16728;
state_16728 = G__18544;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_16728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_16728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_16796 = f__14336__auto__();
(statearr_16796[(6)] = c__14335__auto___18500);

return statearr_16796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16822 = (function (f,ch,meta16809,_,fn1,meta16823){
this.f = f;
this.ch = ch;
this.meta16809 = meta16809;
this._ = _;
this.fn1 = fn1;
this.meta16823 = meta16823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16824,meta16823__$1){
var self__ = this;
var _16824__$1 = this;
return (new cljs.core.async.t_cljs$core$async16822(self__.f,self__.ch,self__.meta16809,self__._,self__.fn1,meta16823__$1));
}));

(cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16824){
var self__ = this;
var _16824__$1 = this;
return self__.meta16823;
}));

(cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16801_SHARP_){
var G__16828 = (((p1__16801_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16801_SHARP_) : self__.f.call(null,p1__16801_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16828) : f1.call(null,G__16828));
});
}));

(cljs.core.async.t_cljs$core$async16822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16809","meta16809",-275335132,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16808","cljs.core.async/t_cljs$core$async16808",470178923,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16823","meta16823",-805982157,null)], null);
}));

(cljs.core.async.t_cljs$core$async16822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16822");

(cljs.core.async.t_cljs$core$async16822.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16822.
 */
cljs.core.async.__GT_t_cljs$core$async16822 = (function cljs$core$async$__GT_t_cljs$core$async16822(f,ch,meta16809,_,fn1,meta16823){
return (new cljs.core.async.t_cljs$core$async16822(f,ch,meta16809,_,fn1,meta16823));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16808 = (function (f,ch,meta16809){
this.f = f;
this.ch = ch;
this.meta16809 = meta16809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16810,meta16809__$1){
var self__ = this;
var _16810__$1 = this;
return (new cljs.core.async.t_cljs$core$async16808(self__.f,self__.ch,meta16809__$1));
}));

(cljs.core.async.t_cljs$core$async16808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16810){
var self__ = this;
var _16810__$1 = this;
return self__.meta16809;
}));

(cljs.core.async.t_cljs$core$async16808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16822(self__.f,self__.ch,self__.meta16809,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16839 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16839) : self__.f.call(null,G__16839));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16809","meta16809",-275335132,null)], null);
}));

(cljs.core.async.t_cljs$core$async16808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16808");

(cljs.core.async.t_cljs$core$async16808.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16808.
 */
cljs.core.async.__GT_t_cljs$core$async16808 = (function cljs$core$async$__GT_t_cljs$core$async16808(f,ch,meta16809){
return (new cljs.core.async.t_cljs$core$async16808(f,ch,meta16809));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16808(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16840 = (function (f,ch,meta16841){
this.f = f;
this.ch = ch;
this.meta16841 = meta16841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16842,meta16841__$1){
var self__ = this;
var _16842__$1 = this;
return (new cljs.core.async.t_cljs$core$async16840(self__.f,self__.ch,meta16841__$1));
}));

(cljs.core.async.t_cljs$core$async16840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16842){
var self__ = this;
var _16842__$1 = this;
return self__.meta16841;
}));

(cljs.core.async.t_cljs$core$async16840.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16840.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16840.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16840.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16840.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16840.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16841","meta16841",-1347284566,null)], null);
}));

(cljs.core.async.t_cljs$core$async16840.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16840");

(cljs.core.async.t_cljs$core$async16840.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16840");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16840.
 */
cljs.core.async.__GT_t_cljs$core$async16840 = (function cljs$core$async$__GT_t_cljs$core$async16840(f,ch,meta16841){
return (new cljs.core.async.t_cljs$core$async16840(f,ch,meta16841));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16840(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16861 = (function (p,ch,meta16862){
this.p = p;
this.ch = ch;
this.meta16862 = meta16862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16863,meta16862__$1){
var self__ = this;
var _16863__$1 = this;
return (new cljs.core.async.t_cljs$core$async16861(self__.p,self__.ch,meta16862__$1));
}));

(cljs.core.async.t_cljs$core$async16861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16863){
var self__ = this;
var _16863__$1 = this;
return self__.meta16862;
}));

(cljs.core.async.t_cljs$core$async16861.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16861.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16861.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16861.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16862","meta16862",-577979107,null)], null);
}));

(cljs.core.async.t_cljs$core$async16861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16861");

(cljs.core.async.t_cljs$core$async16861.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16861.
 */
cljs.core.async.__GT_t_cljs$core$async16861 = (function cljs$core$async$__GT_t_cljs$core$async16861(p,ch,meta16862){
return (new cljs.core.async.t_cljs$core$async16861(p,ch,meta16862));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16861(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16869 = arguments.length;
switch (G__16869) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14335__auto___18568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_16894){
var state_val_16895 = (state_16894[(1)]);
if((state_val_16895 === (7))){
var inst_16890 = (state_16894[(2)]);
var state_16894__$1 = state_16894;
var statearr_16897_18569 = state_16894__$1;
(statearr_16897_18569[(2)] = inst_16890);

(statearr_16897_18569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16895 === (1))){
var state_16894__$1 = state_16894;
var statearr_16898_18570 = state_16894__$1;
(statearr_16898_18570[(2)] = null);

(statearr_16898_18570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16895 === (4))){
var inst_16874 = (state_16894[(7)]);
var inst_16874__$1 = (state_16894[(2)]);
var inst_16875 = (inst_16874__$1 == null);
var state_16894__$1 = (function (){var statearr_16902 = state_16894;
(statearr_16902[(7)] = inst_16874__$1);

return statearr_16902;
})();
if(cljs.core.truth_(inst_16875)){
var statearr_16904_18577 = state_16894__$1;
(statearr_16904_18577[(1)] = (5));

} else {
var statearr_16905_18581 = state_16894__$1;
(statearr_16905_18581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16895 === (6))){
var inst_16874 = (state_16894[(7)]);
var inst_16879 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16874) : p.call(null,inst_16874));
var state_16894__$1 = state_16894;
if(cljs.core.truth_(inst_16879)){
var statearr_16906_18582 = state_16894__$1;
(statearr_16906_18582[(1)] = (8));

} else {
var statearr_16907_18583 = state_16894__$1;
(statearr_16907_18583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16895 === (3))){
var inst_16892 = (state_16894[(2)]);
var state_16894__$1 = state_16894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16894__$1,inst_16892);
} else {
if((state_val_16895 === (2))){
var state_16894__$1 = state_16894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16894__$1,(4),ch);
} else {
if((state_val_16895 === (11))){
var inst_16882 = (state_16894[(2)]);
var state_16894__$1 = state_16894;
var statearr_16911_18592 = state_16894__$1;
(statearr_16911_18592[(2)] = inst_16882);

(statearr_16911_18592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16895 === (9))){
var state_16894__$1 = state_16894;
var statearr_16912_18593 = state_16894__$1;
(statearr_16912_18593[(2)] = null);

(statearr_16912_18593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16895 === (5))){
var inst_16877 = cljs.core.async.close_BANG_(out);
var state_16894__$1 = state_16894;
var statearr_16913_18595 = state_16894__$1;
(statearr_16913_18595[(2)] = inst_16877);

(statearr_16913_18595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16895 === (10))){
var inst_16887 = (state_16894[(2)]);
var state_16894__$1 = (function (){var statearr_16914 = state_16894;
(statearr_16914[(8)] = inst_16887);

return statearr_16914;
})();
var statearr_16915_18596 = state_16894__$1;
(statearr_16915_18596[(2)] = null);

(statearr_16915_18596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16895 === (8))){
var inst_16874 = (state_16894[(7)]);
var state_16894__$1 = state_16894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16894__$1,(11),out,inst_16874);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_16919 = [null,null,null,null,null,null,null,null,null];
(statearr_16919[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_16919[(1)] = (1));

return statearr_16919;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_16894){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_16894);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e16920){var ex__14145__auto__ = e16920;
var statearr_16922_18602 = state_16894;
(statearr_16922_18602[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_16894[(4)]))){
var statearr_16924_18603 = state_16894;
(statearr_16924_18603[(1)] = cljs.core.first((state_16894[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18604 = state_16894;
state_16894 = G__18604;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_16894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_16894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_16925 = f__14336__auto__();
(statearr_16925[(6)] = c__14335__auto___18568);

return statearr_16925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16927 = arguments.length;
switch (G__16927) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_17018){
var state_val_17019 = (state_17018[(1)]);
if((state_val_17019 === (7))){
var inst_17013 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17021_18617 = state_17018__$1;
(statearr_17021_18617[(2)] = inst_17013);

(statearr_17021_18617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (20))){
var inst_16978 = (state_17018[(7)]);
var inst_16993 = (state_17018[(2)]);
var inst_16995 = cljs.core.next(inst_16978);
var inst_16958 = inst_16995;
var inst_16959 = null;
var inst_16960 = (0);
var inst_16961 = (0);
var state_17018__$1 = (function (){var statearr_17023 = state_17018;
(statearr_17023[(8)] = inst_16993);

(statearr_17023[(9)] = inst_16958);

(statearr_17023[(10)] = inst_16959);

(statearr_17023[(11)] = inst_16960);

(statearr_17023[(12)] = inst_16961);

return statearr_17023;
})();
var statearr_17025_18621 = state_17018__$1;
(statearr_17025_18621[(2)] = null);

(statearr_17025_18621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (1))){
var state_17018__$1 = state_17018;
var statearr_17027_18622 = state_17018__$1;
(statearr_17027_18622[(2)] = null);

(statearr_17027_18622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (4))){
var inst_16946 = (state_17018[(13)]);
var inst_16946__$1 = (state_17018[(2)]);
var inst_16948 = (inst_16946__$1 == null);
var state_17018__$1 = (function (){var statearr_17032 = state_17018;
(statearr_17032[(13)] = inst_16946__$1);

return statearr_17032;
})();
if(cljs.core.truth_(inst_16948)){
var statearr_17033_18627 = state_17018__$1;
(statearr_17033_18627[(1)] = (5));

} else {
var statearr_17036_18628 = state_17018__$1;
(statearr_17036_18628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (15))){
var state_17018__$1 = state_17018;
var statearr_17041_18629 = state_17018__$1;
(statearr_17041_18629[(2)] = null);

(statearr_17041_18629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (21))){
var state_17018__$1 = state_17018;
var statearr_17042_18640 = state_17018__$1;
(statearr_17042_18640[(2)] = null);

(statearr_17042_18640[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (13))){
var inst_16961 = (state_17018[(12)]);
var inst_16958 = (state_17018[(9)]);
var inst_16959 = (state_17018[(10)]);
var inst_16960 = (state_17018[(11)]);
var inst_16973 = (state_17018[(2)]);
var inst_16974 = (inst_16961 + (1));
var tmp17038 = inst_16960;
var tmp17039 = inst_16959;
var tmp17040 = inst_16958;
var inst_16958__$1 = tmp17040;
var inst_16959__$1 = tmp17039;
var inst_16960__$1 = tmp17038;
var inst_16961__$1 = inst_16974;
var state_17018__$1 = (function (){var statearr_17043 = state_17018;
(statearr_17043[(14)] = inst_16973);

(statearr_17043[(9)] = inst_16958__$1);

(statearr_17043[(10)] = inst_16959__$1);

(statearr_17043[(11)] = inst_16960__$1);

(statearr_17043[(12)] = inst_16961__$1);

return statearr_17043;
})();
var statearr_17044_18645 = state_17018__$1;
(statearr_17044_18645[(2)] = null);

(statearr_17044_18645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (22))){
var state_17018__$1 = state_17018;
var statearr_17045_18646 = state_17018__$1;
(statearr_17045_18646[(2)] = null);

(statearr_17045_18646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (6))){
var inst_16946 = (state_17018[(13)]);
var inst_16956 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16946) : f.call(null,inst_16946));
var inst_16957 = cljs.core.seq(inst_16956);
var inst_16958 = inst_16957;
var inst_16959 = null;
var inst_16960 = (0);
var inst_16961 = (0);
var state_17018__$1 = (function (){var statearr_17051 = state_17018;
(statearr_17051[(9)] = inst_16958);

(statearr_17051[(10)] = inst_16959);

(statearr_17051[(11)] = inst_16960);

(statearr_17051[(12)] = inst_16961);

return statearr_17051;
})();
var statearr_17052_18655 = state_17018__$1;
(statearr_17052_18655[(2)] = null);

(statearr_17052_18655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (17))){
var inst_16978 = (state_17018[(7)]);
var inst_16982 = cljs.core.chunk_first(inst_16978);
var inst_16983 = cljs.core.chunk_rest(inst_16978);
var inst_16984 = cljs.core.count(inst_16982);
var inst_16958 = inst_16983;
var inst_16959 = inst_16982;
var inst_16960 = inst_16984;
var inst_16961 = (0);
var state_17018__$1 = (function (){var statearr_17053 = state_17018;
(statearr_17053[(9)] = inst_16958);

(statearr_17053[(10)] = inst_16959);

(statearr_17053[(11)] = inst_16960);

(statearr_17053[(12)] = inst_16961);

return statearr_17053;
})();
var statearr_17054_18658 = state_17018__$1;
(statearr_17054_18658[(2)] = null);

(statearr_17054_18658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (3))){
var inst_17015 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17018__$1,inst_17015);
} else {
if((state_val_17019 === (12))){
var inst_17003 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17056_18666 = state_17018__$1;
(statearr_17056_18666[(2)] = inst_17003);

(statearr_17056_18666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (2))){
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17018__$1,(4),in$);
} else {
if((state_val_17019 === (23))){
var inst_17011 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17062_18668 = state_17018__$1;
(statearr_17062_18668[(2)] = inst_17011);

(statearr_17062_18668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (19))){
var inst_16998 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17066_18675 = state_17018__$1;
(statearr_17066_18675[(2)] = inst_16998);

(statearr_17066_18675[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (11))){
var inst_16958 = (state_17018[(9)]);
var inst_16978 = (state_17018[(7)]);
var inst_16978__$1 = cljs.core.seq(inst_16958);
var state_17018__$1 = (function (){var statearr_17072 = state_17018;
(statearr_17072[(7)] = inst_16978__$1);

return statearr_17072;
})();
if(inst_16978__$1){
var statearr_17074_18676 = state_17018__$1;
(statearr_17074_18676[(1)] = (14));

} else {
var statearr_17075_18677 = state_17018__$1;
(statearr_17075_18677[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (9))){
var inst_17005 = (state_17018[(2)]);
var inst_17006 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17018__$1 = (function (){var statearr_17083 = state_17018;
(statearr_17083[(15)] = inst_17005);

return statearr_17083;
})();
if(cljs.core.truth_(inst_17006)){
var statearr_17084_18678 = state_17018__$1;
(statearr_17084_18678[(1)] = (21));

} else {
var statearr_17085_18679 = state_17018__$1;
(statearr_17085_18679[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (5))){
var inst_16950 = cljs.core.async.close_BANG_(out);
var state_17018__$1 = state_17018;
var statearr_17086_18680 = state_17018__$1;
(statearr_17086_18680[(2)] = inst_16950);

(statearr_17086_18680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (14))){
var inst_16978 = (state_17018[(7)]);
var inst_16980 = cljs.core.chunked_seq_QMARK_(inst_16978);
var state_17018__$1 = state_17018;
if(inst_16980){
var statearr_17090_18681 = state_17018__$1;
(statearr_17090_18681[(1)] = (17));

} else {
var statearr_17091_18682 = state_17018__$1;
(statearr_17091_18682[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (16))){
var inst_17001 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17096_18683 = state_17018__$1;
(statearr_17096_18683[(2)] = inst_17001);

(statearr_17096_18683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (10))){
var inst_16959 = (state_17018[(10)]);
var inst_16961 = (state_17018[(12)]);
var inst_16971 = cljs.core._nth(inst_16959,inst_16961);
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17018__$1,(13),out,inst_16971);
} else {
if((state_val_17019 === (18))){
var inst_16978 = (state_17018[(7)]);
var inst_16987 = cljs.core.first(inst_16978);
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17018__$1,(20),out,inst_16987);
} else {
if((state_val_17019 === (8))){
var inst_16961 = (state_17018[(12)]);
var inst_16960 = (state_17018[(11)]);
var inst_16964 = (inst_16961 < inst_16960);
var inst_16965 = inst_16964;
var state_17018__$1 = state_17018;
if(cljs.core.truth_(inst_16965)){
var statearr_17098_18700 = state_17018__$1;
(statearr_17098_18700[(1)] = (10));

} else {
var statearr_17099_18701 = state_17018__$1;
(statearr_17099_18701[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14142__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14142__auto____0 = (function (){
var statearr_17103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17103[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14142__auto__);

(statearr_17103[(1)] = (1));

return statearr_17103;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14142__auto____1 = (function (state_17018){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_17018);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e17107){var ex__14145__auto__ = e17107;
var statearr_17108_18706 = state_17018;
(statearr_17108_18706[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_17018[(4)]))){
var statearr_17109_18710 = state_17018;
(statearr_17109_18710[(1)] = cljs.core.first((state_17018[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18711 = state_17018;
state_17018 = G__18711;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14142__auto__ = function(state_17018){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14142__auto____1.call(this,state_17018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14142__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14142__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_17124 = f__14336__auto__();
(statearr_17124[(6)] = c__14335__auto__);

return statearr_17124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));

return c__14335__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17127 = arguments.length;
switch (G__17127) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17140 = arguments.length;
switch (G__17140) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17154 = arguments.length;
switch (G__17154) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14335__auto___18729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_17183){
var state_val_17184 = (state_17183[(1)]);
if((state_val_17184 === (7))){
var inst_17178 = (state_17183[(2)]);
var state_17183__$1 = state_17183;
var statearr_17194_18730 = state_17183__$1;
(statearr_17194_18730[(2)] = inst_17178);

(statearr_17194_18730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (1))){
var inst_17157 = null;
var state_17183__$1 = (function (){var statearr_17195 = state_17183;
(statearr_17195[(7)] = inst_17157);

return statearr_17195;
})();
var statearr_17196_18734 = state_17183__$1;
(statearr_17196_18734[(2)] = null);

(statearr_17196_18734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (4))){
var inst_17163 = (state_17183[(8)]);
var inst_17163__$1 = (state_17183[(2)]);
var inst_17164 = (inst_17163__$1 == null);
var inst_17165 = cljs.core.not(inst_17164);
var state_17183__$1 = (function (){var statearr_17209 = state_17183;
(statearr_17209[(8)] = inst_17163__$1);

return statearr_17209;
})();
if(inst_17165){
var statearr_17210_18739 = state_17183__$1;
(statearr_17210_18739[(1)] = (5));

} else {
var statearr_17213_18740 = state_17183__$1;
(statearr_17213_18740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (6))){
var state_17183__$1 = state_17183;
var statearr_17215_18741 = state_17183__$1;
(statearr_17215_18741[(2)] = null);

(statearr_17215_18741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (3))){
var inst_17180 = (state_17183[(2)]);
var inst_17181 = cljs.core.async.close_BANG_(out);
var state_17183__$1 = (function (){var statearr_17216 = state_17183;
(statearr_17216[(9)] = inst_17180);

return statearr_17216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17183__$1,inst_17181);
} else {
if((state_val_17184 === (2))){
var state_17183__$1 = state_17183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17183__$1,(4),ch);
} else {
if((state_val_17184 === (11))){
var inst_17163 = (state_17183[(8)]);
var inst_17172 = (state_17183[(2)]);
var inst_17157 = inst_17163;
var state_17183__$1 = (function (){var statearr_17221 = state_17183;
(statearr_17221[(10)] = inst_17172);

(statearr_17221[(7)] = inst_17157);

return statearr_17221;
})();
var statearr_17222_18748 = state_17183__$1;
(statearr_17222_18748[(2)] = null);

(statearr_17222_18748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (9))){
var inst_17163 = (state_17183[(8)]);
var state_17183__$1 = state_17183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17183__$1,(11),out,inst_17163);
} else {
if((state_val_17184 === (5))){
var inst_17163 = (state_17183[(8)]);
var inst_17157 = (state_17183[(7)]);
var inst_17167 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17163,inst_17157);
var state_17183__$1 = state_17183;
if(inst_17167){
var statearr_17229_18753 = state_17183__$1;
(statearr_17229_18753[(1)] = (8));

} else {
var statearr_17230_18754 = state_17183__$1;
(statearr_17230_18754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (10))){
var inst_17175 = (state_17183[(2)]);
var state_17183__$1 = state_17183;
var statearr_17231_18759 = state_17183__$1;
(statearr_17231_18759[(2)] = inst_17175);

(statearr_17231_18759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (8))){
var inst_17157 = (state_17183[(7)]);
var tmp17227 = inst_17157;
var inst_17157__$1 = tmp17227;
var state_17183__$1 = (function (){var statearr_17232 = state_17183;
(statearr_17232[(7)] = inst_17157__$1);

return statearr_17232;
})();
var statearr_17233_18761 = state_17183__$1;
(statearr_17233_18761[(2)] = null);

(statearr_17233_18761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_17234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17234[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_17234[(1)] = (1));

return statearr_17234;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_17183){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_17183);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e17240){var ex__14145__auto__ = e17240;
var statearr_17241_18765 = state_17183;
(statearr_17241_18765[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_17183[(4)]))){
var statearr_17242_18766 = state_17183;
(statearr_17242_18766[(1)] = cljs.core.first((state_17183[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18768 = state_17183;
state_17183 = G__18768;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_17183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_17183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_17246 = f__14336__auto__();
(statearr_17246[(6)] = c__14335__auto___18729);

return statearr_17246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17248 = arguments.length;
switch (G__17248) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14335__auto___18773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_17293){
var state_val_17294 = (state_17293[(1)]);
if((state_val_17294 === (7))){
var inst_17288 = (state_17293[(2)]);
var state_17293__$1 = state_17293;
var statearr_17296_18774 = state_17293__$1;
(statearr_17296_18774[(2)] = inst_17288);

(statearr_17296_18774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (1))){
var inst_17253 = (new Array(n));
var inst_17254 = inst_17253;
var inst_17255 = (0);
var state_17293__$1 = (function (){var statearr_17297 = state_17293;
(statearr_17297[(7)] = inst_17254);

(statearr_17297[(8)] = inst_17255);

return statearr_17297;
})();
var statearr_17298_18775 = state_17293__$1;
(statearr_17298_18775[(2)] = null);

(statearr_17298_18775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (4))){
var inst_17258 = (state_17293[(9)]);
var inst_17258__$1 = (state_17293[(2)]);
var inst_17259 = (inst_17258__$1 == null);
var inst_17260 = cljs.core.not(inst_17259);
var state_17293__$1 = (function (){var statearr_17299 = state_17293;
(statearr_17299[(9)] = inst_17258__$1);

return statearr_17299;
})();
if(inst_17260){
var statearr_17300_18776 = state_17293__$1;
(statearr_17300_18776[(1)] = (5));

} else {
var statearr_17301_18777 = state_17293__$1;
(statearr_17301_18777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (15))){
var inst_17280 = (state_17293[(2)]);
var state_17293__$1 = state_17293;
var statearr_17302_18778 = state_17293__$1;
(statearr_17302_18778[(2)] = inst_17280);

(statearr_17302_18778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (13))){
var state_17293__$1 = state_17293;
var statearr_17305_18779 = state_17293__$1;
(statearr_17305_18779[(2)] = null);

(statearr_17305_18779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (6))){
var inst_17255 = (state_17293[(8)]);
var inst_17276 = (inst_17255 > (0));
var state_17293__$1 = state_17293;
if(cljs.core.truth_(inst_17276)){
var statearr_17306_18784 = state_17293__$1;
(statearr_17306_18784[(1)] = (12));

} else {
var statearr_17307_18785 = state_17293__$1;
(statearr_17307_18785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (3))){
var inst_17290 = (state_17293[(2)]);
var state_17293__$1 = state_17293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17293__$1,inst_17290);
} else {
if((state_val_17294 === (12))){
var inst_17254 = (state_17293[(7)]);
var inst_17278 = cljs.core.vec(inst_17254);
var state_17293__$1 = state_17293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17293__$1,(15),out,inst_17278);
} else {
if((state_val_17294 === (2))){
var state_17293__$1 = state_17293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17293__$1,(4),ch);
} else {
if((state_val_17294 === (11))){
var inst_17270 = (state_17293[(2)]);
var inst_17271 = (new Array(n));
var inst_17254 = inst_17271;
var inst_17255 = (0);
var state_17293__$1 = (function (){var statearr_17311 = state_17293;
(statearr_17311[(10)] = inst_17270);

(statearr_17311[(7)] = inst_17254);

(statearr_17311[(8)] = inst_17255);

return statearr_17311;
})();
var statearr_17313_18794 = state_17293__$1;
(statearr_17313_18794[(2)] = null);

(statearr_17313_18794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (9))){
var inst_17254 = (state_17293[(7)]);
var inst_17268 = cljs.core.vec(inst_17254);
var state_17293__$1 = state_17293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17293__$1,(11),out,inst_17268);
} else {
if((state_val_17294 === (5))){
var inst_17254 = (state_17293[(7)]);
var inst_17255 = (state_17293[(8)]);
var inst_17258 = (state_17293[(9)]);
var inst_17263 = (state_17293[(11)]);
var inst_17262 = (inst_17254[inst_17255] = inst_17258);
var inst_17263__$1 = (inst_17255 + (1));
var inst_17264 = (inst_17263__$1 < n);
var state_17293__$1 = (function (){var statearr_17315 = state_17293;
(statearr_17315[(12)] = inst_17262);

(statearr_17315[(11)] = inst_17263__$1);

return statearr_17315;
})();
if(cljs.core.truth_(inst_17264)){
var statearr_17316_18804 = state_17293__$1;
(statearr_17316_18804[(1)] = (8));

} else {
var statearr_17317_18806 = state_17293__$1;
(statearr_17317_18806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (14))){
var inst_17284 = (state_17293[(2)]);
var inst_17286 = cljs.core.async.close_BANG_(out);
var state_17293__$1 = (function (){var statearr_17319 = state_17293;
(statearr_17319[(13)] = inst_17284);

return statearr_17319;
})();
var statearr_17320_18812 = state_17293__$1;
(statearr_17320_18812[(2)] = inst_17286);

(statearr_17320_18812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (10))){
var inst_17274 = (state_17293[(2)]);
var state_17293__$1 = state_17293;
var statearr_17321_18816 = state_17293__$1;
(statearr_17321_18816[(2)] = inst_17274);

(statearr_17321_18816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17294 === (8))){
var inst_17254 = (state_17293[(7)]);
var inst_17263 = (state_17293[(11)]);
var tmp17318 = inst_17254;
var inst_17254__$1 = tmp17318;
var inst_17255 = inst_17263;
var state_17293__$1 = (function (){var statearr_17322 = state_17293;
(statearr_17322[(7)] = inst_17254__$1);

(statearr_17322[(8)] = inst_17255);

return statearr_17322;
})();
var statearr_17323_18821 = state_17293__$1;
(statearr_17323_18821[(2)] = null);

(statearr_17323_18821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_17328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17328[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_17328[(1)] = (1));

return statearr_17328;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_17293){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_17293);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e17329){var ex__14145__auto__ = e17329;
var statearr_17330_18832 = state_17293;
(statearr_17330_18832[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_17293[(4)]))){
var statearr_17331_18833 = state_17293;
(statearr_17331_18833[(1)] = cljs.core.first((state_17293[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18835 = state_17293;
state_17293 = G__18835;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_17293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_17293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_17336 = f__14336__auto__();
(statearr_17336[(6)] = c__14335__auto___18773);

return statearr_17336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17338 = arguments.length;
switch (G__17338) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14335__auto___18844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14336__auto__ = (function (){var switch__14141__auto__ = (function (state_17397){
var state_val_17398 = (state_17397[(1)]);
if((state_val_17398 === (7))){
var inst_17393 = (state_17397[(2)]);
var state_17397__$1 = state_17397;
var statearr_17402_18845 = state_17397__$1;
(statearr_17402_18845[(2)] = inst_17393);

(statearr_17402_18845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (1))){
var inst_17344 = [];
var inst_17345 = inst_17344;
var inst_17346 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17397__$1 = (function (){var statearr_17407 = state_17397;
(statearr_17407[(7)] = inst_17345);

(statearr_17407[(8)] = inst_17346);

return statearr_17407;
})();
var statearr_17408_18848 = state_17397__$1;
(statearr_17408_18848[(2)] = null);

(statearr_17408_18848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (4))){
var inst_17355 = (state_17397[(9)]);
var inst_17355__$1 = (state_17397[(2)]);
var inst_17356 = (inst_17355__$1 == null);
var inst_17357 = cljs.core.not(inst_17356);
var state_17397__$1 = (function (){var statearr_17409 = state_17397;
(statearr_17409[(9)] = inst_17355__$1);

return statearr_17409;
})();
if(inst_17357){
var statearr_17411_18858 = state_17397__$1;
(statearr_17411_18858[(1)] = (5));

} else {
var statearr_17412_18859 = state_17397__$1;
(statearr_17412_18859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (15))){
var inst_17345 = (state_17397[(7)]);
var inst_17385 = cljs.core.vec(inst_17345);
var state_17397__$1 = state_17397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17397__$1,(18),out,inst_17385);
} else {
if((state_val_17398 === (13))){
var inst_17380 = (state_17397[(2)]);
var state_17397__$1 = state_17397;
var statearr_17413_18860 = state_17397__$1;
(statearr_17413_18860[(2)] = inst_17380);

(statearr_17413_18860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (6))){
var inst_17345 = (state_17397[(7)]);
var inst_17382 = inst_17345.length;
var inst_17383 = (inst_17382 > (0));
var state_17397__$1 = state_17397;
if(cljs.core.truth_(inst_17383)){
var statearr_17414_18861 = state_17397__$1;
(statearr_17414_18861[(1)] = (15));

} else {
var statearr_17415_18862 = state_17397__$1;
(statearr_17415_18862[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (17))){
var inst_17390 = (state_17397[(2)]);
var inst_17391 = cljs.core.async.close_BANG_(out);
var state_17397__$1 = (function (){var statearr_17416 = state_17397;
(statearr_17416[(10)] = inst_17390);

return statearr_17416;
})();
var statearr_17417_18866 = state_17397__$1;
(statearr_17417_18866[(2)] = inst_17391);

(statearr_17417_18866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (3))){
var inst_17395 = (state_17397[(2)]);
var state_17397__$1 = state_17397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17397__$1,inst_17395);
} else {
if((state_val_17398 === (12))){
var inst_17345 = (state_17397[(7)]);
var inst_17372 = cljs.core.vec(inst_17345);
var state_17397__$1 = state_17397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17397__$1,(14),out,inst_17372);
} else {
if((state_val_17398 === (2))){
var state_17397__$1 = state_17397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17397__$1,(4),ch);
} else {
if((state_val_17398 === (11))){
var inst_17345 = (state_17397[(7)]);
var inst_17355 = (state_17397[(9)]);
var inst_17360 = (state_17397[(11)]);
var inst_17369 = inst_17345.push(inst_17355);
var tmp17418 = inst_17345;
var inst_17345__$1 = tmp17418;
var inst_17346 = inst_17360;
var state_17397__$1 = (function (){var statearr_17424 = state_17397;
(statearr_17424[(12)] = inst_17369);

(statearr_17424[(7)] = inst_17345__$1);

(statearr_17424[(8)] = inst_17346);

return statearr_17424;
})();
var statearr_17425_18873 = state_17397__$1;
(statearr_17425_18873[(2)] = null);

(statearr_17425_18873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (9))){
var inst_17346 = (state_17397[(8)]);
var inst_17365 = cljs.core.keyword_identical_QMARK_(inst_17346,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17397__$1 = state_17397;
var statearr_17426_18877 = state_17397__$1;
(statearr_17426_18877[(2)] = inst_17365);

(statearr_17426_18877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (5))){
var inst_17355 = (state_17397[(9)]);
var inst_17360 = (state_17397[(11)]);
var inst_17346 = (state_17397[(8)]);
var inst_17362 = (state_17397[(13)]);
var inst_17360__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17355) : f.call(null,inst_17355));
var inst_17362__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17360__$1,inst_17346);
var state_17397__$1 = (function (){var statearr_17428 = state_17397;
(statearr_17428[(11)] = inst_17360__$1);

(statearr_17428[(13)] = inst_17362__$1);

return statearr_17428;
})();
if(inst_17362__$1){
var statearr_17429_18887 = state_17397__$1;
(statearr_17429_18887[(1)] = (8));

} else {
var statearr_17430_18890 = state_17397__$1;
(statearr_17430_18890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (14))){
var inst_17355 = (state_17397[(9)]);
var inst_17360 = (state_17397[(11)]);
var inst_17374 = (state_17397[(2)]);
var inst_17376 = [];
var inst_17377 = inst_17376.push(inst_17355);
var inst_17345 = inst_17376;
var inst_17346 = inst_17360;
var state_17397__$1 = (function (){var statearr_17431 = state_17397;
(statearr_17431[(14)] = inst_17374);

(statearr_17431[(15)] = inst_17377);

(statearr_17431[(7)] = inst_17345);

(statearr_17431[(8)] = inst_17346);

return statearr_17431;
})();
var statearr_17438_18893 = state_17397__$1;
(statearr_17438_18893[(2)] = null);

(statearr_17438_18893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (16))){
var state_17397__$1 = state_17397;
var statearr_17439_18954 = state_17397__$1;
(statearr_17439_18954[(2)] = null);

(statearr_17439_18954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (10))){
var inst_17367 = (state_17397[(2)]);
var state_17397__$1 = state_17397;
if(cljs.core.truth_(inst_17367)){
var statearr_17440_18956 = state_17397__$1;
(statearr_17440_18956[(1)] = (11));

} else {
var statearr_17441_18958 = state_17397__$1;
(statearr_17441_18958[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (18))){
var inst_17387 = (state_17397[(2)]);
var state_17397__$1 = state_17397;
var statearr_17445_18961 = state_17397__$1;
(statearr_17445_18961[(2)] = inst_17387);

(statearr_17445_18961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17398 === (8))){
var inst_17362 = (state_17397[(13)]);
var state_17397__$1 = state_17397;
var statearr_17446_18962 = state_17397__$1;
(statearr_17446_18962[(2)] = inst_17362);

(statearr_17446_18962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14142__auto__ = null;
var cljs$core$async$state_machine__14142__auto____0 = (function (){
var statearr_17447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17447[(0)] = cljs$core$async$state_machine__14142__auto__);

(statearr_17447[(1)] = (1));

return statearr_17447;
});
var cljs$core$async$state_machine__14142__auto____1 = (function (state_17397){
while(true){
var ret_value__14143__auto__ = (function (){try{while(true){
var result__14144__auto__ = switch__14141__auto__(state_17397);
if(cljs.core.keyword_identical_QMARK_(result__14144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14144__auto__;
}
break;
}
}catch (e17448){var ex__14145__auto__ = e17448;
var statearr_17449_18971 = state_17397;
(statearr_17449_18971[(2)] = ex__14145__auto__);


if(cljs.core.seq((state_17397[(4)]))){
var statearr_17450_18973 = state_17397;
(statearr_17450_18973[(1)] = cljs.core.first((state_17397[(4)])));

} else {
throw ex__14145__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18975 = state_17397;
state_17397 = G__18975;
continue;
} else {
return ret_value__14143__auto__;
}
break;
}
});
cljs$core$async$state_machine__14142__auto__ = function(state_17397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14142__auto____1.call(this,state_17397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14142__auto____0;
cljs$core$async$state_machine__14142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14142__auto____1;
return cljs$core$async$state_machine__14142__auto__;
})()
})();
var state__14337__auto__ = (function (){var statearr_17453 = f__14336__auto__();
(statearr_17453[(6)] = c__14335__auto___18844);

return statearr_17453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14337__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
