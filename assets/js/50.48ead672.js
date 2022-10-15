(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{344:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"页面路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面路由"}},[t._v("#")]),t._v(" 页面路由")]),t._v(" "),a("h2",{attrs:{id:"页面栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面栈"}},[t._v("#")]),t._v(" 页面栈")]),t._v(" "),a("p",[t._v("页面栈以栈（先进后出）的形式维护页面与页面之间的关系，路由更改了页面栈的层数，小程序页面栈(历史记录)最多10层")]),t._v(" "),a("p",[t._v("小程序提供了"),a("code",[t._v("getCurrentPages()")]),t._v("函数获取页面栈，第一个元素为首页，最后一个元素为当前页面")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("路由方式")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("页面展表现")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("初始化")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("新页面入栈")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("打开新页面")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("新页面入栈")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("页面重定向")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前页面出栈,新页面入栈")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("页面返回")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("页面不断出栈,直到目标返回页")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Tab切换")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("页面全部出栈,只留下新的Tab页面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("重加载")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("页面全部出栈,只留下新的页面")])])])]),t._v(" "),a("h2",{attrs:{id:"方式一-api进行页面间跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-api进行页面间跳转"}},[t._v("#")]),t._v(" 方式一:API进行页面间跳转")]),t._v(" "),a("h4",{attrs:{id:"wx-switchtab-tab切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-switchtab-tab切换"}},[t._v("#")]),t._v(" "),a("code",[t._v("wx.switchTab")]),t._v("  Tab切换")]),t._v(" "),a("p",[t._v("跳转到 tabBar 页面，并关闭所有 页面，页面栈内仅剩当前页。\n跳转的时候不能页面传参\n只能跳转到tabbar页面")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pages/index/index'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"wx-relaunch-重加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-relaunch-重加载"}},[t._v("#")]),t._v(" "),a("code",[t._v("wx.reLaunch")]),t._v("   重加载")]),t._v(" "),a("p",[t._v("关闭所有页面，打开到应用内的某个页面，页面栈内仅剩当前页面。\n使用 wx. reLaunch({ url: ‘pageH’ }) 会重启小程序")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index Tab页面 --\x3e A页面 --\x3e B页面 --\x3e C页面 当前 C 页面")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示 A 页面")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reLaunch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../A/A'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示index Tab页面")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reLauch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/pages/index/index"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"wx-redirecto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-redirecto"}},[t._v("#")]),t._v(" "),a("code",[t._v("wx.redirecTo")])]),t._v(" "),a("p",[t._v("关闭当前页面，跳转到应用内的某个页面，页面栈数量不增不减。但是不允许跳转到 tabbar 页面。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index Tab页面 --\x3e A页面 --\x3e B页面 --\x3e C页面 当前 C 页面")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重定向到 A页面,此时页面栈  [index页面,A页面,B页面,A页面]")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirecTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../A/A'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h4",{attrs:{id:"wx-navigateto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-navigateto"}},[t._v("#")]),t._v(" "),a("code",[t._v("wx.navigateTo")])]),t._v(" "),a("p",[t._v("保留当前页面，跳转到应用内的某个页面，页面栈数量 + 1。但是不能跳到 tabbar 页面。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前 A页面, 跳转到 B页面")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../B/B'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h4",{attrs:{id:"wx-navigateback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-navigateback"}},[t._v("#")]),t._v(" "),a("code",[t._v("wx.navigateBack")])]),t._v(" "),a("p",[t._v("关闭当前页面，返回上一页面或多级页面 页面栈数量 - n。可通过 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/getCurrentPages.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getCurrentPages"),a("OutboundLink")],1),t._v(" 获取当前的页面栈，决定需要返回几层。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A页面 --\x3e B页面 --\x3e C页面 当前 C 页面")]),t._v("\n\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateBack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 B 页面")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回A页面")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateBack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("delta")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回的页面数,如果大于现有页面数,则返回页面栈第一个页面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"方式二-组件方式进行页面间跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-组件方式进行页面间跳转"}},[t._v("#")]),t._v(" 方式二:组件方式进行页面间跳转")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- \n  url 要跳转的页面路径\n  open-type 跳转方式 对应上面的跳转方法\n    navigate、redirect、switchTab、reLaunch、navigateBack\n  delta 当 open-type 为 'navigateBack' 时有效，表示回退的层数,默认为 1\n--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pages/logs/index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("跳转"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("delta")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigateBack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("返回"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);