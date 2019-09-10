<template>

        <div class="app-container">
            <mt-header fixed title="Vue项目">
                <span slot="left" @click="back" v-show="flag">
                    <mt-button icon="back" >返回</mt-button>
                </span>
            </mt-header>

            <nav class="mui-bar mui-bar-tab my-footer ">
                <router-link class="mui-tab-item1 " to="/home">
                    <span class="mui-icon mui-icon-home "></span>
                    <span class="mui-tab-label">首页</span>

                </router-link>
                <router-link class="mui-tab-item1" to="/menber">
                    <span class="mui-icon mui-icon-person"></span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="mui-tab-item1" to="/shopCar">
                <span class=" fa mui-icon mui-icon-bars">
                    <span class="mui-badge" id="badge">{{$store.getters.getcount}}</span>
                </span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item1" to="/search">
                    <span class="mui-icon mui-icon-search"></span>

                    <span class="mui-tab-label">搜索</span>
                </router-link>
            </nav>


    </div>
</template>

<script>

    export default{
        data:function () {
            return {
flag:false
            }
        },
create(){
       this.flag=this.$route.path==='/home' ?false:true
},
        methods:{
back(){
    this.$router.go(-1)
},
            watch:{
    '$route.path':function (newVal) {
        if(newVal==="/"){
            this.flag=false
        }else{
            this.flag=true
        }

    }
            }

        }

    }
</script>

<style>

    .app-container {
        height: 100%;
        margin-top: 40px;
    }
    /*改类名，解决mui冲突*/
    .mui-bar-tab .mui-tab-item1.mui-active{
        color:#007aff;
    }
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }

</style>