<template>
  <div>
    <HomeSlider />
    <HomeProductCategory />
    <HomeProducts />
  </div>
</template>

<script>
import HomeSlider from '@/components/HomeSlider/index';
import HomeProducts from '@/components/HomeProducts/index';
import HomeProductCategory from '@/components/HomeProductCategory/index';

import SectionTitleAlt from '@/components/SectionTitleAlt/index';
import SingleProductMain from '@/components/SingleProductMain/index';

import { CREATE_TOKEN_MUTATION } from '@/queries/authTokenQueries';



export default {
  name: 'Home',
  components: {
    HomeSlider,
    HomeProducts,
    HomeProductCategory,
    SectionTitleAlt,
    SingleProductMain,
    // TrialBadge

  },
  data() {
    return {
      loading: 0,
    }
  },
  
  async created() {
    await this.$store.dispatch('fetchStoreCurrency',
      { apollo: this.$apollo }
    );

    await this.$store.dispatch('createAdminAuthMutation',
      { apollo: this.$apollo }
    );

    let isAuthenticated = await !!this.$apolloHelpers.getToken();
    if (!isAuthenticated) {
      let token = await this.$store.getters.getAdminAuthToken;
      await this.$apolloHelpers.onLogin(token, undefined, { expires: 7 })
    }

    if(process.browser) {
      // let admin_token = localStorage.getItem('admin_token');
      // if(!admin_token){
      //   let tokenResponse =  await this.getauthToken();
      //   const {token } = tokenResponse.tokenCreate;
      //   localStorage.setItem("admin_token", JSON.stringify(token));
      // } else { 
      //   console.log("Unto the next!");
      // }

    }
  },

  methods: {
    
  }
}

</script>

<style>

@import './index.scss';

</style>