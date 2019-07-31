<template>
    <div class="container">
        <SectionHero heroHeading="Accessories" heroSubheading="Shop the latest accessories to look as trendy as you feel."/>
        <CollectionProducts />
    </div>
</template>

<script>

import SectionHero from '../../components/SectionHero/index';
import CollectionProducts from '../../components/CollectionProducts';

export default {
    name: 'Collections',
    components: {
        SectionHero,
        CollectionProducts
    }

}
</script>

<style>
@import './index.scss';
</style>
