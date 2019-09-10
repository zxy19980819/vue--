<template>
    <div>
       <pinglun :id="$route.params.id"></pinglun>

    </div>
</template>

<script>
import pinglun from '../subcomponents/pinglun.vue'
    export default{
        data:function () {
            return {

            }
        },

        methods:{


        },
        components:{
            pinglun
        }

    }
</script>

<style scoped>

</style>