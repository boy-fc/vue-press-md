---
title: 3_Vue2
date: 2022-02-08 21:24:09
permalink: /pages/04db0e/
categories:
  - interview
tags:
  - 
---
### Vue2

#### 简述MVVM

**MVVM**是`Model-View-ViewModel`缩写，也就是把`MVC`中的`Controller`演变成`ViewModel。`

`Model`层代表数据模型，`View`代表UI组件，`ViewModel`是`View`和`Model`层的桥梁，数据会绑定到`viewModel`层并自动将数据渲染到页面中，视图变化的时候会通知`viewModel`层更新数据。

#### 谈谈对vue生命周期的理解？

每个`Vue`实例在创建时都会经过一系列的初始化过程，`vue`的生命周期钩子，就是说在达到某一阶段或条件时去触发的函数，目的就是为了完成一些动作或者事件

- `create阶段`：vue实例被创建 `beforeCreate`: 创建前，此时data和methods中的数据都还没有初始化 `created`： 创建完毕，data中有值，未挂载
- `mount阶段`： vue实例被挂载到真实DOM节点 `beforeMount`：可以发起服务端请求，去数据 `mounted`: 此时可以操作Dom
- `update阶段`：当vue实例里面的data数据变化时，触发组件的重新渲染 `beforeUpdate` `updated`
- `destroy阶段`：vue实例被销毁 `beforeDestroy`：实例被销毁前，此时可以手动销毁一些方法 `destroyed`

#### computed与watch

**watch 属性监听** 是一个对象，键是需要观察的属性，值是对应回调函数，主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作,监听属性的变化，需要在数据变化时执行异步或开销较大的操作时使用

**computed 计算属性** 属性的结果会被缓存，当`computed`中的函数所依赖的属性没有发生改变的时候，那么调用当前函数的时候结果会从缓存中读取。除非依赖的响应式属性变化时才会重新计算，主要当做属性来使用 `computed`中的函数必须用`return`返回最终的结果 `computed`更高效，优先使用

**使用场景** `computed`：当一个属性受多个属性影响的时候使用，例：购物车商品结算功能 `watch`：当一条数据影响多条数据的时候使用，例：搜索数据

#### v-for中key的作用

`key`的作用主要是为了更高效的对比虚拟DOM中每个节点是否是相同节点;

`Vue在patch`过程中判断两个节点是否是相同节点,key是一个必要条件，渲染一组列表时，key往往是唯一标识，所以如果不定义key的话，`Vue`只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个`patch`过程比较低效，影响性能;

从源码中可以知道，Vue判断两个节点是否相同时主要判断两者的key和元素类型等，因此如果不设置key,它的值就是`undefined`，则可能永远认为这是两个相同的节点，只能去做更新操作，这造成了大量的dom更新操作，明显是不可取的。

#### vue组件的通信方式

##### 父子组件通信

父->子`props`，子->父 `$on、$emit` 获取父子组件实例 `parent、children` `Ref `获取实例的方式调用组件的属性或者方法 `Provide、inject` 官方不推荐使用，但是写组件库时很常用

##### 兄弟组件通信

`Event Bus` 实现跨组件通信 `Vue.prototype.$bus = new Vue() Vuex`

##### 跨级组件通信

`$attrs、$listeners` `Provide、inject`

#### 常用指令

- v-if：判断是否隐藏；
- v-for：数据循环出来；
- v-bind:class：绑定一个属性；
- v-model：实现双向绑定

#### 双向绑定实现原理

当一个**Vue**实例创建时，Vue会遍历data选项的属性，用 **Object.defineProperty** 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。

每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher重新计算，从而致使它关联的组件得以更新。

#### v-model的实现以及它的实现原理吗？

1. `vue`中双向绑定是一个指令`v-model`，可以绑定一个动态值到视图，同时视图中变化能改变该值。`v-model`是语法糖，默认情况下相于:`value和@input`。
2. 使用`v-model`可以减少大量繁琐的事件处理代码，提高开发效率，代码可读性也更好
3. 通常在表单项上使用`v-model`
4. 原生的表单项可以直接使用`v-model`，自定义组件上如果要使用它需要在组件内绑定value并处理输入事件
5. 我做过测试，输出包含`v-model`模板的组件渲染函数，发现它会被转换为value属性的绑定以及一个事件监听，事件回调函数中会做相应变量更新操作，这说明神奇魔法实际上是vue的编译器完成的。

#### nextTick的实现

1. `nextTick`是`Vue`提供的一个全局`API`,是在下次`DOM`更新循环结束之后执行延迟回调，在修改数据之后使用`$nextTick`，则可以在回调中获取更新后的`DOM`；
2. Vue在更新DOM时是异步执行的。只要侦听到数据变化，`Vue`将开启1个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个`watcher`被多次触发，只会被推入到队列中-次。这种在缓冲时去除重复数据对于避免不必要的计算和`DOM`操作是非常重要的。`nextTick`方法会在队列中加入一个回调函数，确保该函数在前面的dom操作完成后才调用；
3. 比如，我在干什么的时候就会使用nextTick，传一个回调函数进去，在里面执行dom操作即可；
4. 我也有简单了解`nextTick`实现，它会在`callbacks`里面加入我们传入的函数，然后用`timerFunc`异步方式调用它们，首选的异步方式会是`Promise`。这让我明白了为什么可以在`nextTick`中看到`dom`操作结果。

#### vnode的理解

```js
vnode 虚拟DOM节点 创建：
export function Vnode (){
    return {
        tag:'div',
        children: 'span',
        attr:'',
        text:'你好!'
    }
}
```

#### new Vue后整个的流程

- `initProxy`：作用域代理，拦截组件内访问其它组件的数据。

- `initLifecycle`：建立父子组件关系，在当前组件实例上添加一些属性和生命周期标识。如`[Math Processing Error]parent,parent,refs,$children,_isMounted`等。

- `initEvents`：对父组件传入的事件添加监听，事件是谁创建谁监听，子组件创建事件子组件监听

- `initRender`：声明[Math Processing Error]slots和slots和createElement()等。

- `initInjections`：注入数据，初始化inject，一般用于组件更深层次之间的通信。

- `initState`：重要）数据响应式：初始化状态。很多选项初始化的汇总：data,methods,props,computed和watch。

- `initProvide`：提供数据注入。

**思考：为什么先注入再提供呢？？**

1. 首先来自祖辈的数据要和当前实例的data,等判重，相结合，所以注入数据的initInjections一定要在`InitState`的上面。

2. 从上面注入进来的东西在当前组件中转了一下又提供给后代了，所以注入数据也一定要在上面。

#### keep-alive的实现

作用：实现组件缓存

##### 钩子函数

`activated `组件渲染后调用
`deactivated `组件销毁后调用

原理：`Vue.js`内部将`DOM`节点抽象成了一个个的`VNode`节点，`keep-alive`组件的缓存也是基于`VNode`节点的而不是直接存储`DOM`结构。它将满足条件`（pruneCache与pruneCache）`的组件在`cache`对象中缓存起来，在需要重新渲染的时候再将`vnode`节点从`cache`对象中取出并渲染。

##### 配置属性

`include` 字符串或正则表达式。只有名称匹配的组件会被缓存

`exclude` 字符串或正则表达式。任何名称匹配的组件都不会被缓存

`max` 数字、最多可以缓存多少组件实例

#### vuex实现原理

目标：

- 1.作为插件一定有install方法，可以在其中进行混入，当Vue实例化后挂载前拿到给其配置的store实例，把store放在原型上，以便全局可用；
- 2.持有基本的state,保存实例化router时配置的mutations,actions对象；
- 3.实现commit及dispatch等方法，可对state进行一定的修改；

```js
let Vue;
class Store {
    // 持有state，并使其响应化
    constructor(options){
        this.state = new Vue({
            data:options.state
        })
        this.mutations = options.mutations;// mutations 是对象
        this.actions = options.actions;// mutations 是对象
        // 绑定this
        this.commit=this.commit.bind(this);
        this.dispatch=this.dispatch.bind(this);
    }
    // 实现commit和dispatch方法
    commit(type,arg){
        this.mutations[type](this.state,arg);
    }
    dispatch(type,arg){
        console.log(this.actions[type])
        return this.actions[type](this,arg)
    }
}
function install(_vue){
    Vue = _vue;
    // 为什么用混入？use是先执行，而this指向的是vue实例，是在main.js中后创建的，使用混入才能在vue实例的指定周期里拿到store实例并做些事情
    Vue.mixin({
        beforeCreate(){
            if (this.$options.store) {
                Vue.prototype.$store=this.$options.store;
            }
        }
    })
}
export default {
    Store,
    install
}

```

其实，Vuex.Store是个类，使用他的时候，你给他传入了参数（state，mutations，actions）并让他实例化。你把这个实例配置给了Vue，Vuex帮你把他给了Vue原型上的$store。

Vuex还送给你个commit和dispatch方法让你能有办法改$store.state，当然你也能通过$store.state方法到你要的状态。

#### vue-router实现原理

##### hash 实现

hash 是 URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，**改变 URL 中的 hash 部分不会引起页面刷新**

通过 hashchange 事件监听 URL 的变化，改变 URL 的方式只有这几种：

1. 通过浏览器前进后退改变 URL
2. 通过`<a>`标签改变 URL
3. 通过window.location改变URL

##### history 实现

history 提供了 pushState 和 replaceState 两个方法，**这两个方法改变 URL 的 path 部分不会引起页面刷新**

history 提供类似 hashchange 事件的 popstate 事件，但 popstate 事件有些不同：

1. 通过浏览器前进后退改变 URL 时会触发 popstate 事件
2. 通过pushState/replaceState或`<a>`标签改变 URL 不会触发 popstate 事件。
3. 好在我们可以拦截 pushState/replaceState的调用和`<a>`标签的点击事件来检测 URL 变化
4. 通过js 调用history的back，go，forward方法课触发该事件

所以监听 URL 变化可以实现，只是没有 hashchange 那么方便。

**`$route`和`$router`有什么区别？**

`$router`是VueRouter的实例对象，`$route`是当前路由对象，也就是说`$route`是`$router`的一个属性

#### **父组件和子组件的**

```js
//myVueRouter.js
let Vue = null;
class HistoryRoute {
    constructor(){
        this.current = null
    }
}
class VueRouter{
    constructor(options) {
        this.mode = options.mode || "hash"
        this.routes = options.routes || [] //你传递的这个路由是一个数组表
        this.routesMap = this.createMap(this.routes)
        this.history = new HistoryRoute();
        this.init()

    }
    init(){
        if (this.mode === "hash"){
            // 先判断用户打开时有没有hash值，没有的话跳转到#/
            location.hash? '':location.hash = "/";
            window.addEventListener("load",()=>{
                this.history.current = location.hash.slice(1)
            })
            window.addEventListener("hashchange",()=>{
                this.history.current = location.hash.slice(1)
            })
        } else{
            location.pathname? '':location.pathname = "/";
            window.addEventListener('load',()=>{
                this.history.current = location.pathname
            })
            window.addEventListener("popstate",()=>{
                this.history.current = location.pathname
            })
        }
    }

    createMap(routes){
        return routes.reduce((pre,current)=>{
            pre[current.path] = current.component
            return pre;
        },{})
    }

}
VueRouter.install = function (v) {
    Vue = v;
    Vue.mixin({
        beforeCreate(){
            if (this.$options && this.$options.router){ // 如果是根组件
                this._root = this; //把当前实例挂载到_root上
                this._router = this.$options.router;
                Vue.util.defineReactive(this,"xxx",this._router.history)
            }else { //如果是子组件
                this._root= this.$parent && this.$parent._root
            }
            Object.defineProperty(this,'$router',{
                get(){
                    return this._root._router
                }
            });
            Object.defineProperty(this,'$route',{
                get(){
                    return this._root._router.history.current
                }
            })
        }
    })
    Vue.component('router-link',{
        props:{
            to:String
        },
        render(h){
            let mode = this._self._root._router.mode;
            let to = mode === "hash"?"#"+this.to:this.to
            return h('a',{attrs:{href:to}},this.$slots.default)
        }
    })
    Vue.component('router-view',{
        render(h){
            let current = this._self._root._router.history.current
            let routeMap = this._self._root._router.routesMap;
            return h(routeMap[current])
        }
    })
};

export default VueRouter

```

#### **执行顺序**？

父beforeCreate-> 父created -> 父beforeMounte -> 子beforeCreate ->子create ->子beforeMount ->子 mounted -> 父mounted

#### diff算法简单理解

在js中,渲染真实`DOM`的开销是非常大的, 比如我们修改了某个数据,如果直接渲染到真实`DOM`, 会引起整个`dom`树的重绘和重排。那么有没有可能实现只更新我们修改的那一小块dom而不要更新整个`dom`呢？此时我们就需要先根据真实`dom`生成虚拟`dom`， 当虚拟`dom`某个节点的数据改变后会生成有一个新的`Vnode`, 然后新的`Vnode`和旧的`Vnode`作比较，发现有不一样的地方就直接修改在真实DOM上，然后使旧的`Vnode`的值为新的`Vnode`。

**diff**的过程就是调用`patch`函数，比较新旧节点，一边比较一边给真实的`DOM`打补丁。在采取`diff`算法比较新旧节点的时候，比较只会在同层级进行。 在`patch`方法中，首先进行树级别的比较 `new Vnode`不存在就删除 `old Vnode` `old Vnode` 不存在就增加新的`Vnode` 都存在就执行diff更新 当确定需要执行diff算法时，比较两个`Vnode`，包括三种类型操作：属性更新，文本更新，子节点更新 新老节点均有子节点，则对子节点进行`diff`操作，调用`updatechidren` 如果老节点没有子节点而新节点有子节点，先清空老节点的文本内容，然后为其新增子节点 如果新节点没有子节点，而老节点有子节点的时候，则移除该节点的所有子节点 老新老节点都没有子节点的时候，进行文本的替换

**updateChildren** 将`Vnode`的子节点Vch和oldVnode的子节点oldCh提取出来。 `oldCh和vCh`各有两个头尾的变量`StartIdx和EndIdx`，它们的2个变量相互比较，一共有4种比较方式。如果4种比较都没匹配，如果设置了`key`，就会用`key`进行比较，在比较的过程中，变量会往中间靠，一旦`StartIdx>EndIdx`表明`oldCh和vCh`至少有一个已经遍历完了，就会结束比较。

#### 你都做过哪些Vue的性能优化？

```js
编码阶段
尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
v-if和v-for不能连用
如果需要使用v-for给每项元素绑定事件时使用事件代理
SPA 页面采用keep-alive缓存组件
在更多的情况下，使用v-if替代v-show
key保证唯一
使用路由懒加载、异步组件
防抖、节流
第三方模块按需导入
长列表滚动到可视区域动态加载
图片懒加载
SEO优化
预渲染
服务端渲染SSR
打包优化
压缩代码
Tree Shaking/Scope Hoisting
使用cdn加载第三方模块
多线程打包happypack
splitChunks抽离公共文件
sourceMap优化
用户体验
骨架屏
PWA
还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。

```

#### Vue3有新特性

- **性能提升**

更小巧、更快速 支持自定义渲染器 支持摇树优化：一种在打包时去除无用代码的优化手段 支持Fragments和跨组件渲染

- **API变动**

模板语法99%保持不变 原生支持基于class的组件，并且无需借助任何编译及各种stage阶段的特性 在设计时也考虑TypeScript的类型推断特性 `重写虚拟DOM`可以期待更多的编译时提示来减少运行时的开销 `优化插槽生成`可以单独渲染父组件和子组件 `静态树提升`降低渲染成本 `基于Proxy的观察者机制`节省内存开销

- **不兼容IE11**

`检测机制`更加全面、精准、高效,更具可调试式的响应跟踪

#### Proxy与Object.defineProperty相比

1. **Object.definedProperty**的作用是劫持一个对象的属性，劫持属性的getter和setter方法，在对象的属性发生变化时进行特定的操作。而Proxy劫持的是整个对象。
2. **Proxy**会返回一个代理对象，我们只需要操作新对象即可，而Object.defineProperty只能遍历对象属性直接修改。
3. **Object.definedProperty**不支持数组，更准确的说是不支持数组的各种API，因为如果仅仅考虑arry[i] = value 这种情况，是可以劫持的，但是这种劫持意义不大。而Proxy可以支持数组的各种API。
4. 尽管Object.defineProperty有诸多缺陷，但是其兼容性要好于Proxy。

#### Vue与React对比

**react**主张函数式编程，所以推崇纯组件，数据不可变，单向数据流，

**vue**的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。

**监听数据变化实现原理**：

- `Vue` 通过 `getter/setter` 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能
- `React` 默认是通过比较引用的方式进行的，如果不优化(`PureComponent/shouldComponentUpdate`)可能导致大量不必要的VDOM的重新渲染。

组件通信的区别：jsx和.vue模板。

- `HoC和Mixins`(在Vue中我们组合不同功能的方式是通过`Mixin`，而在`React`中我们通过`HoC`(高阶组件))。

**性能优化**

- `React: shouldComponentUpdate`
- `Vue`:内部实现`shouldComponentUpdate`的优化，由于依赖追踪系统存在，通过`watcher`判断是否需要重新渲染(当一个页面数据量较大时，`Vue`的性能较差，造成页面卡顿，所以一般数据比较大的项目倾向使用`React`)

#### vuex 和 redux 之间的区别？

从实现原理上来说，最大的区别是两点：

**Redux**使用的是不可变数据，而`Vuex`的数据是可变的。`Redux`每次都是用新的`state`替换旧的`state`，而`Vuex`是直接修改

**Redux**在检测数据变化的时候，是通过`diff`的方式比较差异的，而`Vuex`其实和Vue的原理一样，是通过 `getter/setter`来比较的(如果看`Vuex`源码会知道，其实他内部直接创建一个`Vue`实例用来跟踪数据变化)

