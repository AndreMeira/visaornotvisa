<template>
  <div class="explore">
    <div class="row width-limit">
      <template v-for="area in areas">
        <div class="col-1-of-4">
          <h3>{{area}}</h3>
          <template v-for="country in countriesOfArea(area)">
            <div class="country">
              <router-link
                :to="{ name: 'visa', params: {id:country.id, name:country.title} }"
                :event="''"
                @click.native.prevent.stop="navigateToCountry(country.title, country.id)">
                {{country.title}}
              </router-link>

            </div>

          </template>
        </div>
      </template>
    </div>
  </div>

</template>
<script>

import {mapGetters} from 'vuex';
export default {

  /**
   *
   */
  name: 'Explore',

  /**
   *
   */
  components: {},

  /**
   *
   */
  data() {
    return {

    }
  },

  /**
   *
   */
  mounted() {
    this.$nextTick(() => {
        this.$transition.request("close screener");
    });
  },

  /**
   *
   */
  methods: {

  },

  /**
   *
   */
  computed: {
    ...mapGetters([
      "areas",
      "countriesOfArea"
    ]),
  },

  watch: {
    "$route" (to) {
    }
  }
};
</script>
<style lang="scss">
  .explore {
    padding: 20rem 1rem;
    min-height: 100vh;
    background-image:  linear-gradient(155deg, #232e2f 0%, #313438 100%);

    h3 {
      padding: 1rem 0;
      color: white;
      font-size: 3rem;
      font-family: Anton;
      margin: 1rem 3rem;
      border-bottom: solid 3px #c32323;
    }
    .country {
      margin: 0 3rem;
      color: white;
      font-size: 1.5rem;
      font-family: "Helvetica neue";
      font-weight: lighter;
      padding: .2rem 1.5rem;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
</style>
