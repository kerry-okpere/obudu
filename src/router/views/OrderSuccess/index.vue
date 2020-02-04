<template>
    <Layout>
        <section class="complete">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-12 text-center">
                        <lottie-player src="https://assets9.lottiefiles.com/datafiles/cNN0sYXt79TYml5/data.json"
                            background="transparent" speed="2" style="width: 300px; height: 300px;" autoplay>
                        </lottie-player>
                        <h1>Order Complete</h1>
                        <p>You have successfully placed your order</p>
                        <s-button :pri="priColor" :sec="secColor">Continue Shopping</s-button>
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
.complete {
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