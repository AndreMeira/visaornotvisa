import SearchEngine from '@/api/SearchEngine';

export default {
  /**
   *
   */
  "SET CURRENT SEARCH" (state, search) {
    state.search = search;
  },

  /**
   *
   */
  "SET SEARCH SUGGESTIONS" (state, payload) {
    state.suggestions = payload;
  }
}
