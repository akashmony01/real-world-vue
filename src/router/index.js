import { createRouter, createWebHistory } from "vue-router"
import UserList from "@/views/UserList.vue"
import UserDetails from "@/views/UserDetails.vue"
import About from "@/views/About.vue"

const routes = [
  {
    path: "/",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/user/:id",
    name: "UserDetails",
    props: true,
    component: UserDetails,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
