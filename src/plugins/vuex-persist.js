import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
    window.onNuxtReady(() => {
      new VuexPersistence({
      filter: (mutation) => mutation.type == 'pushProductToCart'
      }).plugin(store);
    });
  }