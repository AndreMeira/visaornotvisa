import Prismic from 'prismic-javascript';

const apiEndpoint = "https://visaornotvisa.prismic.io/api/v2";
const API = Prismic.getApi(apiEndpoint, {});

export default {
  query (q) {
    return 	API.then(function(api) {
      // An empty query will return all the documents
      return api.query(q);
    });
  }
}
