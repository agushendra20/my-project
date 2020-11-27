import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import SuccessPage from '@/components/SuccessPage.vue'
import FoodMenu from '@/components/foodmenu/FoodMenu.vue'
import FoodOrderDetail from '@/components/foodorderdetail/FoodOrderDetail.vue'
import KeranjangDetail from '@/components/keranjangdetail/KeranjangDetail.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/successPage',
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
      path: '/keranjangDetail',
      name: 'KeranjangDetail',
      component: KeranjangDetail
    }
    
  ]
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')
    
  if (authRequired && !loggedIn) {
    return next('/login')
  }
  if (loggedIn && to.path === '/login') {
    return next('/')
  }
  next()
})
