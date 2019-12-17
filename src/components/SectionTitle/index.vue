<template>
    <section class="section">
    <div class="container">
        <h3 class="section__title">{{ title }}</h3>
        <p class="section__subtitle">{{ subtitle }}</p>
    </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String
    }
}
</script>

<style lang="scss" scoped>
@import './_index';
</style>