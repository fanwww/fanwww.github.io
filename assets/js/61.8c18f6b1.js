(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{433:function(t,s,a){"use strict";a.r(s);var e=a(8),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"节点获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点获取"}},[t._v("#")]),t._v(" 节点获取")]),t._v(" "),s("h2",{attrs:{id:"document-getelementbyid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-getelementbyid"}},[t._v("#")]),t._v(" document.getElementById")]),t._v(" "),s("p",[t._v("如果一个元素有 "),s("code",[t._v("id")]),t._v(" 特性（attribute），那我们就可以使用 "),s("code",[t._v("document.getElementById(id)")]),t._v(" 方法获取该元素，无论它在哪里。")]),t._v(" "),s("h2",{attrs:{id:"document-getelementsby"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-getelementsby"}},[t._v("#")]),t._v(" document.getElementsBy*")]),t._v(" "),s("p",[t._v("还有其他通过"),s("strong",[t._v("标签")]),t._v("，"),s("strong",[t._v("类")]),t._v("等查找节点的方法。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("document.getElementsByTagName(tag)")]),t._v(" 在文档范围内查找具有给定标签的元素，并返回它们的集合。"),s("code",[t._v("tag")]),t._v(" 参数也可以是对于“任何标签”的星号 "),s("code",[t._v('"*"')]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("document.getElementsByClassName(className)")]),t._v(" 在文档范围内返回具有给定CSS类的元素。")])]),t._v(" "),s("h2",{attrs:{id:"queryselectorall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queryselectorall"}},[t._v("#")]),t._v(" querySelectorAll")]),t._v(" "),s("p",[t._v("到目前为止，最通用的方法是 "),s("code",[t._v("document.querySelectorAll(css)")]),t._v("，它返回 文档中与给定 CSS 选择器匹配的所有元素。")]),t._v(" "),s("h2",{attrs:{id:"queryselector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queryselector"}},[t._v("#")]),t._v(" querySelector")]),t._v(" "),s("p",[s("code",[t._v("document.querySelector(css)")]),t._v(" 调用会返回给定 CSS 选择器的第一个元素。")]),t._v(" "),s("p",[t._v("换句话说，结果与 "),s("code",[t._v("document.querySelectorAll(css)[0]")]),t._v(" 相同。")]),t._v(" "),s("p",[t._v("带"),s("code",[t._v("All")]),t._v("会查找 "),s("strong",[t._v("所有")]),t._v(" 元素，而 "),s("code",[t._v("document.querySelector")]),t._v(" 只会查找一个。因此它在速度上更快，并且写起来更短。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("有 6 种主要的方法，可以在 DOM 中搜素节点：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("Searches by...")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("querySelector")])]),t._v(" "),s("td",[t._v("CSS-selector")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("querySelectorAll")])]),t._v(" "),s("td",[t._v("CSS-selector")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("getElementById")])]),t._v(" "),s("td",[s("code",[t._v("id")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("getElementsByTagName")])]),t._v(" "),s("td",[t._v("tag or "),s("code",[t._v("'*'")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("getElementsByClassName")])]),t._v(" "),s("td",[t._v("class")])])])]),t._v(" "),s("p",[t._v("目前为止，最常用的是 "),s("code",[t._v("querySelector")]),t._v(" 和 "),s("code",[t._v("querySelectorAll")]),t._v("，但是 "),s("code",[t._v("getElementBy*")]),t._v(" 可能会偶尔有用。")]),t._v(" "),s("h1",{attrs:{id:"样式修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式修改"}},[t._v("#")]),t._v(" 样式修改")]),t._v(" "),s("p",[t._v("通常有两种设置元素样式的方式：")]),t._v(" "),s("ol",[s("li",[t._v("在 "),s("code",[t._v("CSS")]),t._v(" 中创建一个类，并添加它："),s("code",[t._v('<div class="...">')])]),t._v(" "),s("li",[t._v("将属性直接写入 "),s("code",[t._v("style")]),t._v("："),s("code",[t._v('<div style="...">')]),t._v("。")])]),t._v(" "),s("p",[s("code",[t._v("JavaScript")]),t._v(" 既可以修改类，也可以修改 "),s("code",[t._v("style")]),t._v(" 属性。")]),t._v(" "),s("p",[t._v("相较于将样式写入 "),s("code",[t._v("style")]),t._v(" 属性，我们应该首选通过 "),s("code",[t._v("CSS")]),t._v(" 类的方式来添加样式。仅当类“无法处理”时，才应选择使用 "),s("code",[t._v("style")]),t._v(" 属性的方式。")]),t._v(" "),s("p",[t._v("**例如将文本设为红色，添加一个背景图标 **")]),t._v(" "),s("ul",[s("li",[t._v("可以在 "),s("code",[t._v("CSS")]),t._v(" 中对这些样式进行描述，然后添加类（JavaScript 可以做到）。")]),t._v(" "),s("li",[t._v("这样更灵活，更易于支持。")])]),t._v(" "),s("h2",{attrs:{id:"类名操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类名操作"}},[t._v("#")]),t._v(" 类名操作")]),t._v(" "),s("p",[s("code",[t._v("elem.classList")]),t._v("可以实现类名的基本操作")]),t._v(" "),s("p",[s("code",[t._v("elem.classList")]),t._v(" 是一个特殊的对象，它具有 "),s("code",[t._v("add/remove/toggle")]),t._v(" 单个类的方法。")]),t._v(" "),s("p",[s("code",[t._v("classList")]),t._v(" 的方法：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("elem.classList.add/remove(class)")]),t._v(" — 添加/移除类。")]),t._v(" "),s("li",[s("code",[t._v("elem.classList.toggle(class)")]),t._v(" — 如果类不存在就添加类，存在就移除它。")]),t._v(" "),s("li",[s("code",[t._v("elem.classList.contains(class)")]),t._v(" — 检查给定类，返回 "),s("code",[t._v("true/false")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"元素样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素样式"}},[t._v("#")]),t._v(" 元素样式")]),t._v(" "),s("p",[s("code",[t._v("elem.style")]),t._v(" 属性是一个对象，它对应于 "),s("code",[t._v('"style"')]),t._v(" 特性（attribute）中所写的内容。")]),t._v(" "),s("p",[s("code",[t._v('elem.style.width="100px"')]),t._v(" 的效果等价于我们在 "),s("code",[t._v("style")]),t._v(" 特性中有一个 "),s("code",[t._v("width:100px")]),t._v(" 字符串。")]),t._v(" "),s("p",[t._v("**对于多词属性，使用驼峰式 **")]),t._v(" "),s("p",[s("strong",[t._v("注意单位")])]),t._v(" "),s("p",[t._v("例如，我们不应该将 "),s("code",[t._v("elem.style.top")]),t._v(" 设置为 "),s("code",[t._v("10")]),t._v("，而应将其设置为 "),s("code",[t._v("10px")]),t._v("。")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("elem.style.属性名")]),t._v(" 只能获取行内样式")])]),t._v(" "),s("h2",{attrs:{id:"计算样式-getcomputedstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算样式-getcomputedstyle"}},[t._v("#")]),t._v(" 计算样式：getComputedStyle")]),t._v(" "),s("p",[t._v("**要读取所有 "),s("code",[t._v("CSS")]),t._v(" 应用在元素上的最终值: **")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pseudo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("code",[t._v("element")]),t._v(": 需要被读取样式值的元素。")]),t._v(" "),s("p",[s("code",[t._v("pseudo")]),t._v(": 伪元素（如果需要），例如 "),s("code",[t._v("::before")]),t._v("。空字符串或无参数则意味着元素本身。")]),t._v(" "),s("h2",{attrs:{id:"总结-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("要管理 class：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("classList")]),t._v(" — 具有 "),s("code",[t._v("add/remove/toggle/contains")]),t._v(" 方法的对象，可以很好地支持单个类。")])]),t._v(" "),s("p",[t._v("要改变样式：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("style")]),t._v(" 属性是具有样式的对象。对其进行读取和修改与修改 "),s("code",[t._v('"style"')]),t._v(" 中的各个属性具有相同的效果。")])]),t._v(" "),s("p",[t._v("要读取已解析的样式（对于所有类，在应用所有 "),s("code",[t._v("CSS")]),t._v(" 并计算最终值之后）：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("getComputedStyle(elem, [pseudo])")]),t._v(" 返回与 "),s("code",[t._v("style")]),t._v(" 对象类似的，且包含了所有类的对象。只读。")])]),t._v(" "),s("h1",{attrs:{id:"事件绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定"}},[t._v("#")]),t._v(" 事件绑定")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("JS")]),t._v("是一门以事件驱动为核心的语言。")])]),t._v(" "),s("h2",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("p",[s("strong",[t._v("事件")]),t._v(" 是某事发生的信号。所有的 DOM 节点都生成这样的信号（但事件不仅限于 DOM）。\n"),s("strong",[t._v("常见事件类型")]),t._v(": "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Events",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN文档"),s("OutboundLink")],1),t._v(" "),s("strong",[t._v("鼠标事件：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("onclick")]),t._v(" —— 当鼠标点击一个元素时。")]),t._v(" "),s("li",[s("code",[t._v("onmouseover")]),t._v(" / "),s("code",[t._v("onmouseout")]),t._v(" —— 当鼠标指针移入/离开一个元素时。")]),t._v(" "),s("li",[s("code",[t._v("onmousedown")]),t._v(" / "),s("code",[t._v("onmouseup")]),t._v(" —— 当在元素上按下/释放鼠标按钮时。")]),t._v(" "),s("li",[s("code",[t._v("onmousemove")]),t._v(" —— 当鼠标移动时。")])]),t._v(" "),s("p",[s("strong",[t._v("表单（form）元素事件")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("onchange")]),t._v(" —— 当访问者改变域的内容时。")]),t._v(" "),s("li",[s("code",[t._v("onfocus")]),t._v(" —— 当访问者聚焦于一个元素时，例如聚焦于一个 "),s("code",[t._v("<input>")]),t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("键盘事件")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("onkeydown")]),t._v(" 和 "),s("code",[t._v("onkeyup")]),t._v(" —— 当访问者按下然后松开按键时。")])]),t._v(" "),s("p",[s("strong",[t._v("Document 事件")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("onload")]),t._v(" —— 当 HTML 页面加载完成时。")])]),t._v(" "),s("p",[t._v("还有很多其他事件。我们将在下一章中详细介绍具体事件。")]),t._v(" "),s("h2",{attrs:{id:"事件处理程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件处理程序"}},[t._v("#")]),t._v(" 事件处理程序")]),t._v(" "),s("p",[t._v("为了对事件作出响应，我们可以分配一个 "),s("strong",[t._v("处理程序（handler）")]),t._v("—— "),s("strong",[t._v("一个在事件发生时运行的函数。")])]),t._v(" "),s("p",[t._v("处理程序是在发生用户行为（action）时运行 JavaScript 代码的一种方式。")]),t._v(" "),s("p",[s("strong",[t._v("有几种绑定事件处理程序的方式：")])]),t._v(" "),s("h3",{attrs:{id:"行内绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行内绑定"}},[t._v("#")]),t._v(" 行内绑定")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    hello\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    hello\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签中不适合编写大量代码，因此我们最好创建一个 JavaScript 函数，然后在事件中调用这个函数。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("在鼠标点击时，"),s("code",[t._v("onclick")]),t._v(" 中的代码就会运行。")]),t._v(" "),s("h3",{attrs:{id:"属性绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性绑定"}},[t._v("#")]),t._v(" 属性绑定")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("ele.onclick")]),t._v("：")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    click me!\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pEl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    pEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Thank you'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[s("strong",[t._v("因为每一个"),s("code",[t._v("dom")]),t._v("只有一个 "),s("code",[t._v("onclick")]),t._v(" 属性，所以我们无法分配更多事件处理程序。也就是无法同时绑定多个事件")])]),t._v(" "),s("p",[s("strong",[t._v("要移除一个处理程序 —— 赋值 "),s("code",[t._v("elem.onclick = null")]),t._v("。")])]),t._v(" "),s("h1",{attrs:{id:"dom关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom关系"}},[t._v("#")]),t._v(" DOM关系")]),t._v(" "),s("h2",{attrs:{id:"documentelement-和-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentelement-和-body"}},[t._v("#")]),t._v(" documentElement 和 body")]),t._v(" "),s("p",[t._v("最顶层的树节点可以直接作为 "),s("code",[t._v("document")]),t._v(" 的属性来使用：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<html>")]),t._v(" = "),s("code",[t._v("document.documentElement")]),t._v(": 最顶层的 document 节点是 "),s("code",[t._v("document.documentElement")]),t._v("。这是对应 "),s("code",[t._v("<html>")]),t._v(" 标签。")]),t._v(" "),s("li",[s("code",[t._v("<body>")]),t._v(" = "),s("code",[t._v("document.body")]),t._v(": 另一个被广泛使用的 DOM 节点是 "),s("code",[t._v("<body>")]),t._v(" 元素 — "),s("code",[t._v("document.body")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("<head>")]),t._v(" = "),s("code",[t._v("document.head")]),t._v(": "),s("code",[t._v("<head>")]),t._v(" 标签可以通过 "),s("code",[t._v("document.head")]),t._v(" 访问。")])]),t._v(" "),s("h2",{attrs:{id:"父子兄关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子兄关系"}},[t._v("#")]),t._v(" 父子兄关系")]),t._v(" "),s("p",[s("strong",[t._v("节点的访问关系，是以")]),t._v("属性"),s("strong",[t._v("的方式存在的。")])]),t._v(" "),s("h3",{attrs:{id:"父节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父节点"}},[t._v("#")]),t._v(" 父节点")]),t._v(" "),s("h4",{attrs:{id:"parentnode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parentnode"}},[t._v("#")]),t._v(" parentNode")]),t._v(" "),s("h3",{attrs:{id:"兄弟节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兄弟节点"}},[t._v("#")]),t._v(" 兄弟节点")]),t._v(" "),s("h4",{attrs:{id:"nextsibling-previoussibling-这两个会获取文本节点-注释节点-元素节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nextsibling-previoussibling-这两个会获取文本节点-注释节点-元素节点"}},[t._v("#")]),t._v(" nextSibling previousSibling (这两个会获取文本节点 注释节点 元素节点)")]),t._v(" "),s("h4",{attrs:{id:"nextelementsibling-previouselementsibling-这两个只会获取元素节点-较为常用⭐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nextelementsibling-previouselementsibling-这两个只会获取元素节点-较为常用⭐"}},[t._v("#")]),t._v(" nextElementSibling previousElementSibling (这两个只会获取元素节点 较为常用⭐)")]),t._v(" "),s("h3",{attrs:{id:"子节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子节点"}},[t._v("#")]),t._v(" 子节点")]),t._v(" "),s("h4",{attrs:{id:"firstchild-lastchild-这两个会获取文本节点-注释节点-元素节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firstchild-lastchild-这两个会获取文本节点-注释节点-元素节点"}},[t._v("#")]),t._v(" firstChild lastChild (这两个会获取文本节点 注释节点 元素节点)")]),t._v(" "),s("h4",{attrs:{id:"firstelementchild-lastelementchild-这两个只会获取元素节点-较为常用⭐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firstelementchild-lastelementchild-这两个只会获取元素节点-较为常用⭐"}},[t._v("#")]),t._v(" firstElementChild lastElementChild (这两个只会获取元素节点 较为常用⭐)")]),t._v(" "),s("h3",{attrs:{id:"所有子节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所有子节点"}},[t._v("#")]),t._v(" 所有子节点")]),t._v(" "),s("h4",{attrs:{id:"childnode-这个会获取文本节点-注释节点-元素节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childnode-这个会获取文本节点-注释节点-元素节点"}},[t._v("#")]),t._v(" childNode (这个会获取文本节点 注释节点 元素节点)")]),t._v(" "),s("h4",{attrs:{id:"children-这个只会获取元素节点-较为常用⭐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#children-这个只会获取元素节点-较为常用⭐"}},[t._v("#")]),t._v(" children  (这个只会获取元素节点 较为常用⭐)")]),t._v(" "),s("h2",{attrs:{id:"nodetype-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodetype-属性"}},[t._v("#")]),t._v(" nodeType 属性")]),t._v(" "),s("p",[t._v("这里讲一下 "),s("code",[t._v("nodeType")]),t._v(" 属性。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("nodeType")]),t._v(" == 1 表示的是元素节点（标签） 。记住：元素就是标签。")]),t._v(" "),s("li",[s("code",[t._v("nodeType")]),t._v(" == 2 表示是属性节点(该类型已弃用)。")]),t._v(" "),s("li",[s("code",[t._v("nodeType")]),t._v(" == 3 是文本节点。")]),t._v(" "),s("li",[s("code",[t._v("nodeType")]),t._v(" == 8 注释节点")])])])}),[],!1,null,null,null);s.default=n.exports}}]);