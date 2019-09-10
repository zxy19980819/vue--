<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id" class="">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class="mui-ellipsis">
                        <span>发表时间：{{item.add_time|addTime}}</span>
                        <span>点击了{{item.click}}次</span>
                    </p>
                    </div>
                </router-link>
            </li>

        </ul>

    </div>
</template>

<script>

    export default{
        data:function () {
            return {
list:[]
            }
        },
created(){
        this.getlist()
},
        methods:{
getlist:function () {
    this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(function (result) {
        if(result.body.status==0){
            this.list=result.body.message;
        }else{
            Toast('error');
        }
    })
}

        },
        filters:{
    addTime:function (time) {
        var dt=new Date(time);
        var y=dt.getFullYear();
        var m=(dt.getMonth()+1).toString().padStart(2,'0');
        var d=(dt.getDate()).toString().padStart(2,'0');
        return y+'-'+m+'-'+d;
    }
        }

    }
</script>

<style scoped>
.mui-table-view li h1{
    font-size: 14px;
}
    .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>