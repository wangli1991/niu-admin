/*
 * @Author: wangli
 * @Date: 2020-07-19 13:23:29
 * @LastEditors: 王利
 * @LastEditTime: 2020-09-11 15:50:57
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout';
import baseListRouter from './modules/baseList';

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/redirect'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/pages/login'),
    hidden: true,
  },
  {
    path: '/auth-redirect',
    component: () => import('@/pages/login/auth-redirect'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/pages/error-page/404'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import('@/pages/error-page/401'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true },
      },
    ],
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/pages/guide'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true },
      },
    ],
  },
];
export const asyncRoutes = [baseListRouter];
const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
