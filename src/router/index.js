import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'bgremoval',
    component: () => import('@/views/bgremoval/bgremoval.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '移除背景'
    }
  },{
    path: '/card',
    name: 'card',
    component: () => import('@/views/card/card.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '卡片'
    }
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
