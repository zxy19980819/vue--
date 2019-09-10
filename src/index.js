/**
 * Created by 123 on 2019/7/30.
 */
import $ from 'jquery'
import Vue from '../node_modules/vue/dist/vue.min.js'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
import routerObj from './js/router.js'
import app from './app.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.css'
import './lib/mui/js/mui.min.js'
import './css/index.css'
import './css/base.css'
//////////////////////////////////////////////////////////////////
import { Header,Button } from 'mint-ui';
Vue.component(Header.name, Header);
import { Swipe, SwipeItem} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
import { Switch } from 'mint-ui';

Vue.component(Switch.name, Switch);

import { Toast } from 'mint-ui';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import Vuex from 'vuex'
Vue.use(Vuex)


var car=JSON.parse(localStorage.getItem('car')||'[]')



var store=new Vuex.Store({
    state:{
count:0,
        car:car
    },
    mutations:{
  addnum:function (state,count) {
      state.count=count
  },
        addtocar:function (state,info) {
      var flag=false
state.car.some(function (item) {
    if(item.id==info.id){
        item.count+=info.count
        flag=true
        return true
    }
})
            if(!flag){
          state.car.push(info)
            }
            localStorage.setItem('car',JSON.stringify(state.car))

        },
        update(state,info){
      state.car.some(function (item) {
          if(item.id==info.id){
              item.count=info.count
              return true
          }
      })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        remove(state,id){
state.car.some(function (item,i) {
    if(item.id==id){
      state.car.splice(i,1)
        return true
    }
})
            localStorage.setItem('car',JSON.stringify(state.car))
        },



    },
    getters:{
   getcount:function (state) {
   var c=0
    state.car.forEach(function (item) {
        c+=item.count

    })
       return c
},
getGoodsCount:function (state) {
    var o={}
    state.car.forEach(function (item) {
        o[item.id]=item.count
    })
    return o
},
        getGoodsCountAndMoney(state){
            var o={
                count:0,
                money:0
            }
            state.car.forEach(function (item) {
                o.count+=item.count
                o.money+=item.price+item.count
            })
            return o
        }
    }
})

var vm=new Vue({
    el:'#app',
    data:{

    },
  // render:c=>c(app),
    components:{
        app
    },
    router:routerObj,
    store:store
    // render:function (createElements) {
    //     return createElements(login)
    // }


})

$(function () {

})