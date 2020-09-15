import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {path:'/dev', 
    component: () => import('@/views/Dev')},
  {path: '/register', 
    component: () => import('@/views/UserRegister')},
  {path: '/dev/deleteuser', 
    component: () => import('@/views/UserDelete')},
  {path: '/dev/listproj', 
    component: () => import('@/views/ProjectList')},
  {path: '/registerproj', 
    component: () => import('@/views/ProjectRegister')},
  {path: '/login', 
    component: () => import('@/views/Login')},
  {path: '/',
    component: () => import('@/views/Home')},
  {path:'/usuario',
    component: () => import('@/views/Usuario'),
    //meta:{
      //requiresAuth:true
    //}
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
