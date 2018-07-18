<template>
    <div class="header-search">
        <input type="text" class="val-input" :placeholder="placeholder || ''">
        <button v-on:click="clickSearch" class="search-btn">搜索</button>
    </div>
</template>

<script>
    export default {
        name   : 'header-search-tpl',
        props  : ['placeholder'],
        methods: {
            clickSearch() {
                console.log(1);
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/rem";

    .header-search {
        width: 92%;
        margin: 0 auto;
        display: flex;
        border-radius: rem(5);
        overflow: hidden;
        align-items: center;
        background: #FFF url("http://v2.zcimg.com/static/v1/img/logo-search.png") no-repeat rem(4) center;
        background-size: rem(65) auto;
        position: relative;
    }

    .header-search:after {
        position: absolute;
        width: 1px;
        height: 45%;
        content: '';
        background: #52A9EB;
        top: 50%;
        transform: translateY(-50%);
        left: rem(68);
    }

    .val-input {
        padding: rem(14) 0 rem(14) rem(75);
        font-size: rem(15);
        flex: 1;
        position: relative;
        box-sizing: border-box;
    }

    .search-btn {
        background-color: transparent !important;
        color: #3CB5F6;
        margin: 0 rem(10);
        font-size: rem(16.5);
    }

    .search-btn:after, .search-btn:before {
        display: none;
    }
</style>
