---
title: Toast - 信息提示框
sidebarDepth: 2
---

# Toast

可用于弹出信息。

基础用法：

<ClientOnly><toast-demo></toast-demo></ClientOnly>

实现 Toast 的原理是利用 `toastPlugin` 在 `Vue.prototype` 中添加一个 `$toast` 全局方法，并通过这个方法调用 Toast 组件。因此，需要先执行 `Vue.use(toastPlugin)`。

### Attributes

<ClientOnly><toast-attr></toast-attr></ClientOnly>
