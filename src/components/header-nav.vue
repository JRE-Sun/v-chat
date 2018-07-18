<template>
    <mt-header class="header-nav" fixed :title="headerTitle">
        <mt-button
            v-show="headerLeft"
            @click="goBack"
            icon="back"
            slot="left"
            class="back-btn">{{ headerLeftText }}
        </mt-button>
        <mt-button
            v-show="headerRight"
            icon="more"
            slot="right">
        </mt-button>
    </mt-header>
</template>
<script>
    import {Header, Button} from 'mint-ui';

    export default {
        name      : "header-nav-tpl",
        components: {
            [Header.name]: Header,
            [Button.name]: Button,
        },
        props     : {
            headerTitle   : {
                required: true
            },
            headerLeft    : {
                default: false
            },
            headerRight   : {
                default: false
            },
            headerLeftText: {
                default: "返回"
            },
            zIndex        : {
                default: 10
            }
        },
        methods   : {
            goBack() {
                this.$router.goBack();
            }
        }
    };
</script>

<style lang="scss">
    @import "../assets/rem";

    .header-nav {
        height: rem(52);
        max-height: rem(52);
        background: #2A2A2B;
        .back-btn {
            font-size: 18px;
        }
        .mint-button-icon {
            vertical-align: inherit;
        }
        .mintui {
            font-size: 17px;
        }
        h1 {
            text-align: center;
            color: #FFF;
            display: block;
            font-size: rem(19.5);
            line-height: rem(52);
        }
    }
</style>