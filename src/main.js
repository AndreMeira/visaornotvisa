import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import underscore from 'vue-underscore';
import Transition from '@/mixins/Transition';

//Put this somewhere seperate
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faIdCard, faClock, faEuroSign, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(underscore);
Vue.mixin(Transition);

// Not so great
library.add(faCoffee, faIdCard, faClock, faEuroSign, faCoins);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
