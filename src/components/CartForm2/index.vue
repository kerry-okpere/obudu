<template>
  <section class="cart">
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="cart-table">
            <thead>
              <tr>
                <th>Products</th>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="product-thumbnail"><img
                    src="https://saleor-demo.s3.amazonaws.com/__sized__/products/saleordemoproduct_cl_boot07_1-thumbnail-510x510.png"
                    width="100" ></td>
                <td class="product-name">Apple Organic Juice</td>
                <td class="product-price">$69</td>
                <td class="product-quantity">
                  <div class="quantity">
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-btn variant="outline-info" @click="num--">-</b-btn>
                      </b-input-group-prepend>

                      <b-form-input type="number" min="0.00" v-model="num"></b-form-input>

                      <b-input-group-append>
                        <b-btn variant="outline-secondary" @click="num++">+</b-btn>
                      </b-input-group-append>
                    </b-input-group>
                  </div>
                </td>
                <td class="product-subtotal">$69</td>
                                <td class="product-remove">
                  <ion-icon name="trash"></ion-icon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    data() {
      return {
        num: 0
      }
    }
  }

</script>

<style lang="scss" scoped>
@import './_index.scss';
</style>
