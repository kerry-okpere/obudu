const capitalize = (storeName) => storeName.charAt(0).toUpperCase() + storeName.slice(1);

export const STORENAME = capitalize(process.env.VUE_APP_STORENAME)
export const API_URL = process.env.VUE_APP_API_URL
export const STORE_ID = process.env.VUE_APP_STORE_ID


export default {
  STORENAME, API_URL,
  STORE_ID
}