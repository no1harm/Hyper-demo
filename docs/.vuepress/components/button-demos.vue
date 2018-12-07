<template>
    <div>
        <hy-button>按钮</hy-button>
        <hy-button icon="settings" >默认按钮</hy-button>
        <hy-button icon-postition="right" icon="settings">默认样式</hy-button>
        <hy-button icon-postition="right" icon="settings" :loading="true">默认样式</hy-button>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Button from '../../../src/Button.vue'

    export default {
        components:{
            'hy-button': Button
        },
        data(){
            return {
                content:`
        <hy-button>按钮</hy-button>
        <hy-button icon="settings" >默认按钮</hy-button>
        <hy-button icon-postition="right" icon="settings">默认样式</hy-button>
        <hy-button icon-postition="right" icon="settings" :loading="true">默认样式</hy-button>
                `
            }
        }
    }
</script>