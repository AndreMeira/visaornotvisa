import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

/**
 * Data
 */
import countries from '@/data/countries-short';

export default {

  /**
   *
   */
  state: {
    comingUp:null,
    current:null,
    loading:[],
    articles:[],
    areas:countries.areas,
    summaries:countries.countries,
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
}
