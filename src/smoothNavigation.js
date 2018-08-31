export default {
  methods:{
    push(route) {
      router.push(route);
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
