import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WritingView from '../views/WritingView.vue'
import ShapeShifterView from '../views/writing/ShapeShifterView.vue'
import ZuckerverseView from '../views/writing/ZuckerverseView.vue'
import ColonialPhilView from '../views/writing/ColonialPhilView.vue'
import CVView from '../views/CVView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/writing',
      name: 'writing',
      component: WritingView,
    },
    {
      path: '/writing/shapeshifter',
      name: 'shapeshifter',
      component: ShapeShifterView,
    },
    {
      path: '/writing/zuckerverse',
      name: 'zuckerverse',
      component: ZuckerverseView,
    },
    {
      path: '/writing/colonial-phil',
      name: 'colonial-phil',
      component: ColonialPhilView,
    },
    {
      path: '/cv',
      name: 'cv',
      component: CVView,
    },
  ],
})

export default router
