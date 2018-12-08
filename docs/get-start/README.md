---
title: 快速上手
---
# 快速上手

## 使用之前

您应该在一定程度上了解 vue 的相关概念、基础知识，这样在使用本框架的时候会更顺利。

## 全局引用

在项目的入口文件（一般是 `main.js`）中配置：

```js
import Vue from 'vue';
import App from './App.vue';
import HyperUI from 'hyper-youi';
import 'hyper-youi/dist/index.css'

Vue.use(HyperUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 HyperUI 的引入。需要注意的是，样式文件需要单独引入。

## 按需引用

我们可以只引入需要的组件，以达到减小项目体积的目的。

如您只希望引入 Button 和 Input，那么需要在项目入口文件中写入：

```js
import Vue from 'vue';
import { Button, Input } from 'hyper-youi';
import 'hyper-youi/dist/index.css'
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 特别提醒

在使用 HyperUI 时，您需要使用 `border-box` 盒模型，否则会影响样式。CSS 代码示例：

```css
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

至此，一个基于 Vue 和 HyperUI 的开发环境已经搭建完毕，现在就可以编写代码了。 :tada: :tada:

各个组件的使用方法请参阅它们各自的文档。