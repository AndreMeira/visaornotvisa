export default {

  /**
   *
   */
  "set coming up country" (state, id) {
    state.comingUp = id;
  },

  /**
   *
   */
  "set current country" (state, id) {
    state.current = id;
  },

  /**
   *
   */
  "add country article" (state, article) {
    let articles = state.articles.concat([]);
    articles.push(article);
    state.articles = articles;
  },

  /**
   *
   */
  "shift country articles except for" (state, except = null) {
    let articles = state.articles.filter((article) => {
      return !except || article.id !== except.id;
    }).slice(1);

    if (except && except.id) {
      articles.push(except);
    }

    this.articles = articles;
  },

  /**
   *
   */
  "set country summaries" (state, summaries) {
    state.summaries = summaries;;
  },

  /**
   *
   */
  "set country areas" (state, areas) {
    state.areas = areas;
  }
}
