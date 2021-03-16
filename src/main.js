import Vue from 'vue'
const Blue = () => import(/* webpackChunkName: "lib-blibli-dls" */ '@blibli/dls')
const BlueCss = () => import(/* webpackChunkName: "lib-blibli-dls" */ '@blibli/dls/dist/blue.min.css')
const Init = () => import(/* webpackChunkName: "app-init" */ '@/init')

Promise.all([
  Blue(),
  BlueCss()
]).then(values => {
  Vue.use(values[0].default)
  Init()
})
