import countries from '@/data/countries-sum-up';
import distance from 'js-levenshtein';


export default {

  normalize(s) {
    return s.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
  },

  /**
   *
   */
  search(v) {
    return new Promise((resolve, reject) => {
      if (!v) {
        return resolve({search:v, result:[]});
      }
      let result = [];
      let search = this.normalize(v);

      this.testWithAlgorithm(countries.countries, search, result, this.exact);

      if (result.length == 1) {
        return result;
      }

      !this.testWithAlgorithm(countries.countries, search, result, this.countryStartWith) &&
      !this.testWithAlgorithm(countries.countries, search, result, this.levenshtein)      &&
      !this.testWithAlgorithm(countries.countries, search, result, this.countryContains);

      resolve({search:v, result});
    });
  },

  /**
   *
   */
  testWithAlgorithm(countries, search, accumulator, algo) {
    for (let c of countries) {
      let name = this.normalize(c.title);

      if (accumulator.indexOf(c) > -1) {
        continue;
      }

      if (algo(name, search)) {
        accumulator.push(c);
      }

      //!\ Ugly hack
      if (c.alt
      && algo == this.countryContains
      && algo(this.normalize(c.alt), search)) {
        accumulator.push(c);
      }

      if (accumulator.length >= 4) {
        return true;
      }
    }
    return false;
  },

  /**
   *
   */
  exact(name, search) {
    return search.length >= 4 && name === search;
  },

  /**
   *
   */
  countryStartWith(name, search) {
    return name.indexOf(search) === 0;
  },

  /**
   *
   */
  countryContains(name, search) {
    return search.length >= 3 && name.includes(search);
  },

  /**
   *
   */
  levenshtein(name, search) {
    return search.length >= 4
    && distance(name.substring(0, search.length +1), search) <= 2;
  }
}
