<template>
    <div content="containter">
        <header-nav isShowHeaderBack="true" :headerBackText="headerBackText" :header-title="headerTitle"></header-nav>
        <my-scroll-view>
            <div class="main weui-cells">
                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>

                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div><div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>

                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div><div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>

                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div><div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>

                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div><div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>

                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div><div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>

                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div><div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>

                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div><div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>

                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>
                <div>adssd</div><div>adssd</div>
                <div>adssd</div>
                <div>adssd</div>
            </div>
        </my-scroll-view>
    </div>
</template>

<script>
import myScrollView from "../components/my-scroll-view";
import routerAnim from "../components/router-anim";
import headerNav from "../components/header-nav";

export default {
    name: "home-tpl",
    data() {
        return {
            headerTitle: "朋友圈",
            headerBackText: "返回"
        };
    },
    components: {
        headerNav,
        routerAnim,
        myScrollView
    },
    methods: {},
    computed: {},
    mounted() {
        this.headerBackText = this.$route.query.backText;
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/rem";
.weui-cells {
    background-color: #ffffff;
    line-height: rem(25);
    font-size: rem(17);
    overflow: hidden;
    position: relative;
    .weui-cell__hd {
        position: relative;
        margin-right: rem(10);
        img {
            width: rem(50);
            height: rem(50);
            // border-radius: 5px;
            overflow: hidden;
            display: block;
        }
    }
}
</style>

