---
title: Gird - 网格布局
sidebarDepth: 2
---

# Grid

通过基础的 24 分栏，快速创建网页布局

### 三栏布局/不等分布局

基础布局：

通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局

<ClientOnly><layout-demos></layout-demos></ClientOnly>

### 设置 gutter / offset

通过传入 `gutter` 或者 `offset` 属性设置分栏间隙

<ClientOnly><layout-gutter-demo></layout-gutter-demo></ClientOnly>

### 实现响应式布局

设置多个配置参数，实现响应式布局

<ClientOnly><layout-responsive-demo></layout-responsive-demo></ClientOnly>

### Attributes

默认在屏幕宽度为 min-width: 993px 的设备上表现

<ClientOnly><layout-attr></layout-attr></ClientOnly>
