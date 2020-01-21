<template>
    <section class="products" v-if="productShow === true" :style="{backgroundColor: productBg}">

        <!-- Home Products Layout One -->
        <div class="products__one" v-if="productLayout === 1">
            <div class="container">
                <div class="row">
                    <div class="col" v-for="(product, index) in products" :key="index" >
                        <a-card :hoverable="false" @mouseover="hover = true" @mouseleave="hover = false" :bordered="true" :loading="loading" style="width: 240px">
                            <img alt="example" :src="`${product.images[0].url}`" width="240" />
                            <router-link :to="`/product/${product.slug}`" type="primary">
                                <a-button v-bind:style="{backgroundColor: priColor, borderColor: priColor}">Buy Now</a-button>
                            </router-link>
                            <div class="products__one-meta">
                                <h2>{{product.name}}</h2>
                                <h3>{{product.categoryName}}</h3>
                                <p>{{product.basePrice}}</p>
                            </div>
                        </a-card>
                    </div>
                </div>
            </div>
        </div>

        <!-- Home Products Layout Two -->
        <div class="products__two" v-if="productLayout === 2">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <a-card :hoverable="false" @mouseover="hover = true" @mouseleave="hover = false" :bordered="true" :loading="loading" style="width: 240px">
                            <img alt="example" src="https://cdn.shopify.com/s/files/1/1724/2825/products/IMG_8191_250x.jpg?v=1553005631" width="240" />
                            <a-button type="primary" v-bind:style="{backgroundColor: priColor, borderColor: priColor}">Buy Now</a-button>
                            <div class="products__one-meta">
                                <h2>Product Name</h2>
                                <h3>Product Category</h3>
                                <p>NGN Price</p>
                            </div>
                        </a-card>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <a-card :hoverable="false" @mouseover="hover = true" @mouseleave="hover = false" :bordered="true" :loading="loading" style="width: 240px">
                            <img alt="example" src="https://cdn.shopify.com/s/files/1/1724/2825/products/IMG_8191_250x.jpg?v=1553005631" width="240" />
                            <a-button type="primary" v-bind:style="{backgroundColor: priColor, borderColor: priColor}">Buy Now</a-button>
                            <div class="products__one-meta">
                                <h2>Product Name</h2>
                                <h3>Product Category</h3>
                                <p>NGN Price</p>
                            </div>
                        </a-card>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <a-card :hoverable="false" @mouseover="hover = true" @mouseleave="hover = false" :bordered="true" :loading="loading" style="width: 240px">
                            <img alt="example" src="https://cdn.shopify.com/s/files/1/1724/2825/products/IMG_8191_250x.jpg?v=1553005631" width="240" />
                            <a-button type="primary" v-bind:style="{backgroundColor: priColor, borderColor: priColor}">Buy Now</a-button>
                            <div class="products__one-meta">
                                <h2>Product Name</h2>
                                <h3>Product Category</h3>
                                <p>NGN Price</p>
                            </div>
                        </a-card>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <a-card :hoverable="false" @mouseover="hover = true" @mouseleave="hover = false" :bordered="true" :loading="loading" style="width: 240px">
                            <img alt="example" src="https://cdn.shopify.com/s/files/1/1724/2825/products/IMG_8191_250x.jpg?v=1553005631" width="240" />
                            <a-button type="primary" v-bind:style="{backgroundColor: priColor, borderColor: priColor}">Buy Now</a-button>
                            <div class="products__one-meta">
                                <h2>Product Name</h2>
                                <h3>Product Category</h3>
                                <p>NGN Price</p>
                            </div>
                        </a-card>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'


    export default {
        data: () => ({
            loading: false,
            products: []
        }),

        computed: {
            ...mapGetters ([
                'priColor',
                'secColor',
                'productShow',
                'productLayout',
                'productBg'
            ])
        },

        async created(){
            let res = await this.$store.dispatch('products/fetchHomeProducts');
            this.products = res;
        }
    }
</script>

<style lang="scss" scoped>
    @import './_index';
</style>