<template>
    <Layout>
        <section class="complete">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-12 text-center">
                        <lottie-player src="https://assets9.lottiefiles.com/datafiles/cNN0sYXt79TYml5/data.json"
                            background="transparent" speed="2" style="width: 200px; height: 200px;" autoplay>
                        </lottie-player>
                        <h1>Order Complete</h1>
                        <p>You have successfully placed your order</p>
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
.complete {
    margin: 100px 0;
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