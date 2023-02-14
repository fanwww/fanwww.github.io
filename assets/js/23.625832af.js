(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{398:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webrtc-一-getusermedia-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-一-getusermedia-使用"}},[t._v("#")]),t._v(" WebRTC（一）getUserMedia 使用")]),t._v(" "),a("h2",{attrs:{id:"什么是webrtc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是webrtc"}},[t._v("#")]),t._v(" 什么是"),a("code",[t._v("WebRTC")]),t._v("?")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("p",[t._v("WebRTC，网页即时通信（Web Real-Time Communication），实现了基于网页的视频会议。WebRTC具有免安装，方便接入的特点，它不需要安装任何插件，在浏览器上就可以实现网页端的实时通信。在浏览器之间快速地实现音视频通信。")])]),t._v(" "),a("li",[a("p",[t._v("WebRTC是一个开源项目，旨在使得浏览器能为实时通信（RTC）提供简单的JavaScript接口。说的简单明了一点就是让浏览器提供JS的即时通信接口。这个接口所创立的信道并不是像WebSocket一样，打通一个浏览器与WebSocket服务器之间的通信，而是通过一系列的信令，建立一个浏览器与浏览器之间（peer-to-peer）的信道，这个信道可以发送任何数据，而不需要经过服务器。并且WebRTC通过实现MediaStream，通过浏览器调用设备的摄像头、话筒，使得浏览器之间可以传递音频和视频。")])])])]),t._v(" "),a("h2",{attrs:{id:"音视频采集基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#音视频采集基本概念"}},[t._v("#")]),t._v(" 音视频采集基本概念")]),t._v(" "),a("p",[t._v("在正式介绍 JavaScript 采集音视频数据的 API 之前，你还需要了解一些基本概念。这些概念虽然都不难理解，但在后面讲解 API 时都会用到它们，很是重要，所以在这里我还是给你着重汇总和强调下。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("摄像头")]),t._v(" ：用于捕捉（采集）图像和视频。")]),t._v(" "),a("li",[a("strong",[t._v("帧率")]),t._v("：现在的摄像头功能已非常强大，一般情况下，一秒钟可以采集 30 张以上的图像，一些好的摄像头甚至可以采集 100 张以上。我们把摄像头一秒钟采集图像的次数称为帧率。帧率越高，视频就越平滑流畅。然而，在直播系统中一般不会设置太高的帧率，因为帧率越高，占的网络带宽就越多。")]),t._v(" "),a("li",[a("strong",[t._v("分辨率")]),t._v("：摄像头除了可以设置帧率之外，还可以调整分辨率。我们常见的分辨率有 2K、1080P、720P、420P 等。分辨率越高图像就越清晰，但同时也带来一个问题，即占用的带宽也就越多。所以，在直播系统中，分辨率的高低与网络带宽有紧密的联系。也就是说，分辨率会跟据你的网络带宽进行动态调整。")]),t._v(" "),a("li",[a("strong",[t._v("宽高比")]),t._v("：分辨率一般分为两种宽高比，即 16:9 或 4:3。4:3 的宽高比是从黑白电视而来，而 16:9 的宽高比是从显示器而来。现在一般情况下都采用 16:9 的比例。")]),t._v(" "),a("li",[a("strong",[t._v("麦克风")]),t._v("：用于采集音频数据。它与视频一样，可以指定一秒内采样的次数，称为采样率。每个采样用几个 bit 表示，称为采样位深或采样大小。")]),t._v(" "),a("li",[a("strong",[t._v("轨（Track）")]),t._v("：WebRTC 中的“轨”借鉴了多媒体的概念。火车轨道的特性你应该非常清楚，两条轨永远不会相交。“轨”在多媒体中表达的就是每条轨数据都是独立的，不会与其他轨相交，如 MP4 中的音频轨、视频轨，它们在 MP4 文件中是被分别存储的。")]),t._v(" "),a("li",[a("strong",[t._v("流（Stream）")]),t._v("：可以理解为容器。在 WebRTC 中，“流”可以分为媒体流（MediaStream）和数据流（DataStream）。其中，媒体流可以存放 0 个或多个音频轨或视频轨；数据流可以存 0 个或多个数据轨。")])]),t._v(" "),a("h2",{attrs:{id:"音视频采集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#音视频采集"}},[t._v("#")]),t._v(" 音视频采集")]),t._v(" "),a("h3",{attrs:{id:"_1-getusermedia-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-getusermedia-方法"}},[t._v("#")]),t._v(" 1. getUserMedia 方法")]),t._v(" "),a("p",[t._v("在浏览器中访问音视频设备非常简单，只要调用 getUserMedia 这个 API 即可。该 API 的基本格式如下：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参数对于音视频的描述")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" constraints "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("video")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("frameRate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//视频的帧率最小 20 帧每秒")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ideal")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1280")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最小宽度640，理想宽度1280")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ideal")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最小高度640，理想高度1280")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("aspectRatio")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//宽高比是 16:9")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("audio")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("echoCancellation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//音频开启回音消除")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("noiseSuppression")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启降噪")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("autoGainControl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启自动增益功能")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mediaDevices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserMedia")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("constraints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("它返回一个 Promise 对象。")]),t._v(" "),a("ul",[a("li",[t._v("如果 getUserMedia 调用成功，则可以通过 Promise 获得 MediaStream 对象，也就是说现在我们已经从音视频设备中获取到音视频数据了。")]),t._v(" "),a("li",[t._v("如果调用失败，比如用户拒绝该 API 访问媒体设备（音频设备、视频设备），或者要访问的媒体设备不可用，则返回的 Promise 会得到 PermissionDeniedError 或 NotFoundError 等错误对象。")])]),t._v(" "),a("h3",{attrs:{id:"如何使用-getusermedia-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-getusermedia-api"}},[t._v("#")]),t._v(" 如何使用 getUserMedia API")]),t._v(" "),a("p",[t._v("1.创建html文件")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOCTYPE")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Realtime communication "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" WebRTC"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css/client.css"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Realtime communication "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" WebRTC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("video autoplay playsinline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("video"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js/client.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("video autoplay playsinline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("video"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("autoplay，表示当页面加载时可以自动播放视频；")]),t._v(" "),a("li",[t._v("playsinline，表示在 HTML5 页面内播放视频，而不是使用系统播放器播放视频")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mediaStreamContrains "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("video")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" localVideo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'video'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gotLocalMediaStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mediaStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    localVideo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mediaStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleLocalMediaStreamError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'navigator.getUserMedia error: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nnavigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mediaDevices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserMedia")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mediaStreamContrains"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    gotLocalMediaStream\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    handleLocalMediaStreamError\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("JavaScript 代码中首先执行 "),a("strong",[t._v("getUserMedia()")]),t._v(" 方法，该方法会请求访问 Camera。如果是第一次请求 Camera（摄像头），浏览器会向用户弹出提示窗口，让用户决定是否可以访问摄像头。如果用户允许访问，且设备可用，则调用 "),a("strong",[t._v("gotLocalMediaStream")]),t._v(" 方法。")])]),t._v(" "),a("li",[a("p",[t._v("在 "),a("strong",[t._v("gotLocalMediaStream")]),t._v(" 方法中，其输入参数为 "),a("strong",[t._v("MediaStream")]),t._v(" 对象，该对象中存放着 "),a("strong",[t._v("getUserMedia")]),t._v(" 方法采集到的音视频轨。我们将它作为视频源赋值给 HTML5 的 video 标签的 srcObject 属性。这样在 HTML 页面加载之后，就可以在该页面中看到摄像头采集到的视频数据了。")])])]),t._v(" "),a("h3",{attrs:{id:"getusermedia-api-控制设备的参数及其含义如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getusermedia-api-控制设备的参数及其含义如下"}},[t._v("#")]),t._v(" getUserMedia API 控制设备的参数及其含义如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("视频宽度")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("视频高度")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("frameRate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("帧率")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("facingMode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("user：前置摄像头；enviroment：后置摄像头；left：前置左侧摄像头；right：前置右侧摄像头")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("resizeMode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否允许调整图像大小")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("音量大小")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("sampleRate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("音频采集率")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("samoleSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("音频采集大小")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("echoCancellation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启回音消除")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("noiseSuppression")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启降噪")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("autoGainControl")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启自动增益")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("latency")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("延迟大小")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("channalCount")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("声道数")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("deviceID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备ID")]),t._v(" "),a("td",[t._v("指定哪个输入/输出设备")])]),t._v(" "),a("tr",[a("td",[t._v("groupID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置组ID")]),t._v(" "),a("td",[t._v("如果两个设备属于同一个物理设备，则他们具有相同的 groupID。例如具有麦克风功能的耳机。")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);