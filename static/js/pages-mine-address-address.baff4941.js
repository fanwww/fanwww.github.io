(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-address-address"],{"5a83":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.findAllAddress=void 0;var a=i(n("db6f")),d=function(){return(0,a.default)({url:"/lejuClient/address/findAllAddress"})};t.findAllAddress=d},9067:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._l(e.addressList,(function(t){return n("v-uni-view",{key:t.id,staticClass:"line",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.saveAddress(t.id,t.name,t.phoneNumber,t.province+"-"+t.city+"-"+t.region)}}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name)),1==t.defaultStatus?n("v-uni-view",{staticClass:"tag"},[e._v("默认")]):e._e()],1),n("v-uni-view",{staticClass:"phoneNumber"},[e._v(e._s(t.phoneNumber))])],1),n("v-uni-view",{staticClass:"right",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.toEditAddress(t.id)}}},[n("v-uni-image",{attrs:{src:"/static/icons/edit.png",mode:""}})],1)],1)})),n("v-uni-view",{staticClass:"addAddress"},[n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toAddAddress.apply(void 0,arguments)}}},[e._v("新增地址")])],1)],2)},d=[]},a308:function(e,t,n){var i=n("c092");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("b6e34be6",i,!0,{sourceMap:!1,shadowMode:!1})},b35d:function(e,t,n){"use strict";n.r(t);var i=n("d844"),a=n.n(i);for(var d in i)"default"!==d&&function(e){n.d(t,e,(function(){return i[e]}))}(d);t["default"]=a.a},c092:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.line[data-v-49be3a58]{width:94%;margin:0 auto;padding:%?20?% 0;border-bottom:1Px solid #ccc;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box}.line .left .name[data-v-49be3a58]{margin:0 0 %?20?% %?30?%;font-size:%?28?%}.line .left .name .tag[data-v-49be3a58]{display:inline-block;width:%?48?%;height:%?32?%;margin-left:%?20?%;padding:0 %?18?%;border-radius:%?8?%;font-size:%?22?%;background-color:#354e44;color:#fff}.line .left .phoneNumber[data-v-49be3a58]{margin-left:%?30?%;font-size:%?24?%;color:#999}.line .right[data-v-49be3a58]{width:%?82?%;width:%?60?%;margin-left:%?20?%;display:flex;justify-content:center;align-items:center}.line .right uni-image[data-v-49be3a58]{width:%?40?%;height:20px}.addAddress[data-v-49be3a58]{width:100%;height:%?120?%;position:fixed;left:0;bottom:0;display:flex;justify-content:center;align-items:center}.addAddress uni-button[data-v-49be3a58]{width:70%;height:%?80?%;border-radius:%?80?%;font-size:%?30?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#354e44;box-shadow:%?0?% %?4?% %?10?% #888}',""]),e.exports=t},d844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("5a83"),a={data:function(){return{addressList:[],fromPay:!1}},methods:{toAddAddress:function(){uni.navigateTo({url:"addAddress/addAddress"})},toEditAddress:function(e){uni.navigateTo({url:"editAddress/editAddress?id=".concat(e)})},saveAddress:function(e,t,n,i){this.fromPay&&(uni.setStorageSync("addressInfo",{id:e,name:t,tel:n,address:i}),uni.navigateBack({delta:1}))}},onLoad:function(e){var t=this;e.fromPay&&(this.fromPay=!0),(0,i.findAllAddress)().then((function(e){t.addressList=e.data.data.items}))},onShow:function(){var e=this;(0,i.findAllAddress)().then((function(t){e.addressList=t.data.data.items}))}};t.default=a},db6f:function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="";i="https://leju.bufan.cloud";var a=function(e){return new Promise((function(t,n){wx.request({url:i+e.url,data:e.data,method:e.method?e.method.toUpperCase():"GET",timeout:5e3,header:{token:uni.getStorageSync("token")},success:function(e){0==e.data.success?20002===e.data.code&&uni.showModal({title:"登录提示",content:"token已过期,是否重新登陆?",success:function(e){e.confirm?(uni.clearStorageSync(),uni.navigateTo({url:"/pages/mine/login/login"})):uni.showToast({icon:"none",title:"您点击了取消"})}}):t(e)}})}))},d=a;t.default=d},e420:function(e,t,n){"use strict";var i=n("a308"),a=n.n(i);a.a},f28a:function(e,t,n){"use strict";n.r(t);var i=n("9067"),a=n("b35d");for(var d in a)"default"!==d&&function(e){n.d(t,e,(function(){return a[e]}))}(d);n("e420");var s,r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"49be3a58",null,!1,i["a"],s);t["default"]=o.exports}}]);