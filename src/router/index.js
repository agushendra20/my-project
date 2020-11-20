import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import SuccessPage from '@/components/SuccessPage.vue'
import FoodMenu from '@/components/foodmenu/FoodMenu.vue'
import FoodOrderDetail from '@/components/foodorderdetail/FoodOrderDetail.vue'
import Keranjang from '@/components/Keranjang.vue'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/SuccessPage',
      name: 'SuccessPage',
      component: SuccessPage
    },
    {
      path: '/foodorderdetail',
      name: 'FoodOrderDetail',
      component: FoodOrderDetail
    },
    {
      path: '/foodmenu',
      name: 'FoodMenu',
      component: FoodMenu
    },
    {
      path: '/keranjang',
      name: 'Keranjang',
      component: Keranjang
    }
    
  ]
})
