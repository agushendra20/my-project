import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SuccessPage from '@/components/SuccessPage'
import FoodMenu from '@/components/FoodMenu'
import FoodOrderDetail from '@/components/FoodOrderDetail'
import Keranjang from '@/components/Keranjang'

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
