import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, // 補上這一行，指定這個路徑要顯示 Home 組件
    },{
      path: '/case-study/ai100',
      name: 'CaseStudyAi100',
      component: () => import('../views/CaseStudyAi100.vue')
    }

  ],
})

export default router
