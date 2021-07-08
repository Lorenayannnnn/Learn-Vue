import Vue from 'vue'
import Router from 'vue-router'

// PC
const pcIndex = () => import('@/pages/pcIndex');
const pcLogin = () => import('@/pages/pc/login');

// Mobile
const mobileIndex = () => import('@/pages/mobileIndex');
const mobileLogin = () => import('@/pages/mobile/login');
const mobileUserIndex = () => import('@/pages/mobile/index');
const mobileHome = () => import('@/pages/mobile/home');
const mobileCategory = () => import('@/pages/mobile/category');
const mobileCart = () => import('@/pages/mobile/cart');
const mobileProfile = () => import('@/pages/mobile/profile');

// Mobile: home
const mobileHomeFeatured = () => import('@/pages/mobile/home/featured');
const mobileHomeNew = () => import('@/pages/mobile/home/new');
const mobileHomePopular = () => import('@/pages/mobile/home/popular');


// 避免重复路由
const originalReplace = Router.prototype.push;
Router.prototype.push = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/mobile',
      component: mobileIndex,
      children: [{
        path: 'login',
        name: 'login',
        component: mobileLogin
      },{
        path: '',
        component: mobileUserIndex,
        children: [{
          path: 'home',
          name: 'Home',
          component: mobileHome,
          children: [{
            path: 'featured',
            component: mobileHomeFeatured
          },{
            path: 'new',
            component: mobileHomeNew
          },{
            path: 'popular',
            component: mobileHomePopular
          }]
        },{
          path: 'category',
          name: 'Category',
          component: mobileCategory
        },{
          path: 'cart',
          name: 'My Cart',
          component: mobileCart
        },{
          path: 'profile',
          name: 'Profile',
          component: mobileProfile
        }]
      }]
    }
  ]
})
