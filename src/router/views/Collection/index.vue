<template>
    <Layout>
        <CollectionHero />
        <CollectionProducts />
    </Layout>
</template>

<script>
import CollectionHero from '@/components/CollectionHero';
import CollectionProducts from '@/components/CollectionProducts';

export default {
    components: {
        CollectionHero,
        CollectionProducts
    }
}
</script>

