(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{407:function(t,a,s){"use strict";s.r(a);var r=s(8),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webrtc-八-如何建立连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-八-如何建立连接"}},[t._v("#")]),t._v(" WebRTC（八）如何建立连接")]),t._v(" "),a("h2",{attrs:{id:"连接建立的基本原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接建立的基本原则"}},[t._v("#")]),t._v(" 连接建立的基本原则")]),t._v(" "),a("p",[t._v("接下来，我将通过两个具体的场景，向你介绍一下 WebRTC 建立连接的基本原则。不过在讲解之前，我们先设置一些假设条件，这样会更有利于我们下面的描述：")]),t._v(" "),a("ul",[a("li",[t._v("通信的双方我们称为 A 和 B；")]),t._v(" "),a("li",[t._v("A 为呼叫方，B 为被呼叫方；")]),t._v(" "),a("li",[t._v("C 为中继服务器，也称为 relay 服务器或 TURN 服务器。")])]),t._v(" "),a("h3",{attrs:{id:"_1-场景一-双方处于同一网段内"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-场景一-双方处于同一网段内"}},[t._v("#")]),t._v(" 1. 场景一：双方处于同一网段内")]),t._v(" "),a("p",[t._v("A 与 B 进行通信，假设它们现在处于同一个办公区的同一个网段内。在这种情况下，A 与 B 有两种连通路径：")]),t._v(" "),a("ul",[a("li",[t._v("一种是双方通过内网直接进行连接；")]),t._v(" "),a("li",[t._v("另一种是通过公网，也就是通过公司的网关，从公网绕一圈后再进入公司实现双方的通信。")])]),t._v(" "),a("p",[t._v("相较而言，显然第一种连接路径是最好的。 A 与 B 在内网连接就好了，谁会舍近求远呢？")]),t._v(" "),a("h3",{attrs:{id:"_2-场景二-双方处于不同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-场景二-双方处于不同点"}},[t._v("#")]),t._v(" 2. 场景二：双方处于不同点")]),t._v(" "),a("p",[t._v("A 与 B 进行通信，它们分别在不同的地点，比如一个在北京，一个在上海，此时 A 与 B 通信必须走公网。但走公网也有两条路径：")]),t._v(" "),a("ul",[a("li",[t._v("一是通过 P2P 的方式双方直接建立连接；")]),t._v(" "),a("li",[t._v("二是通过中继服务器进行中转，即 A 与 B 都先与 C 建立连接，当 A 向 B 发消息时， A 先将数据发给 C，然后 C 再转发给 B；同理， B 向 A 发消息时，B 先将消息发给 C，然后 C 再转给 A。")])]),t._v(" "),a("p",[t._v("对于这两条路径你该如何选择呢？对于 WebRTC 来讲，它认为通过中继的方式会增加 A 与 B 之间传输的时长，所以它优先使用 P2P 方式；如果 P2P 方式不通，才会使用中继的方式。")]),t._v(" "),a("h2",{attrs:{id:"什么是-candidate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-candidate"}},[t._v("#")]),t._v(" 什么是 Candidate")]),t._v(" "),a("p",[a("strong",[t._v("ICE Candidate （ICE 候选者）")]),t._v("。它表示 WebRTC 与远端通信时使用的协议、IP 地址和端口，一般由以下字段组成：")]),t._v(" "),a("ul",[a("li",[t._v("本地 IP 地址")]),t._v(" "),a("li",[t._v("本地端口号")]),t._v(" "),a("li",[t._v("候选者类型，包括 host、srflx 和 relay")]),t._v(" "),a("li",[t._v("优先级")]),t._v(" "),a("li",[t._v("传输协议")]),t._v(" "),a("li",[t._v("访问服务的用户名")]),t._v(" "),a("li",[t._v("……")])]),t._v(" "),a("blockquote",[a("p",[t._v("代码表示：")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("srflx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("relay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("priority")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UDP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TCP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("usernameFragment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("ul",[a("li",[t._v("其中，候选者类型中的 host 表示本机候选者，srflx 表示内网主机映射的外网的地址和端口，relay 表示中继候选者。")]),t._v(" "),a("li",[t._v("在众多候选者中，"),a("strong",[t._v("host 类型的候选者优先级是最高的")]),t._v("。在 WebRTC 中，首先对 host 类型的候选者进行连通性检测，如果它们之间可以互通，则直接建立连接。其实**，host 类型之间的连通性检测就是内网之间的连通性检测**。WebRTC 就是通过这种方式巧妙地解决了大家认为很困难的问题。")]),t._v(" "),a("li",[t._v("同样的道理，如果 host 类型候选者之间无法建立连接，那么 WebRTC 则会尝试"),a("strong",[t._v("次优先级的候选者，即 srflx 类型的候选者")]),t._v("。也就是尝试让通信双方直接通过 P2P 进行连接，如果连接成功就使用"),a("strong",[t._v("P2P 传输数据")]),t._v("；如果失败，就最后尝试使用 relay 方式建立连接。")])]),t._v(" "),a("h2",{attrs:{id:"收集-candidate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收集-candidate"}},[t._v("#")]),t._v(" 收集 Candidate")]),t._v(" "),a("p",[t._v("了解了什么是 Candidate 之后，接下来，我们再来看一下端对端的连接是如何建立的吧。")]),t._v(" "),a("p",[t._v("实际上，端对端的建立更主要的工作是 Candidate 的收集。WebRTC 将 Candidate 分为三种类型：")]),t._v(" "),a("p",[a("strong",[t._v("host 类型")]),t._v("，即本机内网的 IP 和端口；")]),t._v(" "),a("p",[a("strong",[t._v("srflx 类型")]),t._v(", 即本机 NAT 映射后的外网的 IP 和端口；")]),t._v(" "),a("p",[a("strong",[t._v("relay 类型")]),t._v("，即中继服务器的 IP 和端口。")]),t._v(" "),a("p",[t._v("其中，host 类型优先级最高，srflx 次之，relay 最低。")]),t._v(" "),a("h3",{attrs:{id:"_1-stun-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-stun-协议"}},[t._v("#")]),t._v(" 1. STUN 协议")]),t._v(" "),a("ul",[a("li",[t._v("在内网的网关上都有 NAT (Net Address Translation) 功能，NAT 的作用就是进行内外网的地址转换。这样当你要访问公网上的资源时，NAT 首先会将该主机的内网地址转换成外网地址，然后才会将请求发送给要访问的服务器；服务器处理好后将结果返回给主机的公网地址和端口，再通过 NAT 最终中转给内网的主机。")]),t._v(" "),a("li",[t._v("实际上，上面的描述已经被定义成了一套规范，即 RFC5389 ，也就是"),a("strong",[t._v("STUN 协议，我们只要遵守这个协议就可以拿到自己的公网 IP 了。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("这里我们举个例子，看看通过 STUN 协议，主机是如何获取到自己的外网 IP 地址和端口的。")])]),t._v(" "),a("ul",[a("li",[t._v("首先在外网搭建一个 STUN 服务器，现在比较流行的 STUN 服务器是 CoTURN，你可以到 GitHub 上自己下载源码编译安装。")]),t._v(" "),a("li",[t._v("当 STUN 服务器安装好后，从内网主机发送一个 binding request 的 STUN 消息到 STUN 服务器。")]),t._v(" "),a("li",[t._v("STUN 服务器收到该请求后，会将请求的 IP 地址和端口填充到 binding response 消息中，然后顺原路将该消息返回给内网主机。此时，收到 binding response 消息的内网主机就可以解析 binding response 消息了，并可以从中得到自己的外网 IP 和端口。")])]),t._v(" "),a("h3",{attrs:{id:"_2-turn-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-turn-协议"}},[t._v("#")]),t._v(" 2. TURN 协议")]),t._v(" "),a("blockquote",[a("p",[t._v("这里需要说明一点，relay 服务是通过 TURN 协议实现的。所以我们经常说的 relay 服务器或 TURN 服务器它们是同一个意思，都是指中继服务器。")])]),t._v(" "),a("p",[a("strong",[t._v("relay")]),t._v(" 型候选者的优先级与其他类型相比是最低的，但在其他候选者都无法连通的情况下，relay 候选者就成了最好的选择。因为它的"),a("strong",[t._v("连通率是所有候选者中连通率最高的")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"nat-打洞-p2p-穿越"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nat-打洞-p2p-穿越"}},[t._v("#")]),t._v(" NAT 打洞 /P2P 穿越")]),t._v(" "),a("p",[t._v("WebRTC 将 NAT 分类为 4 种类型，分别是：")]),t._v(" "),a("ul",[a("li",[t._v("完全锥型 NAT")]),t._v(" "),a("li",[t._v("IP 限制型 NAT")]),t._v(" "),a("li",[t._v("端口限制型 NAT")]),t._v(" "),a("li",[t._v("对称型 NAT")])]),t._v(" "),a("h2",{attrs:{id:"ice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ice"}},[t._v("#")]),t._v(" ICE")]),t._v(" "),a("p",[t._v("了解了上面的知识后，你再来看 ICE 就比较简单了。其实 ICE 就是上面所讲的获取各种类型 Candidate 的过程，"),a("strong",[t._v("也就是：在本机收集所有的 host 类型的 Candidate，通过 STUN 协议收集 srflx 类型的 Candidate，使用 TURN 协议收集 relay 类型的 Candidate。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);