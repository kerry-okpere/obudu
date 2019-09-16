<template>
  <div class="container text-center">
    <h3 class="section-title">{{ sectionTitle }}</h3>
    <p class="section-subtitle">{{ sectionSubtitle }}</p>
  </div>
</template>

<script>
  export default {
    name: 'SectionTitle',
    props: {
      sectionTitle: String,
      sectionSubtitle: String
    }

  }

</script>

<style lang="scss" scoped>
  @import "./_index.scss";

</style>
