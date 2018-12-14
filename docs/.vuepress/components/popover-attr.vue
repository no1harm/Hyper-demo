<template>
    <div>
        <table width="100%">
            <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
            <tr>
            <td>position</td>
            <td>popover 显示的位置</td>
            <td>String</td>
            <td>top | botter | lef | right</td>
            <td>top</td>
            </tr>
            <tr>
            <td>trigger</td>
            <td>popover 触发的方式</td>
            <td>String</td>
            <td>click | hover</td>
            <td>click</td>
            </tr>
            <tr>
            <td>template</td>
            <td>popover 的内容，slot 必须为 content</td>
            <td>tempalte</td>
            <td>——</td>
            <td>——</td>
            </tr>
            <tr>
            <td>slot-scope</td>
            <td>如果需要在 popover 内添加关闭 popover 的设置，则需要 slot-scope 引用 close 方法</td>
            <td>Object</td>
            <td>——</td>
            <td>——</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        }
    }
</script>

<style lang="scss" scoped>
table{
    border-collapse: collapse;
    td{
        text-align: center;
    }
}

</style>
