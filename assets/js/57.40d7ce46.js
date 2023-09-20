(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{556:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vite的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite的使用"}},[s._v("#")]),s._v(" vite的使用")]),s._v(" "),t("h2",{attrs:{id:"一、使用vite脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、使用vite脚手架"}},[s._v("#")]),s._v(" 一、使用vite脚手架")]),s._v(" "),t("ol",[t("li",[s._v("安装vite脚手架 create-vite")]),s._v(" "),t("li",[s._v("运行create-vite bin目录下的一个执行文件")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("npm ceate vite@latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"二、使用vite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、使用vite"}},[s._v("#")]),s._v(" 二、使用vite")]),s._v(" "),t("blockquote",[t("p",[s._v("vite开发团队本意为了降低vite存在感,鼓励大家直接使用vite脚手架构件,所以真实项目中不推荐从零配置vite")]),s._v(" "),t("p",[s._v("推荐在学习vite的时候从零开始搭建")])]),s._v(" "),t("ol",[t("li",[s._v("初始化package.json")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("npm init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",[t("li",[s._v("安装vite")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("npm install vite "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("配置vite执行命令 package.json")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n\t"scripts":{\n\t\t"dev":"vite"\n\t}\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])]),s._v(" "),t("h1",{attrs:{id:"vite的依赖构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite的依赖构建"}},[s._v("#")]),s._v(" vite的依赖构建")]),s._v(" "),t("h2",{attrs:{id:"一、路径的自动补全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、路径的自动补全"}},[s._v("#")]),s._v(" 一、路径的自动补全")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("vite只认绝对路径和相对路径")])]),s._v(" "),t("li",[t("p",[s._v("如果引入资源的路径不是合法路径,则会自动补全(开发环境)")]),s._v(" "),t("blockquote",[t("p",[s._v("引入")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("mport _ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lodash"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("补全")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" _vite__cjsImport0_lodash "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/node_modules/.vite/deps/lodash?v=版本hash"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("补全lodash里面的依赖模块(向上查找,到根目录或找到依赖为止)")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" _vite__cjsImport0_lodash "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/node_modules/.vite/deps/lodash?v=版本hash"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("生产环境打包依赖rollup")])])]),s._v(" "),t("h2",{attrs:{id:"二、依赖预构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、依赖预构建"}},[s._v("#")]),s._v(" 二、依赖预构建")]),s._v(" "),t("blockquote",[t("p",[s._v("vite会找到对应的依赖,然后调用esbuild(go语言写的一个对js语法进行处理的一个库),将其他规范的代码统一转换成esmodule规范,然后放到当前目录下node_modules/.vite/deps,对esmodule规范的各个模块进行统一集成")])]),s._v(" "),t("p",[t("strong",[s._v("解决了三个痛点")])]),s._v(" "),t("ol",[t("li",[s._v("不同的第三方包会有不同的导出格式(这是vite无法约束的)")]),s._v(" "),t("li",[s._v("对路径的处理上可以直接使用.vite/deps,方便路径重写")]),s._v(" "),t("li",[s._v("网络多包传输的性能问题(依赖嵌套依赖问题)")])]),s._v(" "),t("p",[s._v("指定某些包忽略依赖预构建")]),s._v(" "),t("blockquote",[t("p",[s._v("配置vite.config.[js|ts]文件")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"potimizeDeps"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exclude"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"["')]),s._v("packagename"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"]"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h1",{attrs:{id:"vite配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite配置文件"}},[s._v("#")]),s._v(" vite配置文件")]),s._v(" "),t("blockquote",[t("p",[s._v("vite.config.js   vite.config.ts")])]),s._v(" "),t("h2",{attrs:{id:"一、配置vite配置文件语法提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、配置vite配置文件语法提示"}},[s._v("#")]),s._v(" 一、配置vite配置文件语法提示")]),s._v(" "),t("ol",[t("li",[s._v("如果你使用webstrom,自带语法提示")]),s._v(" "),t("li",[s._v("如果使用vscode,需这样书写配置文件")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//写法一 (推荐)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" defineConfig "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vite'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" defalut "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//写法二")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/** @type import("vite").defineConfig */')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" viteConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" defalut viteConfig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"二、关于环境的处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、关于环境的处理"}},[s._v("#")]),s._v(" 二、关于环境的处理")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import { defineConfig } from 'vite'\nimport viteBaseConfig from './vite.base.config' //基础配置\nimport viteDevConfig from './vite.dev.config' //开发环境配置\nimport viteProdConfig from './vite.prod.config' //生产环境配置\n\n//策略模式\nconst envResolver = {\n\t\"serve\":()=>({...viteBaseConfig,...viteDevConfig}),\n\t\"build\":()=>({...viteBaseConfig,...viteProdConfig}),\n}\n\n//此处command和shell命令有关\n//执行npm run dev 则为dev\n//执行npm run prod 则为prod\nexport default defineConfig(({command:\"serve\"|\"build\"})=>{\n\treturn envResolver[command]()\n})\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"三、vite环境变量配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、vite环境变量配置"}},[s._v("#")]),s._v(" 三、vite环境变量配置")]),s._v(" "),t("blockquote",[t("p",[s._v("环境变量:会根据当前代码环境产生值的变化")])]),s._v(" "),t("p",[t("strong",[s._v("常见代码环境")])]),s._v(" "),t("ul",[t("li",[s._v("开发环境")]),s._v(" "),t("li",[s._v("测试环境")]),s._v(" "),t("li",[s._v("预发布环境")]),s._v(" "),t("li",[s._v("灰度环境")]),s._v(" "),t("li",[s._v("生产环境")])]),s._v(" "),t("blockquote",[t("p",[s._v("例子:百度子图sdk,小程序的sdk")]),s._v(" "),t("p",[s._v("APP_KEY:开发环境、测试环境和开发环境的key不一样")]),s._v(" "),t("ul",[t("li",[s._v("开发环境: 110")]),s._v(" "),t("li",[s._v("测试环境: 111")]),s._v(" "),t("li",[s._v("生产环境: 112")])])]),s._v(" "),t("p",[t("strong",[s._v("配置步骤")])]),s._v(" "),t("blockquote",[t("p",[s._v("以开发环境为例")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建.env.prod 配置文件  .env不加环境就是所有环境通用的基础变量")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//默认VITE_为前缀的变量才会暴露给经过 vite 处理的代码 默认前缀可以去配置里面改\nVITE_APP_KEY = 112\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置package.json启动命令 --mode prod")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n    "scripts":{\n        "prod":"vite build --mode prod"\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置vite.config")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('export default defineConfig(({command:"serve"|"build",mode:string})=>{\n\tconst env = loadEnv(mode,process.cwd(),prefiexs:\'\')\n\t//env.VITE_APP_KEY\n\treturn envResolver[command]()\n})\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])]),s._v(" "),t("p",[s._v("配置成功后,环境变量会被注入到process对象上")]),s._v(" "),t("p",[s._v("vite.config中访问 参考3")]),s._v(" "),t("p",[s._v("开发页面中访问  impot.meta.env.VITE_APP_KEY")])]),s._v(" "),t("h1",{attrs:{id:"vite处理css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite处理css"}},[s._v("#")]),s._v(" vite处理css")]),s._v(" "),t("blockquote",[t("p",[s._v("vite天生支持对css文件的处理")])]),s._v(" "),t("h2",{attrs:{id:"一、处理流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、处理流程"}},[s._v("#")]),s._v(" 一、处理流程")]),s._v(" "),t("ol",[t("li",[s._v("vite在main.js中引用到index.css")]),s._v(" "),t("li",[s._v("使用fs模块去读取index.css内容")]),s._v(" "),t("li",[s._v("创建style标签,将内容copy到style标签中")]),s._v(" "),t("li",[s._v("将css文件中的内容替换为js脚本,方面热更新(hmr)和css模块化,同时设置"),t("strong",[s._v("Content-Type")]),s._v("为"),t("strong",[s._v("application/x-javascript")]),s._v(",让浏览器以js形式解析css")])]),s._v(" "),t("h2",{attrs:{id:"二、css模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、css模块化"}},[s._v("#")]),s._v(" 二、css模块化")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("module.css (module是一种约定,表示需要开启css模块化)")]),s._v(" "),t("li",[s._v("会将所有类名改为 "),t("strong",[s._v("类名+hash")]),s._v(" 的形式   .class => .class_a_i22st_1")]),s._v(" "),t("li",[s._v('同时创建映射对象{class:"class_a_i22st_1"}')]),s._v(" "),t("li",[s._v("将替换过后的内容赛新style标签然后放到head标签")]),s._v(" "),t("li",[s._v("将模块内未加hash的css内容全部抹除避免影响全局样式")]),s._v(" "),t("li",[s._v("将映射对象在脚本默认导出")]),s._v(" "),t("li",[s._v("对于sass、less等预处理器,下载对应插件即可")])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("css")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("moudles")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("localsConcention")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"camelCaseOnly"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打包只保留驼峰式")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("scopeBehaviour")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置样式模块化 global为全局样式")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("generateScopeName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[name]_[local]_[hash:5]"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置类型格式(参考postcss)")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hashPrefix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"superfan"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//生成hash的时候根据prefix+name+其他的一些 类似据加密加盐")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("globalModulePaths")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//不想参与模块化的css路径")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"三、css预处理器配置流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、css预处理器配置流程"}},[s._v("#")]),s._v(" 三、css预处理器配置流程")]),s._v(" "),t("blockquote",[t("p",[s._v("preprocessorOptions")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("css")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("preprocessorOptions")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sass")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参考sass官方文档")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("less")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//参考less官方文档")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"四、postcss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、postcss"}},[s._v("#")]),s._v(" 四、postcss")]),s._v(" "),t("blockquote",[t("p",[s._v("在vite中原生支持postcss")])]),s._v(" "),t("p",[t("strong",[s._v("作用")])]),s._v(" "),t("ul",[t("li",[s._v("对新版css语法降级")]),s._v(" "),t("li",[s._v("前缀补全")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.postcss.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss配置参考"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.postcss.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss中文文档"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);