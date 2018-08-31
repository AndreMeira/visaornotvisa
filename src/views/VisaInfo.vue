<template>
  <div>
    <Poster
      :ready="posterReady"
      :title="currentCountryShort.title"
      :backgroundImage="currentCountryShort.img">

      <template slot="heading-content">
        <h2 class="main-heading__secondary">Super pays à découvrir</h2>
      </template>
      <template slot="poster-content">
        <div class="card-row">
          <div class="card-container">
            <Card title="Visa" :value="required" :show="card[0]"></Card>
          </div>
          <div class="card-container">
            <Card title="Prix" :value="price" color="red" icon="price" :show="card[1]"></Card>
          </div>
          <div class="card-container">
            <Card title="Durée" :value="duration" color="green" icon="clock" :show="card[2]"></Card>
          </div>
        </div>
      </template>
    </Poster>


    <section class="heading heading--full">
      <h2 class="">BESOIN D’UN VISA POUR TON PROCHAIN VOYAGE ?</h2>
    </section>

    <section>
      <div class="row heading">
        <div class="col-1-of-3">
            <h3 class="">La réponse en deux clics</h3>
        </div>
        <div class="col-2-of-3">
            <h4 class="">
              T’AS PRÉVU D’ALLER ZOUKER À L’ÉTRANGER, MAIS TU NE SAIS PAS S’IL TE FAUT UN VISA ?
              T’INQUIÈTES, ON A LA SOLUTION…
            </h4>
            <div>
              <p>
                Toi aussi t’en as marre de voir des sites d’infos visas à l’ancienne ? Et quand viens le moment de lire toutes les conditions, t’as juste envie de rejoindre tes potes pour l’apéro ou de mater la Casa de Papel ?
              </p>
              <p>
                C’est pour ça qu’on est là… Aujourd’hui est un grand jour pour l’histoire du voyage et du gain de temps.
                Avec visa or not visa, tu vas vite savoir si tu as besoin d’un visa touriste ou non pour préparer ton voyage à l’étranger.
              </p>
            </div>
        </div>
      </div>
    </section>

    <section>
      <div class="row heading">
        <div class="col-1-of-3">
            <h3 class="">Avis des voyageurs</h3>
        </div>
        <div class="col-2-of-3">
            <h4 class="">
              SOPHIA & XAVIER
            </h4>
            <div>
              <p>
                Trop cool ce site, maintenant on sait qu'on n'ai plus qu'à chiller pendant notre roadtrip en Amérique du Sud avec notre choix de destinations sans visa !! Pratique
              </p>
            </div>
            <h4 class="">
              NICOLAS
            </h4>
            <div>
              <p>
                Cool, j'ai toutes les infos qu'il me faut pour partir en trip moto au Vietnam ! C'est clair et bien expliqué par pays pour le visa tourisme. Merci !
              </p>
            </div>
        </div>
      </div>
    </section>
    <section class="spacer">

    </section>
  </div>

</template>
<script>

// import VisaInfoComponent from '@/components/VisaInfo';
// import countries from '@/data/countries-sum-up';
// import API from '@/api/countries';
import {mapGetters} from 'vuex';
import Poster from '@/components/Poster';
import Card   from '@/components/common/Card';

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
    Card
  },

  /**
   *
   */
  data() {
    return {
      posterReady:false,
      card:[false, false, false]
    }
  },

  /**
   *
   */
  mounted() {
    this.$nextTick(this.init);
    // API.query("").then((r) => {});
    // API.query("").then((r) => {});
  },

  /**
   *
   */
  methods: {
    async init() {
      this.posterReady = false;
      this.card = [false, false, false];
      this.fetch(this.$route.params.id);
      await this.$store.dispatch("set current country", this.$route.params.id);
      // await this.loadImage(this.$store.getters.currentCountry.img);
      this.$transition.request("close screener").then(() => {
        this.posterReady = true;
      });

      setTimeout(() => {this.card = [true, false, false]}, 50);
      setTimeout(() => {this.card = [true, true, false]},  150);
      setTimeout(() => {this.card = [true, true, true]},   250);


    },

    fetch(id) {
      this.$store.dispatch("country coming up next", id);
      this.$store.dispatch("load country as current", id);
    }
  },

  /**
   *
   */
  computed: {
    // ...mapGetters(
    //   "currentCountryShort",
    //   "currentCountryLong"
    // ),
    currentCountryShort() {
      return this.$store.getters.currentCountryShort || {};
    },

    currentCountryShortInfos() {
      return this.$store.getters.currentCountryShort
        ? this.currentCountryShort.infos
        : {};
    },

    price() {
      return this.currentCountryShortInfos.price > 0
        ? this.currentCountryShortInfos.price + "€"
        : "Gratuit";
    },

    duration() {
      return this.currentCountryShortInfos.duration
        ? this.currentCountryShortInfos.duration
        : "indéterminé";
    },

    required() {
      return this.currentCountryShortInfos.required
        ? "Requis" : "Pas besoin";
    }
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
