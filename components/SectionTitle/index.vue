<template>
  <div class="w-container">
    <h1 class="home-section-title">{{ sectionTitle }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'SectionTitle',
    props: {
      sectionTitle: String
    }

  }

</script>

<style>
  @import "./_index.scss";

</style>
