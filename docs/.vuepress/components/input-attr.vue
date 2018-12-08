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
            <td>value</td>
            <td>输入框显示的信息</td>
            <td>String</td>
            <td>——</td>
            <td>——</td>
            </tr>
            <tr>
            <td>disabled</td>
            <td>不可点击状态</td>
            <td>Boolean</td>
            <td>——</td>
            <td>false</td>
            </tr>
            <tr>
            <td>readonly</td>
            <td>只读状态</td>
            <td>Boolean</td>
            <td>——</td>
            <td>false</td>
            </tr>
            <tr>
            <td>error</td>
            <td>错误信息</td>
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
    border-collapse: collapse;
    td{
        text-align: center;
    }
}

</style>
