(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/lab6application/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-main",[a("HelloWorld")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-dialog",{attrs:{width:"25vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" "+t._s(t.dialog_message)+" "),n("v-icon",{staticClass:"ml-3 mdi-spin",attrs:{color:t.icon_color}},[t._v(" "+t._s(t.dialog_icon)+" ")])],1)],1)],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Приложение на Vue ")]),n("p",{staticClass:"subheading font-weight-regular"},[n("v-btn",{staticClass:"mr-3 mt-3",attrs:{elevation:"3",color:"red lighten-2"},on:{click:function(e){return t.handle_button()}}},[t._v(" Создать ошибку ")]),n("v-btn",{staticClass:"ml-3 mt-3",attrs:{color:"green lighten-2",elevation:"3"},on:{click:function(e){return t.handle_button2()}}},[t._v(" Создать сообщени ")])],1)])],1)],1)},s=[],l=(a("d9e2"),a("82dc"));l["c"]("custom_tag","VueJS"),l["c"]("another_tag","Vue > React");var c={name:"HelloWorld",data:function(){return{dialog:!1,dialog_message:null,dialog_icon:null,icon_color:null}},methods:{handle_button:function(){throw this.dialog=!0,this.dialog_message="Ошибка создана",this.dialog_icon="mdi-close",this.icon_color="red",new Error("Sentry error")},handle_button2:function(){this.dialog=!0,this.dialog_message="Сообщение создано",this.dialog_icon="mdi-check",this.icon_color="green",l["b"]("Sentry message")}}},u=c,d=a("2877"),p=a("6544"),f=a.n(p),g=a("8336"),v=a("b0af"),h=a("99d9"),m=a("62ad"),b=a("a523"),_=a("169a"),y=a("132d"),w=a("adda"),V=a("0fd9"),C=Object(d["a"])(u,i,s,!1,null,null,null),j=C.exports;f()(C,{VBtn:g["a"],VCard:v["a"],VCardTitle:h["a"],VCol:m["a"],VContainer:b["a"],VDialog:_["a"],VIcon:y["a"],VImg:w["a"],VRow:V["a"]});var x={name:"App",components:{HelloWorld:j},data:function(){return{}}},O=x,k=a("7496"),S=a("40dc"),P=a("f6c4"),I=a("2fa4"),M=Object(d["a"])(O,o,r,!1,null,null,null),R=M.exports;f()(M,{VApp:k["a"],VAppBar:S["a"],VBtn:g["a"],VIcon:y["a"],VImg:w["a"],VMain:P["a"],VSpacer:I["a"]});var T=a("f309");n["a"].use(T["a"]);var A=new T["a"]({}),B=a("8c4f"),E=a("8a39"),H=a("1ddb"),J=a("cc79");n["a"].config.productionTip=!1,n["a"].use(B["a"]);var W=new B["a"]({});E["a"]({Vue:n["a"],dsn:"https://f6c2b13a36fb414f9e533a40098312d2@o1207129.ingest.sentry.io/6340559",integrations:[new J["a"]({routingInstrumentation:H["a"](W),tracingOrigins:["localhost","my-site-url.com",/^\//]})],tracesSampleRate:1}),new n["a"]({vuetify:A,render:function(t){return t(R)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.aa0cb929.js.map