<template>
    <div id="app">
        <keep-alive>
            <router-anim :exclude="exclude">
                <router-view class="router-view" v-if="$route.meta.keepAlive"></router-view>
            </router-anim>
        </keep-alive>
        <router-anim :exclude="exclude">
            <router-view class="router-view" v-if="!$route.meta.keepAlive"></router-view>
        </router-anim>
    </div>
</template>

<script>
import routerAnim from "./components/router-anim";
export default {
    name: "App",
    data() {
        return {
            exclude: ["home", "me", "mail", "find"]
        };
    },
    components: {
        routerAnim
    }
};
</script>

<style lang="scss">
@import "./assets/icon.css";
@import "./assets/rem";
@import "./assets/style";
html,
body {
    height: 100%;
    background: #ebeff1;
    letter-spacing: 0.25px;
}
.main {
    box-sizing: border-box;
    // overflow-x: hidden;
    // height: 100%;
    margin: 0;
    padding: rem(52) 0 rem(58) 0;
}
[v-cloak] {
    display: none;
}

#app {
    width: 100%;
    height: 100%;
    max-width: 100%;
    position: relative;
}
.mint-indicator-wrapper{
    z-index: 20;
}
</style>

