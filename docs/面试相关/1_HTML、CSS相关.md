---
title: 1_HTML、CSS相关
date: 2022-02-08 21:24:09
permalink: /pages/276b03/
categories:
  - interview
tags:
  - 
---
### HTML、CSS相关

#### html5新特性、语义化

- 语义化标签 ： header nav main article section aside footer

```js
语义化意味着顾名思义，HTML5的语义化指的是合理正确的使用语义化的标签来创建页面结构，如 
header,footer,nav，从标签上即可以直观的知道这个标签的作用，而不是滥用div。
语义化的优点有:
代码结构清晰，易于阅读，利于开发和维护
方便其他设备解析（如屏幕阅读器）根据语义渲染网页。
有利于搜索引擎优化（SEO），搜索引擎爬虫会根据不同的标签来赋予不同的权重
```

#### 浏览器渲染机制、重绘、重排

网页生成过程：

- `HTML`被HTML解析器解析成`DOM` 树
- `css`则被css解析器解析成`CSSOM `树
- 结合`DOM`树和`CSSOM`树，生成一棵渲染树(`Render Tree`)
- 生成布局（`flow`），即将所有渲染树的所有节点进行平面合成
- 将布局绘制（`paint`）在屏幕上

**重排(也称回流):** 当`DOM`的变化影响了元素的几何信息(`DOM`对象的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。 触发：

1. 添加或者删除可见的DOM元素
2. 元素尺寸改变——边距、填充、边框、宽度和高度

**重绘：** 当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。 触发：

- 改变元素的`color、background、box-shadow`等属性

重排优化建议：

1. 分离读写操作
2. 样式集中修改
3. 缓存需要修改的`DOM`元素
4. 尽量只修改`position：absolute`或`fixed`元素，对其他元素影响不大
5. 动画开始`GPU`加速，`translate`使用`3D`变化

`transform` 不重绘，不回流 是因为`transform`属于合成属性，对合成属性进行`transition/animate`动画时，将会创建一个合成层。这使得动画元素在一个独立的层中进行渲染。当元素的内容没有发生改变，就没有必要进行重绘。浏览器会通过重新复合来创建动画帧。

#### css盒子模型

所有`HTML`元素可以看作盒子，在CSS中，`"box model"`这一术语是用来设计和布局时使用。 `CSS`盒模型本质上是一个盒子，封装周围的`HTML`元素，它包括：边距，边框，填充，和实际内容。 盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

#### css样式优先级

```css
!important>style>id>class
```

#### BFC

`BFC` 是 `Block Formatting Context `的缩写，即块格式化上下文。

`BFC`是CSS布局的一个概念，是一个环境，里面的元素不会影响外面的元素。 

布局规则：Box是CSS布局的对象和基本单位，页面是由若干个Box组成的。元素的类型和display属性，决定了这个Box的类型。不同类型的Box会参与不同的`Formatting Context`。

 创建：浮动元素 `display：inline-block position:absolute` 

应用: 1.分属于不同的`BFC`时,可以防止`margin`重叠 2.清除内部浮动 3.自适应多栏布局

#### DOM、BOM对象

`BOM（Browser Object Model）`是指浏览器对象模型，可以对浏览器窗口进行访问和操作。使用 BOM，开发者可以移动窗口、改变状态栏中的文本以及执行其他与页面内容不直接相关的动作。 使 `JavaScript` 有能力与浏览器"对话"。

 `DOM （Document Object Model）`是指文档对象模型，通过它，可以访问`HTML`文档的所有元素。 `DOM `是 `W3C`（万维网联盟）的标准。`DOM` 定义了访问 `HTML` 和` XML` 文档的标准： "W3C 文档对象模型（DOM）是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。" `W3C DOM` 标准被分为 3 个不同的部分：

- 核心 `DOM` - 针对任何结构化文档的标准模型
- `XML DOM` - 针对 XML 文档的标准模型
- `HTML DOM` - 针对 HTML 文档的标准模型

什么是` XML DOM`？ `XML DOM` 定义了所有 XML 元素的对象和属性，以及访问它们的方法。 什么是 HTML DOM？ HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。