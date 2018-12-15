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
            <td>标签页的名称与内容标识，唯一且必填</td>
            <td>String | Number</td>
            <td>——</td>
            <td>——</td>
            </tr>
            <td>disabled</td>
            <td>是否禁用此标签页</td>
            <td>Boolean</td>
            <td>——</td>
            <td>false</td>
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
