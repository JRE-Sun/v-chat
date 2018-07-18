<template>
    <div>
        <header-nav :header-title="headerTitle"></header-nav>
        <scroll-view @get-obj="getScrollView">
            <div class="main weui-cells">
                <router-link :to="{name:'mailInfo'}" v-for="(msg,index) in list" v-bind:key="index" class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://dn-coding-net-production-static.qbox.me/3f1f6a5c-8a73-41f1-b904-75e958d1825b.jpg?imageMogr2/auto-orient/format/jpeg/crop/!470x470a0a0/thumbnail/80" alt=""></div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>{{ msg.username }}</p>
                    </div>
                </router-link>
            </div>
        </scroll-view>
        <footer-nav active='mail'></footer-nav>
    </div>
</template>

<script>
import routerAnim from "../components/router-anim";
import headerNav from "../components/header-nav";
import footerNav from "../components/footer-nav";
import lineMessageIndex from "../components/timeline-message-index";

export default {
    name: "home-tpl",
    data() {
        return {
            headerTitle: "通讯录",
            list: [],
            scrollViewObj: ""
        };
    },
    components: {
        headerNav,
        footerNav,
        lineMessageIndex,
        routerAnim
    },
    methods: {
        getScrollView(obj) {
            this.scrollViewObj = obj;
        }
    },
    computed: {},
    updated() {},
    mounted() {
        this.$http
            .post("mail", {
                firstName: "Fred",
                lastName: "Flintstone"
            })
            .then(res => {
                this.list = this.list.concat(res.data.extend);
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/rem";

.weui-cells {
    background-color: #ffffff;
    line-height: rem(25);
    font-size: rem(17);
    // overflow: scroll;
    // -webkit-overflow-scrolling: touch;
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

