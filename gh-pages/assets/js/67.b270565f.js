(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{311:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"静态资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态资源"}},[a._v("#")]),a._v(" 静态资源")]),a._v(" "),t("h2",{attrs:{id:"相对路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相对路径"}},[a._v("#")]),a._v(" 相对路径")]),a._v(" "),t("p",[a._v("所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，因此你可以，并且"),t("strong",[a._v("应该更倾向于")]),a._v("使用相对路径（Relative URLs）来引用所有的静态资源：")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token url"}},[a._v("!["),t("span",{pre:!0,attrs:{class:"token content"}},[a._v("An image")]),a._v("](./image.png)")]),a._v("\n")])])]),t("p",[a._v("同样地，这在 "),t("code",[a._v("*.vue")]),a._v(" 文件的模板中一样可以工作，图片将会被 "),t("code",[a._v("url-loader")]),a._v(" 和 "),t("code",[a._v("file-loader")]),a._v(" 处理，在运行生成静态文件的构建任务时，文件会被复制到正确的位置。")]),a._v(" "),t("p",[a._v("除此之外，你也使用 "),t("code",[a._v("~")]),a._v(" 前缀来明确地指出这是一个 webpack 的模块请求，这将允许你通过 webpack 别名来引用文件或者 npm 的依赖：")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token url"}},[a._v("!["),t("span",{pre:!0,attrs:{class:"token content"}},[a._v("Image from alias")]),a._v("](~@alias/image.png)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token url"}},[a._v("!["),t("span",{pre:!0,attrs:{class:"token content"}},[a._v("Image from dependency")]),a._v("](~some-dependency/image.png)")]),a._v("\n")])])]),t("p",[a._v("Webpack 的别名可以通过 "),t("code",[a._v(".vuepress/config.js")]),a._v(" 中 "),t("router-link",{attrs:{to:"/zh/config/#configurewebpack"}},[a._v("configureWebpack")]),a._v(" 来配置，如：")],1),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  configureWebpack"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    resolve"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@alias'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'path/to/some/dir'")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"公共文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公共文件"}},[a._v("#")]),a._v(" 公共文件")]),a._v(" "),t("p",[a._v("有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 "),t("code",[a._v(".vuepress/public")]),a._v(" 中， 它们最终会被复制到生成的静态文件夹中。")]),a._v(" "),t("h2",{attrs:{id:"基础路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础路径"}},[a._v("#")]),a._v(" 基础路径")]),a._v(" "),t("p",[a._v("如果你的网站会被部署到一个"),t("strong",[a._v("非根路径")]),a._v("，你将需要在 "),t("code",[a._v(".vuepress/config.js")]),a._v(" 中设置 "),t("code",[a._v("base")]),a._v("，举例来说，如果你打算将你的网站部署到 "),t("code",[a._v("https://foo.github.io/bar/")]),a._v("，那么 "),t("code",[a._v("base")]),a._v(" 的值就应该被设置为 "),t("code",[a._v('"/bar/"')]),a._v(" (应当总是以斜杠开始，并以斜杠结束)。")]),a._v(" "),t("p",[a._v("有了基础路径（Base URL），如果你希望引用一张放在 "),t("code",[a._v(".vuepress/public")]),a._v(" 中的图片，你需要使用这样路径："),t("code",[a._v("/bar/image.png")]),a._v("，然而，一旦某一天你决定去修改 "),t("code",[a._v("base")]),a._v("，这样的路径引用将会显得异常脆弱。为了解决这个问题，VuePress 提供了内置的一个 helper "),t("code",[a._v("$withBase")]),a._v("（它被注入到了 Vue 的原型上），可以帮助你生成正确的路径：")]),a._v(" "),t("div",{staticClass:"language-vue extra-class"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("img")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v(":src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("$withBase('/foo.png')"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("alt")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("p",[a._v("值得一提的是，你不仅可以在你的 Vue 组件中使用上述的语法，在 Markdown 文件中亦是如此。")]),a._v(" "),t("p",[a._v("最后补充一句，一个 "),t("code",[a._v("base")]),a._v(" 路径一旦被设置，它将会自动地作为前缀插入到 "),t("code",[a._v(".vuepress/config.js")]),a._v(" 中所有以 "),t("code",[a._v("/")]),a._v(" 开始的资源路径中。")])])}),[],!1,null,null,null);s.default=n.exports}}]);