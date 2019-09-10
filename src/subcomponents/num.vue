<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="change" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>

    import mui from '../lib/mui/js/mui.min.js'

    mui.init();

    export default{
        data:function () {
            return {

            }
        },

        methods:{
change:function () {
//    this.$emit('func',parseInt(this.$refs.numbox.value))
    this.$store.commit('addnum',parseInt(this.$refs.numbox.value))


}

        }

    }
</script>

<style>

</style>