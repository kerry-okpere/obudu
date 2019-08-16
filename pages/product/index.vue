<template>
    <div>
        <SingleProductBreadcrumb />
        <SingleProductMain />
        <SingleProductDescription />
        <SectionTitleAlt sectionTitleAlt="Similar Products"></SectionTitleAlt>
        <SingleProductSimilar />
    </div>
</template>

<script>
import SingleProductBreadcrumb from '../../components/SingleProductBreadcrumb/index';
import SingleProductMain from '../../components/SingleProductMain/index';
import SingleProductDescription from '../../components/SingleProductDescription/index';
import SectionTitleAlt from '../../components/SectionTitleAlt/index';
import SingleProductSimilar from '../../components/SingleProductSimilar/index';

export default {
    components: {
        SingleProductBreadcrumb,
        SingleProductMain,
        SingleProductDescription,
        SectionTitleAlt,
        SingleProductSimilar
    },
}

</script>

<style>
@import './index.scss';
</style>
