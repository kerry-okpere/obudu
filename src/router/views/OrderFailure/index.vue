<template>
    <Layout>
        <section class="failed">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-12 text-center">
                        <lottie-player src="https://assets2.lottiefiles.com/temp/lf20_QrtGro.json"
                            background="transparent" speed="1" style="width: 300px; height: 300px;" autoplay>
                        </lottie-player>
                        <h1>Order Failed</h1>
                        <p>Your order failed, please try again</p>
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
export default {
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
    margin: 120px 0 100px;
    h1 {
        font-size: 50px;
        font-weight: 600;
        padding: 10px 0 0;
    }
    h3 {
        font-size: 24px;
        padding: 5px 0 10px;
    }
}
</style>