import Vue from 'vue'

import ThemedButton from './ThemedButton'

export const themedButton = Vue.component('themed-btn', {
    components: { ThemedButton },
    template: `<ThemedButton :color="$store.getters['themeColor']"><slot></slot></ThemedButton>`,
});