import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {path: '/', component: () => import('@/views/Home')},
  {path:'/dev', component: () => import('@/views/Dev')},
  {path: '/dev/list', component: () => import('@/views/UserList')},
  {path: '/register', component: () => import('@/views/UserRegister')},
  {path: '/dev/deleteuser', component: () => import('@/views/UserDelete')},
  {path: '/dev/listproj', component: () => import('@/views/ProjectList')},
  {path: '/registerproj', component: () => import('@/views/ProjectRegister')},
  {path: '/login', component: () => import('@/views/Login')},
  {path: '/auth', component: () => import('@/views/Auth')}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
