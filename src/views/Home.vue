<template>
  <div>
    <Poster
      :title="title"
      :backgroundImage="backgroundImage">
      <template slot="heading-content">
        <div class="home-search">
            <SearchBar></SearchBar>
        </div>
      </template>
      <template slot="poster-content">
        <div class="card-row card-row--home">
          <div class="card-container">
            <Card
              title="Laos"
              value="Un pays relax"
              :show="true"></Card>
          </div>
          <div class="card-container">
            <Card
              title="Thailande"
              value="Le pays du sourire"
              :show="true"></Card>
          </div>
          <div class="card-container">
            <Card
              title="Maroc"
              value="Le paradis du tourisme"
              :show="true"></Card>
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
import Card   from '@/components/common/Card';
import Poster from '@/components/Poster';
import SearchBar from '@/components/SearchBar';
// import HomeComponent from '@/components/Home';

export default {
  /**
   *
   */
  name: 'HomeContainer',

  /**
   *
   */
  components: {
    Card,
    Poster,
    SearchBar
    // HomeComponent
  },

  mounted() {
    this.$nextTick(() => {
      this.loadImage(this.backgroundImage).then(() => {
        this.$transition.request("close screener");
      });
    });
  },

  /**
   *
   */
  data() {
    return {
      title:"Visa or not visa ?",
      backgroundImage:"https://images.pexels.com/photos/105238/pexels-photo-105238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  },

  watch: {
  }

};
</script>
<style lang="scss">

</style>
