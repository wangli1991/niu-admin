/*
 * @Author: wangli
 * @Date: 2020-07-19 13:23:29
 * @LastEditors: wangli
 * @LastEditTime: 2020-07-25 10:32:51
 */

import Layout from "@/layout";

const baseCategoryRouter = {
  path: "/base-category",
  component: Layout,
  redirect: "noRedirect",
  name: "BaseCategory",
  meta: {
    title: "基础分类维护",
    icon: "component"
  },
  children: [
    {
      path: "birth-status",
      component: () => import("@/views/base-category/birth-status"),
      name: "BirthStatus",
      meta: { title: "健康状态", noCache: true }
    }
  ]
};

export default baseCategoryRouter;
