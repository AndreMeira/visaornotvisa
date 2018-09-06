export default {

  /**
   *
   */
  currentCountryId(state) {
    return state.current;
  },

  /**
   *
   */
  comingUpCountryId(state) {
    return state.comingUp;
  },

  /**
   *
   */
  currentCountry(state, getters) {
    return getters.countriesShort.find((c) => {
      return getters.currentCountryId == c.id;
    });
  },

  /**
   *
   */
  comingUpCountry(state, getters) {
    return getters.countriesShort.find((c) => {
      return getters.comingUpCountryId == c.id;
    });
  },

  /**
   *
   */
   countriesShort(state) {
     return state.summaries;
   },

  /**
   *
   */
  currentCountryShort(state, getters) {
    return getters.countriesShort.find((c) => {
      return getters.currentCountryId == c.id;
    }) || {};
  },

  /**
   *
   */
  currentCountryArticle(state, getters) {
    return state.articles.find((c) => {
      return getters.currentCountryId == c.id;
    }) || {};
  },

  /**
   *
   */
  currentCountryArticleContent(state, getters) {
    return getters.currentCountryArticle.body || [];
  },

  /**
   *
   */
  currentCountryVisa(state, getters) {
    return {
      price          : getters.currentCountryArticle.price > 0
                     ? getters.currentCountryArticle.price + "€" : "Gratuit",

      required       : getters.currentCountryArticle.visa_required === "yes"
                     ? "requis" : "pas besoin",

      duration       : getters.currentCountryArticle.duration       || "",
      infos_visa     : getters.currentCountryArticle.infos_visa     || "",
      infos_price    : getters.currentCountryArticle.infos_price    || "",
      infos_duration : getters.currentCountryArticle.infos_duration || "",
    }
  },

  /**
   *
   */
  countryArticles(state) {
    return state.articles;
  },

  /**
   *
   */
  getCountryArticle: (state, getters) => (id) => {
    return state.articles.find((c) => {
      return id == c.id;
    });
  },

  /**
   *
   */
  areas(state) {
    return state.areas;
  },

  /**
   *
   */
  countriesOfArea: (state, getters) => (name) => {

    if (!getters.areas.includes(name)) {
      return [];
    }

    let index = getters.areas.indexOf(name);
    return state.summaries.filter((c) => {
      return index === c.region;
    });
  },
}
