import Vue      from 'vue';
import Router   from 'vue-router';
import Home     from './views/Home';
import Explore  from './views/Explore';
import VisaInfo from './views/VisaInfo';

Vue.use(Router)

export default new Router({

  mode: 'history',
  /**
   *
   */
  scrollBehavior (to, from, savedPosition) {
    if (to.name == "explore") {
      return;
    }
    return { x: 0, y: 0 }
  },

  /**
   *
   */
  routes: [{
      path: '/',
      name: 'home',
      component: Home,

    }, {
      path: '/visa/:name/:id',
      name: 'visa-id',
      component: VisaInfo,

    }, {
      path: '/visa/:name',
      name: 'visa',
      component: Home
    }, {
      path: '/explore',
      name: 'explore',
      component: Explore
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
