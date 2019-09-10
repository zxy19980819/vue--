<template>
    <div class="main">
       <router-link class="item" v-for="item in list" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
           <img :src="item.img_url" alt="" >
           <h1 class="good-title">{{item.title}}</h1>
           <div class="info">
               <p class="price">
                   <span class="now">{{item.market_price}}</span>
                   <span class="old">{{item.sell_price}}</span>
               </p>
               <p class="sell">
                   <span >热卖中</span>
                   <span>剩余：{{item.stock_quantity}}</span>
               </p>
           </div>
       </router-link>
        <mt-button type="danger" size="large" @click="more">加载更多</mt-button>
    </div>
</template>

<script>

    export default{
        data:function () {
            return {
list:[],
                indexpage:1
            }
        },
        created(){
            this.getgoods()

        },
        methods:{
getgoods:function () {
    this.$http.get('http://www.liulongbin.top:3005/api/getgoods?indexpage='+this.indexpage).then(function (result) {
        if(result.body.status==0){
            this.list=this.list.concat(result.body.message);
        }else{
            Toast('error');
        }
    })
},
            more:function () {
                this.indexpage++;
                this.getgoods();
            }

        }

    }
</script>

<style scoped>
.item span{
    color: #6d6d72;
}
    .main{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        padding-bottom: 50px;

    }
    .item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;

    }
    .info{
        background-color: #eee;
    }
    .info p{
        margin: 0;
        padding: 5px;
    }
    .price{

font-size: 16px;
        font-weight: bold;
    }
    .price .now{
        color: red;
    }
    .price .old{
        text-decoration: line-through;
        margin-left: 10px;
    }
    .sell{
display: flex;
        justify-content: space-between;
    }
    img{
        height: 250px;
        display: block;
    }
    .good-title{
        font-size: 18px;
    }
</style>