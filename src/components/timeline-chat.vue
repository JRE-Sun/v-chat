<template>
    <div class="chat-msg">
        <div class="display-flex" :style="{'justify-content': msg.self==1 ? 'flex-end' : ''}">
            <img v-if="msg.self==0" class="aevter-img" :src="msg.aevter" alt="">
            <div class="flex-1 message-wrap" :style="{'text-align':msg.self==1 ? 'right':''}">
                <p class="message" :class='msg.self==1?"self":"not-self"'>{{ msg.message }}</p>
            </div>
            <img v-if="msg.self==1" class="aevter-img" :src="msg.aevter" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ["msg"],
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/rem";  
.chat-msg {
    font-size: rem(15);
    margin: rem(20) auto;
    .aevter-img {
        width: rem(46);
        height: rem(46);
    }
    .message-wrap {
        max-width: 90%;
    }
    .message {
        display: inline-block;
        padding: rem(11);
        margin: 0 rem(15);
        border-radius: rem(5);
        position: relative;
    }
    .message.not-self {
        background: #fff;
    }
    .message.self {
        background: #94e549;
    }
    .message.not-self:after {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        top: rem(10);
        border: rem(5) solid #fff;
        left: rem(-5);
        transform: rotate(45deg);
    }
    .message.self:after {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        top: rem(10);
        border: rem(5) solid #94e549;
        right: rem(-5);
        transform: rotate(45deg);
    }
}
</style>

