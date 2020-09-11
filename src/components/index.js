/*
 * @Author: 王利
 * @Date: 2020-08-10 14:32:43
 * @LastEditors: 王利
 * @LastEditTime: 2020-09-11 06:09:20
 */
import { default as VirtualTable } from './VirtualTable';
const components = [VirtualTable];
const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// istanbul ignore if
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  version: '1.0.0',
  install,
  VirtualTable,
};
