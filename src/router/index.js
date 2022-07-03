import { createRouter, createWebHashHistory } from 'vue-router' 
// import order from './modules/order'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
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
