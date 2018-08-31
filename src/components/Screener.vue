<template>
  <transition
    name="screener"
    @before-enter="setScreenState('opening')"
    @after-enter="setScreenState('open')"
    @before-leave="setScreenState('closing')"
    @after-leave="setScreenState('close')">

    <section v-if="show" id="screener" class="screener">
      <div class="screener__background" :style="{backgroundImage}"></div>
      <div class="screener__content">
        <div>
          <h1>{{title}}</h1>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import {Mediator} from '@/Mediator';
import countries from '@/data/countries-sum-up';

export default {
  name: 'Screener',

  // props:["title"],

  mounted() {
    this.$transition.on("open screener", this.handleShowScreener.bind(this));
    this.$transition.on("close screener", this.handleCloseScreener.bind(this));

    // Let the user breath a bit ;)
    setTimeout(() => {
      this.initial = false;
    }, 500);
  },

  components: {
  },

  data () {
    return {
      open: true,
      initial:true,
      screenState: "open",
      transitionTokens:[]
    };
  },

  methods: {
    setScreenState(state) {
      this.screenState = state;
    },


    /**
     *
     */
    handleShowScreener(token) {
      if (this.screenState == "open") {
        return token.resolve();
      }

      this.transitionTokens.push(token);
      this.open = true;
    },

    /**
     *
    */
    handleCloseScreener(token) {
      if (this.screenState == "close") {
        return token.resolve();
      }

      this.transitionTokens.push(token);
      this.open = false;
    }

  },

  computed: {
    title () {
      return this.$store.getters.comingUpCountry
        ? this.$store.getters.comingUpCountry.title
        : "Visa or not visa ?";
    },

    backgroundImage() {
      if (this.initial) {
        return "";
      }
      return this.$store.getters.comingUpCountry
        ? `url(${this.$store.getters.comingUpCountry.img})`
        : "";
    },

    show () {
      return this.open || this.initial;
    }
  },

  watch: {
    /**
     *
     */
    screenState(value) {
      //!| Dirty optimization
      if (value !== "open" && value !== "close") {
          return;
      }
      const transitionName = value == "open"
        ? "open screener"
        : "close screener";

      this.transitionTokens = this.transitionTokens.filter((t) => {
        return t.request.transitionName == transitionName
          ? t.resolve() && false // A bit tricky here
          : true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
