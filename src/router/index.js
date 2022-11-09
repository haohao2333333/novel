import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { 
      path: '/', 
      name: 'layout', 
       // import('路径') // 懒加载
      component:()=> require('../components/layout/layout.vue'),
      redirect: '/index',
        children:[
                {
                  path:"/index",
                  name: 'index',
                  component:()=> require('../views/pages/index.vue')
                },
                {
                  path:"/novel",
                  name: 'novel',
                  component:()=> require('../views/pages/novel/noveslList.vue'),
                },
              ]
    },
    {
      path:"/novel/:id",
      name: '小说章节',
      component:()=> require('../views/pages/novel/novel.vue'),
    },
    {
      path:"/novel/:id/:chapter",
      name: '小说内容',
      component:()=> require('../views/pages/novel/novelContent.vue'),
    },
    {
      path:"/movies-content/:id",
      name: '视频内容',
      component:()=> require('../views/pages/movie/movieContent.vue')
    },
    {
      path:"/audios-content/:id",
      name: '音频内容',
      component:()=> require('../views/pages/audio/audioContent.vue')
    },
    {
      path: '/login',
      name: '登录界面', 
      component:()=> require('../components/login/Login.vue'),
    },
    {
      path: "/register",
      name: "注册界面",
      component: () => import('../components/login/Register.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component:()=> require('../views/404.vue'),
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 解决 vue 中路由跳转时，总是从新页面中间开始显示
router.afterEach((to,from,next) => {
  window.scrollTo(0,0)
})

/**
 * 导出 基础路由  
 **/

export default router