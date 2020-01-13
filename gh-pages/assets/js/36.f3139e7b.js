(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{262:function(t,e,s){"use strict";s.r(e);var a=s(2),n=function(t){t.options.__data__block__={flowchart_382ee240:"cond1=>condition: User’s ssr.html\nexists?\ncond2=>condition: Theme’s ssr.html\nexists?\nstage1=>operation: Using user’s ssr.html\nstage2=>operation: Using theme’s ssr.html\nstage3=>operation: Using default ssr.html\n\ncond1(no, right)->cond2(no)->stage3\ncond1(yes, bottom)->stage1\ncond2(yes, bottom)->stage2"}},r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"design-concepts-of-vuepress-1-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-concepts-of-vuepress-1-x"}},[t._v("#")]),t._v(" Design Concepts of VuePress 1.x")]),t._v(" "),s("p",[t._v("The design concepts of VuePress 1.x are mainly reflected in the following aspects:")]),t._v(" "),s("ol",[s("li",[t._v("Pluggable.")]),t._v(" "),s("li",[t._v("Convention over configuration.")]),t._v(" "),s("li",[t._v("Reasonable priority management.")])]),t._v(" "),s("h2",{attrs:{id:"pluggable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pluggable"}},[t._v("#")]),t._v(" Pluggable")]),t._v(" "),s("p",[t._v("VuePress 1.0 has been rewritten extensively, and the most important one is the introduction of the "),s("router-link",{attrs:{to:"/plugin/"}},[t._v("Plugin API")]),t._v(". What are the benefits of plugins?")],1),t._v(" "),s("h3",{attrs:{id:"decoupling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decoupling"}},[t._v("#")]),t._v(" Decoupling")]),t._v(" "),s("p",[t._v("With plugins, we can implement many of the core functions with plugins, and you can see many built-in plugins "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core/lib/node/internal-plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" that cover many of the core functions of VuePress, which used to blend in all parts of the code base, but now they’re clear at a glance.")]),t._v(" "),s("h3",{attrs:{id:"configuration-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-management"}},[t._v("#")]),t._v(" Configuration management")]),t._v(" "),s("p",[t._v("In the past, when we came across some less common requirements, we had some doubts: if we wanted to not support it, VuePress usage scenarios were limited; but if we wanted to support it, we had to write it into the core code base and set up a separate configuration API for it. For the maintainers, apart from not conducive to long-term maintenance, this sometimes makes us feel exhausted. We must think of some better solutions. Yes, this is plugin.")]),t._v(" "),s("h3",{attrs:{id:"vuepress-config-js-is-also-a-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-config-js-is-also-a-plugin"}},[t._v("#")]),t._v(" "),s("code",[t._v(".vuepress/config.js")]),t._v(" is also a plugin")]),t._v(" "),s("p",[t._v("Yes, your configuration file is also a plugin, so you can use the Plugin API directly without having to create a new plugin for it and import it in the configuration.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The options supported by "),s("code",[t._v(".vuepress/config.js")]),t._v(" are actually based on the plugin options and add some specific options.")])]),t._v(" "),s("h3",{attrs:{id:"theme-index-js-is-also-a-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme-index-js-is-also-a-plugin"}},[t._v("#")]),t._v(" "),s("code",[t._v("theme/index.js")]),t._v(" is also a plugin")]),t._v(" "),s("p",[t._v("The root configuration file of the theme is also a plugin.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("As with "),s("code",[t._v(".vuepress/config.js")]),t._v(", the options supported by "),s("code",[t._v("theme/config.js")]),t._v(" are based on the plugin options and add some specific options. Using a graph to express their relationship:")]),t._v(" "),s("svg",{attrs:{viewBox:"0 0 2806 912",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("desc",[t._v("Created with Sketch.")]),t._v(" "),s("defs"),t._v(" "),s("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("rect",{attrs:{id:"Rectangle-3","fill-opacity":"0",fill:"#FFFFFF",x:"0",y:"0",width:"2806",height:"912"}}),t._v(" "),s("circle",{attrs:{id:"Oval",stroke:"#979797",fill:"#EC5975",cx:"1212.5",cy:"455.5",r:"355.5"}}),t._v(" "),s("circle",{attrs:{id:"Oval",stroke:"#979797",fill:"#937AC4",cx:"1592.5",cy:"455.5",r:"355.5"}}),t._v(" "),s("path",{attrs:{d:"M1402.5,155.000018 C1501.96722,218.018606 1568,329.058303 1568,455.520781 C1568,581.983259 1501.96722,693.022956 1402.5,756.041544 C1303.03279,693.022977 1237,581.983271 1237,455.520781 C1237,329.058291 1303.03279,218.018585 1402.50003,155 Z",id:"Combined-Shape",stroke:"#FFFFFF","stroke-width":"10",fill:"#00BD8C"}}),t._v(" "),s("text",{attrs:{id:".vuepress/-config.js","font-family":"ArialMT, Arial","font-size":"60","font-weight":"normal",fill:"#FFFFFF"}},[s("tspan",{attrs:{x:"901.101562",y:"436"}},[t._v(".vuepress/")]),t._v(" "),s("tspan",{attrs:{x:"929.446289",y:"503"}},[t._v("config.js")])]),t._v(" "),s("text",{attrs:{id:"Plugin-API","font-family":"ArialMT, Arial","font-size":"72","font-weight":"normal",fill:"#FFFFFF"}},[s("tspan",{attrs:{x:"1302.42773",y:"436"}},[t._v("Plugin")]),t._v(" "),s("tspan",{attrs:{x:"1344.47461",y:"516"}},[t._v("API")])]),t._v(" "),s("text",{attrs:{id:"theme/-index.js","font-family":"ArialMT, Arial","font-size":"60","font-weight":"normal",fill:"#FFFFFF"}},[s("tspan",{attrs:{x:"1662.78613",y:"436"}},[t._v("theme/")]),t._v(" "),s("tspan",{attrs:{x:"1652.78125",y:"503"}},[t._v("index.js")])])])])]),t._v(" "),s("h3",{attrs:{id:"apply-plugins-in-a-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-plugins-in-a-plugin"}},[t._v("#")]),t._v(" Apply plugins in a plugin")]),t._v(" "),s("p",[t._v("In VuePress, you have the ability to apply some plugins in a plugin:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vuepress-plugin-xxx")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"convention-over-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convention-over-configuration"}},[t._v("#")]),t._v(" Convention over configuration.")]),t._v(" "),s("p",[t._v("VuePress 1.0 begin to introduce some conventions to reduce the user’s excessive configuration pressure, the most intuitive manifestation of this is the conventions for the "),s("router-link",{attrs:{to:"/guide/directory-structure.html"}},[t._v("document directory structure")]),t._v(" and the "),s("router-link",{attrs:{to:"/theme/writing-a-theme.html#directory-structure"}},[t._v("theme directory structure")]),t._v(".")],1),t._v(" "),s("p",[t._v("In the future, we may combine community feedback to introduce more agreements. Let’s wait and see.")]),t._v(" "),s("h2",{attrs:{id:"reasonable-priority-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reasonable-priority-management"}},[t._v("#")]),t._v(" Reasonable priority management.")]),t._v(" "),s("p",[t._v("Senior users have found that both theme developers and regular users have the ability to customize global "),s("code",[t._v("palettes")]),t._v(", "),s("code",[t._v("styles")]),t._v(", "),s("code",[t._v("templates")]),t._v(" and "),s("code",[t._v("plugins")]),t._v(", so how do they work together?")]),t._v(" "),s("h3",{attrs:{id:"loading-priority"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-priority"}},[t._v("#")]),t._v(" Loading Priority")]),t._v(" "),s("p",[t._v("For "),s("code",[t._v("templates/*")]),t._v(", follow the certain loading priority. Taking "),s("code",[t._v("templates/ssr.html")]),t._v(" as an example:")]),t._v(" "),s("FlowChart",{attrs:{id:"flowchart_382ee240",code:t.$dataBlock.flowchart_382ee240,preset:"vue"}}),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("When customizing "),s("code",[t._v("templates/ssr.html")]),t._v(", or "),s("code",[t._v("templates/dev.html")]),t._v(", it’s best to edit it on the basis of the "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/app/index.dev.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("default template files"),s("OutboundLink")],1),t._v(", otherwise it may cause a build failure.")])]),t._v(" "),s("h3",{attrs:{id:"overriding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overriding"}},[t._v("#")]),t._v(" Overriding")]),t._v(" "),s("p",[t._v("For "),s("code",[t._v("palette.styl")]),t._v(", "),s("code",[t._v("index.styl")]),t._v(" and "),s("code",[t._v("plugins")]),t._v(", follow the principles of overriding:")]),t._v(" "),s("h4",{attrs:{id:"palette-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#palette-styl"}},[t._v("#")]),t._v(" palette.styl")]),t._v(" "),s("p",[t._v("User’s "),s("code",[t._v("styles/palette.styl")]),t._v(" has a higher priority than the theme’s "),s("code",[t._v("styles/palette.styl")]),t._v(", so the theme can define its own palette and the user can tweak it. For example:")]),t._v(" "),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// theme/styles/palette.styl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#0f0")])]),t._v("\n")])])]),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/styles/palette.styl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#f00")])]),t._v("\n")])])]),s("p",[t._v("So the final value of "),s("code",[t._v("$accentColor")]),t._v(" is "),s("code",[t._v("#f00")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"index-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index-styl"}},[t._v("#")]),t._v(" index.styl")]),t._v(" "),s("p",[t._v("Both the user’s "),s("code",[t._v("styles/index.styl")]),t._v(" and the theme’s "),s("code",[t._v("styles/index.styl")]),t._v(" are generated into the final "),s("code",[t._v("CSS")]),t._v(" file, but the user’s style is generated later and therefore has higher priority. For example:")]),t._v(" "),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// theme/styles/index.styl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("px")]),t._v("\n")])])]),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/styles/index.styl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("px")]),t._v("\n")])])]),s("p",[t._v("The final generated CSS is as follows:")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* theme/styles/index.styl */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 14px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* .vuepress/styles/index.styl */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),s("p",[t._v("Since all plugins with the same name can be applied ONLY once by default, users can override the default options for plugins in theme. For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// theme/index.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Then the final value of "),s("code",[t._v("name")]),t._v(" option will be "),s("code",[t._v("bar")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"others"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" Others")]),t._v(" "),s("p",[t._v("With the goal of decoupling, we were able to separate VuePress into the following two libraries by introducing monorepo:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/core",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/core"),s("OutboundLink")],1),t._v("：Including the core implementation of "),s("code",[t._v("dev")]),t._v(", "),s("code",[t._v("build")]),t._v(" and "),s("code",[t._v("Plugin API")]),t._v(";")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/theme-default",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/theme-default"),s("OutboundLink")],1),t._v("：The default theme you see now.")])]),t._v(" "),s("p",[t._v("Of course, for most users, you don’t need to worry about these three libraries. The "),s("a",{attrs:{href:"https://www.npmjs.com/search?Q=vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1),t._v(" package has already assembled them together, so you can use VuePress like "),s("code",[t._v("0.x")]),t._v(".")])],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);e.default=r.exports}}]);