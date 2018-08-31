import SearchEngine from '@/api/SearchEngine';

export default {
  /**
   *
   */
  "SEARCH COUNTRY" (context, country) {
    context.commit('SET CURRENT SEARCH', country);

    return SearchEngine.search(country).then((result) => {
      result.search == country &&
      context.commit('SET SEARCH SUGGESTIONS', result.result);
    });
  }
}
