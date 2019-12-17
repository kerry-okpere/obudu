<template>
<ClientOnly>
   <chrome-color-picker :value="themeColor" @input="setThemeColor($event.hex)" :disableAlpha="true" />
</ClientOnly>
</template>

<script>
import { Chrome } from 'vue-color'
import { mapGetters, mapMutations } from 'vuex'

export default {
    components: {
        'chrome-color-picker':  Chrome
    },
    computed: {
        ...mapGetters([
            'themeColor'
        ]),
    },
    methods: {
        ...mapMutations([
            'setThemeColor'
        ])
    }
}
</script>

<style>

</style>