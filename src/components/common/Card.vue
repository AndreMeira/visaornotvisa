<template>
    <div class="card" :class="show ? 'card--show-up' : ''">
      <div class="card__content">
        <span class="card__icon" :class="'card__icon--' + color">
          <font-awesome-icon :icon="type" />
        </span>
        <p class="card__infos">
          {{title}}
        </p>
        <h4 class="card__value">{{value}}</h4>
      </div>
      <div class="card__more-infos">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
      </div>
    </div>
</template>
<script>
export default {
  name:"Card",
  props:["title", "value", "color", "icon", "show"],

  computed: {
    type() {
      if (this.icon == "price") {
        // return "euro-sign";
        return "coins";
      }

      if (this.icon == "clock") {
        return "clock";
      }

      return "id-card";
    }
  }
}
</script>
<style lang="scss">

</style>
