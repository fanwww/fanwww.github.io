(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{573:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[s._v("#")]),s._v(" 环境配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('less、scss(sass)和stylus代码并不能被浏览器直接解析，所以必须先将它们编译成css代码\n\n现有框架已经提供了css预处理器选项，编译相关配置会自动帮我们生成！所以只有在"练习"情况下才有必要安装该环境\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"一、安装分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装分类"}},[s._v("#")]),s._v(" 一、安装分类")]),s._v(" "),a("h3",{attrs:{id:"_1-不依赖编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-不依赖编辑器"}},[s._v("#")]),s._v(" 1.不依赖编辑器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局安装scss预处理器，使用终端命令实现编译")]),s._v("\n\na. Node环境下的node-sass模块\nb. Node环境下的dart-sass模块\nc. Ruby环境下的sass模块\nd. Dart环境下的sass模块\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 注：这里的推荐顺序针对的是"练习"场景，而开发环境下推荐使用的是dart-sass')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本质：某个语言的第三方库或者命令行工具")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_2-依赖编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-依赖编辑器"}},[s._v("#")]),s._v(" 2.依赖编辑器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a. IDE代表：Webstrom\t前提是安装上述"1"中的命令行编译工具，配置自动命令，另安装一个代码提示插件scss\nb. 编辑器代表：vscode   安装Easy Sass（编译）和Sass（代码提示）两个插件\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"二、安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装步骤"}},[s._v("#")]),s._v(" 二、安装步骤")]),s._v(" "),a("h3",{attrs:{id:"_1-不依赖编辑器-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-不依赖编辑器-2"}},[s._v("#")]),s._v(" 1.不依赖编辑器")]),s._v(" "),a("h4",{attrs:{id:"😀-node环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#😀-node环境"}},[s._v("#")]),s._v(" 😀 Node环境")]),s._v(" "),a("h5",{attrs:{id:"node-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-sass"}},[s._v("#")]),s._v(" - node-sass")]),s._v(" "),a("h6",{attrs:{id:"a-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-安装"}},[s._v("#")]),s._v(" a.安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 安装node  https://nodejs.org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("官网"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 或 https://npm.taobao.org/mirrors/node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("镜像"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". *安装cnpm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("不推荐直接将源换为淘宝镜像"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" cnpm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 安装node-sass "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" node-sass  或  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cnpm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" node-sass\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". 检查是否安装成功"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706124420782.png",alt:"image-20200706124420782"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706132832305.png",alt:"image-20200706132832305"}})]),s._v(" "),a("h6",{attrs:{id:"b-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-使用"}},[s._v("#")]),s._v(" b.使用")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("单文件编译")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass  原有的scss文件 生成的css文件\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass  原有的scss文件 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" 生成目录\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass a.scss b.css\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass a.scss css_files\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("多文件编译")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass 原有的scss文件目录 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" 生成的css文件目录\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass c "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("文件监听模式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 在"1"和"2"的基础上填加"-w"命令行参数即可')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" 原有的scss文件 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" 生成目录\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" 原有的scss文件目录 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" 生成的css文件目录\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node")]),s._v("-sass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" scss "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" css\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 效果：编译进程不结束，监听文件内容")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706134612609.png",alt:"image-20200706134612609"}})])])]),s._v(" "),a("h5",{attrs:{id:"dart-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dart-sass"}},[s._v("#")]),s._v(" - dart-sass")]),s._v(" "),a("h6",{attrs:{id:"a-安装-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-安装-2"}},[s._v("#")]),s._v(" a.安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 安装node  https://nodejs.org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("官网"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 或 https://npm.taobao.org/mirrors/node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("镜像"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". *安装cnpm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("不推荐直接将源换为淘宝镜像"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" cnpm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 安装dart-sass "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" sass  或  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cnpm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" sass\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注：该模块为第三方库，所以可以考虑使用cnpm i sass -D(-D == --save-dev)仅对某个小项目当做开发时依赖进行使用")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h6",{attrs:{id:"b-使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-使用-2"}},[s._v("#")]),s._v(" b.使用")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 该模块的官方文档：https://sass-lang.com/documentation/js-api */")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sass "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nsass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" scss_filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// OR")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("renderSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" scss_filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注：默认情况下renderSync()的速度是render()的两倍以上，这是由于异步回调所带来的开销而导致的")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("hr"),s._v(" "),a("h4",{attrs:{id:"😀-ruby环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#😀-ruby环境"}},[s._v("#")]),s._v(" 😀 Ruby环境")]),s._v(" "),a("h5",{attrs:{id:"a-安装-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-安装-3"}},[s._v("#")]),s._v(" a.安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".安装Ruby\thttps://rubyinstaller.org/downloads\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".*配置镜像\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gem")]),s._v(" sources "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" https://gems.ruby-china.com/ "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" https://rubygems.org/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".*查看源 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gem")]),s._v(" sources "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保只有gems.ruby-china.com一个源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".安装scss "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gem")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" sass\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".检查是否安装成功 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706141653304.png",alt:"image-20200706141653304"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注：如果出现了SSL错误，修改 ~/.gemrc 文件，增加 ssl_verify_mode: 0 配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ~表示用户根目录，windows的文件位置为C:\\Users\\用户名\\.gemrc")]),s._v("\n\n---\n:sources:\n- https://gems.ruby-china.com\n:ssl_verify_mode: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706142100322.png",alt:"image-20200706142100322"}})]),s._v(" "),a("h5",{attrs:{id:"b-使用-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-使用-3"}},[s._v("#")]),s._v(" b.使用")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 注：最好带上"-C --sourcemap=none "参数')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注：Sass 命令行工具根据文件的拓展名判断所使用的语法格式，没有文件名时 sass 命令默认编译 .sass 文件，添加 --scss 选项或者使用 scss 命令编译 SCSS 文件。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",[a("li",[a("p",[s._v("单文件编译")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v("  原有的scss文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("生成的css文件\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" a.scss b.css\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("多文件编译")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v(" 原有的scss文件目录:生成的css文件目录\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 注：必须加"--watch"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("文件监听模式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v(" 原有的scss文件:生成的css文件\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v(" 原有的scss文件目录:生成的css文件目录\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--sourcemap")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none scss:css\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 效果：编译进程不结束，监听文件内容")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706143409397.png",alt:"image-20200706143409397"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706164519533.png",alt:"image-20200706164519533"}})])])]),s._v(" "),a("hr"),s._v(" "),a("h4",{attrs:{id:"😀-dart环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#😀-dart环境"}},[s._v("#")]),s._v(" 😀 Dart环境")]),s._v(" "),a("h5",{attrs:{id:"a-安装-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-安装-4"}},[s._v("#")]),s._v(" a.安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".安装Dart\thttps://dart.dev/tools/sdk/archive\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".*配置镜像，添加环境变量 https://pub.flutter-io.cn 或 https://mirrors.tuna.tsinghua.edu.cn/dart-pub/\nwindows打开此电脑,添加系统变量 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PUB_HOSTED_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://pub.flutter-io.cn\nLinux键入"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PUB_HOSTED_URL=\"https://pub.flutter-io.cn\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc 或 /etc/profile\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".安装sass\n全局安装："),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pub")]),s._v(" global activate sass\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("可执行文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n项目安装：pubspec.yaml填写好依赖后，执行 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pub")]),s._v(" get\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".dart代码"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".检查是否安装成功"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706152755791.png",alt:"image-20200706152755791"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706153705517.png",alt:"image-20200706153705517"}})]),s._v(" "),a("h5",{attrs:{id:"b-使用-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-使用-4"}},[s._v("#")]),s._v(" b.使用")]),s._v(" "),a("h6",{attrs:{id:"全局安装模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装模式"}},[s._v("#")]),s._v(" 全局安装模式")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("单文件编译")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v("  原有的scss文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("生成的css文件\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" a.scss b.css\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("多文件编译")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" 原有的scss文件目录/:生成的css文件目录/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" scss/:css/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("文件监听模式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v(" 原有的scss文件:生成的css文件\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v(" 原有的scss文件目录:生成的css文件目录\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 注：都必须加上":"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v(" scss:css\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 效果：编译进程不结束，监听文件内容")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706160732312.png",alt:"image-20200706160732312"}})]),s._v(" "),a("h6",{attrs:{id:"局部安装模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部安装模式"}},[s._v("#")]),s._v(" 局部安装模式")]),s._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("运行"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dart代码\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 前提是在pubsepc.yaml文件中添加依赖")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// dev_dependencies:")]),s._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//\t\tsass: lastest")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.dart")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package:sass/sass.dart'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("as")]),s._v(" sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeAsStringSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// dart main.dart styles.scss styles.css")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"_2-依赖编辑器-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-依赖编辑器-2"}},[s._v("#")]),s._v(" 2.依赖编辑器")]),s._v(" "),a("h4",{attrs:{id:"😀-webstrom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#😀-webstrom"}},[s._v("#")]),s._v(" 😀 WebStrom")]),s._v(" "),a("ul",[a("li",[s._v("安装上述命令行工具之一（以node-sass为例演示）")]),s._v(" "),a("li",[s._v("依次打开并点击：webstrom -> Settings -> Tools -> Files Watchers -> + -> 选择SCSS文件标识")]),s._v(" "),a("li",[s._v("Name随意写，供自己看而已")]),s._v(" "),a("li",[s._v("File Type选择SCSS Style Sheet")]),s._v(" "),a("li",[s._v("Scope选择All Places")]),s._v(" "),a("li",[s._v("Program选择可执行文件的路径（这里以node-sass为例）")]),s._v(" "),a("li",[s._v("Arguments按需选择（这里以*$FileName$:$FileNameWithoutExtension$.css*为例）")]),s._v(" "),a("li",[s._v("Output paths to refresh按需选择（这里以*$FileNameWithoutExtension$.css*为例）")]),s._v(" "),a("li",[s._v("点击OK，配置完成")])]),s._v(" "),a("h4",{attrs:{id:"😀-vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#😀-vscode"}},[s._v("#")]),s._v(" 😀 VSCode")]),s._v(" "),a("ul",[a("li",[s._v("安装Easy Sass（编译）和Sass（代码提示）两个插件（注意大小写，否则找不到）")]),s._v(" "),a("li",[s._v('点击插件右下角的设置图标后点击"扩展设置"，最后点击"在settings.json中编辑"，开始设置关于Easy Sass的配置')]),s._v(" "),a("li",[s._v("会自动生成下方图片内的配置")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706185328878.png",alt:"image-20200706185328878"}})]),s._v(" "),a("ul",[a("li",[s._v('添加*"easysass.targetDir": $path*，可将编译后的css文件放入*$path*路径下(默认为当前路径)。例如生成到css文件下内')])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200706185722811.png",alt:"image-20200706185722811"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);