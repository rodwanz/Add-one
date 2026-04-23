goog.provide('add_one.frontend.frontend');
if((typeof add_one !== 'undefined') && (typeof add_one.frontend !== 'undefined') && (typeof add_one.frontend.frontend !== 'undefined') && (typeof add_one.frontend.frontend.app_state !== 'undefined')){
} else {
add_one.frontend.frontend.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null));
}
add_one.frontend.frontend.load_counter = (function add_one$frontend$frontend$load_counter(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/api/counter",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11965_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(add_one.frontend.frontend.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__11965_SHARP_));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__11966_SHARP_){
return console.error("Error:",p1__11966_SHARP_);
})], null)], 0));
});
add_one.frontend.frontend.add_one = (function add_one$frontend$frontend$add_one(){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/api/increment",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11967_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(add_one.frontend.frontend.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__11967_SHARP_));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__11968_SHARP_){
return console.error("Error:",p1__11968_SHARP_);
})], null)], 0));
});
add_one.frontend.frontend.app = (function add_one$frontend$frontend$app(){
var map__11969 = cljs.core.deref(add_one.frontend.frontend.app_state);
var map__11969__$1 = cljs.core.__destructure_map(map__11969);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11969__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(""+"Current value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),add_one.frontend.frontend.add_one,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Add +1"], null)], null);
});
add_one.frontend.frontend.start = (function add_one$frontend$frontend$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [add_one.frontend.frontend.app], null),document.getElementById("app"));
});
add_one.frontend.frontend.init = (function add_one$frontend$frontend$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["App started"], 0));

add_one.frontend.frontend.load_counter();

return add_one.frontend.frontend.start();
});
add_one.frontend.frontend.init();

//# sourceMappingURL=add_one.frontend.frontend.js.map
