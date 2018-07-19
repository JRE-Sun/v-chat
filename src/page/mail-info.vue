<template>
    <div content="containter">
        <header-nav
            headerLeft="true"
            zIndex="11"
            :header-title="headerTitle">
        </header-nav>
        <scroll-view>
            <div class="main weui-cells">
                <div class="weui-cell user-info">
                    <div class="weui-cell__hd">
                        <img src="https://dn-coding-net-production-static.qbox.me/3f1f6a5c-8a73-41f1-b904-75e958d1825b.jpg?imageMogr2/auto-orient/format/jpeg/crop/!470x470a0a0/thumbnail/80">
                    </div>
                    <div class="weui-cell__bd">
                        <p class="username">JreSun</p>
                        <p class="info text-hidden">微信号: jresun20150102</p>
                    </div>
                </div>
                <div class="content">
                    <div class="weui-cell">
                        <span>地区</span>
                        <div class="weui-cell__bd">
                        </div>
                    </div>
                    <div class="weui-cell weui-cell_access album" @click="openFriendCircle">
                        <span>个人相册</span>
                        <div class="weui-cell__bd">
                            <img src="https://dn-coding-net-production-static.qbox.me/3f1f6a5c-8a73-41f1-b904-75e958d1825b.jpg?imageMogr2/auto-orient/format/jpeg/crop/!470x470a0a0/thumbnail/80">
                            <img src="https://dn-coding-net-production-static.qbox.me/3f1f6a5c-8a73-41f1-b904-75e958d1825b.jpg?imageMogr2/auto-orient/format/jpeg/crop/!470x470a0a0/thumbnail/80">
                            <img src="https://dn-coding-net-production-static.qbox.me/3f1f6a5c-8a73-41f1-b904-75e958d1825b.jpg?imageMogr2/auto-orient/format/jpeg/crop/!470x470a0a0/thumbnail/80">
                        </div>
                        <span class="weui-cell__ft"></span>
                    </div>
                </div>
                <a href="javascript:;" @click="openChat" class="weui-btn open-chat weui-btn_primary">发送消息</a>
            </div>
        </scroll-view>
    </div>
</template>

<script>
import routerAnim from "../components/router-anim";
import headerNav from "../components/header-nav";
export default {
    name: "mail-info-tpl",
    data() {
        return {
            headerTitle: "详细资料",
            data: {}
        };
    },
    components: {
        headerNav,
        routerAnim
    },
    mounted() {},
    methods: {
        openChat() {
            this.$router.push({
                name: "mailInfoChatPage",
                query: { title: "买没有。。" }
            });
        },
        openFriendCircle() {
            this.$router.push({
                name: "mailInfoFriendCircle",
                query: {
                    backText: "详细资料"
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/rem";
.router-view {
    z-index: 12;
}
.main {
    background-color: #ebeff1;
}
.weui-cells {
    line-height: rem(25);
    font-size: rem(17);
    overflow: hidden;
    position: relative;
}
.content {
    background-color: #fff;
    margin-top: rem(15);
}
.open-chat {
    margin: rem(15) rem(15) 0 rem(15);
}
.user-info {
    padding: rem(15);
    background-color: #fff;
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
.album {
    padding: rem(15);
    .weui-cell__bd {
        margin-left: rem(10);
    }
    img {
        width: rem(78);
        height: rem(78);
        overflow: hidden;
        vertical-align: middle;
        border-radius: rem(2);
    }
}
</style>