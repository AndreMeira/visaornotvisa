import Vue from 'vue';

const bus = new Vue({});

export default {
  request(transitionName, options = {}) {
    return new Promise((resolve, reject) => {
      const token = {transitionName, options};

      bus.$emit(transitionName, {
        request: token,
        resolve: () => {resolve(token)},
        reject:  () => {reject(token)}
      })
    });
  },

  inform(evt, options = {}) {
    return this.request(evt, options);
  },

  on(transitionName, c) {
    bus.$on(transitionName, c);
  }
}
