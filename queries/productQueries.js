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
      name,
      id
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
            name,
            id
          }
          images{
            url
          }
        }
      }
    }
}
`;

export const GET_SIMILAR_PRODUCTS = gql`
query ($id: ID!){
  category(id: $id) {
    products(first: 4 ){
      edges{
        node{
          id
          name
          images{
            url
          }
          thumbnail{
            url
          }
          price{
            amount
            currency
          }
          
        }
      }
    }
  }
}

`;

export const GET_HOMEPAGE_CATEGORIES = gql`
query{
  categories(first: 3) {
    edges{
      node{
        name,
        backgroundImage{
          url
        } 
      }
    }
  }
}
`;