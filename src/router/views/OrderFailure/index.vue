<template>
    <Layout>
        <section class="failed">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-12 text-center">
                        <lottie-player src="https://assets2.lottiefiles.com/temp/lf20_QrtGro.json"
                            background="transparent" speed="1" style="width: 100px; height: 100px;" autoplay>
                        </lottie-player>
                        <h1>Order Failed</h1>
                        <p>Your order failed, please try again</p>
                        <OrderSummary />
                        <router-link to="/">
                            <s-button :pri="priColor" :sec="secColor">Continue Shopping</s-button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import { mapGetters } from 'vuex';  
import OrderSummary from '@/components/OrderSummary'; 
export default {
    components: {
        OrderSummary
    },
    computed: {
        ...mapGetters([
            'priColor',
            'secColor'
        ])
    }
}
</script>

<style lang="scss" scoped>
.failed {
    margin: 150px 0 100px;
    h1 {
        font-size: 20px;
        font-weight: 600;
    }
    h3 {
        font-size: 24px;
        padding: 5px 0 10px;
    }
}
</style>