/*
 * @Author: wangli
 * @Date: 2020-07-19 13:23:27
 * @LastEditors: wangli
 * @LastEditTime: 2020-07-19 18:50:04
 */ 
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user_admin/login',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return request({
    url: "/user_admin/getUserInfo",
    method: "get",
  });
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
