import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'bgremoval',
    component: () => import('@/views/bgremoval/bgremoval.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
