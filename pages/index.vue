<template>
  <div>
    <HomeSlider />
    <HomeProductCategory />
    <HomeProducts />
  </div>
</template>

<script>
import HomeSlider from '../components/HomeSlider/index';
import HomeProducts from '../components/HomeProducts/index';
import HomeProductCategory from '../components/HomeProductCategory/index';

import SectionTitleAlt from '../components/SectionTitleAlt/index';
import SingleProductMain from '../components/SingleProductMain/index';

import { ApolloClient } from 'apollo-client';
import { setContext } from "apollo-link-context";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

import { CREATE_TOKEN_MUTATION } from '../queries/authTokenQueries';
import config from '@/config';


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
    async getauthToken() {
      // try{
        // let response = await this.$apollo.mutate({
        //   mutation: CREATE_TOKEN_MUTATION,
        //   variables: { "email": config.admin.email ? process.env.ADMIN_EMAIL : "admin@mercurie.ng" , "password": process.env.ADMIN_PASSWORD ? process.env.ADMIN_EMAIL : "admin" }
        // });
        // return response.data;
      // } catch (e) {
        // console.log(e);
      // }

    },

  }
}

</script>

<style>

@import './index.scss';

</style>