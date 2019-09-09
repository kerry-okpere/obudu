
export default {
    admin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    },
    graphql: {
        url: process.env.GRAPHQL_URL
    },
    paystack: {
        key: process.env.PAYSTACK_PUB_KEY
    }
}