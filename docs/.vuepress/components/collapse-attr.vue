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
            <td>single</td>
            <td>是否同时只能展开一个面板</td>
            <td>Boolean</td>
            <td>——</td>
            <td>false</td>
            </tr>
            <tr>
            <td>selected</td>
            <td>一个由当前展开面板的 name 组成的数组。可以用 .sync 修饰符绑定。</td>
            <td>Array</td>
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
    display: table;
    border-collapse: collapse;
    td{
        text-align: center;
    }
}

</style>
