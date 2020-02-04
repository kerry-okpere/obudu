<template>
    <Layout>
        <section class="error text-center">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-12">
                        <img src="../../../assets/img/404.png" width="500" alt="">
                        <h1>404</h1>
                        <h3>Page not found</h3>
                        <router-link to="/">
                            <s-button :pri="priColor" :sec="secColor">Return home</s-button>
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
        ...mapGetters ([
            'priColor',
            'secColor'
        ])
    }
}
</script>

<style lang="scss" scoped>
.error {
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
