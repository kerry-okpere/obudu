<template>
    <section class="products" v-if="productShow === true" :style="{backgroundColor: productBg}">
        <div class="container">
            
            <!-- Home Products Layout One -->
            <div class="products__one" v-if="productLayout === 1">
                <div class="row">
                    <div class="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6" v-for="(product, index) in products" :key="index" >
                        <!-- <div class="products__one-image" :style="{backgroundImage:'url(' + `${product.images[0].url}` + ')'}"> -->
                                <!-- <img :src="product.images[0].url" alt="Product Name"> -->
                            <!-- <a-button :class="[navFont]" class="animated fadeIn" @mouseover="hover = true"
                            :style="[hover ? {backgroundColor: priColor, borderColor: priColor} : {backgroundColor: secColor, borderColor: secColor}]"
                            @click="openQuickView">
                                <v-icon name="eye" />Quick View
                            </a-button> -->
                        <!-- </div>  -->
                        <div class="products__one-meta text-center">
                            <router-link :to="`/product/${product.slug}`">
                            <img :src="product.images[0].url" alt="Product Name">

                                <h4>{{product.name}}</h4>
                            </router-link>
                            <p>{{product.categoryName}}</p>
                            <p class="price">{{product.basePrice}}</p>
                            <!-- <p class="price">&#x20A6;{{formatPrice(product.basePrice)}}</p> -->
                        </div>
                    </div>
                </div>
                <div class="products__quickview">
                    <a-modal v-model="quickView" :footer="null">
                        <HomeProductsQuickView />
                    </a-modal>
                </div>
            </div>

            <!-- Home Products Layout Two -->
            <div class="products__two" v-if="productLayout === 2">
                <div class="row">
                    <div class="col"></div>
                </div>
            </div>

            <!-- Home Products Layout Three -->
            <div class="products__three" v-if="productLayout === 3">
                <div class="row">
                    <div class="col"></div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import HomeProductsQuickView from '@/components/HomeProductsQuickView';
import { mapGetters } from 'vuex'

    export default {
        data: () => ({
            loading: false,
            products: [],
            hover: false,
            quickView: false
        }),
        components: {
            HomeProductsQuickView
        },
        computed: {
            ...mapGetters ([
                'priColor',
                'secColor',
                'productShow',
                'productLayout',
                'productBg',
                'navFont'
            ])
        },
        methods: {
            formatPrice(price){
                // Apply currency
                return Number(price.replace(/\D/g, "").slice(0, -2))
            },
            openQuickView() {
                this.quickView = true;
            }
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