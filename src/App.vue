<template>
  <div id="app">
    <AppHeader :top="!scrolled"></AppHeader>
    <transition :name="transition">
      <router-view></router-view>
    </transition>
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
      scrolled:false,
      transition: "",
    };
  },

  components:{
    AppHeader,
    Screener,
    AppFooter
  },

  beforeMount() {
    window && window.addEventListener('scroll', this.$_.debounce(() => {
      this.scrolled = window.scrollY > 500;
    }, 50));
  },

  /**
   *
   */
  watch: {
    '$route' (to, /*from*/) {
      if (to.name === "explore") {
        this.transition = "slide";
      } else {
        this.transition = "";
      }
    }
  }
}
</script>
<style lang="scss">
@import './style/sass/main';
</style>
