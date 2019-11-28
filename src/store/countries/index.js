import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {

  /**
   *
   */
  state: {
    comingUp:null,
    current: null,
    shortDesc: [],
    articles:  [],
    areas:     [],
    summaries: [],
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
