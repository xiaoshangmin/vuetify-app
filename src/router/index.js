import { createRouter, createWebHashHistory } from 'vue-router'
// import order from './modules/order'
const routes = [
  {
    path: '/pdf',
    name: 'pdf',
    component: () => import('@/views/pdf/pdf.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  },
  {
    path: '/pinyin',
    name: 'pinyin',
    component: () => import('@/views/pinyin/pinyin.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  },
  {
    path: '/office',
    name: 'office',
    component: () => import('@/views/office/office.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  },
  {
    path: '/pkg',
    name: 'pkg',
    component: () => import('@/views/pkg/pkg.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  }, {
    path: '/',
    name: 'analysis',
    component: () => import('@/views/analysis/analysis.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  }, {
    path: '/json',
    name: 'json',
    component: () => import('@/views/jsonview/jsonview.vue'),
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
