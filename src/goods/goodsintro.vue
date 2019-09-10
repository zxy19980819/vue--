<template>
    <div>
        <p class="title">{{list.title}}</p>
        <hr>
        <div class="content" v-html="list.content"></div>

    </div>
</template>

<script>

    export default{
        data:function () {
            return {
list:[],
                id:this.$route.params.id
            }
        },
        created(){
            this.getintro()
        },
        methods:{
            getintro:function () {
                this.$http.get('http://www.liulongbin.top:3005/api/goods/getdesc/'+this.id).then(function (result) {
                    if (result.body.status == 0) {
                        this.list = result.body.message[0];
                    } else {
                        Toast('error');
                    }
                })
    }


        }

    }
</script>

<style >
.title{
    text-align: center;
    color: #6d6d72;
    font-weight: 700;
    font-size: 19px;
   padding-top: 15px;
}
 div  p {
        color: black;
       line-height: 30px;
       font-size: 16px;
    }
    div{
        margin: 5px;
    }
    .content img{
        width: 100%;
        height: 100%;

    }
</style>