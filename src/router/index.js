import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../pages/layout/Layout'
import Find from '../pages/find/Find'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/find'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/find',
        name: 'find',
        component: Find
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/fm',
        name: 'fm',
        component: () => import('../pages/fm/Fm')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/live',
        name: 'live',
        component: () => import('../pages/like/Like')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/video',
        name: 'video',
        component: () => import('../pages/video/Video')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/friend',
        name: 'friend',
        component: () => import('../pages/friend/Friend')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/local',
        name: 'local',
        component: () => import('../pages/local/Local')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/download',
        name: 'download',
        component: () => import('../pages/download/Download')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/like',
        name: 'like',
        component: () => import('../pages/like/Like')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
