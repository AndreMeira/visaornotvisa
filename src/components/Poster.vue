<template>
  <section class="poster">
      <div class="poster__image" :style="poster"></div>
      <div class="poster__mask"></div>
      <div class="poster-heading">
        <div class="poster-heading__content full-height-container">
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
    "backgroundImage"
  ],

  /**
   *
   */
  computed:{
    poster() {
      return {"backgroundImage":'url("'+this.backgroundImage+'")'}
    }
  }
};
</script>

<style lang="scss">
</style>
