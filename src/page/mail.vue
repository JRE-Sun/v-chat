<template>
    <div>
        <header-nav
            :header-title="headerTitle">
        </header-nav>
        <scroll-view @get-obj="getScrollView">
            <div class="main weui-cells">
                <mt-cell
                    class="item-cell"
                    v-for="(msg,index) in list"
                    v-bind:key="index"
                    :to="{name:'mailInfo'}"
                    is-link
                    :title="msg.username">
                    <img class="avatar-img" slot="icon" src="https://dn-coding-net-production-static.qbox.me/3f1f6a5c-8a73-41f1-b904-75e958d1825b.jpg?imageMogr2/auto-orient/format/jpeg/crop/!470x470a0a0/thumbnail/80" width="24" height="24">
                </mt-cell>
            </div>
        </scroll-view>
        <footer-nav active='mail'></footer-nav>
    </div>
</template>

<script>
    import {Cell} from 'mint-ui';
    import {getFriendList} from '@/api/api'
    import routerAnim from "../components/router-anim";
    import headerNav from "../components/header-nav";
    import footerNav from "../components/footer-nav";
    import lineMessageIndex from "../components/timeline-message-index";

    export default {
        name      : "home-tpl",
        components: {
            [Cell.name]: Cell,
            headerNav,
            footerNav,
            lineMessageIndex,
            routerAnim,
        },
        data() {
            return {
                headerTitle  : "通讯录",
                list         : [],
                scrollViewObj: ""
            };
        },
        methods   : {
            getScrollView(obj) {
                this.scrollViewObj = obj;
            }
        },
        computed  : {},
        updated() {
        },
        mounted() {
            getFriendList().then(res => {
                this.list = this.list.concat(res.data.extend);
            });
        }
    };
</script>

<style lang="scss" scoped>
    @import "../assets/rem";
    .avatar-img{
        width: rem(50);
        height: rem(50);
        margin: rem(8) rem(5) rem(8) 0;
    }
</style>

