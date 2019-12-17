
export default {
    admin: {
        email: process.env.VUE_APP_ADMIN_EMAIL,
        password: process.env.VUE_APP_ADMIN_PASSWORD
    },
    graphql: {
        url: process.env.VUE_APP_GRAPHQL_URL
    },
    paystack: {
        key: process.env.VUE_APP_PAYSTACK_PUB_KEY
    }
}