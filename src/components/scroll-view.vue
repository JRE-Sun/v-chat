<template>
    <iscroll-view ref="iScrollView" class="scroll-view">
        <slot></slot>
    </iscroll-view>
</template>

<script>
export default {
    name: "scroll-view",
    data() {
        return {
            obj: false,
            isDestroyed: false // 当前页面是否正在离开
        };
    },
    methods: {
        init() {
            this.obj = this.$refs.iScrollView;
            this.obj.updateView = this.updateView;
            this.$emit("get-obj", this.obj);
        },
        updateView() {
            this.$nextTick(() => {
                setTimeout(() => {
                    !this.isDestroyed && this.obj.refresh();
                }, 500);
            });
        }
    },
    mounted() {
        this.init();
    },
    updated() {
        this.isDestroyed = false;
        this.updateView();
    },
    destroyed() {
        this.isDestroyed = true;
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/rem";

.scroll-view {
    touch-action: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>

