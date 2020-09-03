import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {path: '/', component: () => import('@/views/Home')},
  {path: '/list', component: () => import('@/views/UserList')},
  {path: '/register', component: () => import('@/views/UserRegister')},
  {path: '/deleteuser', component: () => import('@/views/UserDelete')},
  {path: '/listproj', component: () => import('@/views/ProjectList')},
  {path: '/registerproj', component: () => import('@/views/ProjectRegister')},
  {path: '/login', component: () => import('@/views/Login')}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
