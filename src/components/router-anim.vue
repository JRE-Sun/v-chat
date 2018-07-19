<template>
    <transition :name="transitionName">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    props: {
        exclude: {}
    },
    data() {
        return {
            transitionName: "leftin"
        };
    },
    watch: {
        $route(to, from) {
            if (
                from.name == null ||
                (this.exclude.indexOf(to.name) > -1 &&
                    this.exclude.indexOf(from.name) > -1)
            ) {
                this.transitionName = "empty";
                return;
            }

            this.transitionName =
                to.path.split("/").length < from.path.split("/").length
                    ? "leftin"
                    : "rightin";
        }
    }
};
</script>

<style>
[v-cloak] {
    display: none;
}

.router-view {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ebeff1;
    -webkit-overflow-scrolling: touch;
    transition: all 0.3s ease-out;
    z-index: 10;
    overflow-y: scroll;
    /*perspective: 1000;*/
    backface-visibility: hidden;
}

.rightin-enter,
.leftin-leave-active {
    opacity: 0;
    transform: translate3d(50% 0, 0);
    -webkit-transform: translate3d(50%, 0, 0);
    -moz-transform: translate3d(50%, 0, 0);
}

.leftin-enter,
.rightin-leave-active {
    opacity: 0;
    transform: translate3d(-50% 0, 0);
    -webkit-transform: translate3d(-50%, 0, 0);
    -moz-transform: translate3d(-50%, 0, 0);
}
</style>

