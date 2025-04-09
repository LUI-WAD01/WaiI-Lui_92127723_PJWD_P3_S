import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessListView from '../views/BusinessListView.vue'
import PersonalListView from '../views/PersonalListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Create the path and name to HomeView.vue.
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Create the path and name to PersonalListView.vue.
    {
      path: '/personalList',
      name: 'personal List',
      component: PersonalListView,
    },
    // Create the path and name to BusinessListView.vue.
    {
      path: '/businessList',
      name: 'business List',
      component: BusinessListView,
    }
  ],
})

export default router
