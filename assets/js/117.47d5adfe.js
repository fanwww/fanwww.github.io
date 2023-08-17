(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{623:function(a,t,s){"use strict";s.r(t);var r=s(8),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[a._v("#")]),a._v(" Git")]),a._v(" "),t("h4",{attrs:{id:"本地搭建仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地搭建仓库"}},[a._v("#")]),a._v(" 本地搭建仓库")]),a._v(" "),t("p",[a._v("git init 创建一个空.git目录")]),a._v(" "),t("p",[a._v("git clone [url]  克隆远程目录,从远程服务器镜像一份至本地")]),a._v(" "),t("h4",{attrs:{id:"基本文件操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本文件操作"}},[a._v("#")]),a._v(" 基本文件操作")]),a._v(" "),t("h5",{attrs:{id:"文件的四种状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件的四种状态"}},[a._v("#")]),a._v(" 文件的四种状态:")]),a._v(" "),t("p",[a._v("Untracked未跟踪    Unmodify已入库未修改    Modified文件已修改     Staged暂存状态")]),a._v(" "),t("p",[a._v("git status 查看文件状态")]),a._v(" "),t("p",[a._v("git add .  将文件提交到暂存区")]),a._v(" "),t("p",[a._v('git commit -m "备注"   将暂存区文件提交到本地仓库 -m为提交信息')]),a._v(" "),t("h5",{attrs:{id:"忽略文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件"}},[a._v("#")]),a._v(" 忽略文件:")]),a._v(" "),t("p",[a._v(".gitignore  忽略的文件类型以*开头  名称前有!代表例外规则,不被忽略")]),a._v(" "),t("p",[a._v("举例 文件里面写*.rar不配置rar文件    *.mp4不配置mp4文件")]),a._v(" "),t("p",[a._v("设置本机绑定SSH公钥,实现远程仓库免密码登录")]),a._v(" "),t("p",[a._v("ssh-keygen 或者ssh-keyfen -t rsa 生成加密公钥")]),a._v(" "),t("p",[a._v("git push 从本地仓库提交到远程仓库 或者git push 分支")]),a._v(" "),t("h5",{attrs:{id:"分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[a._v("#")]),a._v(" 分支:")]),a._v(" "),t("p",[a._v("git branch 列出所有本地分支")]),a._v(" "),t("p",[a._v("git branch --r 列出所有远程分支")]),a._v(" "),t("p",[a._v("git branch [branch-name] 新建一个分支,但依然停留在当前分支")]),a._v(" "),t("p",[a._v("gir checkout -b [branch] 新建一个分支,并切换到该分支")]),a._v(" "),t("p",[a._v("git merge [branch] 和并指定分支到当前分支")]),a._v(" "),t("p",[a._v("git branch -d [branch-name] 删除分支")]),a._v(" "),t("p",[a._v("删除远程分支")]),a._v(" "),t("p",[a._v("1.git push origin --delete [branch-name]")]),a._v(" "),t("p",[a._v("2.git branch -dr [remote/branch]git")]),a._v(" "),t("h5",{attrs:{id:"跟踪远程仓库-关联远程仓库后方可操作远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跟踪远程仓库-关联远程仓库后方可操作远程分支"}},[a._v("#")]),a._v(" 跟踪远程仓库 (关联远程仓库后方可操作远程分支)")]),a._v(" "),t("p",[a._v("git remote add origin url")]),a._v(" "),t("h5",{attrs:{id:"创建远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建远程分支"}},[a._v("#")]),a._v(" 创建远程分支")]),a._v(" "),t("p",[a._v("1、git branch -rv 查看所有远程分支")]),a._v(" "),t("p",[a._v("2、git checkout -b + 分支名  创建分支")]),a._v(" "),t("p",[a._v("3、git push --set-upstream origin + 刚刚创建的分支名(在刚在创建的本地分支使用此命令) 远程分支创建成功")]),a._v(" "),t("p",[a._v("或者 git push orgin 本地分支名:远程分支名")]),a._v(" "),t("h5",{attrs:{id:"关联远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关联远程分支"}},[a._v("#")]),a._v(" 关联远程分支")]),a._v(" "),t("p",[a._v("git branch --set-upstream-to=远程分支 本地分支")]),a._v(" "),t("p",[a._v("把远程分支和本地分支填写到对应的地方即可.")]),a._v(" "),t("p",[a._v("注意:远程分支要带上仓库名 比如 origin/xxx_分支名")]),a._v(" "),t("h5",{attrs:{id:"版本回滚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本回滚"}},[a._v("#")]),a._v(" 版本回滚")]),a._v(" "),t("p",[a._v("git reset --hard [记录哈希]")]),a._v(" "),t("h5",{attrs:{id:"git从暂存区撤回修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git从暂存区撤回修改"}},[a._v("#")]),a._v(" git从暂存区撤回修改")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 恢复暂存区的指定文件到工作区")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 恢复暂存区的所有文件到工作区")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h5",{attrs:{id:"git查看配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git查看配置"}},[a._v("#")]),a._v(" git查看配置")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h5",{attrs:{id:"git初始化ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git初始化ssh"}},[a._v("#")]),a._v(" git初始化ssh")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("ssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" rsa "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"邮箱"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h5",{attrs:{id:"git-配置用户名和邮箱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-配置用户名和邮箱"}},[a._v("#")]),a._v(" git 配置用户名和邮箱")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"用户名"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"邮箱"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h5",{attrs:{id:"git查看分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git查看分支"}},[a._v("#")]),a._v(" git查看分支")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看远程分支")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("  \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);