import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import Tab1 from '../components/views/Tab1';
import Tab2 from '../components/views/Tab2';
import Tab3 from '../components/views/Tab3';
import Tab4 from '../components/views/Tab4';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/intro'
  },
  {
    path: '/intro',
    name: 'intro',
    component: Tab4
  },
  {
    path: '/zomer',
    name: 'zomer',
    component: Tab1
  },
  {
    path: '/maandelijks',
    name: 'maandelijks',
    component: Tab2
  },
  {
    path: '/tijdreeksen',
    name: 'tijdreeksen',
    component: Tab3
  },

];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  store.commit('mapbox/RESET_ALL');
  next();
});

export default router;
