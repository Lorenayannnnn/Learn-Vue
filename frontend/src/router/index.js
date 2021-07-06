import Vue from 'vue'
import Router from 'vue-router'

// PC端
import PcIndex from '@/pages/pcIndex'
import PcHome from '@/pages/pc/index'
import Home from '@/pages/pc/Home_computed'
import Practice1 from '@/pages/pc/counter'
import Practice2 from '@/pages/pc/V_Bind_Movie_Table'
import Practice3 from '@/pages/pc/v-on'
import Practice4 from '@/pages/pc/V-If'
import Practice5 from '@/pages/pc/V-model'
import Practice6 from '@/pages/pc/ComponentPractice'
import Practice7 from '@/pages/pc/Component_ChildrenRef_And_Parent'
import Practice8 from '@/pages/pc/V-slot'
import Practice9 from '@/pages/pc/Vue-Router-Practice'
const Practice10 = () => import('@/pages/pc/VuexPractice/VuexFundamentals')

// Vue-Router练习组件
import RouterPracticeHome from '@/pages/pc/Vue-Router-Practice/Home'
// 路由懒加载 写法1(AMD)：
const RouterPracticeAbout = resolve => require(['@/pages/pc/Vue-Router-Practice/About'], resolve);
// 路由懒加载 写法2：
const RouterPracticeQuestionPage = () => import('@/pages/pc/Vue-Router-Practice/QuestionPage');
const RouterPracticeNews = () => import('@/pages/pc/Vue-Router-Practice/News')

// 移动端
import MobileIndex from '@/pages/mobileIndex'
const MIndex = () => import('@/pages/mobile/index')
import MobileHome from '@/pages/mobile/mobileHome'
const MobileCommunity = () => import('@/pages/mobile/mobileCommunity')
const MobileProfile = () => import('@/pages/mobile/mobileProfile')
const MobileLogin = () => import('@/pages/mobile/mobileLogin')

Vue.use(Router)

// 避免重复路由
const originalReplace = Router.prototype.push;
Router.prototype.push = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const router = new Router({
  mode: 'history',
  linkActiveClass: 'myActive',
  routes: [
    {
      path: '/pc',
      name: 'pcIndex',
      component: PcIndex,
      children: [{
        path: 'home',
        name: 'pcHome',
        component: PcHome,
        children: [{
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            myTitle: '首页'
          }
        },{
          path: 'practice1',
          name: 'practice1',
          component: Practice1,
          meta: {
            myTitle: 'Practice1'
          }
        },{
          path: 'practice2',
          name: 'practice2',
          component: Practice2,
          meta: {
            myTitle: 'Practice2'
          }
        },{
          path: 'practice3',
          name: 'practice3',
          component: Practice3,
          meta: {
            myTitle: 'Practice3'
          }
        },{
          path: 'practice4',
          name: 'practice4',
          component: Practice4,
          meta: {
            myTitle: 'Practice4'
          }
        },{
          path: 'practice5',
          name: 'practice5',
          component: Practice5,
          meta: {
            myTitle: 'Practice5'
          }
        },{
          path: 'practice6',
          name: 'practice6',
          component: Practice6,
          meta: {
            myTitle: 'Practice6'
          }
        },{
          path: 'practice7',
          name: 'practice7',
          component: Practice7,
          meta: {
            myTitle: 'Practice7'
          }
        },{
          path: 'practice8',
          name: 'practice8',
          component: Practice8,
          meta: {
            myTitle: 'Practice8'
          }
        },{
          path: 'practice9',
          name: 'practice9',
          component: Practice9,
          meta: {
            myTitle: 'Practice9'
          },
          children: [{
            path: 'home',
            component: RouterPracticeHome
          },{
            path: 'about',
            component: RouterPracticeAbout
          },{
            path: 'question/:qid',
            component: RouterPracticeQuestionPage
          }]
        },{
          path: 'practice10',
          name: 'practice10',
          component: Practice10,
          meta: {
            myTitle: 'Practice10'
          }
        }]
      }]
    },
    {
      path: '/mobile',
      name: 'mobileIndex',
      component: MobileIndex,
      children: [{
        path: '',
        component: MIndex,
        children: [{
          path: 'home',
          name: 'mobileHome',
          component: MobileHome
        },{
          path: 'community',
          name: 'mobileCommunity',
          component: MobileCommunity
        },{
          path: 'profile',
          name: 'mobileProfile',
          component: MobileProfile
        }]
      },{
        path: 'login',
        component: MobileLogin
      }]
    }
  ]
})

// 全局守卫：跳转后修改title
// router.beforeEach((to, from, next) => {
//   document.title = to.matched[2].meta.myTitle;
//   next();
// })

export default router;
