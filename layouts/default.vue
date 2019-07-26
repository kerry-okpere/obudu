<template>
  <div class="container is-fullwidth">
    <NavBar />
    <nuxt />

  </div>
</template>

<script>

import NavBar from "../components/NavBar/index";


export default {
  components: {
    NavBar
  }
}

</script>

<style lang="sass">
@import './assets/styles/global';
</style>
