<template>
    <div class="container">
        <SingleProductMain />
        <SingleProductImages />
        <SingleProductSimilar />
    </div>
</template>

<script>

import SingleProductMain from '../../components/SingleProductMain/index';
import SingleProductImages from '../../components/SingleProductImages/index';
import SingleProductSimilar from '../../components/SingleProductSimilar/index';

export default {
    components: {
        SingleProductMain,
        SingleProductImages,
        SingleProductSimilar
    }

}
</script>

<style>
@import './index.scss';
</style>
