<template>
    <div class='home-page'>
        <div class="contentWrapper">
            <div class="home-header">
                <div class="menu">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-lightning2"></use>
                    </svg>
                    <ul>
                        <li><a href="https://github.com/no1harm/Hyper-demo" target="_blank">GitHub</a></li>
                        <li><a href="/get-start/">Document</a></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div class="home-content">
                <div class="banner">
                    <div>
                        <span>Hyper-UI</span>
                    </div>
                    <div>
                        <p>一套基于 Vue2.0 的 UI 桌面端组件库</p>
                    </div>
                    <a href="/get-start/"><div class="startBtn">快速上手</div></a>
                </div>
                <div class="iconWrapper">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-lightning2"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="footerWrapper">
            <p>你可以使用 Hyper-UI 做什么</p>
            <div class="advantage">
                <div class="tips">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-component"></use>
                    </svg>
                    <p>使用一些好看的组件  如 Button / Input </p>
                </div>
                <div class="tips">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-layout"></use>
                    </svg>
                    <p>创建更优雅的布局</p>
                </div>
                <div class="tips">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-popover"></use>
                    </svg>
                    <p>可定制更多的组件内容</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './svg.js'
export default {
    name: 'homePage',
    data() {
      return {

      }
    },
}
</script>

<style scoped lang="scss" >
.icon {
    width: 2.6em; height: 2.6em;
    vertical-align: -0.15em;
    fill: #337480;
    overflow: hidden;
}
*{
    transition: all .1s;
}
.home-page{
    min-height:100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .contentWrapper{
        width: 100%;
        min-height: 500px;
        background-color: #FBDF51;
        display: flex;
        flex-direction: column;
        align-items: center;
        .home-header{
            width: 80%;
            margin: 36px 0;
            .menu{
                display: inline-flex;
                ul{
                    margin:0;
                    margin-left:20px;
                    list-style: none;
                    display: flex;
                    padding: 0;
                    li a {
                        font-size: 12px;
                        color:#615A36;
                        font-weight: bold;
                        padding-right: 30px;
                        &:hover{
                            color:black;
                        }
                    }
                }
                .icon{
                    width: 2.6em; height: 2.6em;
                    vertical-align: -0.15em;
                    fill: #333333;
                    overflow: hidden;
                    &:hover{
                        fill: #fff;
                    }
                }
            } 
        }
        .home-content{
            width: 80%;
            min-height: 200px;
            display: flex;
            flex-direction: row;
            .iconWrapper{
                margin: 76px 0 0 220px;
                .icon{
                    width: 12em; height: 12em;
                    vertical-align: -0.15em;
                    fill: #333333;
                    overflow: hidden;
                    &:hover{
                        transition: transform 1s;
                        fill: #fff;
                    }
                }
            }
            .banner{
                display: inline-flex;
                flex-direction: column;
                margin: 60px 0 20px 130px;
                span{
                    color:#1E1911;
                    font-size: 78px;
                    font-family: Georgia, "Times New Roman", 
                        "Microsoft YaHei", "微软雅黑", 
                        STXihei, "华文细黑", 
                        serif; 
                }
                p{
                    font-size: 22px;
                    color:#1E1911;
                    font-weight: bold;
                    font-family: "Times New Roman",Georgia, "宋体","Times New Roman", 
                        "Microsoft YaHei", "微软雅黑", 
                        STXihei, "华文细黑", 
                        serif; 
                }
                .startBtn{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    font-size: 12px;
                    background-color: #337480;
                    height: 42px;
                    width: 112px;
                    cursor: pointer;
                    &:hover{
                        background-color: #1f5e68;
                        box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.3);
                    }
                }
            }
        }
    }
    .footerWrapper{
        width: 80%;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
        > p{
            margin-top: 4em;
            margin-bottom: 3.6em;
            font-size: 24px;
            color:#1E1911;
            font-weight: bold;
            font-family: "Times New Roman",Georgia, "宋体","Times New Roman", 
                        "Microsoft YaHei", "微软雅黑", 
                        STXihei, "华文细黑", 
                        serif; 
        }
        > .advantage{
            min-height: 100px;
            width: calc(100% - 260px);
            display: flex;
            justify-content: space-between;  
            position: relative;
            .tips{
                border-radius: 4px;
                width: 30%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .icon{
                    padding-top: 1em;
                }
                p{  
                    margin-top: 2em;
                    font-size: 14px;
                    text-align: center;
                    max-width: 60%;
                }
                &:hover{
                    background-color: #FBDF51;
                    transform: translateY(-10px);
                    box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.3);
                }
            }          
        }
    }
}
</style>
