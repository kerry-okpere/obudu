<template>
  <section class="account">
    <h3>Account Overview</h3>
    <div class="row">
      <div class="col">
        <a-card title="Account Details">
          <a href="#" slot="extra"><a-icon type="edit" /></a>
          <h3>Customer Name</h3>
          <p>customer@email.com</p>
          <a-button type="primary">Change Password</a-button>
        </a-card>
      </div>
      <div class="col">
        <a-card title="Address Book">
          <a href="#" slot="extra"><a-icon type="edit" /></a>
          <h3>Default Shipping Address</h3>
          <p>12, Somewhere Street, Somewhere Estate, Lagos, Nigeria.</p>
          <p>+234 012 345 678</p>
        </a-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>