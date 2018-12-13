import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './../views/Home.vue'
import AboutView from './../views/About.vue'
import ShareView from './../views/Share.vue'
import CharacterView from './../views/Character.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/share',
      name: 'share',
      component: ShareView
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView
    }
  ]
})
