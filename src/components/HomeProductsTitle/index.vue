<template>
    <section class="product-title" v-if="productTitleShow === true" v-bind:style="{backgroundColor: productTitleBgColor}">

        <!-- Home Products Title Layout One -->
        <div class="product-title__one" v-if="productTitleLayout === 1">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 v-bind:style="{color: productTitleMainColor}">{{productTitleMain}}</h1>
                        <p v-bind:style="{color: productTitleSubColor}">{{productTitleSub}}</p>
                    </div>
                    <div class="col">
                        <div class="button">
                            <s-button class="float-right" :pri="priColor" :sec="secColor">View All</s-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Home Products Title Layout Two -->
        <div class="product-title__two" v-if="productTitleLayout === 2">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 v-bind:style="{color: productTitleMainColor}">{{productTitleMain}}</h1>
                        <p v-bind:style="{color: productTitleSubColor}">{{productTitleSub}}</p>
                        <s-button :pri="priColor" :sec="secColor">View All</s-button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Home Products Title Layout Three -->
        <div class="product-title__three" v-if="productTitleLayout === 3">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="button">
                        <s-button :pri="priColor" :sec="secColor">View All</s-button>
                        </div>
                    </div>
                    <div class="col">
                        <span>
                            <h1 v-bind:style="{color: productTitleMainColor}">{{productTitleMain}}</h1>
                            <p v-bind:style="{color: productTitleSubColor}">{{productTitleSub}}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    export default {
        data: () => ({

        }),

        computed: {
            ...mapGetters([
                'priColor',
                'productTitleShow',
                'productTitleLayout',
                'productTitleBgColor',
                'productTitleMain',
                'productTitleMainColor',
                'productTitleSub',
                'productTitleSubColor'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import './_index';
</style>