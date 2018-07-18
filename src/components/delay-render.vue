/**
使用方法
time可以不传，默认300ms
在延迟time时间后，会调用delay，
外界传入isR，当isR从true->false的时候会触发@delay-render

这里的isR代表着外界ajax请求是否在运行，当为true在运行，当false为运行结束，回调@delay-render

注意：':running-ajax'必须传，否则不会触发@delay-render
<delay-render @delay-render="" @delay="" :running-ajax="isR" :time=0.3></delay-render>
*/

<template>
    <div v-if="show">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        time: { type: Number, default: 0.3 },
        runningAjax: { type: Boolean, default: true }
    },
    data() {
        return {
            show: false
        };
    },
    watch: {
        runningAjax(val) {
            if (val) return;
            this.run();
        }
    },
    methods: {
        run() {
            // 开始渲染，渲染逻辑
            // 渲染->交给外面的delay-render函数
            this.show = true;
            this.$nextTick(() => {
                this.$emit("delay-render");
            });
        },
        delay() {  
            setTimeout(() => {
                this.$emit("delay");
            }, this.time * 1000);
        }
    },
    mounted() {
        this.delay();
    },
    activated() {
        this.delay();
    }
};
</script>
