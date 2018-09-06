<template>
  <div class="search-bar" :class="{'search-bar--small':small}">
    <div class="search-bar__container" :class="{'search-bar__container--small':small}">

      <div class="search-bar__input-container">

        <input
          name="search"
          autocomplete="off"
          class="search-bar__input"
          placeholder="Recherchez un pays"
          v-model="search"


          @focus="suggest = true"
          @blur="suggest = false"
          @keydown.enter="onEnter"
          @keydown.up.prevent="onArrowUp"
          @keydown.down.prevent="onArrowDown"
          @keydown.esc="$event.target.blur()"
          @keyup="autoNavigate"
          @input="searchCountry($event.target.value)"
          v-on:focus="$emit('input', $event.target.value)"
        />
        <button>
          <font-awesome-icon icon="search"/>
        </button>

      </div>

      <!-- <SearchSuggestions></SearchSuggestions> -->

      <transition name="fade">
        <div v-if="suggest" class="search-suggestions" :class="{'search-suggestions--small':small}">
          <ul class="search-suggestions__list">

            <template v-for="(country, i) in suggestions">
              <li
                class="search-suggestions__item"
                :class="{ 'search-suggestions__item--active': i === arrowCounter }"
                @click="navigateToCountry(country.title, country.id)">
                <label>
                  <p>{{country.title}}</p>
                  <p class="search-suggestions__item--subtitle">
                    visa touriste
                  </p>
                  <!-- Ugly hack to preload image-->
                  <img style="display:none" :src="country.img"/>
                </label>
              </li>
            </template>

            <li v-if="suggestions.length == 0" class="search-suggestions__item">
              <label>
                <p>Tapez le pays de votre choix.</p>
                <p class="search-suggestions__item--subtitle">
                  Et tout ca.
                </p>
              </label>
            </li>
          </ul>
        </div>
      </transition>

    </div>
    <h2 v-if="!small" class="search-bar__label">
        <label class="notice">
          Choisis ta destination
          <span><font-awesome-icon icon="arrow-up" /></span>

        </label>
    </h2>

  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  name: "SearchBar",
  props:["small"],

  data() {
    return {
      search:"",
      suggest:false,
      arrowCounter:-1,
    };
  },

  computed:{
    ...mapState({
      currentSearch: state => state.search.search,
      suggestions:   state => state.search.suggestions
    })
  },

  methods: {
    ...mapActions({
      searchCountry: "SEARCH COUNTRY"
    }),


    /**
     *
     */
    autoNavigate(e) {
      this.$emit('input', e.target.value);

      if (e.target.value.length == 0) {
          return;
      }

      if (e.target.value.length >= 4
      && this.suggestions.length == 1) {
        this.navigateToCountry(
          this.suggestions[0].title,
          this.suggestions[0].id,
        );
      }
    },

    /**
     *
     */
    onArrowUp(e) {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter -1;
      } else {
        this.arrowCounter = this.suggestions.length - 1
      }
    },

    /**
     *
     */
    onArrowDown(e) {
      if (this.arrowCounter < this.suggestions.length - 1) {
        this.arrowCounter = this.arrowCounter + 1;
      } else {
        this.arrowCounter = 0;
      }
    },

    /**
     *
     */
     onEnter(e) {
       if (this.suggestions[this.arrowCounter]) {
          this.navigateToCountry(
            this.suggestions[this.arrowCounter].title,
            this.suggestions[this.arrowCounter].id
          );
          e.target.blur();
       } else if (this.suggestions[0]) {
         this.navigateToCountry(
           this.suggestions[0].title,
           this.suggestions[0].id
         );
         e.target.blur();
       }
     }
  },

  watch: {
    "$route"(to, from) {
      if (to.name !== from.name) {
        this.search = this.currentSearch;
      }
    }
  }
}
</script>

<style>
.notice span {
  animation: moveInBottom 1.2s infinite ease-in-out 1s;
  display: inline-block;
  padding: 0 1rem;
  font-size: 1rem;
  opacity: 0;
}
</style>
