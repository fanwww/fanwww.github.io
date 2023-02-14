(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{409:function(s,t,n){"use strict";n.r(t);var a=n(8),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"webrtc-七-媒体协商"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-七-媒体协商"}},[s._v("#")]),s._v(" WebRTC（七）媒体协商")]),s._v(" "),t("h3",{attrs:{id:"媒体协商"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#媒体协商"}},[s._v("#")]),s._v(" 媒体协商")]),s._v(" "),t("h2",{attrs:{id:"创建连接和信令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建连接和信令"}},[s._v("#")]),s._v(" 创建连接和信令")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("创建连接")]),s._v("，指的是创建 RTCPeerConnection，它负责端与端之间彼此建立 P2P 连接。在后面 RTCPeerConnection 一节中，我们还会对其做进一步的介绍。")]),s._v(" "),t("li",[t("strong",[s._v("信令")]),s._v("，指的是客户端通过信令服务器交换 SDP 信息。")])]),s._v(" "),t("h2",{attrs:{id:"webrtc-中媒体协商的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-中媒体协商的作用"}},[s._v("#")]),s._v(" WebRTC 中媒体协商的作用")]),s._v(" "),t("p",[t("strong",[s._v("媒体协商的作用")]),s._v("就是让"),t("strong",[s._v("双方")]),s._v("找到"),t("strong",[s._v("共同支持的媒体能力")]),s._v("，如双方都支持的编解码器，从而最终实现彼此之间的音视频通信。")]),s._v(" "),t("ul",[t("li",[s._v("首先，通信双方将它们各自的媒体信息，如编解码器、媒体流的 SSRC、传输协议、IP 地址和端口等，按 SDP 格式整理好。")]),s._v(" "),t("li",[s._v("然后，通信双方通过信令服务器交换 SDP 信息，并待彼此拿到对方的 SDP 信息后，找出它们共同支持的媒体能力。")]),s._v(" "),t("li",[s._v("最后，双方按照协商好的媒体能力开始音视频通信")])]),s._v(" "),t("h3",{attrs:{id:"rtcpeerconnection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rtcpeerconnection"}},[s._v("#")]),s._v(" RTCPeerConnection")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("RTCPeerConnection")]),s._v(" 类， 顾名思义，它表示的就是端与端之间建立的"),t("strong",[s._v("连接")]),s._v(", "),t("strong",[s._v("端到端之间的媒体协商，就是基于 RTCPeerConnection 对象实现的")]),s._v("。")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" pcConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" pc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RTCPeerConnection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pcConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在 JavaScript 下创建 RTCPeerConnection 对象非常简单，如上所述，只要通过 new 关键字创建即可。")]),s._v(" "),t("p",[s._v("在创建 RTCPeerConnection 对象时，还可以给它传一个参数 pcConfig，该参数的结构非常复杂，这里我们先将其设置为 null")]),s._v(" "),t("h2",{attrs:{id:"媒体协商的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#媒体协商的过程"}},[s._v("#")]),s._v(" 媒体协商的过程")]),s._v(" "),t("blockquote",[t("p",[s._v("在通讯双方都创建好 "),t("strong",[s._v("RTCPeerConnection")]),s._v(" 对象后，它们就可以开始进行媒体协商了。不过在进行媒体协商之前，有两个重要的概念，即 "),t("strong",[s._v("Offer")]),s._v(" 与 "),t("strong",[s._v("Answer")]),s._v(" ，你必须要弄清楚。")])]),s._v(" "),t("p",[t("code",[s._v("Offer")]),s._v(" 与 "),t("code",[s._v("Answer")]),s._v(" 是什么呢？对于 1 对 1 通信的双方来说，我们称首先发送媒体协商消息的一方为呼叫方，而另一方则为被呼叫方。")]),s._v(" "),t("p",[t("strong",[s._v("Offer")]),s._v("，在双方通讯时，呼叫方发送的 SDP 消息称为 Offer。")]),s._v(" "),t("p",[t("strong",[s._v("Answer")]),s._v("，在双方通讯时，被呼叫方发送的 SDP 消息称为 Answer。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("首先")]),s._v("，呼叫方创建 Offer 类型的 SDP 消息。创建完成后，调用 setLocalDescriptoin 方法将该 Offer 保存到本地 Local 域，然后通过信令将 Offer 发送给被呼叫方。")]),s._v(" "),t("li",[s._v("被呼叫方收到 Offer 类型的 SDP 消息后，调用 setRemoteDescription 方法将 Offer 保存到它的 Remote 域。作为应答，被呼叫方要创建 Answer 类型的 SDP 消息，Answer 消息创建成功后，再调用 setLocalDescription 方法将 Answer 类型的 SDP 消息保存到本地的 Local 域。最后，被呼叫方将 Answer 消息通过信令发送给呼叫方。至此，被呼叫方的工作就完部完成了。")]),s._v(" "),t("li",[s._v("接下来是呼叫方的收尾工作，呼叫方收到 Answer 类型的消息后，调用 RTCPeerConnecton 对象的 setRemoteDescription 方法，将 Answer 保存到它的 Remote 域。")]),s._v(" "),t("li",[s._v("至此，整个媒体协商过程处理完毕。")])]),s._v(" "),t("h2",{attrs:{id:"媒体协商的代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#媒体协商的代码实现"}},[s._v("#")]),s._v(" 媒体协商的代码实现")]),s._v(" "),t("p",[s._v("了解了 WebRTC 的媒体协商过程之后，我们再看一下如何使用 JavaScript 代码来实现这一功能。浏览器提供了几个非常方便的 API，这些 API 是对底层 WebRTC API 的封装。如下所示：")]),s._v(" "),t("p",[t("strong",[s._v("createOffer")]),s._v(" ，创建 Offer；")]),s._v(" "),t("p",[t("strong",[s._v("createAnswer")]),s._v("，创建 Answer；")]),s._v(" "),t("p",[t("strong",[s._v("setLocalDescription")]),s._v("，设置本地 SDP 信息；")]),s._v(" "),t("p",[t("strong",[s._v("setRemoteDescription")]),s._v("，设置远端的 SDP 信息。")]),s._v(" "),t("h3",{attrs:{id:"_1-呼叫方创建-offer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-呼叫方创建-offer"}},[s._v("#")]),s._v(" 1. 呼叫方创建 Offer")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("doCall")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Sending offer to peer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\npc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createOffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("setLocalAndSendMessage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" handleCreateOfferError"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("如果 createOffer 函数调用成功的话，浏览器会回调我们设置的 setLocalAndSendMessage 方法，你可以在 setLocalAndSendMessage 方法里获取到 RTCSessionDescription 类型的 SDP 信息；如果出错则会回调 handleCreateOfferError 方法。")]),s._v(" "),t("p",[s._v("最终，在 setLocalAndSendMessage 回调方法中，通过 setLocalDescription() 方法将本地 SDP 描述信息设置到 WebRTC 的 Local 域。然后通过信令通道将此会话描述发送给被呼叫方。代码如下所示：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setLocalAndSendMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("sessionDescription")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\npc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setLocalDescription")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sessionDescription"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sessionDescription"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_2-被呼叫方收到-offer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-被呼叫方收到-offer"}},[s._v("#")]),s._v(" 2. 被呼叫方收到 Offer")]),s._v(" "),t("p",[s._v("被呼叫方收到 Offer 后，调用 setRemoteDescription 方法设置呼叫方发送给它的 Offer 作为远端描述。代码如下：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'offer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\npc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setRemoteDescription")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RTCSessionDescription")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("doAnswer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"_3-被呼叫方创建-answer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-被呼叫方创建-answer"}},[s._v("#")]),s._v(" 3. 被呼叫方创建 Answer")]),s._v(" "),t("p",[s._v("然后，被呼叫方调用 RTCPeerConnection 对象的 createAnswer 方法，它会生成一个与远程会话兼容的本地会话，并最终将该会话描述发送给呼叫方。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("doAnswer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\npc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createAnswer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\nsetLocalAndSendMessage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\nonCreateSessionDescriptionError\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"_4-呼叫方收到-answer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-呼叫方收到-answer"}},[s._v("#")]),s._v(" 4. 呼叫方收到 Answer")]),s._v(" "),t("p",[s._v("当呼叫方得到被呼叫方的会话描述，即 SDP 时，调用 setRemoteDescription 方法，将收到的会话描述设置为一个远程会话。代码如下：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'answer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\npc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setRemoteDescription")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RTCSessionDescription")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("strong",[s._v("需要特别注意的是，通信双方链路的建立是在设置本地媒体能力，即调用 setLocalDescription 函数之后才进行的。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);