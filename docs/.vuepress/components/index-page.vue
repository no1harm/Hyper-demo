<template>
    <div class='home-page'>
        <div class="contentWrapper">
            <div class="home-header">
                <div class="menu">
                    <i class="iconfont icon-lightning2"></i>
                    <ul>
                        <li><a href="https://github.com/no1harm/Hyper-demo" target="_blank">GitHub</a></li>
                        <li><a href="https://no1harm.github.io/Hyper-demo/get-start/">Document</a></li>
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
                    <a href="https://no1harm.github.io/Hyper-demo/get-start/"><div class="startBtn">快速上手</div></a>
                </div>
                <div class="iconWrapper">
                    <i class="iconfont icon-lightning2"></i>
                </div>
            </div>
        </div>
        <div class="footerWrapper">
            <p>你可以使用 Hyper-UI 做什么</p>
            <div class="advantage">
                <div class="tips">
                    <i class="iconfont icon-component"></i>
                    <p>使用一些好看的组件  如 Button / Input </p>
                </div>
                <div class="tips">
                    <i class="iconfont icon-layout"></i>                    
                    <p>创建更优雅的布局</p>
                </div>
                <div class="tips">
                    <i class="iconfont icon-popover"></i>                    
                    <p>可定制更多的组件内容</p>
                </div>
            </div>
            <p class="copyright">MIT Licensed | Copyright © 2018-present no1hram</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indexPage',
}
</script>

<style scoped lang="scss" >
@import './index-page.css';
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
                .iconfont {
                    font-size:42px;
                    color: #333333;
                    overflow: hidden;
                    &:hover{
                        color: #fff;
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
                margin: 50px 0 0 220px;
                .iconfont{
                    font-size: 16em; 
                    vertical-align: -0.15em;
                    color: #333333;
                    overflow: hidden;
                    &:hover{
                        transition: transform 1s;
                        color: #fff;
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
                    font-family: "Times New Roman",Georgia,"SimSun", "宋体","Times New Roman", 
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
        > p{
            margin-top: 4em;
            margin-bottom: 3.6em;
            font-size: 24px;
            color:#1E1911;
            font-weight: bold;
            font-family: "Times New Roman",Georgia, "SimSun","宋体","Times New Roman", 
                        "Microsoft YaHei", "微软雅黑", 
                        STXihei, "华文细黑", 
                        serif; 
        }
        .copyright{
            color:#666;
            font-size: 14px;
            margin-bottom: 3em;
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
                .iconfont{
                    padding-top: 1em;
                    font-size: 2.6em; 
                    vertical-align: -0.15em;
                    fill: #337480;
                    overflow: hidden;
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
