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
            <td>template</td>
            <td>是否需要在 tabs-head 添加内容；
                如确定添加，则 slot 必须为 actions</td>
            <td>template</td>
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
