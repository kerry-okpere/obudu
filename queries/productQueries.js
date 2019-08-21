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
    variants{
      id,
      stockQuantity,
      name
    }
    price {
      localized
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
            localized
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
    products(first: 6 ){
      edges{
        node{
          id
          name
          images{
            url
          }
          category{
            name
          }
          thumbnail{
            url
          }
          price{
            amount
            currency
            localized
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