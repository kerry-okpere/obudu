<template>
  <div>
    <div class="breadcrumbs">
      <h3>Checkout</h3>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div class="container">
    <CheckoutForm2 />
    </div>
  </div>
</template>

<script>

import CheckoutForm2 from '@/components/CheckoutForm2/index';

export default {
    components: {
        CheckoutForm2
    },

    data() {
      return {
        items: [
          {
            text: 'Home',
            href: '/'
          },
          {
            text: 'Cart',
            href: '/cart'
          },
          {
            text: 'Checkout',
            active: true
          }
        ]
      }
    }
}
</script>

<style>

</style>