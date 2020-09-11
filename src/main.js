/*
 * @Author: wangli
 * @Date: 2020-07-19 13:23:29
 * @LastEditors: 王利
 * @LastEditTime: 2020-09-11 15:51:43
 */
import Vue from 'vue';
import router from '@/routes';
import store from '@/store';
import '@/filters';
import '@/routes/permission';
import '@/config/use';
import Cookies from 'js-cookie';

import 'normalize.css/normalize.css'; // a modern alternative to CSS resets

import './styles/element-variables.scss';

import '@/styles/index.scss'; // global css

import App from './App';

import './icons'; // icon

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
