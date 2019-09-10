<template>
    <div class="newsinfo">
        <div class="title">{{list.title}}</div>
        <div class="content" v-html="list.content"></div>
        <pinglun :id="this.id"></pinglun>

    </div>
</template>

<script>
import pinglun from '../subcomponents/pinglun.vue'
    export default{
        data: function () {
            return {
                id: this.$route.params.id,
                list: []
            }
        },
        created(){
            this.getlist()
        },

        methods: {
            getlist: function () {
                this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(function (result) {
                    if (result.body.status == 0) {
                        this.list = result.body.message[0];
                    } else {
                        Toast('error');
                    }
                })

            }

        },
        components:{
            pinglun
        }
    }
</script>

<style >
.newsinfo{
padding: 0 5px;
    padding-bottom: 50px;
}
    .title{
font-size: 16px;
        color: darkred;
        text-align: center;
        margin: 15px 0;
    }
    .content{
        color: black;
    }
    .content p{
        color: black;
    }
    .content img{
        width: 50px;
        height: 50px;
    }
</style>