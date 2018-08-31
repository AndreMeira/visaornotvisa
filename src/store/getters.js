export default {

  /**
   *
   */
  currentCountryId(state) {
    return state.countries.current;
  },

  /**
   *
   */
  comingUpCountryId(state) {
    return state.countries.comingUp;
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
     return state.countries.short;
   },

  /**
   *
   */
  currentCountryShort(state, getters) {
    return getters.countriesShort.find((c) => {
      return getters.currentCountryId == c.id;
    });
  },

  /**
   *
   */
  currentCountryLong(state, getters) {
    return getters.countriesLong.find((c) => {
      getters.currentCountryId == c.id;
    });
  }
}
