<template>
    <div class="scroll-view" @touchstart.stop="stopEvent" @touchmove.stop="stopEvent" @touchend.stop="stopEvent">
        <div class="scroll-view-content" @touchstart.stop="_touchstart" @touchmove.stop="_touchmove" @touchend.stop="_touchend" :style="style">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-scroll-view",
    data() {
        return {
            startY: 0,
            moveY: 0,
            style: {
                transition: "0s",
                transform: "translate(0,0) translateZ(0)"
            },
            isMoveing: false,
            height: false,
            startTime: 0, // 开始点击 时间
            endTime: 0, // 结束end事件 时间
            screenHeight: window.innerHeight,
            translateY: 0,
            moveDistance: 0,
            lastTwoPoint: [0, 0] // 移动过程中 最后两个点
        };
    },
    methods: {
        stopEvent(e) {
            e.stopPropagation();
            e.preventDefault();
        },
        _touchstart(e) {
            if (!this.height) {
                this.height = document.querySelector(
                    ".scroll-view-content"
                ).clientHeight;
            }
            if (this.height <= this.screenHeight) {
                return;
            }
            this.style.transition = "0s";
            this.startTime = new Date().getTime();
            this.startY = e.touches[0].pageY;
            this.stopEvent(e);
        },
        _touchmove(e) {
            if (this.height <= this.screenHeight) {
                return;
            }
            this.moveY = e.touches[0].pageY;
            this.lastTwoPoint.shift();
            this.lastTwoPoint.push(this.moveY);
            this.moveDistance = Math.ceil(this.moveY - this.startY);
            this.style.transform = `translate(0, ${this.translateY +
                this.moveDistance}px) translateZ(0)`;
            this.stopEvent(e);
        },
        _touchend(e) {
            this.stopEvent(e);
            if (this.height <= this.screenHeight) {
                return;
            }
            this.isMoveing = true;
            this.endTime = new Date().getTime();
            let time = 0;
            let realTranslateY = this.translateY + this.moveDistance;
            // 惯性运动
            if (Math.abs(this.moveDistance) > 20) {
                let keepOnPX = this.lastTwoPoint[1] - this.lastTwoPoint[0];
                time = 0.6;
                this.style.transition = `all ${time}s cubic-bezier(0.1, 0.85, 0.25, 1) 0s`;
                realTranslateY = realTranslateY + keepOnPX * 5;
            }
            if (Math.abs(realTranslateY) + this.screenHeight >= this.height) {
                realTranslateY = this.screenHeight - this.height;
            }
            if (realTranslateY >= 0) {
                realTranslateY = 0;
            }
            console.log(realTranslateY);
            this.style.transform = `translate(0, ${realTranslateY}px) translateZ(0)`;
            this.translateY = realTranslateY;
            setTimeout(() => {
                this.translateY = realTranslateY;
                this.isMoveing = false;
            }, time * 1000);
        }
    }
};
</script>

<style>
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