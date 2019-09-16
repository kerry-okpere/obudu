<template>
<div class="w-container section-title-alt">
    <h1 class="section-title-alt">{{ sectionTitleAlt }}</h1>
</div>
</template>

<script>
export default {
    name: 'SectionTitleAlt',
    props: {
        sectionTitleAlt: String
    }
}
</script>

<style lang="scss" scoped>
@import './_index.scss';
</style>