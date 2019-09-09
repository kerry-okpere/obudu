import gql from "graphql-tag";

import { checkoutFragment } from "./checkoutQueries";

export const updateCheckoutShippingOptionsMutation = gql`
  ${checkoutFragment}
  mutation updateCheckoutShippingOptions(
    $checkoutId: ID!
    $shippingMethodId: ID!
  ) {
    checkoutShippingMethodUpdate(
      checkoutId: $checkoutId
      shippingMethodId: $shippingMethodId
    ) {
      errors {
        field
        message
      }
      checkout {
        ...Checkout
      }
    }
  }
`;

export const updateCheckoutBillingAddressMutation = gql`
  ${checkoutFragment}
  mutation updateCheckoutBillingAddress(
    $checkoutId: ID!
    $billingAddress: AddressInput!
  ) {
    checkoutBillingAddressUpdate(
      checkoutId: $checkoutId
      billingAddress: $billingAddress
    ) {
      errors {
        field
        message
      }
      checkout {
        ...Checkout
      }
    }
  }
`;


export const getPaymentTokenQuery = gql`
  query getPaymentToken($gateway: GatewaysEnum!) {
    paymentClientToken(gateway: $gateway)
  }
`;

export const paymentMethodCreateMutation = gql`
  mutation createPayment($input: PaymentInput!, $checkoutId: ID!) {
    checkoutPaymentCreate(input: $input, checkoutId: $checkoutId) {
      errors {
        field
        message
      }
    }
  }
`;

export const completeCheckoutMutation = gql`
  mutation completeCheckout($checkoutId: ID!) {
    checkoutComplete(checkoutId: $checkoutId) {
      errors {
        field
        message
      }
      order {
        id
        token
      }
    }
  }
`;

