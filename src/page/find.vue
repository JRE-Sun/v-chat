<template>
    <div content="containter">
        <header-nav :header-title="headerTitle"></header-nav>
        <scroll-view>
        <div class="main weui-cells">
            <a class="weui-cell weui-cell_access" @click="openFriendCircle" href="javascript:;">
                <div class="weui-cell__hd">
                    <svg viewBox="0 0 1024 1024" class="friend-circle" width="48" height="48">
                        <path d="M873.865744 150.143495A508.145409 508.145409 0 0 0 769.541952 69.610147l-51.738442 505.835657 268.316175-256.53644A505.06574 505.06574 0 0 0 873.865744 150.143495zM710.797263 40.276298a510.070202 510.070202 0 0 0-329.447607-23.097519l321.055509 394.274643z m-391.887899-2.386744A511.225078 511.225078 0 0 0 69.533155 254.467287l505.912649 51.738442zM40.276298 313.36596a510.070202 510.070202 0 0 0-23.097518 329.447606l394.19765-321.1325z m109.867197 560.499784a512.379954 512.379954 0 0 0 104.400784 80.456357l51.815433-505.835658L37.966546 705.099875A505.373707 505.373707 0 0 0 150.143495 873.865744z m163.299456 109.790205A508.145409 508.145409 0 0 0 512.00462 1023.999615a513.226863 513.226863 0 0 0 130.885938-17.015172L321.681066 612.709801z m391.810908 2.309752a506.220616 506.220616 0 0 0 168.611885-112.099957 510.224186 510.224186 0 0 0 80.456357-104.400784l-505.681674-51.584458z m301.730584-604.84702L612.709801 702.405164l371.100132 8.315107a510.763128 510.763128 0 0 0 23.17451-329.60159z" fill="#ECC804" p-id="2419"></path>
                        <path d="M769.541952 69.610147a510.532153 510.532153 0 0 1 216.577733 249.299217L717.80351 575.368812l51.738442-505.835657z m0 0" fill="#FE5D62" p-id="2420"></path>
                        <path d="M381.118681 17.101788a510.070202 510.070202 0 0 1 329.447607 23.097518l-8.392099 371.100132-321.055508-394.19765z m0 0" fill="#ECC804" p-id="2421"></path>
                        <path d="M69.533155 254.467287A511.225078 511.225078 0 0 1 318.909364 37.889554l256.53644 268.316175-505.912649-51.738442z m0 0" fill="#F5DE36" p-id="2422"></path>
                        <path d="M17.101788 642.890558a510.070202 510.070202 0 0 1 23.097518-329.447607l371.100133 8.315107L17.101788 642.890558z m0 0" fill="#AEF348" p-id="2423"></path>
                        <path d="M254.467287 955.322993a512.379954 512.379954 0 0 1-104.323792-80.456356A505.373707 505.373707 0 0 1 37.966546 705.946784l268.316175-256.459448-51.815434 505.835657z m0 0" fill="#35F432" p-id="2424"></path>
                        <path d="M512.00462 1023.999615a508.145409 508.145409 0 0 1-198.715652-40.189682l8.392098-371.100132 321.209492 394.274642a513.226863 513.226863 0 0 1-130.885938 17.015172z m0 0" fill="#6AD4FE" p-id="2425"></path>
                        <path d="M448.640427 717.880502l505.912649 51.738442a510.224186 510.224186 0 0 1-80.687332 104.2468 506.220616 506.220616 0 0 1-168.919852 112.176949L448.640427 717.880502z m0 0" fill="#24BBF4" p-id="2426"></path>
                        <path d="M612.709801 702.405164l394.274642-321.286483a510.763128 510.763128 0 0 1-23.097518 329.447607l-371.100133-8.315107z m0 0" fill="#615DFC" p-id="2427"></path>
                    </svg>
                </div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p>朋友圈</p>
                </div>
                <span class="weui-cell__ft"></span>
            </a>
        </div>
        </scroll-view>
        <footer-nav active='find'></footer-nav>
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
            headerTitle: "发现"
        };
    },
    components: {
        headerNav,
        footerNav,
        lineMessageIndex,
        routerAnim
    },
    methods: {
        // 打开朋友圈
        openFriendCircle() {
            this.$router.push({name:"findFriendCircle",query:{backText:'发现'}});
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/rem";
.weui-cells {
    background-color: #ebeff1;
    line-height: rem(25);
    font-size: rem(17);
    overflow: hidden;
    position: relative;
    .weui-cell {
        background-color: #ffffff;
        margin-top: rem(15);
    }
    .weui-cell__hd {
        position: relative;
        margin-right: rem(10);
        img {
            width: rem(38);
            height: rem(38);
            overflow: hidden;
            display: block;
        }
    }
    .friend-circle {
        width: rem(30);
        height: rem(30);
        vertical-align: middle;
    }
}
</style>x

