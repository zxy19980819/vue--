<template>
    <div class="main">
        <!--轮播图-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
               <lunbotu></lunbotu>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">{{list.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p class="price">
                       <span>市场价：<del>{{list.market_price}}</del></span>
                   销售价：<span class="now">{{list.sell_price}}</span>
                   </p>
                    <!--<p class="num">购买数量：<num @func="getCount"></num></p>-->
                    <p class="num">购买数量：<num ></num></p>



                    <p>
                        <mt-button type="primary" size="small" @click="more">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="add">加入购物车</mt-button>
                    </p>
           			</div>
            </div>

        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                 <p>商品货号：{{list.goods_no}}</p>
                    <p>库存情况：{{list.stock_quantity}}</p>
                    <p>上架时间:{{list.add_time}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" @click="intro(list.id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" @click="comment(list.id)">商品评论</mt-button>
            </div>
        </div>



        <!--<transition-->
                <!--@before-enter="beforeEnter"-->
                <!--@enter="enter"-->
                <!--@after-enter="afterEnter"-->
        <!--&gt;<div class="ball" v-if="flag" ref="ball"></div></transition>-->

    </div>
</template>

<script>
    import lunbotu from '../subcomponents/lunbotu.vue'
    import num from '../subcomponents/num.vue'
    export default{
        data:function () {
            return {
                id: this.$route.params.id,
                list: [],
                flag:false,
                count:1
            }
        },
        created(){
            this.getgoods()
        },

        methods:{

            getgoods: function () {
                this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id).then(function (result) {
                    if (result.body.status == 0) {
                        this.list = result.body.message[0];
                    } else {
                        Toast('error');
                    }
                })

            },
            intro:function (id) {
                this.$router.push('/home/goodsintro/'+id)
            },
            comment:function (id) {
                this.$router.push('/home/goodscomm/'+id)
            },

            beforeEnter(el){
el.style.transform="translate(0,0)"
            },
            enter(el,done){
                const ballPosition=this.$refs.ball.getBoundingClientRect()
const badgePosition=document.getElementById("badge").getBoundingClientRect()
                const x=badgePosition.left-ballPosition.left
                const y=badgePosition.top-ballPosition.top

                el.offsetWidth
                el.style.transform="translate("+x+"px"+","+y+"px)"
                el.style.transition="all 0.3s linear"
                done()

            },
            afterEnter(el){

            },
            add:function () {
                this.flag=!this.flag
                var count=this.$store.state.count

                var goodsinfo={id:this.id,count:count,price:this.list.sell_price,selected:true}
                this.$store.commit('addtocar',goodsinfo)
            },

        },
        components:{
            lunbotu,
            num
        }


    }
</script>

<style  scoped>
.main{
    background-color: #eee;
  padding-top: 5px;
    padding-bottom: 50px;
}
.price{
    color: #6d6d72;
    font-weight: 700;
}
    .price span{
margin-right: 10px;
    }
    .now{
        color: red;
    }
    .num{
        color: #6d6d72;
        position: relative;
    }
    .mui-card-content-inner p{
        color: #6d6d72;
    }
    .ball{
        width: 15px;
        height: 15px;
        background-color: red;
        position: absolute;
        z-index: 999;
        border-radius: 50%;
        left:170px;
        top:430px
    }
</style>