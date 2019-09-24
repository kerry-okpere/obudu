// import Vue from 'vue';
// import VueApollo from "vue-apollo";
import apolloUploadClient from "apollo-upload-client"
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
// Vue.use(VueApollo);

const baseUrl = process.env.VUE_APP_GRAPHQL_URL;

const uploadClientLink = apolloUploadClient.createUploadLink({
  uri: baseUrl
});
const interceptor = setContext((request, previousContext) => {
const token = ""
  return {
      headers: {
        authorization: token
      }
    };
});

const resetHeaderClient = new ApolloClient({
link: interceptor.concat(uploadClientLink),
cache: new InMemoryCache(),
connectToDevTools: true
});


export default resetHeaderClient;
