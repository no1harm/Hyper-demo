---
title: Container - 容器布局
sidebarDepth: 2
---

# Container

用于布局的容器组件，方便快速搭建页面的基本结构：

`<hy-layout>`: 外层容器，当子元素中包含 `<hy-header>` 或 `<hy-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<hy-header>`：顶栏容器。

`<hy-content>`: 主要区域容器。

`<hy-sider>`: 侧边栏容器。

`<hy-footer>`: 底栏容器。

::: tip 关于浏览器兼容性的提示
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<hy-layout>` 的子元素只能是后四者，后四者的父元素也只能是 `<hy-layout>`。
:::

### 基础布局

常见的上中下三栏布局：

<ClientOnly><container-demo></container-demo></ClientOnly>

上中下三栏布局，主体部分带侧边栏:

<ClientOnly><container-demo2></container-demo2></ClientOnly>
