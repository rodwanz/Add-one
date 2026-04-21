goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__22467 = e.target.readyState;
var fexpr__22466 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__22466.cljs$core$IFn$_invoke$arity$1 ? fexpr__22466.cljs$core$IFn$_invoke$arity$1(G__22467) : fexpr__22466.call(null,G__22467));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(next));
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22485,handler){
var map__22486 = p__22485;
var map__22486__$1 = cljs.core.__destructure_map(map__22486);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22486__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22486__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__22484_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__22484_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5825__auto___22503 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5825__auto___22503)){
var response_type_22504 = temp__5825__auto___22503;
(this$__$1.responseType = cljs.core.name(response_type_22504));
} else {
}

var seq__22487_22505 = cljs.core.seq(headers);
var chunk__22488_22506 = null;
var count__22489_22507 = (0);
var i__22490_22508 = (0);
while(true){
if((i__22490_22508 < count__22489_22507)){
var vec__22497_22509 = chunk__22488_22506.cljs$core$IIndexed$_nth$arity$2(null,i__22490_22508);
var k_22510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497_22509,(0),null);
var v_22511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497_22509,(1),null);
this$__$1.setRequestHeader(k_22510,v_22511);


var G__22512 = seq__22487_22505;
var G__22513 = chunk__22488_22506;
var G__22514 = count__22489_22507;
var G__22515 = (i__22490_22508 + (1));
seq__22487_22505 = G__22512;
chunk__22488_22506 = G__22513;
count__22489_22507 = G__22514;
i__22490_22508 = G__22515;
continue;
} else {
var temp__5825__auto___22516 = cljs.core.seq(seq__22487_22505);
if(temp__5825__auto___22516){
var seq__22487_22517__$1 = temp__5825__auto___22516;
if(cljs.core.chunked_seq_QMARK_(seq__22487_22517__$1)){
var c__5673__auto___22518 = cljs.core.chunk_first(seq__22487_22517__$1);
var G__22519 = cljs.core.chunk_rest(seq__22487_22517__$1);
var G__22520 = c__5673__auto___22518;
var G__22521 = cljs.core.count(c__5673__auto___22518);
var G__22522 = (0);
seq__22487_22505 = G__22519;
chunk__22488_22506 = G__22520;
count__22489_22507 = G__22521;
i__22490_22508 = G__22522;
continue;
} else {
var vec__22500_22523 = cljs.core.first(seq__22487_22517__$1);
var k_22524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500_22523,(0),null);
var v_22525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22500_22523,(1),null);
this$__$1.setRequestHeader(k_22524,v_22525);


var G__22526 = cljs.core.next(seq__22487_22517__$1);
var G__22527 = null;
var G__22528 = (0);
var G__22529 = (0);
seq__22487_22505 = G__22526;
chunk__22488_22506 = G__22527;
count__22489_22507 = G__22528;
i__22490_22508 = G__22529;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5142__auto__ = body;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
