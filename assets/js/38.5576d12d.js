(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{435:function(a,e,v){"use strict";v.r(e);var t=v(56),_=Object(t.a)({},(function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h3",{attrs:{id:"前端工程化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前端工程化"}},[a._v("#")]),a._v(" 前端工程化")]),a._v(" "),v("h4",{attrs:{id:"webpack配置-webpack4-0有哪些优化点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack配置-webpack4-0有哪些优化点"}},[a._v("#")]),a._v(" webpack配置，webpack4.0有哪些优化点")]),a._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[a._v("module"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports"),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),v("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("entry")]),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t"),v("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("output")]),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t"),v("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("plugins")]),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t"),v("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("module")]),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("rules"),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),v("h4",{attrs:{id:"webpack如何实现代码分离"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack如何实现代码分离"}},[a._v("#")]),a._v(" webpack如何实现代码分离")]),a._v(" "),v("ul",[v("li",[v("code",[a._v("入口起点")]),a._v("：使用 "),v("code",[a._v("entry")]),a._v(" 配置手动地分离代码。")]),a._v(" "),v("li",[v("code",[a._v("防止重复")]),a._v("：使用 "),v("code",[a._v("CommonsChunkPlugin")]),a._v(" 去重和分离 "),v("code",[a._v("chunk")]),a._v("。")]),a._v(" "),v("li",[v("code",[a._v("动态导入")]),a._v("：通过模块的内联函数调用来分离代码。")])]),a._v(" "),v("h4",{attrs:{id:"常见的webpack-loader"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的webpack-loader"}},[a._v("#")]),a._v(" 常见的Webpack Loader")]),a._v(" "),v("p",[v("code",[a._v("loader")]),a._v(": 是一个导出为函数的"),v("code",[a._v("javascript")]),a._v("模块，根据"),v("code",[a._v("rule")]),a._v("匹配文件扩展名，处理文件的转换器。")]),a._v(" "),v("p",[v("code",[a._v("file-loader")]),a._v("：把文件输出到一个文件夹中，在代码中通过相对 "),v("code",[a._v("URL")]),a._v(" 去引用输出的文件 (处理图片和字体)")]),a._v(" "),v("p",[v("code",[a._v("url-loader")]),a._v("： 与"),v("code",[a._v("file-loader")]),a._v("类似，区别是用户可以设置一个阈值，大于阈值会交给"),v("code",[a._v("file-loader")]),a._v("处理，小于阈值时返回文件"),v("code",[a._v("base64")]),a._v(" 形式编码 (处理图片和字体)")]),a._v(" "),v("p",[v("code",[a._v("image-loader")]),a._v("：加载并且压缩图片文件")]),a._v(" "),v("p",[v("code",[a._v("babel-loader")]),a._v("：把 "),v("code",[a._v("ES6")]),a._v("转换成` ES5")]),a._v(" "),v("p",[v("code",[a._v("sass-loader")]),a._v("：将"),v("code",[a._v("SCSS/SASS")]),a._v("代码转换成`CSS")]),a._v(" "),v("p",[v("code",[a._v("css-loader")]),a._v("：加载 "),v("code",[a._v("CSS")]),a._v("，支持模块化、压缩、文件导入等特性")]),a._v(" "),v("p",[v("code",[a._v("style-loader")]),a._v("：把 "),v("code",[a._v("CSS")]),a._v(" 代码注入到 "),v("code",[a._v("JavaScript")]),a._v("中，通过"),v("code",[a._v("DOM")]),a._v(" 操作去加载 `CSS")]),a._v(" "),v("p",[v("code",[a._v("postcss-loader")]),a._v("：扩展 "),v("code",[a._v("CSS")]),a._v(" 语法，使用下一代"),v("code",[a._v("CSS")]),a._v("，可以配合 "),v("code",[a._v("autoprefixer")]),a._v(" 插件自动补齐 "),v("strong",[a._v("CSS3 前缀")]),a._v(" "),v("code",[a._v("eslint-loader")]),a._v("：通过 "),v("code",[a._v("ESLint")]),a._v(" 检查 "),v("code",[a._v("JavaScript")]),a._v(" 代码")]),a._v(" "),v("h4",{attrs:{id:"常见的webpack-plugin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的webpack-plugin"}},[a._v("#")]),a._v(" 常见的Webpack Plugin")]),a._v(" "),v("p",[v("strong",[a._v("plugin:本质是插件")]),a._v("，基于事件流框架"),v("code",[a._v("Tapable")]),a._v("，插件可以扩展 "),v("code",[a._v("Webpack")]),a._v(" 的功能，在"),v("code",[a._v("Webpack")]),a._v(" 运行的生命周期中会广播出许多事件，"),v("code",[a._v("Plugin")]),a._v(" 可以监听这些事件，在合适的时机通过"),v("code",[a._v("Webpack")]),a._v(" 提供的 "),v("code",[a._v("API")]),a._v("改变输出结果。")]),a._v(" "),v("p",[v("code",[a._v("html-webpack-plugin")]),a._v("：简化 "),v("code",[a._v("HTML")]),a._v(" 文件创建 (依赖于"),v("code",[a._v("html-loader")]),a._v(")")]),a._v(" "),v("p",[v("code",[a._v("uglifyjs-webpack-plugin")]),a._v("：压缩js文件")]),a._v(" "),v("p",[v("code",[a._v("clean-webpack-plugin")]),a._v("：目录清除")]),a._v(" "),v("p",[v("code",[a._v("mini-css-extract-plugin")]),a._v("：分离样式文件，CSS 提取为独立文件，支持按需加载 (替代"),v("code",[a._v("extract-text-webpack-plugin")]),a._v(")")]),a._v(" "),v("h4",{attrs:{id:"loader和plugin对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#loader和plugin对比"}},[a._v("#")]),a._v(" loader和plugin对比")]),a._v(" "),v("p",[v("code",[a._v("Loader")]),a._v(" 在 "),v("code",[a._v("module.rules")]),a._v("中配置，作为模块的解析规则，类型为数组。每一项都是一个 O"),v("code",[a._v("bject")]),a._v("，内部包含了 "),v("code",[a._v("test(类型文件)、loader、options")]),a._v(" (参数)等属性。")]),a._v(" "),v("p",[v("code",[a._v("Plugin")]),a._v(" 在"),v("code",[a._v("plugins")]),a._v(" 中单独配置，类型为数组，每一项是一个"),v("code",[a._v("Plugin")]),a._v("的实例，参数都通过构造函数传入。")]),a._v(" "),v("h4",{attrs:{id:"commonjs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[a._v("#")]),a._v(" CommonJS")]),a._v(" "),v("p",[v("code",[a._v("CommonJS")]),a._v("是服务器端模块的规范，由Node推广使用，webpack也采用这种规范编写")]),a._v(" "),v("h4",{attrs:{id:"commonjs规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#commonjs规范"}},[a._v("#")]),a._v(" commonJs规范")]),a._v(" "),v("p",[v("code",[a._v("CommonJS")]),a._v("模块规范主要分为三部分："),v("code",[a._v("模块定义、模块标识、模块引用")]),a._v("。")]),a._v(" "),v("ul",[v("li",[a._v("模块定义："),v("code",[a._v("module")]),a._v("对象：在每一个模块中，"),v("code",[a._v("module")]),a._v("对象代表该模块自身。 "),v("code",[a._v("export")]),a._v("属性："),v("code",[a._v("module")]),a._v("对象的一个属性，它向外提供接口。输出模块变量的最好方法是使用"),v("code",[a._v("module.exports")]),a._v("对象。一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为"),v("code",[a._v("global")]),a._v("对象的属性。")]),a._v(" "),v("li",[a._v("模块标识：传递给"),v("code",[a._v("require")]),a._v("方法的参数，必须是符合小驼峰命名的字符串，或者以 . 、.. 、开头的相对路径，或者绝对路径。")]),a._v(" "),v("li",[a._v("模块引用：加载模块使用"),v("code",[a._v("require")]),a._v("(同步加载)，该方法读取一个文件并执行，返回文件内部的"),v("code",[a._v("module.exports")]),a._v("对象。")])]),a._v(" "),v("h4",{attrs:{id:"commonjs优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#commonjs优势"}},[a._v("#")]),a._v(" CommonJS优势")]),a._v(" "),v("p",[a._v("在后端，"),v("code",[a._v("JavaScript")]),a._v("的规范远远落后并且有很多缺陷，这使得难以使用"),v("code",[a._v("JavaScript")]),a._v("开发大型应用。比如：没有模块系统、标准库较少、没有标准接口、缺乏包管理系统、列表内容")]),a._v(" "),v("ol",[v("li",[a._v("CommonJS模块规范很好地解决变量污染问题，每个模块具有独立空间，互不干扰，命名空间相比之下就不太好。")]),a._v(" "),v("li",[a._v("CommonJS规范定义模块十分简单，接口十分简洁。")]),a._v(" "),v("li",[a._v("CommonJS模块规范支持引入和导出功能，这样可以顺畅地连接各个模块，实现彼此间的依赖关系")]),a._v(" "),v("li",[a._v("CommonJS规范的提出，主要是为了弥补JavaScript没有标准的缺陷，已达到像Python、Ruby和Java那样具备开发大型应用的基础能力，而不是停留在开发浏览器端小脚本程序的阶段")])]),a._v(" "),v("h4",{attrs:{id:"commonjs缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#commonjs缺点"}},[a._v("#")]),a._v(" CommonJS缺点")]),a._v(" "),v("p",[a._v("没有并行加载机制")]),a._v(" "),v("p",[a._v("由于"),v("code",[a._v("CommonJS")]),a._v("是同步加载模块，这对于服务器端是很不好的，因为所有的模块都放在本地硬盘。等待模块时间就是硬盘读取文件时间，很小。但是，对于浏览器而言，它需要从服务器加载模块，涉及到网速，代理等原因，一旦等待时间过长，浏览器处于”假死”状态。")]),a._v(" "),v("p",[a._v("所以浏览器端不是很适合"),v("code",[a._v("Common.Js")]),a._v("，出现另一种规范"),v("code",[a._v("AMD")])]),a._v(" "),v("h4",{attrs:{id:"amd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[a._v("#")]),a._v(" AMD")]),a._v(" "),v("p",[v("code",[a._v("AMD")]),a._v(" 是运行在浏览器环境的一个异步模块定义规范 ，是"),v("code",[a._v("RequireJS")]),a._v(" 在推广过程中对模块定义的规范化产出。")]),a._v(" "),v("h4",{attrs:{id:"amd规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#amd规范"}},[a._v("#")]),a._v(" AMD规范")]),a._v(" "),v("p",[v("code",[a._v("AMD")]),a._v("推崇依赖前置，在定义模块的时候就要声明其依赖的模块")]),a._v(" "),v("h4",{attrs:{id:"amd优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#amd优点"}},[a._v("#")]),a._v(" AMD优点")]),a._v(" "),v("p",[a._v("用户体验好，因为没有延迟，依赖模块提前执行了。")]),a._v(" "),v("h4",{attrs:{id:"cmd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[a._v("#")]),a._v(" CMD")]),a._v(" "),v("p",[v("code",[a._v("CMD")]),a._v("是一个通用模块定义规范；是SeaJs推广过程中对模块定义的规范化产出")]),a._v(" "),v("h4",{attrs:{id:"cmd规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cmd规范"}},[a._v("#")]),a._v(" CMD规范")]),a._v(" "),v("p",[v("code",[a._v("CMD")]),a._v("推崇依赖就近，只有在用到某个模块的时候才会去"),v("code",[a._v("require")])]),a._v(" "),v("h4",{attrs:{id:"cmd优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cmd优点"}},[a._v("#")]),a._v(" CMD优点")]),a._v(" "),v("p",[a._v("性能好，因为只有用户需要的时候才执行。")])])}),[],!1,null,null,null);e.default=_.exports}}]);