<template>
    <div class="product__info">
        <div class="product__info-name">
            <h1>{{singleProd.name}}</h1>
            <h2>{{singleProd.basePrice}}</h2>
            <!-- {{singleProds}} -->
        </div>
        <div class="product__info-description">
            <p>{{singleProd.description}}</p>
        </div>
        <div class="product__info-variant">
            <!-- <h4>Size</h4>
                <a-button-group>
                    <a-button>S</a-button>
                    <a-button>M</a-button>
                    <a-button>L</a-button>
                    <a-button>XL</a-button>
                </a-button-group> -->
        </div>
        <div class="product__info-variant">
            <!-- <h4>Variant</h4>
            <a-select defaultValue="variant" @change="selectVariant">
                <a-select-option value="variant">Variant Option</a-select-option>
            </a-select> -->
        </div>
        <div class="product__info-quantity">
            <h4>Quantity</h4>
            <a-input-number :min="1" :max="10" v-model="value" @change="changeQuant" />
        </div>
        <div class="product__info-cart">
            <a-button type="primary" icon="plus" :size="btnSize" block>Add to Cart</a-button>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            value: 1,
            btnSize: 'large',
            singleProd: {}
        }),

        computed: {
            singleProds(){
                return this.$store.getters.getProduct;
            }
        },
        methods: {
            changeQuant(value) {
                console.log('changed', value)
            },
            selectVariant(value) {
                console.log(`selected ${value}`)
            }
        },

        async created(){
            //get slugUrl
            let slug = this.$route.params.slug;
            console.log(slug);

            
            let singleProd = await this.$store.dispatch('products/fetchSingleProducts',{
                prodId: "ZxcUie4BKyC2YTdWahTz"
            });

            this.singleProd = singleProd;

            

            // console.log(singleProd);


        }
    }
</script>

<style lang="scss" scoped>
    @import './_index';
</style>