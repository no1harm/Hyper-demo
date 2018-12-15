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
            <td>name</td>
            <td>面板唯一标志符，必填</td>
            <td>String</td>
            <td>——</td>
            <td>——</td>
            </tr>
            <tr>
            <td>title</td>
            <td>面板标题</td>
            <td>String</td>
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
