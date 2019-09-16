import gql from 'graphql-tag'

export const CREATE_TOKEN_MUTATION = gql`
mutation createToken($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
        token
    }
}
`;

export const VERFIFY_TOKEN_MUTATION = gql`
mutation tokenVerify($token: String!) {
    verifyToken(token: $token) {
        payload
    }
}
`;


export const REFRESH_TOKEN_MUTATION = gql`
mutation tokenRefresh($token: String!) {
    tokenRefresh(token: $token) {
        token
        payload
    }
}
`;