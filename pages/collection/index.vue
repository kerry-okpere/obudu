<template>
    <div class="container">
        <CollectionHero />
        <CollectionProducts />
    </div>
</template>

<script>

import CollectionHero from '../../components/CollectionHero/index';
import CollectionProducts from '../../components/CollectionProducts';

export default {
    name: 'Collections',
    components: {
        CollectionHero,
        CollectionProducts
    }

}
</script>

<style>
@import './index.scss';
</style>
