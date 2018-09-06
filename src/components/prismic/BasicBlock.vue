<template>
  <section class="article-block">
    <div class="row heading">
      <div class="col-1-of-3">
          <h3 class="">{{headingTitle}}</h3>&nbsp;
      </div>
      <div class="col-2-of-3">
        <template v-for="block in contentSection">

            <h4 class="">
              {{block.subtitle[0].text}}&nbsp;
            </h4>

            <div v-for="content in block.content">
              <p :class="'prismic-'+content.type">
                <span v-if="content.type=='list-item'">-</span> {{content.text}}
              </p>
            </div>
          </template>
      </div>

    </div>
  </section>
</template>
<script>

export default {

  /**
   *
   */
  name: 'BasicBlock',

  props:["content"],


  /**
   *
   */
  components: {

  },

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
    // this.$nextTick(this.init);
    // API.query("").then((r) => {});
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
    // ...mapGetters(
    //   "currentCountryShort",
    //   "currentCountryLong"
    // ),

    headingTitle() {
      return this.content && this.content.primary
        ? this.content.primary.title[0].text
        : "";
    },

    contentSection() {
      return this.content && this.content.items
        ? this.content.items
        : [];
    },
  },

  watch: {
    content() {
      // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>", this.content);
    }

  }
};
</script>
