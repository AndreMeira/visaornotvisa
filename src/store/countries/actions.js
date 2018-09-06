// import API  from '@/api/app';
import API from '@/api/countries';

export default {
  /**
   *
   */
  "country coming up next" (context, id) {
    return new Promise((resolve, reject) => {
        context.commit("set coming up country", id);
        resolve();
    });
  },

  /**
   *
   */
  "set current country" (context, id) {
    return new Promise((resolve, reject) => {
        context.commit("set current country", id);
        resolve();
    });
  },

  /**
   *
   */
  "load country article" (context, id) {
    return new Promise((resolve, reject) => {
      if (context.getters.getCountryArticle(id)) {
        resolve(context.getters.getCountryArticle(id));
        return;
      }

      context.getters.countryArticles.length > 10 && context.commit(
        "shift country articles except for",
        context.getters.currentCountryShort
      );

      API.getByID(id).then((r) => {
        if (r) {
          context.commit("add country article", {id:r.id, ...r.data});
          resolve(context.getters.getCountryArticle(id));
        }
      })
    });
  }
}
