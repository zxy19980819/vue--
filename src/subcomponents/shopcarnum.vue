<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countchange" ref="numbox"/>
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

        methods: {
            countchange:function () {
                this.$store.commit('update',{
                    id:this.props.goosid,
                    count:this.$refs.numbox.value
                })
            }
        },
        props:['initcount','goodsid']
    }
</script>

<style>

</style>