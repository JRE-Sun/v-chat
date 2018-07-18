<template>
    <div class="message">
        <div @touchstart="_touchStart" @touchmove="_touchMove" @touchend="_touchEnd" :style="eleStyle" class="message-main display-flex">
            <img class="aevter-img position-vertical" src="https://dn-coding-net-production-static.qbox.me/3f1f6a5c-8a73-41f1-b904-75e958d1825b.jpg?imageMogr2/auto-orient/format/jpeg/crop/!470x470a0a0/thumbnail/80" alt="">
            <div class="content flex-1">
                <p class="title">{{ msg.username }}</p>
                <p class="text text-single-hidden">{{ msg.message }}</p>
                <time>04-24 15:20</time>
            </div>
            <div class="mark display-flex">
                <div class="read">标为已读</div>
                <div class="delete">删除</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["msg"],
    data() {
        return {
            touchStartY: 0, // 触摸开始位置
            touchStartX: 0, // 触摸开始位置
            startX: 0, // 计算后的开始位置
            touchMoveX: 0, // 触摸滑动时的位置
            touchMoveY: 0, // 触摸滑动时的位置
            disX: 0, // 移动距离
            deleteEleWidth: "", // 最多移动width
            readEleWidth: "",
            maxMoveDis: null,
            direction: "",
            eleStyle: {
                transform: 0,
                transition: ".3s",
                translateX: 0
            }
        };
    },
    methods: {
        /**
         * 阻止默认事件
         * @param e
         */
        wheel(e) {
            return;
            e = e || window.event;
            console.log(e.cancelable);
            // 判断默认行为是否可以被禁用
            if (e.cancelable) {
                // 判断默认行为是否已经被禁用
                if (!e.defaultPrevented) {
                    e.preventDefault();
                }
            }
            if (e.preventDefault) e.preventDefault();
            e.returnValue = false;
        },
        /**
         * 禁止移动
         */
        disableTouchMove() {
            document.addEventListener("touchmove", this.wheel, {
                passive: false
            });
            window.addEventListener("touchmove", this.wheel, {
                passive: false
            });
        },
        /**
         * 恢复移动
         */
        enableTouchMove() {
            document.removeEventListener("touchmove", this.wheel, {
                passive: false
            });
            window.removeEventListener("touchmove", this.wheel, {
                passive: false
            });
        },
        _touchStart(ev) {
            ev = ev || event;
            if (this.maxMoveDis == null) {
                this.maxMoveDis = document.querySelector(
                    ".message .mark"
                ).offsetWidth;
            }
            this.disableTouchMove();
            this.eleStyle.transition = `0s`;
            if (ev.touches.length != 1) return;
            this.startX = this.eleStyle.translateX * -1 + ev.touches[0].clientX;
            this.touchStartY = ev.touches[0].clientY;
            this.touchStartX = ev.touches[0].clientX;
        },
        _touchMove(ev) {
            ev = ev || event;
            if (ev.touches.length != 1) return;
            // 滑动过程中的实时位置
            this.touchMoveX = ev.touches[0].clientX;
            this.touchMoveY = ev.touches[0].clientY;
            // 滑动过程中实时计算滑动距离
            this.disX = this.startX - this.touchMoveX;

            // 如果是向右滑动或者只是点击，不改变滑动位置
            if (this.disX < 0) {
                this.eleStyle.translateX = 0;
                this.eleStyle.transform = `translateX(0)`;
                return;
            }
            this.direction = "left";
            // 当向右滑动
            if (this.touchStartX - this.touchMoveX < 10) {
                this.direction = "right";
            }
            // 当向左滑动 超出范围
            if (this.disX >= this.maxMoveDis) {
                this.eleStyle.translateX = this.maxMoveDis * -1;
                this.eleStyle.transform = `translateX(${
                    this.eleStyle.translateX
                }px)`;
                return;
            }
            this.eleStyle.translateX = this.disX * -1;
            this.eleStyle.transform = `translateX(${
                this.eleStyle.translateX
            }px)`;
        },
        _touchEnd() {
            if (event.changedTouches.length != 1) return;
            this.moveTargetEle();
        },
        moveTargetEle() {
            this.enableTouchMove();
            var moveDis = 0;
            if (this.direction == "left" && this.disX > 10) {
                moveDis = this.maxMoveDis;
            }
            this.eleStyle.transition = `.3s`;
            this.eleStyle.translateX = moveDis * -1;
            this.eleStyle.transform = `translateX(${
                this.eleStyle.translateX
            }px)`;
        },
        deleteItem: function(msg, index) {
            var self = this;
            window.API.post(
                "msg_ctr",
                {
                    act: "delete",
                    msg_id: msg["newmsg_id"],
                    dialog_id: msg.dialog_id
                },
                function(res) {
                    if (res.error > 0) {
                        toast(res.data);
                        return;
                    }
                    self.messageList.splice(index, 1);
                    $(".msg-border")
                        .find(".left-delete")
                        .css({
                            transition: ".3s",
                            transform: "translateX(0)"
                        });
                }
            );
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/rem";

.message {
    font-size: rem(15);
    background-color: #fff;
    position: relative;
    .message-main {
        position: relative;
    }
    .aevter-img {
        position: absolute;
        width: rem(62);
        height: rem(62);
        border-radius: rem(5);
        left: 15px;
    }
    .content {
        overflow: hidden;
        box-sizing: border-box;
        padding: rem(14) rem(15) rem(14) rem(88);
        &:after {
            content: "";
            position: absolute;
            height: 1px;
            width: 100%;
            top: 0;
            left: rem(12);
            background-color: #eee;
        }
    }
    .text,
    time {
        color: #999;
    }
    .title {
        font-size: rem(18);
    }
    time {
        position: absolute;
        right: rem(15);
        top: rem(15);
    }
    .mark {
        color: #fff;
        position: absolute;
        right: 0;
        height: 100%;
        transform: translateX(100%);
        background-color: #fff;
    }
    .read,
    .delete {
        display: flex;
        align-items: center;
        padding: 0 rem(15);
    }
    .read {
        background-color: #aaa;
    }
    .delete {
        background-color: red;
    }
}
</style>

