<template>
    <div class="header-nav fixed" :style="{'z-index':zIndex}">
        <div class="content">
            <span v-show="isShowHeaderBack" class="back-btn" @click="goBack">
                <i class="iconfont icon-back"></i>{{ headerBackText }}</span>
            <h2>{{ headerTitle }}</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: "header-nav-tpl",
    props: {
        headerTitle: {},
        isShowHeaderBack: {},
        headerBackText: {
            default: "返回"
        },
        zIndex:{
            default: 10
        }
    },
    methods: {
        goBack() {
            this.$router.goBack();
        }
    }
};
</script>
<style scoped lang="scss">
@import "../assets/rem";
.header-nav,
.content,
.content .back-btn,
h2 {
    height: rem(52);
    max-height: rem(52);
}

.header-nav {
    top: 0;
    overflow: hidden;
    background: #2a2a2b;
}

.content {
    top: 0;
}

.content .back-btn {
    position: absolute;
    top: 0;
    left: rem(10);
    display: flex;
    align-items: center;
    font-size: 17px;
    color: #fff;
}

.content .back-btn i {
    font-size: 18px;
    padding-right: rem(5);
}

.content h2 {
    text-align: center;
    color: #fff;
    display: block;
    font-size: rem(19.5);
    line-height: rem(52);
}
</style>