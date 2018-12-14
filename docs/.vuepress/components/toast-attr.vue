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
            <td>message</td>
            <td>消息提示的文本</td>
            <td>String | Template</td>
            <td>——</td>
            <td>——</td>
            </tr>
            <tr>
            <td>closeButton</td>
            <td>是否设置关闭按钮，及关闭按钮的文本以及回调函数</td>
            <td>Object</td>
            <td>——</td>
            <td>——</td>
            </tr>
            <tr>
            <td>enableHtml</td>
            <td>是否渲染 message 文本为 HTML</td>
            <td>Boolean</td>
            <td>——</td>
            <td>false</td>
            </tr>
            <tr>
            <td>autoClose</td>
            <td>是否自动关闭 Toast</td>
            <td>Boolean | Number</td>
            <td>——</td>
            <td>2（2S 后自动关闭）</td>
            </tr>
            <tr>
            <td>position</td>
            <td>Toast 出现的位置</td>
            <td>String</td>
            <td>top | bottom | middle | right | left</td>
            <td>middle</td>
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
