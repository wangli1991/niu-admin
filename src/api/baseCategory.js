/*
 * @Author: wangli
 * @Date: 2020-07-19 13:23:27
 * @LastEditors: 王利
 * @LastEditTime: 2020-09-10 16:42:27
 */

import request from '@/utils/request';

export function getList() {
  return request({
    url: '/baseList/getBirthStatusList',
    method: 'get',
  });
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id },
  });
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv },
  });
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data,
  });
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data,
  });
}
