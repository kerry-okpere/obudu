<template>
    <div class="container">
        <SingleProductMain />
        <SingleProductImages />
        <SectionTitle sectionTitle="Similar Products"></SectionTitle>
        <SingleProductSimilar />
    </div>
</template>

<script>

import SingleProductMain from '../../components/SingleProductMain/index';
import SingleProductImages from '../../components/SingleProductImages/index';
import SectionTitle from '../../components/SectionTitle/index';
import SingleProductSimilar from '../../components/SingleProductSimilar/index';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

import { ApolloClient } from 'apollo-client';
import { setContext } from "apollo-link-context";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_URL,
    fetch: fetch
});

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

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
});




export default {
    components: {
        SingleProductMain,
        SingleProductImages,
        SectionTitle,
        SingleProductSimilar
    },
    apolloProvider,
}
</script>

<style>
@import './index.scss';
</style>
