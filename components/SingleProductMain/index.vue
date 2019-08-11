<template>
          <div class="single-product__container w-container">
            <h1 class="breadcrumbs">Breadcrumbs here</h1>
            <div class="w-row">
                <div class="column w-col w-col-7">
                    <a href="#" class="lightbox-link w-inline-block w-lightbox">
                        <img src="https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d401a01ad57b8d2887484db_product-main.png" srcset="https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d401a01ad57b8d2887484db_product-main-p-500.png 500w, https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d401a01ad57b8d2887484db_product-main-p-800.png 800w, https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d401a01ad57b8d2887484db_product-main.png 890w" sizes="(max-width: 767px) 92vw, (max-width: 991px) 396.328125px, 520px" alt="" class="single-product__main-image"/>
                    </a>
                </div>
                <div class="single-product__right w-col w-col-5">
                    <div>
                        <h1 class="single-product__title">Off-shoulder Black Top</h1>
                        <p class="single-product__description">
                            Elasticated waistband. All over lace detail. Back zip up closure. A solar eclipse in motion. That’s what sparked the color, shape, and fold of this purse. Made from sturdy vegetable-tanned leather with brass hardware and an adjustable strap.<br/>
                        </p>
                        <ul class="list single-product__description">
                            <li>10.5 × 7 × 2.5  in.</li>
                            <li>Strap Length: 46 in.</li>
                            <li>Strap Drop: 15 – 22.5 in.</li>
                            <li>Dyed, molded, and stitched by hand</li>
                            <li>Color may vary slightly</li>
                        </ul>
                        <p class="single-product__description">
                            <em>This item is made to order. Please allow 5 – 15 business days for delivery within the U.S. International orders may take longer to ship depending on location.</em>
                            <br/>
                        </p>
                        <!-- <div class="single-product__quantity">
                            <div class="quantity-label">Quantity</div>
                            <input class="quantity" size="4" max="9999" min="1" value="1" type="number" step="1">
                        </div> -->
                        <h1 class="single-product__price">NGN5,300.00</h1>
                        <a href="#" class="single-product__addtocart w-button">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import { GET_SINGLE_PRODUCTS } from "../../queries/productQueries";

export default {
  name: "SingleProductMain",
  data(){
      return {
        products: {
            id: this.$route.params.id
        }
      }
  },

  async mounted () {
        // console.log(this.$route.params.id);
        let singleProds = await this.getSingleProducts();
        // console.log(singleProds);
  },

  methods: {
    async getSingleProducts() {
        
        let response = await this.$apollo.query({
            query: GET_SINGLE_PRODUCTS,
            variables: { "id": this.products.id }
        });

        return response.data.products.edges;
    }
  }
};
</script>

<style>
</style>
