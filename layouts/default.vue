<template>
  <div>
    <NavBar />
    <nuxt />
    <Footer />

  </div>
</template>

<script>

import NavBar from "../components/NavBar/index";
import Footer from "../components/Footer/index";


export default {
  components: {
    NavBar,
    Footer
  },
  

}

</script>

<style lang="sass">
@import './assets/styles/global';
</style>
