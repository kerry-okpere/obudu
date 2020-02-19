<template>
    <section class="checkout">
        <SectionTitle>
            <template v-slot:image>
                <img :src="navLogo" :alt="storeName" width="100">
            </template>
        </SectionTitle>
        <CheckoutForm />
    </section>
</template>

<script>
import {mapGetters} from 'vuex'
import SectionTitle from '@/components/SectionTitle'
import CheckoutForm from '@/components/CheckoutForm'

export default {
    components: {
        SectionTitle,
        CheckoutForm
    },
    computed: {
        ...mapGetters([
            'navLogo',
            'storeName'
        ])
    }
}
</script>

