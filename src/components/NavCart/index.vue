<template>
    <section v-show="cartShow" class="cart">
        <div class="cart__overlay">
            <div class="cart__close">
                <a-button @click="setCartShow" type="primary" size="large" shape="circle" icon="close"></a-button>
            </div>
            <div class="cart__main">
                <div class="container">
                    <div class="cart__main-empty" v-if="cartEmpty">
                        <img src="@/assets/img/cart.png" alt="Empty Cart">
                        <h3>Your cart is empty</h3>
                        <p>Looks like you haven't added any items to your cart yet, continue shopping to fill it up.</p>
                        <a-button type="primary" block>Continue Shopping</a-button>
                    </div>
                    <div class="cart__main-full" v-else>
                        <div class="header">
                            <h1>Cart</h1>
                        </div>
                        <div class="item">
                            <a-card hoverable>
                                <div class="row">
                                    <div class="col-4">
                                        <img src="https://via.placeholder.com/100" alt="">
                                    </div>
                                    <div class="col-6">
                                        <div class="item-details">
                                            <h1>Product Name</h1>
                                            <h3>NGN Price</h3>
                                            <p>Quantity</p>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <a-button icon="delete"></a-button>
                                    </div>
                                </div>
                            </a-card>
                        </div>
                        <div class="footer">
                            <div class="total">
                                <h3>Total</h3>
                                <h1>NGN Total</h1>
                            </div>
                            <a-button type="primary" block>Checkout</a-button>
                        </div>
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
        cartEmpty: true
    }),
    methods: {
        setCartShow(e) {
            this.$store.state.styles.cartShow = false;
        }
    },
    computed: {
        ...mapGetters ([
            'cartShow'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>