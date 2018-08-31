// import API  from '@/api/app';

export default {
  "country coming up next" (context, id) {
    return new Promise((resolve, reject) => {
        context.commit("set coming up", id);
        resolve();
    });
  },

  "set current country" (context, id) {
    return new Promise((resolve, reject) => {
        context.commit("set current", id);
        resolve();
    });
  },

  "load country as current" (context, id) {
    return new Promise((resolve, reject) => {

      context.commit("set current", id);
      context.dispatch("load country long", id).then(() => {
        resolve();
      });
    });


  },

  "load country long" (context, id) {
    return new Promise((resolve, reject) => {

    });
    // We are already handling this
    // if (context.getters.hasLongCountry(id)) {
    //   return;
    // }
  }
}
