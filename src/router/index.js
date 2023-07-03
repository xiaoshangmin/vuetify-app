import { createRouter, createWebHashHistory } from 'vue-router'
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
    path: '/urlToPdf',
    name: 'urlToPdf',
    component: () => import('@/views/urlToPdf/urlToPdf.vue'),
    meta: {
      tabCloseable: true,
      tabLabel: '首页'
    }
  },
  {
    path: '/fileToPdf',
    name: 'fileToPdf',
    component: () => import('@/views/fileToPdf/fileToPdf.vue'),
    meta: {
      tabCloseable: true,
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
  }, {
    path: '/timestamp',
    name: 'timestamp',
    component: () => import('@/views/timestamp/timestamp.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  }, {
    path: '/codemirror',
    name: 'codemirror',
    component: () => import('@/views/codemirror/codemirror.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  }, {
    path: '/qrcode',
    name: 'qrcode',
    component: () => import('@/views/qrcode/qrcode.vue'),
    meta: {
      tabCloseable: false,
      tabLabel: '首页'
    }
  }, {
    path: '/md5',
    name: 'md5',
    component: () => import('@/views/md5/md5.vue'),
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
