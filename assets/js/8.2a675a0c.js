(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{282:function(t,e,a){"use strict";a.r(e);var _=a(14),v=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" AJAX")]),t._v(" "),e("h2",{attrs:{id:"_1-新规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-新规范"}},[t._v("#")]),t._v(" 1.新规范")]),t._v(" "),e("h4",{attrs:{id:"_1-超时设定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-超时设定"}},[t._v("#")]),t._v(" 1. 超时设定")]),t._v(" "),e("p",[t._v("当我们发送一个AJAX请求，却迟迟得不到服务器响应，这种感觉是很糟糕的。为了缓解这种糟糕的感觉，XMLHttpRequest 2级规范为我们提供了一个额外的属性和事件监听事件：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("timeout")]),t._v("属性：设置超时时间，单位为毫秒；")]),t._v(" "),e("li",[e("code",[t._v("ontimeout")]),t._v("事件：当响应时间超出实例对象timeout属性时被触发；")])]),t._v(" "),e("p",[t._v("使用方式如下：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当响应时间超过1秒时，请求中止，弹出提示框")]),t._v("\nxhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeout "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\nxhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ontimeout")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Request did not return in a second."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("注意：当请求终止时，会调用 "),e("code",[t._v("ontimeout")]),t._v(" 事件处理程序，此时 "),e("em",[t._v("xhr")]),t._v(" 的 "),e("code",[t._v("readyState")]),t._v(" 属性的值可能已变为4，这意味着会继续调用 "),e("code",[t._v("onreadystatechange")]),t._v(" 事件处理程序。")]),t._v(" "),e("h4",{attrs:{id:"_2-进度事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-进度事件"}},[t._v("#")]),t._v(" 2. 进度事件")]),t._v(" "),e("p",[e("em",[t._v("Progress Events")]),t._v(" 规范是W3C制定的一个工作草案。该规范定义了与客户端与服务器通信相关的一系列事件，这些事件监听了通信进程中的各个关键节点，使我们能够以更细的颗粒度掌控数据传输过程中的细节。目前共有6个进度事件，他们会随数据传输进展被顺序触发（除了error，abort事件），让我们看看他们的定义和浏览器兼容情况：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("loadstart")]),t._v("：在接收到响应数据的第一个字节时触发")]),t._v(" "),e("li",[e("code",[t._v("progress")]),t._v("：在接收响应期间持续不断地触发；")]),t._v(" "),e("li",[t._v("该事件可以实现加载进度条效果。因为"),e("code",[t._v("onprogress")]),t._v("事件处理程序会接收到一个"),e("code",[t._v("event")]),t._v("对象，其"),e("code",[t._v("target")]),t._v("属性为XHR对象实例，但却额外包含着三个属性：\n"),e("ul",[e("li",[e("code",[t._v("lengthComputable")]),t._v("：表示进度信息是否可用的布尔值")]),t._v(" "),e("li",[e("code",[t._v("loaded")]),t._v("：表示目前接收的字节数")]),t._v(" "),e("li",[e("code",[t._v("total")]),t._v("：表示根据Content-Length响应头部确定的预期字节数")])])]),t._v(" "),e("li",[e("code",[t._v("error")]),t._v("：在请求发生错误时触发；")]),t._v(" "),e("li",[e("code",[t._v("abort")]),t._v("：在调用 "),e("code",[t._v("abort()")]),t._v(" 方法时触发；")]),t._v(" "),e("li",[e("code",[t._v("load")]),t._v("：在接收到完整的响应数据时触发；\n"),e("ul",[e("li",[t._v("该事件帮助我们节省了"),e("code",[t._v("readystatechange")]),t._v("事件，我们不必在XHR对象实例上绑定该事件监听函数以追踪实例上"),e("code",[t._v("readyState")]),t._v("属性的变化")])])]),t._v(" "),e("li",[e("code",[t._v("loadend")]),t._v("：在通信完成或者触发"),e("code",[t._v("error")]),t._v("，"),e("code",[t._v("abort")]),t._v("，或"),e("code",[t._v("load")]),t._v("事件后触发；")])]),t._v(" "),e("h2",{attrs:{id:"_2-jquery中的ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-jquery中的ajax"}},[t._v("#")]),t._v(" 2.jQuery中的AJAX")]),t._v(" "),e("p",[e("strong",[t._v("注意：所有的选项都可以通过 $.ajaxSetup() 函数来全局设置")])]),t._v(" "),e("p",[t._v("语法："),e("code",[t._v("$.ajax([settings])")])]),t._v(" "),e("p",[t._v("常用参数：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("url")]),t._v(" String 默认值: 当前页地址。发送请求的地址")]),t._v(" "),e("li",[e("code",[t._v("type")]),t._v(" String 请求方式 (“POST” 或 “GET”)， 默认为 “GET”。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。")]),t._v(" "),e("li",[e("code",[t._v("async")]),t._v(" Boolean 默认为true，表示是否使用异步请求")]),t._v(" "),e("li",[e("code",[t._v("contentType")]),t._v(" 同上文的ajax")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" String 发送到服务器的数据")]),t._v(" "),e("li",[e("code",[t._v("beforeSend")]),t._v(" 发送请求前执行的函数，如果此事件返回 false，可以取消 ajax 请求")]),t._v(" "),e("li",[e("code",[t._v("dataType")]),t._v(" 预期服务器返回的数据类型。如果不指定，会自动识别返回的数据")]),t._v(" "),e("li",[e("code",[t._v("success")]),t._v(" 请求成功后的回调函数。参数：由服务器返回，并根据 dataType 参数进行处理后的数据；描述状态的字符串。")]),t._v(" "),e("li",[e("code",[t._v("error")]),t._v(" 请求失败时调用的函数。参数：XHR 对象、错误信息（null、timeout、error、notmodify和parsererror）")]),t._v(" "),e("li",[e("code",[t._v("complete(XHR, TS)")]),t._v(" 请求完成后的回调函数，无论请求成功还是失败都会执行。参数是 XMLHTTPRequest 对象和一个描述请求类型的字符串")]),t._v(" "),e("li",[e("code",[t._v("jsonp")]),t._v(" String 在一个 jsonp 请求中重写回调函数的名字。这个值用来替代在 “callback=?” 这种 GET 或 POST 请求中 URL 参数里的 “callback” 部分，比如 {jsonp:’onJsonPLoad’} 会导致将 “onJsonPLoad=?” 传给服务器。")]),t._v(" "),e("li",[e("code",[t._v("jsonpCallback")]),t._v(" String 为 jsonp 请求指定一个回调函数名。这个值将用来取代 jQuery 自动生成的随机函数名。这主要用来让 jQuery 生成度独特的函数名，这样管理请求更容易，也能方便地提供回调函数和错误处理。你也可以在想让浏览器缓存 GET 请求的时候，指定这个回调函数名。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);