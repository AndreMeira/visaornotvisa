<template>
  <div id="app">
    <AppHeader :top="!scrolled"></AppHeader>
    <router-view></router-view>

    <screener></screener>
  </div>
</template>
<script>
import AppHeader from "@/components/Header";
import AppFooter from "@/components/Footer";
import Screener  from "@/components/Screener";

export default {
  name:"App",

  data() {
    return {
      scrolled:false
    };
  },

  components:{
    AppHeader,
    Screener,
    AppFooter
  },

  beforeMount() {
    window.addEventListener('scroll', this.$_.debounce(() => {
      this.scrolled = window.scrollY > 500;
    }, 50));
  }
}
</script>
<style lang="scss">
@import './style/sass/main';
</style>
