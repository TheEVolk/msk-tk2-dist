(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c470d4bc"],{"13d5":function(t,e,a){"use strict";var n=a("23e7"),i=a("d58f").left,s=a("a640"),r=a("ae40"),c=s("reduce"),l=r("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"2bfd":function(t,e,a){},"37fa":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("TabContent",[t.error?a("v-overlay",{attrs:{"z-index":1}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Произошла ошибка")]),a("v-card-text",[t._v(t._s(t.error.message))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""}},[t._v(" Обновить ")])],1)],1)],1):a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-card",[a("v-card-text",[a("v-progress-linear",{attrs:{color:"deep-purple accent-4",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],1)],1)],1)},i=[],s=a("2141"),r={components:{TabContent:s["a"]},props:["error","tab"],watch:{error:function(){this.error&&this.tab&&(this.tab.color="red")}}},c=r,l=a("2877"),o=a("6544"),u=a.n(o),d=a("8336"),h=a("b0af"),p=a("99d9"),m=a("62ad"),v=a("a523"),f=a("a797"),y=a("8e36"),b=a("0fd9"),I=a("2fa4"),g=Object(l["a"])(c,n,i,!1,null,null,null);e["a"]=g.exports;u()(g,{VBtn:d["a"],VCard:h["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:m["a"],VContainer:v["a"],VOverlay:f["a"],VProgressLinear:y["a"],VRow:b["a"],VSpacer:I["a"]})},"4a63":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("MyDialog",{attrs:{title:"Зачислить средства"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[t._t("activator",null,null,{attrs:n,on:a})]}}],null,!0)},[a("v-card-text",[a("v-text-field",{attrs:{label:"ID"},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),a("v-text-field",{attrs:{autofocus:"",prefix:"₽",type:"number",label:"Количество"},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}),t.count>=0?a("v-checkbox",{attrs:{label:"Отправить счёт на почту"},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}):t._e(),t.count>=0?a("v-checkbox",{attrs:{label:"Зачислить счёт на баланс"},model:{value:t.setpaid,callback:function(e){t.setpaid=e},expression:"setpaid"}}):t._e(),t.count<0?a("v-text-field",{attrs:{label:"Название"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}):t._e()],1),a("v-card-actions",[a("v-btn",{attrs:{loading:t.loading,disabled:Number.isNaN(parseFloat(t.count)),color:"primary"},on:{click:t.payIn}},[t._v("Зачислить")])],1)],1)},i=[],s=(a("99af"),a("b0c0"),a("d3b7"),a("25f0"),a("96cf"),a("1da1")),r=a("a34a"),c=a.n(r),l=a("f0c0"),o=a("1c46"),u=a.n(o),d={components:{MyDialog:l["a"]},props:["userId"],data:function(){return{id:"",checkbox:!1,setpaid:!0,count:0,loading:!1,payment:null,paymentId:null,name:"-"}},mounted:function(){this.id=this.userId||""},methods:{payIn:function(){var t=this;return Object(s["a"])(c.a.mark((function e(){var a,n,i;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,e.prev=1,!(t.count<0)){e.next=13;break}return a=new Date(Date.now()-(new Date).getTimezoneOffset()+108e5),e.next=6,t.api.func("subaccount.expense.edit",{plid:t.id,amount:-parseFloat(t.count),cdate:"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate()),name_ru:t.name,name:t.name,postpaid:"off",clicked_button:"ok",sok:"ok"});case 6:if(n=e.sent,t.loading=!1,!n.error){e.next=11;break}return alert("Ошибка: "+n.error.msg),e.abrupt("return");case 11:return alert("Расход создан. [".concat(n.doc.plid,"]")),e.abrupt("return");case 13:return e.next=15,t.api.func("payment.add.pay",{plid:t.id,amount_currency:"".concat(parseFloat(t.count)," RUB"),processquickpayment:"off",customer_account:t.id,payment_currency:"126",paymethod:"7",project:"1",randomnumber:u.a.randomBytes(4).toString("hex"),amount:parseFloat(t.count),clicked_button:t.checkbox?"finish_adm_send":"finish_adm",progressid:"false",sok:"ok"});case 15:if(t.payment=e.sent,t.paymentId=t.payment.payment_id["#text"]||t.payment.payment_id,t.setpaid){e.next=21;break}return t.loading=!1,alert("Платёж создан, но не зачислен. [".concat(t.paymentId,"]")),e.abrupt("return");case 21:return e.next=23,t.api.func("payment.setpaid",{elid:t.paymentId});case 23:i=e.sent,console.log("setpaid",i),t.loading=!1,t.count=0,alert("Платёж зачислен. [".concat(t.paymentId,"]")),e.next=35;break;case 30:e.prev=30,e.t0=e["catch"](1),t.loading=!1,alert("Во время зачисления платежа произошла ошибка\n".concat(e.t0.message)),t.payment&&alert("Платёж создан, но не зачислен. [".concat(t.paymentId,"]"));case 35:case"end":return e.stop()}}),e,null,[[1,30]])})))()}}},h=d,p=a("2877"),m=a("6544"),v=a.n(m),f=a("8336"),y=a("99d9"),b=a("ac7c"),I=a("8654"),g=Object(p["a"])(h,n,i,!1,null,null,null);e["a"]=g.exports;v()(g,{VBtn:f["a"],VCardActions:y["a"],VCardText:y["c"],VCheckbox:b["a"],VTextField:I["a"]})},"55b8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.account?a("TabContent",{scopedSlots:t._u([{key:"rightSidebar",fn:function(){return[a("Actions",{attrs:{account:t.account,tab:t.value}})]},proxy:!0}],null,!1,1183008457)},[a("AppBar",{attrs:{account:t.account,tab:t.value}}),a("v-row",{staticStyle:{padding:"10px","overflow-y":"auto","max-height":"100%"}},[a("Payments",{attrs:{account:t.account}}),a("Tickets",{attrs:{account:t.account}})],1)],1):a("TabContentLoading",{attrs:{error:t.error}})},i=[],s=(a("b0c0"),a("96cf"),a("1da1")),r=a("a34a"),c=a.n(r),l=a("2141"),o=a("37fa"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item",{on:{click:function(e){return t.platform.openUrl("https://my.msk.host/billmgr?startform=account&id="+t.account.id+"&filter=on")}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-link")])],1),a("v-list-item-title",[t._v("Открыть в панели")])],1),a("PayIn",{attrs:{userId:t.account.id},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-list-item",t._g(t._b({},"v-list-item",i,!1),n),[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cash-100")])],1),a("v-list-item-title",[t._v("Зачислить средства")])],1)]}}])}),a("GiveService",{attrs:{account:t.account,tab:t.tab}})],1)},d=[],h=(a("ac1f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("MyDialog",{attrs:{width:"500px",title:"Выдать услугу"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-list-item",t._g(t._b({},"v-list-item",i,!1),n),[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account-arrow-left")])],1),a("v-list-item-title",[t._v("Выдать услугу")])],1)]}}])},[a("v-card-text",[a("v-select",{attrs:{items:t.types?t.types.map((function(t){return t.desc})):[],loading:null===t.types,label:"Выберите тип услуги"},model:{value:t.selectedTypeName,callback:function(e){t.selectedTypeName=e},expression:"selectedTypeName"}}),a("v-autocomplete",{attrs:{items:t.pricelist?t.pricelist.map((function(t){return t.name_ru})):[],loading:null===t.pricelist,label:"Выберите услугу"},model:{value:t.selectedItemName,callback:function(e){t.selectedItemName=e},expression:"selectedItemName"}}),t.selectedItem?a("div",[a("div",[t._v("ID: "+t._s(t.selectedItem.id))]),a("div",[t._v("Цены: "+t._s(t.api.forceArray(t.selectedItem.price.period).map((function(t){return t["#text"]+" = "+t.attr["@_cost"]+"₽"})).join(", ")))]),a("h3",[t._v("Параметры заказа")]),t._l(t.selectedItem.itemtypeparam,(function(e){return a("GiveServiceInput",{key:e.id,attrs:{item:e,container:t.params}})}))],2):t._e(),a("h3",[t._v("Дополнительно")]),a("v-text-field",{attrs:{dense:"",label:"Удалённый ID для реселлера"},model:{value:t.remoteid,callback:function(e){t.remoteid=e},expression:"remoteid"}}),a("v-checkbox",{attrs:{dense:"",label:"Бесплатно оплатить сервер"},model:{value:t.payAuto,callback:function(e){t.payAuto=e},expression:"payAuto"}}),a("v-select",{attrs:{items:[0,-50,1,3,6,12],label:"Период оплаты"},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:t.order}},[t._v("Заказать")])],1)],1)}),p=[],m=(a("99af"),a("4de4"),a("7db0"),a("d3b7"),a("25f0"),a("5530")),v=a("1c46"),f=a.n(v),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 1===t.item.inputtype?a("v-select",{attrs:{dense:"",hint:t.item.hint_ru,label:t.item.name_ru,items:t.item.itemtypeparamvalue.map((function(t){return t.name_ru}))},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}):a("v-text-field",{attrs:{dense:"",label:t.item.name_ru},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},b=[],I={props:["item","container"],data:function(){return{value:""}},mounted:function(){this.value=this.defaultvalue},watch:{value:function(){var t=this.value;if(1===this.item.inputtype){var e=this.item.itemtypeparamvalue.find((function(e){return e.name_ru===t}));t=e&&e.intname}t?this.container[this.item.intname]=t:delete this.container[this.item.intname]}}},g=I,x=a("2877"),_=a("6544"),k=a.n(_),S=a("b974"),V=a("8654"),C=Object(x["a"])(g,y,b,!1,null,null,null),w=C.exports;k()(C,{VSelect:S["a"],VTextField:V["a"]});var D=a("f0c0"),T={components:{GiveServiceInput:w,MyDialog:D["a"]},props:["account","tab"],data:function(){return{data:null,params:{},period:1,selectedTypeName:"Виртуальный сервер",selectedItemName:"",payAuto:!1,remoteid:""}},mounted:function(){return Object(s["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{order:function(){var t=this;return Object(s["a"])(c.a.mark((function e(){var a,n,i,s;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.selectedItem.itemtype_info.intname,e.next=3,t.api.func("".concat(a,".order.param"),Object(m["a"])({su:t.api.emailByName(t.account.name),pricelist:t.selectedItem.id,datacenter:t.selectedItem.datacenter.id,period:t.period,sok:"ok",remoteid:t.remoteid},t.params));case 3:n=e.sent,i=n["billorder.id"]["#text"]||n["billorder.id"],s=n["id"]["#text"]||n["id"],console.log("Заказ:",n),alert("ID заказа: ".concat(i,", ID сервера: ").concat(s,", Цена: ").concat(n.itemdesc.main.cost)),t.tabMgr.open("Service",{elId:s},!1),t.payAuto&&t.payServer(i,s,n.itemdesc.main.cost);case 10:case"end":return e.stop()}}),e)})))()},payServer:function(t,e,a){var n=this;return Object(s["a"])(c.a.mark((function e(){var i,s,r;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.api.func("payment.add.pay",{billorder:t,plid:n.account.id,amount_currency:"".concat(parseFloat(a)," RUB"),processquickpayment:"off",customer_account:n.account.id,payment_currency:"126",paymethod:"7",project:"1",randomnumber:f.a.randomBytes(4).toString("hex"),amount:parseFloat(a),clicked_button:"finish_adm",progressid:"false",sok:"ok"}).catch((function(t){return alert(t.message)}));case 2:if(i=e.sent,i){e.next=5;break}return e.abrupt("return");case 5:return console.log("payment",i),s=i.payment_id["#text"]||i.payment_id,e.next=9,n.api.func("payment.setpaid",{elid:s});case 9:r=e.sent,console.log("setpaid",r),alert("Зачислен платёж [".concat(s,"]"));case 12:case"end":return e.stop()}}),e)})))()}},computed:{selectedType:function(){var t=this;if(!this.types)return 0;var e=this.types.find((function(e){return e.desc===t.selectedTypeName}));return e.id},pricelist:function(){var t=this;return this.allPricelist&&this.allPricelist.filter((function(e){return e.itemtype===t.selectedType}))},selectedItem:function(){var t=this;return this.allPricelist&&this.allPricelist.find((function(e){return e.name_ru===t.selectedItemName}))}},asyncComputed:{types:function(){return this.api.array("service.order.itemtype",{su:this.api.emailByName(this.account.name)})},allPricelist:function(){return this.api.func("pricelist.export",{su:this.api.emailByName(this.account.name),onlyavailable:"On"}).then((function(t){return t.pricelist}))}}},A=T,O=a("c6a6"),$=a("8336"),j=a("99d9"),F=a("ac7c"),B=a("132d"),M=a("da13"),P=a("34c3"),L=a("5d23"),E=Object(x["a"])(A,h,p,!1,null,null,null),N=E.exports;k()(E,{VAutocomplete:O["a"],VBtn:$["a"],VCardActions:j["a"],VCardText:j["c"],VCheckbox:F["a"],VIcon:B["a"],VListItem:M["a"],VListItemIcon:P["a"],VListItemTitle:L["c"],VSelect:S["a"],VTextField:V["a"]});var R=a("4a63"),z={components:{GiveService:N,PayIn:R["a"]},props:["account","tab"],data:function(){return{}},methods:{openWindow:function(){var t=this;return Object(s["a"])(c.a.mark((function e(){var a;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.api.exec("gotoserver",{elid:t.service.elid}).catch((function(){return!1}));case 2:a=e.sent,a||alert("У этой услуги нет панели управления или она не работает."),ipcRenderer.invoke("open-panel-window",a.ok,t.service.elid);case 5:case"end":return e.stop()}}),e)})))()}}},U=z,q=a("8860"),G=Object(x["a"])(U,u,d,!1,null,null,null),K=G.exports;k()(G,{VIcon:B["a"],VList:q["a"],VListItem:M["a"],VListItemIcon:P["a"],VListItemTitle:L["c"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"cards",attrs:{dense:""}},[a("v-toolbar-title",[a("a",{staticClass:"a-title",attrs:{target:"__blank",href:"https://my.msk.host/billmgr?startform=account&id="+t.account.id+"&filter=on"}},[t._v(t._s(t.account.name))])]),a("v-spacer")],1)},Y=[],W={props:["account","tab"],data:function(){return{statusList:[["ХЗ 0","light"],["ХЗ 1","light"],["Активна","light"]]}},computed:{status:function(){return""}}},H=W,Q=a("40dc"),X=a("2fa4"),Z=a("2a7f"),tt=Object(x["a"])(H,J,Y,!1,null,null,null),et=tt.exports;k()(tt,{VAppBar:Q["a"],VSpacer:X["a"],VToolbarTitle:Z["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-card",[a("v-card-title",[t._v("Платежи клиента")]),a("v-card-text",{staticStyle:{"white-space":"pre-wrap"}},[a("div",[t._v(t._s(t.payments&&t.payments.length)+" платежей")]),a("div",[t._v("Средний чек: "+t._s(t.payments&&t.fullPays/t.payments.length)+" RUB")]),a("div",[t._v("Всего: "+t._s(t.fullPays)+" RUB")])])],1)],1)},nt=[],it=(a("13d5"),{props:["account"],data:function(){return{}},computed:{fullPays:function(){return this.payments&&this.payments.filter((function(t){return"1"!==t.status})).reduce((function(t,e){return t+parseFloat(e.paymethodamount_iso)}),0)}},asyncComputed:{payments:function(){return this.api.exec("account.payment",{elid:this.account.elid})}}}),st=it,rt=a("b0af"),ct=a("62ad"),lt=Object(x["a"])(st,at,nt,!1,null,null,null),ot=lt.exports;k()(lt,{VCard:rt["a"],VCardText:j["c"],VCardTitle:j["d"],VCol:ct["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{attrs:{cols:"12",sm:"6"}},[a("MyDialog",{attrs:{title:"Тикеты клиента"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-card",t._g(t._b({},"v-card",i,!1),n),[a("v-card-title",[t._v("Тикеты клиента")]),a("v-card-text",{staticStyle:{"white-space":"pre-wrap"}},[a("div",[t._v(t._s(t.value&&t.value.data.length)+" штук")])])],1)]}}])},[a("v-card-text",[a("FilteredOut",{attrs:{func:"ticket_all",filter:{account_id:t.account.id}},on:{update:function(e){return t.value=e}},scopedSlots:t._u([{key:"actions",fn:function(e){var n=e.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(){return t.tabMgr.open("Ticket",{elId:n.id})}}},[a("v-icon",[t._v("mdi-link")])],1)]}}])})],1)],1)],1)},dt=[],ht=a("ecf3"),pt={components:{FilteredOut:ht["a"],MyDialog:D["a"]},props:["account"],data:function(){return{value:null}}},mt=pt,vt=Object(x["a"])(mt,ut,dt,!1,null,null,null),ft=vt.exports;k()(vt,{VBtn:$["a"],VCard:rt["a"],VCardText:j["c"],VCardTitle:j["d"],VCol:ct["a"],VIcon:B["a"]});var yt={components:{TabContent:l["a"],TabContentLoading:o["a"],Actions:K,AppBar:et,Payments:ot,Tickets:ft},props:["value"],data:function(){return{account:null,loading:!1,error:null}},mounted:function(){var t=this;return Object(s["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:t.applyData();case 3:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(s["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.tkb.query("get","billing/service/".concat(t.value.query.elId,"/account"));case 3:t.account=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},applyData:function(){var t=this;return Object(s["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.value.title="A".concat(t.value.query.elId),t.value.color="purple",t.account){e.next=4;break}return e.abrupt("return");case 4:t.value.fullTitle=t.account.name;case 5:case"end":return e.stop()}}),e)})))()}}},bt=yt,It=a("0fd9"),gt=Object(x["a"])(bt,n,i,!1,null,null,null);e["default"]=gt.exports;k()(gt,{VRow:It["a"]})},"6ca7":function(t,e,a){},ac7c:function(t,e,a){"use strict";a("6ca7"),a("ec29");var n=a("9d26"),i=a("c37a"),s=a("5607"),r=a("a026"),c=r["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=a("8547"),o=a("58df");function u(t){t.preventDefault()}var d=Object(o["a"])(i["a"],c,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:u},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:u},ref:"input"})},onBlur(){this.isFocused=!1},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const a=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===a&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}});e["a"]=d.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},b486:function(t,e,a){"use strict";a("ffdb")},c6a6:function(t,e,a){"use strict";a("2bfd");var n=a("b974"),i=a("8654"),s=a("d9f7"),r=a("80d2");const c={...n["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,a)=>a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:()=>c},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...n["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(r["m"])(t,this.itemText),a=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),a)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=n["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...c,...t}},searchIsDirty(){return null!=this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=n["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===r["r"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["r"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["r"].backspace&&t!==r["r"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const a=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==a)return void(this.selectedIndex=a);const n=this.selectedItems.length,i=t!==n-1?t:t-1,s=this.selectedItems[i];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,n["a"].options.methods.clearableCallback.call(this)},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data=Object(s["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["l"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["l"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=n["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;n["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){n["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){n["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,a;if(-1===this.selectedIndex)return;const n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}})},d58f:function(t,e,a){var n=a("1c0b"),i=a("7b0b"),s=a("44ad"),r=a("50c4"),c=function(t){return function(e,a,c,l){n(a);var o=i(e),u=s(o),d=r(o.length),h=t?d-1:0,p=t?-1:1;if(c<2)while(1){if(h in u){l=u[h],h+=p;break}if(h+=p,t?h<0:d<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:d>h;h+=p)h in u&&(l=a(l,u[h],h,o));return l}};t.exports={left:c(!1),right:c(!0)}},ec29:function(t,e,a){},ecf3:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data?a("v-simple-table",{staticStyle:{"overflow-y":"auto"},attrs:{dense:""}},[a("thead",[a("tr",[t._l(t.data.headers,(function(e,n){return a("th",{key:n,domProps:{textContent:t._s(e)}})})),t.$slots.actions?a("th",[t._v("Действия")]):t._e()],2)]),a("tbody",t._l(t.data.data,(function(e,n){return a("tr",{key:n},[t._l(t.data.headers,(function(n,i){return a("td",{key:i,domProps:{textContent:t._s(e[i])}})})),a("td",[t._t("actions",null,null,{item:e})],2)],2)})),0)]):a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)},i=[],s=(a("4de4"),a("5530")),r={props:["func","filter"],watch:{data:function(){this.$emit("update",Object(s["a"])({},this.data))}},asyncComputed:{data:function(){return this.api.findFiltered(this.func,this.filter)}}},c=r,l=(a("b486"),a("2877")),o=a("6544"),u=a.n(o),d=a("a523"),h=a("490a"),p=a("0fd9"),m=a("1f4f"),v=Object(l["a"])(c,n,i,!1,null,"fa0dc5da",null);e["a"]=v.exports;u()(v,{VContainer:d["a"],VProgressCircular:h["a"],VRow:p["a"],VSimpleTable:m["a"]})},ffdb:function(t,e,a){}}]);
//# sourceMappingURL=chunk-c470d4bc.a7bdebd8.js.map