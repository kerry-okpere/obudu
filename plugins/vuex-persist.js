import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
    window.onNuxtReady(() => {
        console.log(store)
      new VuexPersistence({
      }).plugin(store);
    });
  }