/**
 * Created by 123 on 2019/7/31.
 */

import Vue from '../../node_modules/vue/dist/vue.min.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import home from '../home.vue'
import menber from '../menber.vue'
import shopCar from '../shopCar.vue'
import search from '../search.vue'
import newslist from '../news/newslist.vue'
import newsinfo from '../news/newsinfo.vue'
import imgshare from '../photo/imgshare.vue'
import imginfo from '../photo/imginfo.vue'
import goodslist from '../goods/goodslist.vue'
import goodsinfo from '../goods/goodsinfo.vue'
import goodsintro from '../goods/goodsintro.vue'
import goodscomm from '../goods/goodscomm.vue'

var routerObj=new VueRouter({
    routes:[
        {path:'/',component:home},
        {path:'/home',component:home},
        {path:'/menber',component:menber},
        {path:'/shopCar',component:shopCar},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newsinfo/:id',component:newsinfo},
        {path:'/home/imgshare',component:imgshare},
        {path:'/home/imginfo/:id',component:imginfo},
        {path:'/home/goodslist',component:goodslist},
        {path:'/home/goodsinfo/:id',component:goodsinfo},
        {path:'/home/goodsintro/:id',component:goodsintro},
        {path:'/home/goodscomm/:id',component:goodscomm},
    ],
    linkActiveClass:'mui-active'
})

export default routerObj