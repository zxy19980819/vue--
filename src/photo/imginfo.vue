<template>
    <div class="main">
       <h3>{{list.title}}</h3>
        <hr>
        <vue-preview :slides="img" ></vue-preview>
        <!---->

        <div class="content" v-html="list.content"></div>
        <pinglun></pinglun>

    </div>
</template>

<script>
import pinglun from '../subcomponents/pinglun.vue'
    export default{
        data:function () {
            return {
                id: this.$route.params.id,
list:[],
                img:[]
            }
        },
created(){
       this.getinfo()
    this.getimg()
},
        methods:{
getinfo:function () {
    this.$http.get('http://www.liulongbin.top:3005/api/getimageinfo/'+this.id).then(function (result) {
        if(result.body.status==0){
            this.list=result.body.message[0];
        }else{
            Toast('error');
        }
    })
},
getimg:function () {
    this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(function (result) {
        if(result.body.status==0){

          result.body.message.forEach(function (item) {
                item.w=600;
                item.h=400;
            });
            this.img=result.body.message

        }else{
            Toast('error');
        }
    })
}
//
        },
        components:{
    pinglun
        }

    }
</script>

<style scoped>
.main{
    padding: 3px;

}
    h3{
        color:dodgerblue;
        font-size: 15px;
        text-align: center;
        padding: 20px;
    }
    .content{
        line-height: 25px;
    }
</style>