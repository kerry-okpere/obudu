<template>
    <section class="checkout" :class="[priFont]">
        <SectionTitle>
            <template v-slot:image>
                <router-link to="/">
                    <img v-if="navLogoImg" :src="navLogo" :alt="storeName" width="100">
                    <h2 v-else :style="{color: navLogoTextColor, fontSize: navLogoTextSize + 'px'}">{{storeName}}</h2>
                </router-link>
            </template>
        </SectionTitle>
        <CheckoutForm />
        <CheckoutFooter />
    </section>
</template>

<script>
import {mapGetters} from 'vuex'
import SectionTitle from '@/components/SectionTitle'
import CheckoutForm from '@/components/CheckoutForm'
import CheckoutFooter from '@/components/CheckoutFooter'

export default {
    components: {
        SectionTitle,
        CheckoutForm,
        CheckoutFooter
    },
    computed: {
        ...mapGetters([
            'priFont',
            'secFont',
            'navLogo',
            'navLogoImg',
            'storeName'
        ])
    }
}
</script>

