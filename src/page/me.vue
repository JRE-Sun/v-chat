<template>
    <div content="containter">
        <header-nav :header-title="headerTitle"></header-nav>
        <scroll-view>
            <div class="main weui-cells"></div>
            <div class="weui-cell user-info">
                <div class="weui-cell__hd">
                    <img
                        src="https://dn-coding-net-production-static.qbox.me/3f1f6a5c-8a73-41f1-b904-75e958d1825b.jpg?imageMogr2/auto-orient/format/jpeg/crop/!470x470a0a0/thumbnail/80">
                </div>
                <div class="weui-cell__bd">
                    <p class="username">JreSun</p>
                    <p class="info text-hidden">微信号: jresun20150102</p>
                </div>
            </div>
            <div class="weui-btn weui-btn_default btn-out">退出登录</div>
        </scroll-view>
        <footer-nav active='me'></footer-nav>
    </div>
</template>

<script>
    import headerNav from "../components/header-nav";
    import footerNav from "../components/footer-nav";
    import lineMessageIndex from "../components/timeline-message-index";

    export default {
        name      : "home-tpl",
        data() {
            return {
                headerTitle: "我"
            };
        },
        components: {
            headerNav,
            footerNav,
            lineMessageIndex
        }
    };
</script>

<style lang="scss" scoped>
    @import "../assets/rem";

    .main {
        padding-bottom: 0;
    }

    .username {
        font-size: rem(17);
    }

    .weui-cells {
        // margin-top: rem(20);
        background-color: #FFF;
        line-height: rem(28);
        font-size: rem(20);
        overflow: hidden;
        position: relative;
    }

    .user-info {
        background-color: #FFF;
        padding: 15px;
        .weui-cell__bd {
            overflow: hidden;
        }
        .weui-cell__hd {
            position: relative;
            margin-right: rem(10);
            img {
                width: rem(68);
                height: rem(68);
                border-radius: 5px;
                overflow: hidden;
                display: block;
            }
            span {
                position: absolute;
                top: -0.4em;
                right: -0.4em;
            }
        }
        .info {
            font-size: rem(16);
        }
    }

    .btn-out {
        margin-top: 12px;
    }
</style>

