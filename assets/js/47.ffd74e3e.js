(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{358:function(t,v,_){"use strict";_.r(v);var a=_(8),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"git关联仓库及跟踪远程分支流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git关联仓库及跟踪远程分支流程"}},[t._v("#")]),t._v(" GIT关联仓库及跟踪远程分支流程")]),t._v(" "),v("h2",{attrs:{id:"在远程仓库创建一个名字为abc的分支-并提交一个文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在远程仓库创建一个名字为abc的分支-并提交一个文件"}},[t._v("#")]),t._v(" 在远程仓库创建一个名字为abc的分支,并提交一个文件")]),t._v(" "),v("p",[t._v("本地创建一个文件夹")]),t._v(" "),v("p",[t._v("git init 初始化本地仓库")]),t._v(" "),v("p",[t._v("git checkout -b abc 创建本地abc分支并进入该本地分支")]),t._v(" "),v("p",[t._v("git remote 跟踪远程仓库")]),t._v(" "),v("p",[t._v("git push --set-upstream origin abc 在远程仓库创建一个abc分支并关联该分支")]),t._v(" "),v("p",[t._v("创建一个文件")]),t._v(" "),v("p",[t._v("git add .")]),t._v(" "),v("p",[t._v('git commit -m "第一个文件"')]),t._v(" "),v("p",[t._v("git push 推送第一个文件到远程仓库的dev分支")]),t._v(" "),v("h2",{attrs:{id:"解决一个在线项目bug"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决一个在线项目bug"}},[t._v("#")]),t._v(" 解决一个在线项目bug")]),t._v(" "),v("p",[t._v("git clone url  拉取远程仓库代码 (这时候本地仓库已经跟踪了远程仓库并且关联了master分支,git push 可直接往master分支推送)")]),t._v(" "),v("p",[t._v("git checkout -b dev 在本地仓库创建一个名为dev的分支并进入该本地分支")]),t._v(" "),v("p",[t._v("git --set-upstream origin dev  在远程仓库创建一个名为dev的分支并关联该分支")]),t._v(" "),v("p",[t._v("解决bug")]),t._v(" "),v("p",[t._v("git add.")]),t._v(" "),v("p",[t._v('git commit -m "bug已修复"')]),t._v(" "),v("p",[t._v("git push 推送修改后的代码到远程仓库名为dev的分支上")]),t._v(" "),v("p",[t._v("等待远程仓库master分支使用git merge合并dev分支解决bug")]),t._v(" "),v("p",[t._v("如果你想在本地abc分支下关联远程def分支")]),t._v(" "),v("p",[t._v("git branch --set-upstream-to=远程分支名 本地分支名")])])}),[],!1,null,null,null);v.default=e.exports}}]);