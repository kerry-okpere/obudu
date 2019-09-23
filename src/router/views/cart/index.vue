<template>
    <div>
      <SectionHero heroHeading="Cart" />
      <CartForm />  
    </div>
</template>

<script>

import SectionHero from '@/components/SectionHero/index';
import CartForm from '@/components/CartForm/index';

export default {
    components: {
        SectionHero,
        CartForm
    }
}
</script>

<style type="scss" scoped>
@import './index.scss';
</style>
