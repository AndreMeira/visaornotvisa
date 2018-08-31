import Vue from 'vue';
import Vuex from 'vuex';
import actions from '@/store/screener/actions';
import mutations from '@/store/screener/mutations';

export default {

  /**
   *
   */
  state: {
    screener:true,
    message:"",
    state:"open"
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

  }
}
