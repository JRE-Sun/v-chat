<template>
    <div class="full-loading" v-show="fullLoading">
        <loading></loading>
    </div>
</template>

<script>
export default{
    name:'FullLoading',
    props:{
        fullLoading:{
            default:true
        }
    }
}
</script>

<style lang="scss" scoped>
.full-loading {
    position: absolute;
    top: 0;
    left: 0wid;
    left: 0;
    width: 100%;
    z-index: 99;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
}
</style>

