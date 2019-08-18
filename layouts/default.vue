<template>
  <div>
    <NavBar />
    <nuxt />
    <NavFooter />
  </div>
</template>

<script>

import NavBar from "../components/NavBar/index";
import NavFooter from "../components/NavFooter/index";


export default {
  components: {
    NavBar,
    NavFooter
  },
  

}

</script>

<style lang="sass">
@import './assets/styles/global';
</style>
