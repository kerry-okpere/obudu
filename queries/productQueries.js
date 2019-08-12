import gql from 'graphql-tag'

export const GET_SINGLE_PRODUCTS = gql`
query($id: ID!){
  product(id: $id) {
    name,
    images{
      url
    }
    description
    category {
      name
    }
    price {
      currency
      amount
    }
  }
}
`;

export const GET_PRODUCTS = gql`
query {
    products(first: 10){
      edges {
        node {
          id
          name
          price {
            amount,
            currency
          }
          category{
            name
          }
          images{
            url
          }
        }
      }
    }
}
`;