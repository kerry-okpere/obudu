<template>
    <div class="section-hero__section" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
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
        heroSubheading: String,
    },
    data () {
        return {
            bgImage: "https://res.cloudinary.com/mercurie/image/upload/v1564579537/mercuriemart/image-5.jpg"
        }
    }

}
</script>

<style>
@import "./_index.scss";
</style>
