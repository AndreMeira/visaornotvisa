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
  },

  "load countries summary" (context) {
    return new Promise((resolve, reject) => {
      API.getAllCountriesShortDesc().then((r) => {
        if (r) {
          let areas = [];
          let countries = [];

          r.results.forEach((c) => {
            if (!areas.includes(c.data.region)) {
              areas.push(c.data.region);
            };

            countries.push({
              id:c.id,
              title: c.data.name[0].text,
              img: c.data.image.url,
              region:areas.indexOf(c.data.region),
              alt:""
            });

          });
          context.commit("set country summaries", countries);
          context.commit("set country areas", areas);
          resolve({countries, areas});
        }
      });
    });
  }
}
