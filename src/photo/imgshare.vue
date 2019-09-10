<template>
    <div>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item "
                       data-wid="tab-top-subpage-1.html" v-for="item in list" :key="item.id" @click="getimg(item.id)">
                      {{item.title}}
                    </a>

                </div>
            </div>

        </div>

        <ul>
            <router-link tag='li' v-for="item in img" :key="item.id" :to="'/home/imginfo/'+item.id">
                <img v-lazy="item.img_url">
            </router-link>
        </ul>

    </div>
</template>

<script>
import mui from '../lib/mui/js/mui.min.js'
mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005
});

    export default{
        data:function () {
            return {
list:[],
                img:[]
            }
        },
        created(){
            this.gettitle()
               this.getimg(0)
        },

        methods:{
gettitle:function () {
    this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(function (result) {
        if(result.body.status==0){
            this.list=result.body.message;
        }else{
            Toast('error');
        }
    })
},
            getimg:function (id) {
                this.$http.get('http://www.liulongbin.top:3005/api/getimages/'+id).then(function (result) {
                    if(result.body.status==0){
                        this.img=result.body.message;
                    }else{
                        Toast('error');
                    }
                })
            }

        }

    }
</script>

<style scoped>
ul{
    padding: 5px;
}
    li{
        margin-top: 10px;
    }
img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
}
</style>