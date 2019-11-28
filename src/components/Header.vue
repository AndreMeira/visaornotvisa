<template>
  <section id="header" class="header" :class="{top}">
    <header>
      <div class="header__container">

        <div class="header__logo" v-on:click="navigateToHome">
          &nbsp;
        </div>

        <div class="header__headline">
          <a>Pour savoir si tu as besoin d'un visa ou pas</a>
        </div>

        <div class="header__nav">
          <div class="header__links">
            <router-link
              :to="{ name: 'explore', params: {} }">
              Explore
            </router-link>
          </div>
          <div class="header__links">
            <a>About</a>
          </div>
        </div>
        <div class="header__search" :class="{'home':isHome}">
            <SearchBar small="true"></SearchBar>
        </div>

        <div class="menu">
          <span class="menu__burger">
          </span>
        </div>
      </div>
    </header>
  </section>

</template>

<script>
import {Mediator} from '@/Mediator';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'Header',

  props:["top"],

  components: {
    SearchBar
  },

  methods: {
  },

  computed: {
    isHome() {
      return this.$route.name == "home";
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
