(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{408:function(t,v,_){"use strict";_.r(v);var s=_(56),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h4",{attrs:{id:"js相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js相关"}},[t._v("#")]),t._v(" JS相关")]),t._v(" "),_("h4",{attrs:{id:"js数据类型、typeof、instanceof、类型转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js数据类型、typeof、instanceof、类型转换"}},[t._v("#")]),t._v(" js数据类型、typeof、instanceof、类型转换")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("string、number、boolean、null、undefined、object(function、array)、symbol(ES10 BigInt)")])]),t._v(" "),_("li",[_("code",[t._v("typeof")]),t._v(" 主要用来判断数据类型 返回值有"),_("code",[t._v("string、boolean、number、function、object、undefined。")])]),t._v(" "),_("li",[_("code",[t._v("instanceof")]),t._v(" 判断该对象是谁的实例")]),t._v(" "),_("li",[_("code",[t._v("null")]),t._v("表示空对象 "),_("code",[t._v("undefined")]),t._v("表示已在作用域中声明但未赋值的变量")])]),t._v(" "),_("h4",{attrs:{id:"闭包-高频"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#闭包-高频"}},[t._v("#")]),t._v(" 闭包(高频)")]),t._v(" "),_("p",[t._v("一个函数和对其周围状态（"),_("strong",[t._v("lexical environment，词法环境")]),t._v("）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是"),_("strong",[t._v("闭包")]),t._v("（"),_("strong",[t._v("closure")]),t._v("）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mozilla"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name 是一个被 init 创建的局部变量")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("displayName")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// displayName() 是内部函数，一个闭包")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用了父函数中声明的变量")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("displayName")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("p",[t._v("闭包是指有权访问另一个函数作用域中的变量的函数 ——《JavaScript高级程序设计》")]),t._v(" "),_("p",[t._v("当函数可以记住并访问所在的词法作用域时，就产生了闭包，")]),t._v(" "),_("p",[t._v("即使函数是在当前词法作用域之外执行 ——《你不知道的JavaScript》")]),t._v(" "),_("ul",[_("li",[t._v("闭包用途：\n"),_("ol",[_("li",[t._v("能够访问函数定义时所在的词法作用域(阻止其被回收)")]),t._v(" "),_("li",[t._v("私有化变量")]),t._v(" "),_("li",[t._v("模拟块级作用域")]),t._v(" "),_("li",[t._v("创建模块")])])]),t._v(" "),_("li",[t._v("闭包缺点：会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏")])]),t._v(" "),_("h4",{attrs:{id:"原型、原型链-高频"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原型、原型链-高频"}},[t._v("#")]),t._v(" 原型、原型链(高频)")]),t._v(" "),_("p",[_("strong",[t._v("原型:")]),t._v(" 对象中固有的"),_("code",[t._v("__proto__")]),t._v("属性，该属性指向对象的"),_("code",[t._v("prototype")]),t._v("原型属性。")]),t._v(" "),_("p",[_("strong",[t._v("原型链:")]),t._v(" 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是"),_("code",[t._v("Object.prototype")]),t._v("所以这就是我们新建的对象为什么能够使用"),_("code",[t._v("toString()")]),t._v("等方法的原因。")]),t._v(" "),_("p",[_("strong",[t._v("特点:")]),t._v(" "),_("code",[t._v("JavaScript")]),t._v("对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-e722d5325f7d4215169f1d04296e0f89_1440w.jpg",alt:""}})]),t._v(" "),_("h4",{attrs:{id:"this指向、new关键字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#this指向、new关键字"}},[t._v("#")]),t._v(" this指向、new关键字")]),t._v(" "),_("p",[_("code",[t._v("this")]),t._v("对象是是执行上下文中的一个属性，它指向最后一次调用这个方法的对象，在全局函数中，"),_("code",[t._v("this")]),t._v("等于"),_("code",[t._v("window")]),t._v("，而当函数被作为某个对象调用时，this等于那个对象。 在实际开发中，"),_("code",[t._v("this")]),t._v("的指向可以通过四种调用模式来判断。")]),t._v(" "),_("ol",[_("li",[t._v("函数调用，当一个函数不是一个对象的属性时，直接作为函数来调用时，"),_("code",[t._v("this")]),t._v("指向全局对象。")]),t._v(" "),_("li",[t._v("方法调用，如果一个函数作为一个对象的方法来调用时，"),_("code",[t._v("this")]),t._v("指向这个对象。")]),t._v(" "),_("li",[t._v("构造函数调用，"),_("code",[t._v("this")]),t._v("指向这个用"),_("code",[t._v("new")]),t._v("新创建的对象。")]),t._v(" "),_("li",[t._v("第四种是 "),_("code",[t._v("apply 、 call 和 bind")]),t._v("调用模式，这三个方法都可以显示的指定调用函数的 this 指向。"),_("code",[t._v("apply")]),t._v("接收参数的是数组，"),_("code",[t._v("call")]),t._v("接受参数列表，"),_("code",[t._v("bind")]),t._v("方法通过传入一个对象，返回一个"),_("code",[t._v("this")]),t._v("绑定了传入对象的新函数。这个函数的 "),_("code",[t._v("this")]),t._v("指向除了使用"),_("code",[t._v("new")]),t._v("时会被改变，其他情况下都不会改变。")])]),t._v(" "),_("p",[_("strong",[t._v("new")])]),t._v(" "),_("ol",[_("li",[t._v("首先创建了一个新的空对象")]),t._v(" "),_("li",[t._v("设置原型，将对象的原型设置为函数的"),_("code",[t._v("prototype")]),t._v("对象。")]),t._v(" "),_("li",[t._v("让函数的"),_("code",[t._v("this")]),t._v("指向这个对象，执行构造函数的代码（为这个新对象添加属性）")]),t._v(" "),_("li",[t._v("判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。")])]),t._v(" "),_("h4",{attrs:{id:"作用域、作用域链、变量提升"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作用域、作用域链、变量提升"}},[t._v("#")]),t._v(" 作用域、作用域链、变量提升")]),t._v(" "),_("p",[_("code",[t._v("作用域")]),t._v("负责收集和维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。(全局作用域、函数作用域、块级作用域)。 作用域链就是从当前作用域开始一层一层向上寻找某个变量，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是"),_("code",[t._v("作用域链")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"继承-含es6-、多种继承方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#继承-含es6-、多种继承方式"}},[t._v("#")]),t._v(" 继承(含es6)、多种继承方式")]),t._v(" "),_("p",[t._v("（1）第一种是以"),_("code",[t._v("原型链的方式来实现继承")]),t._v("，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。")]),t._v(" "),_("p",[t._v("（2）第二种方式是使用"),_("code",[t._v("借用构造函数")]),t._v("的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。")]),t._v(" "),_("p",[t._v("（3）第三种方式是"),_("code",[t._v("组合继承")]),t._v("，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。")]),t._v(" "),_("p",[t._v("（4）第四种方式是"),_("code",[t._v("原型式继承")]),t._v("，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。")]),t._v(" "),_("p",[t._v("（5）第五种方式是"),_("code",[t._v("寄生式继承")]),t._v("，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。")]),t._v(" "),_("p",[t._v("（6）第六种方式是"),_("code",[t._v("寄生式组合继承")]),t._v("，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。")]),t._v(" "),_("h4",{attrs:{id:"eventloop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#eventloop"}},[t._v("#")]),t._v(" "),_("strong",[t._v("EventLoop")])]),t._v(" "),_("p",[_("code",[t._v("JS")]),t._v("是单线程的，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入执行栈中，依次执行，将异步代码推入异步队列，异步队列又分为宏任务队列和微任务队列，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。")]),t._v(" "),_("p",[t._v("微任务队列的代表就是，"),_("code",[t._v("Promise.then")]),t._v("，"),_("code",[t._v("MutationObserver")])]),t._v(" "),_("p",[t._v("宏任务的话就是"),_("code",[t._v("setImmediate setTimeout setInterval")])]),t._v(" "),_("h4",{attrs:{id:"原生ajax"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原生ajax"}},[t._v("#")]),t._v(" 原生ajax")]),t._v(" "),_("p",[_("strong",[t._v("ajax")]),t._v("是一种异步通信的方法,从服务端获取数据,达到局部刷新页面的效果。 过程：")]),t._v(" "),_("ol",[_("li",[t._v("创建"),_("code",[t._v("XMLHttpRequest")]),t._v("对象;")]),t._v(" "),_("li",[t._v("调用"),_("code",[t._v("open")]),t._v("方法传入三个参数 请求方式"),_("code",[t._v("(GET/POST)、url、同步异步(true/false)")]),t._v(";")]),t._v(" "),_("li",[t._v("监听"),_("code",[t._v("onreadystatechange")]),t._v("事件，当"),_("code",[t._v("readystate")]),t._v("等于4时返回"),_("code",[t._v("responseText")]),t._v(";")]),t._v(" "),_("li",[t._v("调用send方法传递参数。")])]),t._v(" "),_("h4",{attrs:{id:"事件冒泡、捕获-委托"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡、捕获-委托"}},[t._v("#")]),t._v(" 事件冒泡、捕获(委托)")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("事件冒泡")]),t._v("指在一个对象上触发某类事件，如果此对象绑定了事件，就会触发事件，如果没有，就会向这个对象的父级对象传播，最终父级对象触发了事件。")]),t._v(" "),_("li",[_("strong",[t._v("事件委托")]),t._v("本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为"),_("strong",[t._v("事件代理")]),t._v("。")])]),t._v(" "),_("p",[_("code",[t._v("event.stopPropagation()")]),t._v(" 或者 ie下的方法 "),_("code",[t._v("event.cancelBubble = true;")]),t._v(" //阻止事件冒泡")]),t._v(" "),_("h4",{attrs:{id:"es6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[t._v("#")]),t._v(" ES6")]),t._v(" "),_("p",[t._v("新增symbol类型 表示独一无二的值，用来定义独一无二的对象属性名;")]),t._v(" "),_("p",[t._v("const/let  都是用来声明变量,不可重复声明，具有块级作用域。存在暂时性死区，也就是不存在变量提升。(const一般用于声明常量);")]),t._v(" "),_("p",[t._v("变量的解构赋值(包含数组、对象、字符串、数字及布尔值,函数参数),剩余运算符(...rest);")]),t._v(" "),_("p",[t._v("模板字符串("),_("code",[t._v("${data}")]),t._v(");")]),t._v(" "),_("p",[t._v("扩展运算符(数组、对象);;")]),t._v(" "),_("p",[t._v("箭头函数;")]),t._v(" "),_("p",[t._v("Set和Map数据结构;")]),t._v(" "),_("p",[t._v("Proxy/Reflect;")]),t._v(" "),_("p",[t._v("Promise;")]),t._v(" "),_("p",[t._v("async函数;")]),t._v(" "),_("p",[t._v("Class;")]),t._v(" "),_("p",[t._v("Module语法(import/export)。")])])}),[],!1,null,null,null);v.default=e.exports}}]);