(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d5641a0"],{"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("71d9"),s=i("80d2");const a=Object(s["g"])("v-toolbar__title"),o=Object(s["g"])("v-toolbar__items");n["a"]},"2fa4":function(t,e,i){"use strict";i("20f6");var n=i("80d2");e["a"]=Object(n["g"])("spacer","div","v-spacer")},"368e":function(t,e,i){},"3eb2":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("MyDialog",{attrs:{title:"Открыть тикет"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-list-item",t._g(t._b({},"v-list-item",s,!1),n),[i("v-list-item-title",[t._v("Закрытый тикет")])],1)]}}])},[i("v-card-text",[i("v-text-field",{attrs:{autofocus:"",label:"ID"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.open(e))}},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),i("v-card-actions",[i("v-btn",{attrs:{loading:t.loading,color:"primary"},on:{click:t.open}},[t._v("Перейти")])],1)],1)},s=[],a=(i("96cf"),i("1da1")),o=i("a34a"),r=i.n(o),c=i("f0c0"),l={components:{MyDialog:c["a"]},data:function(){return{id:"",loading:!1}},methods:{open:function(){var t=this;return Object(a["a"])(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.tabMgr.open("Ticket",{ticketId:t.id});case 1:case"end":return e.stop()}}),e)})))()}}},d=l,h=i("2877"),u=i("6544"),v=i.n(u),f=i("8336"),m=i("99d9"),g=i("da13"),p=i("5d23"),b=i("8654"),k=Object(h["a"])(d,n,s,!1,null,null,null);e["default"]=k.exports;v()(k,{VBtn:f["a"],VCardActions:m["a"],VCardText:m["c"],VListItem:g["a"],VListItemTitle:p["c"],VTextField:b["a"]})},"480e":function(t,e,i){"use strict";var n=i("7560");e["a"]=n["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:n["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})},"615b":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return c}));var n=i("b0af"),s=i("80d2");const a=Object(s["g"])("v-card__actions"),o=Object(s["g"])("v-card__subtitle"),r=Object(s["g"])("v-card__text"),c=Object(s["g"])("v-card__title");n["a"]},b0af:function(t,e,i){"use strict";i("615b");var n=i("10d2"),s=i("297c"),a=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(s["a"],a["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...n["a"].options.computed.classes.call(this)}},styles(){const t={...n["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},e4d3:function(t,e,i){"use strict";var n=i("a026");e["a"]=n["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}})},f0c0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:t.width||"700",scrollable:"",fullscreen:t.core.mobile},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[t._t("activator",null,null,{attrs:n,on:i})]}}],null,!0),model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[t.loading?i("v-container",{attrs:{color:"primary",dark:""}},[i("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[i("v-col",{attrs:{cols:"6"}},[i("v-card",[i("v-card-text",[i("v-progress-linear",{attrs:{color:"deep-purple accent-4",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],1)],1):i("v-card",[i("v-card-title",{staticStyle:{"margin-bottom":"10px"},attrs:{dark:""}},[t.$slots.title?i("v-toolbar-title",{staticStyle:{width:"calc(100% - 48px)"}},[t._t("title")],2):i("v-toolbar-title",{staticStyle:{width:"calc(100% - 48px)"}},[t._v(t._s(t.title))]),i("v-spacer"),i("v-btn",{staticStyle:{float:"right"},attrs:{icon:"",dark:""},on:{click:function(e){t.isActive=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1),t._t("default")],2)],1)},s=[],a={props:["loading","width","title","value"],data:function(){return{isActive:!1}},mounted:function(){this.isActive=!!this.value},watch:{isActive:function(){this.$emit("input",this.isActive)}}},o=a,r=i("2877"),c=i("6544"),l=i.n(c),d=i("8336"),h=i("b0af"),u=i("99d9"),v=i("62ad"),f=i("a523"),m=(i("368e"),i("480e")),g=i("4ad4"),p=i("b848"),b=i("75eb"),k=i("e707"),y=i("e4d3"),w=i("21be"),x=i("f2e7"),_=i("a293"),C=i("58df"),A=i("d9bd"),$=i("80d2");const O=Object(C["a"])(g["a"],p["a"],b["a"],k["a"],y["a"],w["a"],x["a"]);var V=O.extend({name:"v-dialog",directives:{ClickOutside:_["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(A["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):k["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===$["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(m["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object($["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object($["f"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),S=i("132d"),T=i("8e36"),B=i("0fd9"),E=i("2fa4"),j=i("2a7f"),I=Object(r["a"])(o,n,s,!1,null,null,null);e["a"]=I.exports;l()(I,{VBtn:d["a"],VCard:h["a"],VCardText:u["c"],VCardTitle:u["d"],VCol:v["a"],VContainer:f["a"],VDialog:V,VIcon:S["a"],VProgressLinear:T["a"],VRow:B["a"],VSpacer:E["a"],VToolbarTitle:j["a"]})}}]);
//# sourceMappingURL=chunk-9d5641a0.f519114a.js.map