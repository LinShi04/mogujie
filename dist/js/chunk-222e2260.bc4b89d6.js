(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-222e2260"],{2103:function(t,a,i){"use strict";i("5ea5")},"216e":function(t,a,i){},2627:function(t,a,i){t.exports=i.p+"img/vip.c9cdc9ff.svg"},2872:function(t,a,i){t.exports=i.p+"img/shopcart.fbc81098.svg"},"3b42":function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"profile"}},[i("nav-bar",{staticClass:"nav-bar"},[t._v("我的")]),i("user-info"),i("account-info"),i("normal-list-view",{attrs:{"list-data":t.orderList}}),i("normal-list-view",{attrs:{"list-data":t.serviceList}}),i("main-tab-bar")],1)},e=[],s=i("a7ac"),r=i("7068"),c=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"user-info"},[n("img",{staticClass:"avatar",attrs:{src:i("7df3"),alt:""}}),n("div",{staticClass:"info"},[n("div",{staticClass:"login"},[t._v("登录/注册")]),n("div",{staticClass:"phone"},[n("img",{attrs:{src:i("4d36"),alt:""}}),n("span",[t._v("暂无绑定手机号")])])]),n("div",{staticClass:"arrow"},[n("img",{attrs:{src:i("d715"),alt:""}})])])}],u={name:"UserInfo"},f=u,l=(i("3fc2"),i("2877")),v=Object(l["a"])(f,c,o,!1,null,"767ab094",null),p=v.exports,m=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"account"},[i("div",{staticClass:"account-item"},[i("div",{staticClass:"number"},[i("span",{staticClass:"balance"},[t._v("0.00")]),t._v("元")]),i("div",{staticClass:"account-info"},[t._v("我的余额")])]),i("div",{staticClass:"account-item"},[i("div",{staticClass:"number"},[i("span",{staticClass:"balance"},[t._v("0")]),t._v("个")]),i("div",{staticClass:"account-info"},[t._v("我的优惠")])]),i("div",{staticClass:"account-item"},[i("div",{staticClass:"number"},[i("span",{staticClass:"balance"},[t._v("0")]),t._v("分")]),i("div",{staticClass:"account-info"},[t._v("我的积分")])])])}],g={name:"AccountInfo"},b=g,h=(i("2103"),Object(l["a"])(b,m,d,!1,null,"300dcbb0",null)),_=h.exports,C=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"normal-list"},t._l(t.listData,(function(a,n){return i("div",{key:n,staticClass:"item"},[i("span",{staticClass:"icon"},[i("img",{attrs:{src:t.iconURL(a),alt:""}})]),i("div",{staticClass:"info"},[t._v(t._s(a.info))])])})),0)},x=[],O={name:"NormalListView",props:{listData:{type:Array,default:function(){return[]}}},methods:{iconURL:function(t){return i("c390")("./"+t.icon)}}},$=O,w=(i("5e12"),Object(l["a"])($,C,x,!1,null,"1be137d6",null)),S=w.exports,y={name:"Profile",components:{UserInfo:p,AccountInfo:_,NormalListView:S,NavBar:s["a"],MainTabBar:r["a"]},data:function(){return{orderList:[{icon:"message.svg",info:"我的消息"},{icon:"pointer.svg",info:"积分商城"},{icon:"vip.svg",info:"会员卡"}],serviceList:[{icon:"cart.svg",info:"我的购物车"},{icon:"shopping.svg",info:"下载购物APP"}]}}},E=y,I=(i("3bbc"),Object(l["a"])(E,n,e,!1,null,"4f91c6fe",null));a["default"]=I.exports},"3bbc":function(t,a,i){"use strict";i("edc9")},"3d7a":function(t,a,i){t.exports=i.p+"img/pointer.71eb1cd2.svg"},"3fc2":function(t,a,i){"use strict";i("6877")},"47c6":function(t,a,i){},"4d36":function(t,a,i){t.exports=i.p+"img/phone.aa2bc9a6.svg"},"57cd":function(t,a,i){t.exports=i.p+"img/category.11368804.svg"},"5e12":function(t,a,i){"use strict";i("47c6")},"5ea5":function(t,a,i){},"60fd":function(t,a,i){},"667f":function(t,a,i){"use strict";i("af52")},6877:function(t,a,i){},7068:function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("tab-bar",{attrs:{currentItemColor:"#ff5777"}},[n("tab-bar-item",{attrs:{title:"首页","img-src":i("9443"),"img-src-current":i("b508"),path:"/home"}}),n("tab-bar-item",{attrs:{title:"分类","img-src":i("57cd"),"img-src-current":i("a5ef"),path:"/category"}}),n("tab-bar-item",{attrs:{title:"购物车","img-src":i("2872"),"img-src-current":i("c3f8"),path:"/cart"}}),n("tab-bar-item",{attrs:{title:"我的","img-src":i("e55d"),"img-src-current":i("d151"),path:"/profile"}})],1)],1)},e=[],s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"tabbar"},[t._t("default")],2)},r=[],c={name:"TabBar",props:{currentItemColor:{type:String}}},o=c,u=(i("9596"),i("2877")),f=Object(u["a"])(o,s,r,!1,null,"720558b2",null),l=f.exports,v=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"tabbar-item",on:{click:function(a){return t.changeRoute()}}},[i("img",{staticClass:"tabbar-item-img",attrs:{src:t.trueSrc}}),i("p",{staticClass:"tabbar-item-title",style:t.fontColor},[t._v(t._s(t.title))])])},p=[],m=(i("c975"),{name:"TabBarItem",props:{title:String,imgSrc:String,imgSrcCurrent:String,path:{type:String,required:!0}},computed:{trueSrc:function(){return this.isCurrent?this.imgSrcCurrent:this.imgSrc},fontColor:function(){return this.isCurrent?this.$parent.$props.currentItemColor?{color:this.$parent.$props.currentItemColor}:{color:"#f00"}:{color:"#000"}},isCurrent:function(){return-1!==this.$route.path.indexOf(this.path)}},methods:{changeRoute:function(){-1===this.$route.path.indexOf(this.path)&&this.$router.push(this.path)}}}),d=m,g=(i("e0c6"),Object(u["a"])(d,v,p,!1,null,"7aab2544",null)),b=g.exports,h={name:"MainTabBar",components:{TabBar:l,TabBarItem:b}},_=h,C=Object(u["a"])(_,n,e,!1,null,"3905c904",null);a["a"]=C.exports},"7df3":function(t,a,i){t.exports=i.p+"img/avatar.bd23b9b1.svg"},9443:function(t,a,i){t.exports=i.p+"img/home.43fd8010.svg"},9596:function(t,a,i){"use strict";i("216e")},"9dc3":function(t,a,i){t.exports=i.p+"img/message.9948ca06.svg"},a5ef:function(t,a,i){t.exports=i.p+"img/category_active.e3dac1fb.svg"},a7ac:function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"navbar"},[i("div",{staticClass:"navbar-left left"},[t._t("left")],2),i("div",{staticClass:"navbar-center"},[t._t("default")],2),i("div",{staticClass:"navbar-right right"},[t._t("right")],2)])},e=[],s={name:"NavBar"},r=s,c=(i("667f"),i("2877")),o=Object(c["a"])(r,n,e,!1,null,"29eb5146",null);a["a"]=o.exports},af52:function(t,a,i){},af67:function(t,a,i){t.exports=i.p+"img/cart.0103a021.svg"},b508:function(t,a,i){t.exports=i.p+"img/home_active.74d1cc4d.svg"},c390:function(t,a,i){var n={"./avatar.svg":"7df3","./cart.svg":"af67","./message.svg":"9dc3","./phone.svg":"4d36","./pointer.svg":"3d7a","./shopping.svg":"d88a","./vip.svg":"2627"};function e(t){var a=s(t);return i(a)}function s(t){if(!i.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}e.keys=function(){return Object.keys(n)},e.resolve=s,t.exports=e,e.id="c390"},c3f8:function(t,a,i){t.exports=i.p+"img/shopcart_active.3857810e.svg"},c975:function(t,a,i){"use strict";var n=i("23e7"),e=i("4d64").indexOf,s=i("a640"),r=i("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,u=s("indexOf"),f=r("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:o||!u||!f},{indexOf:function(t){return o?c.apply(this,arguments)||0:e(this,t,arguments.length>1?arguments[1]:void 0)}})},d151:function(t,a,i){t.exports=i.p+"img/profile_active.3ba58f85.svg"},d715:function(t,a,i){t.exports=i.p+"img/arrow-left.95e55ae9.svg"},d88a:function(t,a,i){t.exports=i.p+"img/shopping.7354bae5.svg"},e0c6:function(t,a,i){"use strict";i("60fd")},e55d:function(t,a,i){t.exports=i.p+"img/profile.c2b75dfe.svg"},edc9:function(t,a,i){}}]);
//# sourceMappingURL=chunk-222e2260.bc4b89d6.js.map