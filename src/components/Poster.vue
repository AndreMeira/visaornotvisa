<template>
  <section class="poster">
      <div class="poster__image" :class="ready ? 'poster__image--ready' : ''" :style="poster">

      </div>
      <div class="poster-background">
        <div class="poster-background__content">
          <div class="main-heading">
            <h1 class="main-heading__primary">{{title}}</h1>
            <slot name="heading-content"></slot>
          </div>
        </div>
      </div>
      <div class="poster-content">
        <slot name="poster-content"></slot>
      </div>
  </section>
</template>

<script>

export default {
  name: 'Poster',
  components: {
  },

  props: [
    "title",
    "ready",
    "backgroundImage"
  ],

  mounted() {
  },

  data () {
    return {

    };
  },

  computed:{
    poster() {
      return {"backgroundImage":'url("'+this.backgroundImage+'")'}
    }
  },

  methods: {
    next(evt) {
      Mediator.$emit("next-country", {});
    }
  }
};
</script>

<style lang="scss">
  .poster-content {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1200px;
    width: 100%;
  }
</style>
