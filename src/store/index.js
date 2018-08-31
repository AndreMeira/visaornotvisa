import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/**
 * Data
 */
import countries from '@/data/countries-sum-up';

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

/**
 *
 *
 */
export default new Vuex.Store({

  modules:{
    screener,
    search
  },

  /**
   *
   */
  state: {
    app:{},
    countries:{
      comingUp:null,
      current:null,
      loading:[],
      long:[],
      short:countries.countries,
    }
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
