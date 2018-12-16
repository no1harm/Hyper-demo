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
            <td>duration</td>
            <td>动画时长，单位为 ms</td>
            <td>String | Number</td>
            <td>——</td>
            <td>500</td>
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
    display: table;
    border-collapse: collapse;
    td{
        text-align: center;
    }
}
</style>
