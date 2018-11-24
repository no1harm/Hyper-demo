# Hyper 一个 Vue UI组件库

[![Build Status](https://travis-ci.org/no1harm/Hyper-demo.svg?branch=master)](https://travis-ci.org/no1harm/Hyper-demo)

## 介绍

这是本人在学习 Vue 的过程中做的一个UI框架，希望对你有所帮助。

## 开始使用

- CSS 样式

在安装使用本框架的时候，请在 CSS 中设置 box-sizing 为 border-box：

```css
*,*::before,*::after{box-sizing: border-box}
```

设置相关颜色变量（后续会改为 SCSS 变量）：

```css
/* IE15 及以上浏览器皆支持此样式 */
:root{
    --button-height:32px;
    --font-size:14px;
    --button-bg:white;
    --button-active-bg:#eee;
    --border-radius:4px;
    --color:#333;
    --border-color:#999;
    --border-color-hover:#666;
}
```

- 安装 hyper

`npm install --save hyper-demo-0.0.1`

- 引入 hyper

```javascript
import {Button,Icon,ButtonGroup} from 'hyper-demo-0.0.1'
import 'hyper-demo-0.0.1/dist/index.css'

export default{
    name:'app',
    components:{
        'hy-button':Button,
        'hy-icon':Icon
    }
}
```

## 文档

## 变更记录

## 联系方式