<template>
    <div>
        <hr>
        <div >发表评论</div>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入" v-model="content"></textarea>
   <mt-button type="primary" size="large" @click="postcomm">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in list" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：&nbsp;&nbsp{{item.user_name}};发表时间{{item.add_time}}
                </div>
                <div class="cmt-body" >{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="more">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    export default{

        data: function () {
            return {
                pageindex:1,
                list: [],
                content:''
            }
        },
        created(){
            this.getlist()
        },
props:['id'],
        methods: {
            getlist: function () {
                this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(function (result) {
                    if (result.body.status == 0) {
                        var list=this.list
                  this.list=  list.concat( result.body.message);
                    } else {
                        Toast('error');
                    }
                })

            },
            more:function () {
                this.pageindex++;
                this.getlist()
            },
            postcomm:function () {
                if(this.content.length==0){
                    Toast('评论内容不能为0');
                }
                this.$http.post('http://www.liulongbin.top:3005/api/postcomment/'+this.$route.params.id,{content:this.content},{emulateJSON:true}).then(function (result) {
                    if (result.body.status == 0) {
                       var cmt={user_name:'aaa',add_time:Date.now(),content:this.content}
                       this.list.unshift(cmt)
                        this.content=''
                    } else {
                        Toast('error');
                    }
                })
            }

        },

    }
</script>

<style scoped>
.cmt-list{
margin: 10px 0;
}
    .cmt-item{

    }
    .cmt-title{
background-color: #ccc;
        font-size: 13px;
        line-height: 30px;
    }
    .cmt-body{

    }
</style>