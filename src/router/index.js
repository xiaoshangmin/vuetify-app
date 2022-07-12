import { createRouter, createWebHashHistory } from 'vue-router' 
// import order from './modules/order'
const routes = [
  {
    path: '/',
    name: 'pdf',
    component: () => import('@/views/pdf/pdf.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  },
  {
    path: '/',
    name: 'pinyin',
    component: () => import('@/views/pinyin/pinyin.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  },
  {
    path: '/',
    name: 'office',
    component: () => import('@/views/office/office.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  },
  {
    path: '/',
    name: 'pkg',
    component: () => import('@/views/pkg/pkg.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  },
//   ...order
] 
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
