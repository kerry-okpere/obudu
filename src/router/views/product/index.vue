<template>
    <div>
        <SingleProductMain />
        <SectionTitle sectionTitle="Similar Products"></SectionTitle>
        <SingleProductSimilar />
    </div>
</template>

<script>

import SingleProductMain from '@/components/SingleProductMain/index';
import SectionTitle from '@/components/SectionTitle/index';
import SingleProductSimilar from '@/components/SingleProductSimilar/index';

export default {
    components: {
        SingleProductMain,
        SectionTitle,
        SingleProductSimilar
    }
}

</script>

<style>
@import './index.scss';
</style>
