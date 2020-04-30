import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: () => import('../views/Introduction/Introduction.vue')
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('../views/View/View.vue')
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/Guide/Guide.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News/News.vue')
  },
  {
    path: '/newsDetail/:index',
    name: 'NewsDetail',
    component: () => import('../views/NewsDetail/NewsDetail.vue')
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('../views/Company/Company.vue')
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('../views/Plan/Plan.vue')
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import('../views/Question/Question.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },//切换路由时，始终回到顶部
  routes
})

export default router
