<template>
    <div class="main">
        <div class="mui-card card1" v-for="(item,i) in list" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">


                    <!-- 蓝色开关打开状态 -->
                    <mt-switch v-model="value"></mt-switch>
                    <img :src="item.thumb_path" alt="">
                    <div class="info">
                        <h1>{{item.title}}</h1>
                        <p>
                            <span class="price">{{item.sell_price}}</span>
                            <shopcarnum :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id" style="height: 25px"></shopcarnum>


                        </p>

                    </div>
                    <a href="#" @click.prevent="remove(item.id,i)">删除</a>

                </div>
            </div>
        </div>


        <div class="mui-card card2">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                 <div class="left">
                     <p>总计</p>
                     <p>已勾选商品<span>{{$store.getters.getGoodsCountAndMoney.count}}</span> 件，总价<span>{{$store.getters.getGoodsCountAndMoney.money}}</span></p>
                 </div>
<mt-button type="danger">去结算</mt-button>
                   </div>

            </div>
        </div>

    </div>
</template>

<script>

    import mui from './lib/mui/js/mui.min.js'
import shopcarnum from './subcomponents/shopcarnum.vue'
    mui.init();
    mui('.mui-switch')['switch']()
//    mui(".mui-switch").switch().toggle();
    export default{
        data:function () {
            return {
                list: [],
                length:0,
                money:0
                
            }
        },
        created(){
            this.getgoods()

        },
        methods:{

            getgoods: function () {
                var idArr=[]
                this.$store.state.car.forEach(function (item) {
                    idArr.push(item.id)
                })
                if(idArr<=0){
                    return
                }
                this.$http.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+idArr.join(',')).then(function (result) {
                    if (result.body.status == 0) {
                        this.list = result.body.message;
                    } else {
                        Toast('error');
                    }

                })








            },
            remove(id,index){
this.list.splice(index,1)
                this.$store.commit('remove',id)
            },

        },
        components:{
            shopcarnum
        }

    }
</script>

<style scoped>
.main{
    background-color: #eee;
  padding-top: 5px;

}
.card2 span{
    color: red;
}

    h1{
        font-size: 19px;
        text-align: center;
    }
    img{

        width: 60px;
        height: 60px;
        display: block;

    }
    .price{
        color: red;
        font-weight: 600;
    }
    .card1 .mui-card-content-inner{
        display: flex;
        align-items: center;
    }
   .card1 p{
        display: flex;


    }
    .card2 .mui-card-content-inner{
        display: flex;
        justify-content: space-between;
    }
</style>