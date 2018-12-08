<template>
    <div>
        <table width="100%">
            <thead>
                            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
            <tr>
            </thead>
            <tr>
                <tbody>
                    <td>icon</td>
            <td>图标类名</td>
            <td>String</td>
            <td>——</td>
            <td>——</td>
            </tr>
            <tr>
            <td>icon-position</td>
            <td>图标位置</td>
            <td>String</td>
            <td>left / right</td>
            <td>left</td>
            </tr>
            <tr>
            <td>loading</td>
            <td>是否带 loading 效果</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
            </tr>
                </tbody>
            
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
