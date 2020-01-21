<template>
  <section class="saved">
    <div class="title">
      <h3>Saved Items</h3>
      <p>Manage your saved items here...</p>
    </div>
    <a-card size="small">
      <!-- <a href="#" slot="extra">View Details</a> -->
        <div class="row">
          <div class="col-2">
            <img src="https://via.placeholder.com/100" alt="">
          </div>
          <div class="col-8 text-left">
            <h4>Product Name</h4>
            <p>Product Details</p>
            <p>Order Status</p>
          </div>
          <div class="col-2">
            <a-button class="mt-4" type="primary">View Details</a-button>
          </div>
        </div>
    </a-card>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import './index';
</style>