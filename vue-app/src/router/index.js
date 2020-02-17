import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    meta:{
      isLogin:true
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail.vue')
  },
  {                         
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/list.vue')
  },
  {
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((from,to,next)=>{
  if(to.meta.isLogin)
  {
    if(localStorage.getItem('token')!==null)
    {
      //如果将要去的路由的meta的login是true的话  执行下一步
      next()
      return
    }
    
    next('/login')
    return
  }
  //不需要拦截的直接执行下一步
  next()
 
})

export default router
