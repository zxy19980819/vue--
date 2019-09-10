<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.src">
                <img :src="item.src" alt="">
            </mt-swipe-item>

        </mt-swipe>

    </div>
</template>

<script>

    export default{
        data:function () {
            return {
                lunbotuList:[],
                id:this.$route.params.id
            }
        },
        created(){
            this.getLunbotu()
        },
        methods:{
            getLunbotu(){
                this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(
                    function (result) {
                        if(result.body.status==0){
                            this.lunbotuList=result.body.message;
                        }else{
                            Toast('error');
                        }
                    }
                )
            }

        }

    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    img{
        height: 100%;
        width: 100%;
    }
</style>