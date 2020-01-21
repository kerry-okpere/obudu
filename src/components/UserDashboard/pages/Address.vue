<template>
    <section class="addres">
        <div class="row">
            <div class="col">
                <div class="title">
                    <h3>Address Book</h3>
                    <p>Manage your address book here...</p>
                </div>
            </div>
            <div class="col tex-right">
                <a-button class="float-right mt-4" type="primary">Add New Address</a-button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                        <a-card title="Address Book">
          <a href="#" slot="extra"><a-icon type="edit" /></a>
          <h3>Default Shipping Address</h3>
          <p>12, Somewhere Street, Somewhere Estate, Lagos, Nigeria.</p>
          <p>+234 012 345 678</p>
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

<style lang="scss" scoped>
    @import './index';
</style>