<template>
    <div>
      <div class="breadcrumbs">
      <h3>Cart</h3>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div class="container">
        <CartForm2 />
    </div>
    </div>
</template>

<script>

import CartForm2 from '@/components/CartForm2/index';

export default {
    components: {
        CartForm2
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
            active: true
          }
        ]
      }
    }
}
</script>

<style type="scss" scoped>
@import './index.scss';
</style>
