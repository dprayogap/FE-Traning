import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "p-home" */ '../pages/Home.vue')
const Profile = () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
const Product = () => import(/* webpackChunkName: "p-product" */ '../pages/Product.vue')
const ProductCreation = () => import(/* webpackChunkName: "p-product-creation" */ '../pages/ProductCreation.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/product/_create',
    name: 'ProductCreation',
    component: ProductCreation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
