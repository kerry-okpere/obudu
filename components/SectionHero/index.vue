<template>
    <div class="section-hero__section">
            <div class="section-hero__overlay"></div>
            <div class="section-hero__container w-container">
                <h1 class="section-hero__heading">{{ heroHeading }}</h1>
                <h1 class="section-hero__subheading">{{ heroSubheading }}</h1>
            </div>
    </div>
</template>

<script>
export default {
    name: 'SectionHero',
    props: {
        heroHeading: String,
        heroSubheading: String
    }

}
</script>

<style>
@import "./_index.scss";
</style>
