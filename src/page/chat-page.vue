<template>
    <div>
        <header-nav isShowHeaderBack="true" headerBackText="微信" :header-title="headerTitle"></header-nav>
        <scroll-view @get-obj="getScrollViewObj">
            <delay-render @delay-render="delayRender" @delay="_cereate" :running-ajax="isRuningAjax">
                <div class="main">
                    <timeline-chat v-for="(msg,index) in list" v-bind:key="index" :msg="msg"></timeline-chat>
                </div>
            </delay-render>
        </scroll-view>
        <div class="div-input-wrap fixed display-flex">
            <i class="iconfont icon-smile fa-2x"></i>
            <i class="iconfont icon-pic fa-2x"></i>
            <input class="div-input flex-1" type="text" placeholder="点此回复消息">
            <a class="send-btn" href="javascript:;">发送</a>
        </div>
    </div>
</template>

<script>
import headerNav from "../components/header-nav";
import timelineChat from "../components/timeline-chat";
export default {
    name: "char-page-tpl",
    data() {
        return {
            headerTitle: "",
            list: [], // 聊天list
            weuiLoading: "",
            isRuningAjax: true,
            scrollViewObj: ""
        };
    },
    components: {
        headerNav,
        timelineChat
    },
    methods: {
        getScrollViewObj(obj) {
            this.scrollViewObj = obj;
        },
        // 延迟渲染后执行的操作
        delayRender() {
            this.scrollViewObj.scrollTo(0,-100000,300);
            this.weuiLoading.hide();
            new this.ScrollUnique(".router-view");
        },
        _cereate() {
            this.weuiLoading = this.weui.loading("加载中...");
            this.headerTitle = this.$route.query.title;
            this.$http
                .post("charPage")
                .then(res => {
                    this.list = res.data.extend;
                    this.isRuningAjax = false;
                })
                .catch(error => {
                    this.isRuningAjax = false;
                });
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/rem";
.main {
    margin-left: rem(12);
    margin-right: rem(12);
    -webkit-overflow-scrolling: touch;
    // overflow-y: scroll;
}
.div-input-wrap {
    align-items: center;
    justify-content: center;
    bottom: 0;
    border-top: 1px solid #ddd;
    color: #999;
    background: #fff;
    .icon-smile {
        font-size: rem(20);
        padding: rem(10);
    }
    .icon-pic {
        font-size: rem(19);
        display: block;
        padding: rem(6) rem(15) rem(10) rem(10);
    }
    .send-btn {
        color: #999;
        display: inline-block;
        padding: 0 rem(15);
    }
}
.div-input {
    font-size: rem(15);
    padding: rem(10);
    margin: rem(11) 0;
    background: #f6f6f6;
    border: none;
    outline: none;
    border-radius: rem(5);
}
</style>

