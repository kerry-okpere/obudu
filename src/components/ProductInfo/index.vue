<template>
    <div class="product__info">
        <div class="product__info-name">
            <h1>Apple MacBook Pro 15 2019 - 512GB SSD</h1>
            <h2>NGN 255,200</h2>
        </div>
        <div class="product__info-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
        </div>
        <div class="product__info-variant">
            <h4>Size</h4>
                <a-button-group>
                    <a-button>S</a-button>
                    <a-button>M</a-button>
                    <a-button>L</a-button>
                    <a-button>XL</a-button>
                </a-button-group>
        </div>
        <div class="product__info-variant">
            <h4>Variant</h4>
            <a-select defaultValue="variant" @change="selectVariant">
                <a-select-option value="variant">Variant Option</a-select-option>
            </a-select>
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
            btnSize: 'large'
        }),
        methods: {
            changeQuant(value) {
                console.log('changed', value)
            },
            selectVariant(value) {
                console.log(`selected ${value}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './_index';
</style>