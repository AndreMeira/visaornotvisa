import bus from '@/bus/Transition';

// const bus = new Bus;

export default {
  computed:{
    "$transition"() {
      return bus;
    }
  },
  methods: {

    loadImage(src) {
      return new Promise((resolve, reject) => {
        // @todo utiliser document fragment
        var download = new Image();
        download.onload = () => {
          resolve(download)
        };
        download.src = src;
      });
    },

    /**
     *
     */
    navigateToHome() {
      if (this.$route.name == "home") {
        return;
      }

      this.$store.dispatch("country coming up next", null);
      this.$transition.request("open screener").then(() => {
          this.$router.push('/');
      });
    },

    /**
     *
     */
    navigateToExplore() {
      if (this.$route.name == "explore") {
        return;
      }

      this.$store.dispatch("country coming up next", null);
      this.$transition.request("open screener").then(() => {
          this.$router.push('/explore');
      });
    },

    /**
     *
     */
    navigateToCountry(country, id) {
      if (this.$route.name == "visa-id"
      && this.$store.getters.currentCountryId == id) {
        return;
      }
      this.$store.dispatch("country coming up next", id);
      this.$transition.request("open screener").then(() => {
          this.$router.push(`/visa/${country}/${id}`);
      });
    }
  }
}
