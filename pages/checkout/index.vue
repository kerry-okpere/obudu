<template>
  <div>
    <SectionBreadcrumbs pageTitle="Checkout" />
    <CheckoutForm />
  </div>
</template>

<script>

import SectionBreadcrumbs from '../../components/SectionBreadcrumbs';
import CheckoutForm from '../../components/CheckoutForm/index';

export default {
    components: {
        CheckoutForm,
        SectionBreadcrumbs
    }

}
</script>

<style>

</style>