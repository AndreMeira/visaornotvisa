import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


/**
 * Store methods
 */
import actions   from '@/store/actions';
import getters   from '@/store/getters';
import mutations from '@/store/mutations';

/**
 * Module
 */
import search   from  '@/store/search/index';
import screener from  '@/store/screener/index';
import countries from '@/store/countries/index';

/**
 *
 *
 */
export default new Vuex.Store({

  modules:{
    screener,
    search,
    countries
  },

  /**
   *
   */
  state: {
    app:{},
    // countries:{
    //   comingUp:null,
    //   current:null,
    //   loading:[],
    //   long:[],
    //   short:countries.countries,
    // }
  },

  /**
   *
   */
  mutations: {
    ...mutations
  },

  /**
   *
   */
  actions: {
    ...actions
  },

  /**
   *
   */
  getters: {
    ...getters
  }
})
