import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path:'/dev', 
    component: () => import('@/views/Dev')},
  {path: '/dev/list', 
    component: () => import('@/views/UserList')},
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
  {path: '/home',
    component: () => import('@/views/Home')},
  {path:'/usuario',
    component: () => import('@/views/Usuario')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
