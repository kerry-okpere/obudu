import Vue from 'vue';
import SButton from './SButton';

export const styledComponents = Vue.component('s-button', {
    components: { SButton },
    template: `<SButton :color="priColor"><slot></slot></SButton>`,
  });
