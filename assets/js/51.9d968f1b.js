(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{366:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"python-爬虫入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python-爬虫入门"}},[s._v("#")]),s._v(" Python 爬虫入门")]),s._v(" "),t("blockquote",[t("p",[s._v("爬虫四步骤：获取数据、解析数据、提取数据、存储数据")])]),s._v(" "),t("h2",{attrs:{id:"获取数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取数据"}},[s._v("#")]),s._v(" 获取数据")]),s._v(" "),t("h3",{attrs:{id:"requests-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requests-模块"}},[s._v("#")]),s._v(" requests 模块")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\nurl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg'")]),s._v("\nheaders "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://y.qq.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求来源")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'referer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://y.qq.com/n/yqq/song/004Z8Ihr0JIu5s.html'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求来源，携带的信息比“origin”更丰富")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user-agent'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标记了请求从什么设备，什么浏览器上发出")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 伪装请求头")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求歌曲评论的url参数的前面部分")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  params "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'g_tk'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5381'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'needmusiccrit'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pagenum'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pagesize'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'15'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lasthotcommentid'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'song_102065756_3202544866_44059185'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'domain'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'qq.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将参数封装为字典")]),s._v("\n  res_comments "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("params"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调用get方法，下载这个字典")]),s._v("\n  json_comments "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" res_comments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  list_comments "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json_comments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'comment'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'commentlist'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" comment "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" list_comments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("comment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rootcommentcontent'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-----------------------------------'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 好像最好关闭，否则会保持多个连接，容易被封")]),s._v("\nres_comments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("h3",{attrs:{id:"response-对象常用属性-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response-对象常用属性-方法"}},[s._v("#")]),s._v(" Response 对象常用属性/方法")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("属性方法")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("res.status_code")]),s._v(" "),t("td",[s._v("响应状态码")])]),s._v(" "),t("tr",[t("td",[s._v("res.content")]),s._v(" "),t("td",[s._v("转为二进制数据，用于图像音视频")])]),s._v(" "),t("tr",[t("td",[s._v("res.text")]),s._v(" "),t("td",[s._v("字符串数据")])]),s._v(" "),t("tr",[t("td",[s._v("res.encoding")]),s._v(" "),t("td",[s._v("指定编码方式 utf-8，gbk")])]),s._v(" "),t("tr",[t("td",[s._v("res.json()")]),s._v(" "),t("td",[s._v("将 response 转为字典/列表")])])])]),s._v(" "),t("h2",{attrs:{id:"解析数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析数据"}},[s._v("#")]),s._v(" 解析数据")]),s._v(" "),t("p",[s._v("解析数据让 Python 看得明白 HTML")]),s._v(" "),t("h3",{attrs:{id:"beautifulsoup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beautifulsoup"}},[s._v("#")]),s._v(" BeautifulSoup")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" bs4 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BeautifulSoup\nres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://localprod.pandateacher.com/python-manuscript/crawler-html/spider-men5.0.html'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把网页解析为BeautifulSoup对象，第2个参数是解析器")]),s._v("\nsoup "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" BeautifulSoup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html.parser'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"提取数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提取数据"}},[s._v("#")]),s._v(" 提取数据")]),s._v(" "),t("h3",{attrs:{id:"beautifulsoup-对象-tag-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beautifulsoup-对象-tag-对象"}},[s._v("#")]),s._v(" BeautifulSoup 对象 & Tag 对象")]),s._v(" "),t("p",[s._v("BeautifulSoup 对象")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("方法")]),s._v(" "),t("th",[s._v("作用")]),s._v(" "),t("th",[s._v("语法")]),s._v(" "),t("th",[s._v("示例")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("find()")]),s._v(" "),t("td",[s._v("提取满足要求的首个数据")]),s._v(" "),t("td",[s._v("BeautifulSoup 对象.find(标签,属性)")]),s._v(" "),t("td",[s._v("soup.find('div',class_='books')")])]),s._v(" "),t("tr",[t("td",[s._v("find_all()")]),s._v(" "),t("td",[s._v("提取满足要求的所有数据")]),s._v(" "),t("td",[s._v("BeautifulSoup 对象.find_all(标签,属性)")]),s._v(" "),t("td",[s._v("soup.find_all('div',class_='books')")])])])]),s._v(" "),t("p",[s._v("Tag 对象")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("属性/方法")]),s._v(" "),t("th",[s._v("作用")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Tag.find()和 Tag.find_all()")]),s._v(" "),t("td",[s._v("提取 Tag 中的 Tag")])]),s._v(" "),t("tr",[t("td",[s._v("Tag.text")]),s._v(" "),t("td",[s._v("提取 Tag 中的文字")])]),s._v(" "),t("tr",[t("td",[s._v("Tag['属性名']")]),s._v(" "),t("td",[s._v("提取 Tag 中这个属性的值")])])])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回一个Tag类对象")]),s._v("\nitem "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" soup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回一个ResultSet类的对象。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其实是Tag对象以列表结构储存了起来")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以把它当做列表来处理")]),s._v("\nitems "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" soup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"存储数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储数据"}},[s._v("#")]),s._v(" 存储数据")]),s._v(" "),t("h3",{attrs:{id:"csv-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csv-模块"}},[s._v("#")]),s._v(" csv 模块")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th"),s._v(" "),t("th"),s._v(" "),t("th",[s._v("b")]),s._v(" "),t("th",[s._v("+")]),s._v(" "),t("th",[s._v("b+")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("r(read,读)")]),s._v(" "),t("td",[s._v("r 只读，指针在开头，文件不存在则报错")]),s._v(" "),t("td",[s._v("rb 二进制只读")]),s._v(" "),t("td",[s._v("r+读写")]),s._v(" "),t("td",[s._v("rb+二进制读写")])]),s._v(" "),t("tr",[t("td",[s._v("w(write,写)")]),s._v(" "),t("td",[s._v("w 只写，文件不存在则新建，存在则覆盖")]),s._v(" "),t("td",[s._v("wb 二进制只写")]),s._v(" "),t("td",[s._v("w+读写")]),s._v(" "),t("td",[s._v("wb+二进制读写")])]),s._v(" "),t("tr",[t("td",[s._v("a(append,追加)")]),s._v(" "),t("td",[s._v("a 追加，文件存在指针放在末尾，不存在则新建")]),s._v(" "),t("td",[s._v("ab 二进制追加")]),s._v(" "),t("td",[s._v("a+追加且可读")]),s._v(" "),t("td",[s._v("ab+二进制追加且可读")])])])]),s._v(" "),t("h4",{attrs:{id:"写文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写文件"}},[s._v("#")]),s._v(" 写文件")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" csv\n\ncsv_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo.csv'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("newline"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建csv文件，文件名“demo.csv”、写入模式“w”、")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# newline='',避免表格的行与行之间出现空白行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# encoding='utf-8'。")]),s._v("\n\nwriter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" csv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("writer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("csv_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用csv.writer()函数创建一个writer对象")]),s._v("\nwriter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("writerow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'电影'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'豆瓣评分'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nwriter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("writerow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'银河护卫队'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8.0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ncsv_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h4",{attrs:{id:"读文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读文件"}},[s._v("#")]),s._v(" 读文件")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" csv\ncsv_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo.csv'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'r'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("newline"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nreader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" csv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("csv_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" row "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"openpyxl-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openpyxl-模块"}},[s._v("#")]),s._v(" openpyxl 模块")]),s._v(" "),t("h4",{attrs:{id:"写文件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写文件-2"}},[s._v("#")]),s._v(" 写文件")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" openpyxl\n\nwb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" openpyxl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Workbook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新的workbook（工作簿）对象，就是创建新的空的Excel文件")]),s._v("\n\nsheet "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" wb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("active\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wb.active就是获取这个工作簿的活动表，通常就是第一个工作表。")]),s._v("\nsheet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new title'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给工作表重命名")]),s._v("\n\nsheet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'漫威宇宙'")]),s._v("\nrow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'美国队长'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'钢铁侠'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'蜘蛛侠'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsheet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nrows "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'美国队长'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'钢铁侠'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'蜘蛛侠'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'是'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'漫威'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'宇宙'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'经典'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'人物'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#先把要写入的多行内容写成列表，再放进大列表里，赋值给rows。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" rows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    sheet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nwb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Marvel.xlsx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h4",{attrs:{id:"读文件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读文件-2"}},[s._v("#")]),s._v(" 读文件")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[s._v("wb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" openpyxl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("load_workbook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Marvel.xlsx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsheet "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" wb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new title'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nsheetname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" wb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sheetnames\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sheetname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nA1_cell "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sheet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nA1_value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" A1_cell"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A1_value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);