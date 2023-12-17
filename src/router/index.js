import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import(/* webpackChunkName: "about" */ "../views/index/index.vue"),
        redirect: "/index/index",
        children: [
          {
            path: "/index/index",
            name: "index",
            component: () => import(/* webpackChunkName: "about" */ "../views/index/index/index.vue")
          },
          {
            path: "/index/image",
            name: "image",
            component: () => import(/* webpackChunkName: "about" */ "../views/index/index/image.vue")
          }
        ]
      },
      {
        path: "/shop",
        name: "Shop",
        component: () => import(/* webpackChunkName: "about" */ "../views/shop/index.vue")
      },
      {
        path: "/order",
        name: "Order",
        component: () => import(/* webpackChunkName: "about" */ "../views/order/index.vue")
      },
      {
        path: "/vip",
        name: "Vip",
        component: () => import(/* webpackChunkName: "about" */ "../views/vip/index.vue")
      }
    ] // 重定向:重新指向其它path,会改变网址
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/LoginView.vue")
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem("token")
  if (token) {
    if (to.path == "/login") {
      next("/")
    } else {
      next()
    }
  } else {
    if (to.path == "/login") {
      next()
    } else {
      next("/login")
    }
  }
})

export default router
