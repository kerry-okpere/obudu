<template>
    <div>
        <SingleProductBreadcrumb />
        <SingleProductMain />
        <SectionTitle sectionTitle="Similar Products"></SectionTitle>
        <SingleProductSimilar />
    </div>
</template>

<script>

import SingleProductBreadcrumb from '../../components/SingleProductBreadcrumb/index';
import SingleProductMain from '../../components/SingleProductMain/index';
import SectionTitle from '../../components/SectionTitle/index';
import SingleProductSimilar from '../../components/SingleProductSimilar/index';

export default {
    components: {
        SingleProductBreadcrumb,
        SingleProductMain,
        SectionTitle,
        SingleProductSimilar
    }
}
</script>

<style>
@import './index.scss';
</style>
