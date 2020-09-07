import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'

Vue.use(VueRouter)

// path的前后注意要有空格，严格注意空格问题
const routes = [
  // path表示监听的地址
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  // children:子路由,component：组件
  // redirect重定向，访问home时，就访问子路由welcome
  {
    path: '/home',
    component: Home,
    redirect: 'welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  // next('/login') 强制跳转

  // 访问登陆页面直接放行
  if (to.path === '/login') return next()
  // 从sessionStorage中获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token，强制跳转到登陆页面
  if (!tokenStr) return next('/login')
  next()
})

export default router
