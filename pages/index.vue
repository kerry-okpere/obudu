<template>
  <div class="container">
    <HomeSlider />
    <HomeProductCategory />
    <HomeProducts />
    <div class="section-2"></div>
    <TrialBadge />
  </div>
</template>

<script>
import HomeSlider from '../components/HomeSlider/index';
import HomeProducts from '../components/HomeProducts/index';
import HomeProductCategory from '../components/HomeProductCategory/index';
import TrialBadge from '../components/TrialBadge/index';

import { ApolloClient } from 'apollo-client';
import { setContext } from "apollo-link-context";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

import { CREATE_TOKEN_MUTATION } from '../queries/authTokenQueries';

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_URL,
  fetch: fetch
});

Vue.use(VueApollo);

const interceptor = setContext((request, previousContext) => {
  if(process.browser){
    let admin_token = localStorage.getItem('admin_token');
    return {
      headers: {
        authorization: admin_token ? `Authorization: JWT ${admin_token}` : null
      }
    };
  }
});

const apolloClient = new ApolloClient({
  link: interceptor.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
});


export default {
  name: 'Home',
  components: {
    HomeSlider,
    HomeProducts,
    HomeProductCategory,
    SingleProductMain,
    TrialBadge

  },
  data() {
    return {
      loading: 0,
    }
  },
  apolloProvider,
  async created() {
    if(process.browser) {
      let admin_token = localStorage.getItem('admin_token');
      if(!admin_token){
        let tokenResponse =  await this.getauthToken();
        const {token } = tokenResponse.tokenCreate;
        localStorage.setItem("admin_token", JSON.stringify(token));
      } else { 
        console.log("Unto the next!");
      }

    }
  },

  methods: {
    async getauthToken() {
      try{
        let response = await this.$apollo.mutate({
          mutation: CREATE_TOKEN_MUTATION,
          variables: { "email": process.env.ADMIN_EMAIL, "password": process.env.ADMIN_PASSWORD }
        });
        return response.data;
      } catch (e) {
        console.log(e);
      }

    },

  }
}

</script>

<style>

@import './index.scss';

</style>