/*
 * @Author: wangli
 * @Date: 2020-07-19 13:23:29
 * @LastEditors: 王利
 * @LastEditTime: 2020-09-10 13:46:40
 */

import Layout from '@/layout';

const baseCategoryRouter = {
  path: '/BASELIST',
  component: Layout,
  redirect: 'noRedirect',
  name: 'BaseList',
  meta: {
    title: '基础分类维护',
    icon: 'component',
  },
  children: [
    {
      path: '/baselist/birth-count',
      component: () => import('@/pages/BASELIST/birthCount'),
      meta: { title: '已繁殖胎次', keepAlive: true },
    },
    {
      path: '/baselist/birth-status',
      component: () => import('@/pages/BASELIST/birthStatus'),
      meta: { title: '健康状态', keepAlive: true },
    },
  ],
};

export default baseCategoryRouter;
