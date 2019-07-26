<template>
  <div class="container">
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
// import NavBarWithSlider from "../components/NavBarWithSlider/index";
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
