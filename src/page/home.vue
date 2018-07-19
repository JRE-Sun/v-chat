<template>
    <div>
        <header-nav
            :header-title="headerTitle"
        ></header-nav>

        <scroll-view>
            <div
                :style="{visibility:showMain}"
                class="main">
                <router-link
                    ref="a"
                    v-for="(msg,index) in list"
                    v-bind:key="index"
                    :to="{name:'chatPage',query:{title:msg.username}}">
                    <line-message-index
                        :msg="msg">
                    </line-message-index>
                </router-link>
                <loading
                    :loading="isShowBottomLoading">
                </loading>
            </div>
        </scroll-view>

        <full-loading
            :full-loading="isShowLoading">
        </full-loading>

        <footer-nav
            active='home'>
        </footer-nav>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {getALLChatList} from "@/api/api";
    import headerNav from "@/components/header-nav";
    import footerNav from "@/components/footer-nav";
    import lineMessageIndex from "@/components/timeline-message-index";
    // import ScrollEvent from "@/assets/scroll.event.js";

    export default {
        name      : "home-tpl",
        components: {
            headerNav,
            footerNav,
            lineMessageIndex
        },
        data() {
            return {
                headerTitle        : "微信",
                isShowLoading      : true,
                list               : [],
                tempList           : [],
                showMain           : "visible",
                screenHeight       : window.innerHeight,
                isShowBottomLoading: false,
                isShowToast        : true
            };
        },
        computed  : {
            ...mapState({
                headerStyle: state => state.header.style
            })
        },
        methods   : {
            /**
             * 滚动到底部自动加载
             */
            scrollBottomCallBack(data) {
                let scrollTop = window.scrollY;
                if (
                    this.screenHeight + scrollTop + 200 >=
                    document.querySelector(".main").offsetHeight
                ) {
                    this.isShowBottomLoading = true;
                    this.sendAjax();
                }
            },
            sendAjax() {
                getALLChatList()
                    .then(res => {
                        this.isShowLoading       = false;
                        this.list                = this.list.concat(res.data.extend);
                        this.isShowBottomLoading = false;
                    })
                    .catch(error => {
                        this.isShowLoading = false;
                        console.log(error);
                    });
            },
            setHeader() {
                // 设置vuex里面的值
                this.$store.commit("header/setStyle", {
                    style: {
                        backgroundImage:
                            "-webkit-linear-gradient(left, #4DC7FA 10%, #3492F2)"
                    }
                });
            }
        },
        activated() {
        },
        mounted() {
            // new ScrollEvent({
            //     callback: this.scrollBottomCallBack
            // })
            this.sendAjax();
            console.log(this.headerStyle);
        }
    };
</script>

<style scoped>
    /* .main {
        height: auto;
    } */
    .vue-loading {
        border-top: 1px solid #EEE;
        background-color: #FFF;
        padding: 15px 0;
    }
</style>
