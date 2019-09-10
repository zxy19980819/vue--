<template>
<div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
            <img :src="item.img" alt="">
        </mt-swipe-item>

    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><router-link to="/home/newslist">
            <img src="./images/home-1.png" alt="">
            <div class="mui-media-body"></div>新闻资讯
    </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><router-link to="/home/imgshare">
            <img src="./images/home-2.png" alt="">
            <div class="mui-media-body"></div>图片共享
    </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><router-link to="/home/goodslist">
            <img src="./images/home-3.png" alt="">
            <div class="mui-media-body"></div>商品购买
    </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
            <img src="./images/home-2.png" alt="">
            <div class="mui-media-body"></div>留言反馈
    </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
            <img src="./images/home-4.png" alt="">
            <div class="mui-media-body"></div>视频专区
    </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
            <img src="./images/home-5.png" alt="">
            <div class="mui-media-body"></div>联系我们
    </a></li>
    </ul>
</div>

</template>

<script>
    import { Toast } from 'mint-ui';
    export default{
        data:function () {
            return {
       lunbotuList:[]
            }
        },
created(){
        this.getLunbotu()
},
        methods:{
getLunbotu(){
    this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(
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

<style>
    .mint-swipe{
        height: 200px;
    }
    img{
        height: 100%;
        width: 100%;
    }
    .mui-table-view-cell img{
        width: 50px;
        height: 50px;
    }
    ul.mui-grid-view.mui-grid-9 .mui-media{
    background-color: white;
    }
</style>