import Prismic from 'prismic-javascript';

const apiEndpoint = "https://visaornotvisa.prismic.io/api/v2";
const API = Prismic.getApi(apiEndpoint, {});

export default {
  /**
   *
   */
  client() {
    return API;
  },

  /**
   *
   */
  query (q) {
    return 	this.client().then(function(api) {
      // An empty query will return all the documents
      return api.query(q);
    });
  },

  getByID(id) {
    return	this.client().then(function(api) {
      return api.getByID(id);
    });
  }
}
