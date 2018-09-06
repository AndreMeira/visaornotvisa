<template>
  <div>
    <Poster
      :ready="posterReady"
      :title="currentCountryShort.title"
      :backgroundImage="currentCountryShort.img">

      <template slot="heading-content">
        <h2 class="main-heading__secondary">
          {{currentCountryArticle.punch_line}}
        </h2>
      </template>
      <template slot="poster-content">
        <div class="card-row">
          <div class="card-container">
            <Card
              title="Visa"
              :value="infos.required"
              :show="card[0]"
              :info="infos.infos_visa"></Card>
          </div>
          <div class="card-container">
            <Card title="Prix"
              :value="infos.price"
              color="red"
              icon="price"
              :show="card[1]"
              :info="infos.infos_price"></Card>
          </div>
          <div class="card-container">
            <Card
              title="Durée"
              :value="infos.duration"
              color="green"
              icon="clock"
              :show="card[2]"
              :info="infos.infos_duration"></Card>
          </div>
        </div>
      </template>
    </Poster>
    <section class="article-block article-block--introduction">
      <div class="heading">
          <p>
            {{currentCountryArticle.introduction ? currentCountryArticle.introduction[0].text : ''}}
          </p>
      </div>
    </section>
    <template v-for="block in contents">
      <basic-block v-if="block.slice_type == 'basic_block'" :content="block"></basic-block>
    </template>

    <section class="spacer"></section>
  </div>

</template>
<script>

import {mapGetters} from 'vuex';
import Poster from '@/components/Poster';
import Card   from '@/components/common/Card';
import BasicBlock from '@/components/prismic/BasicBlock';

export default {

  /**
   *
   */
  name: 'VisaInfo',

  /**
   *
   */
  components: {
    Poster,
    Card,
    BasicBlock
  },

  /**
   *
   */
  data() {
    return {
      // contents:[],
      posterReady:false,
      card:[false, false, false]
    }
  },

  /**
   *
   */
  mounted() {
    this.$nextTick(this.init);
  },

  /**
   *
   */
  methods: {
    async init() {
      let id = this.$route.params.id;

      this.posterReady = false;
      this.card = [false, false, false];

      this.$store.dispatch("country coming up next", id);
      this.$store.dispatch("set current country", id);
      this.$transition.request("close screener");

      this.$store.dispatch("load country article", id).then((r) => {
          setTimeout(() => {this.card = [true, false, false]}, 50);
          setTimeout(() => {this.card = [true, true, false]},  150);
          setTimeout(() => {this.card = [true, true, true]},   250);
      });
    }
  },

  /**
   *
   */
  computed: {

    ...mapGetters([
      "currentCountryShort",
      "currentCountryArticle"
    ]),

    ...mapGetters({
      "infos"    : "currentCountryVisa",
      "contents" : "currentCountryArticleContent",
    }),

  },

  watch: {
    "$route" (to) {
      this.init();
    }
  }
};
</script>
<style lang="scss">

</style>
