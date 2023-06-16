export const BASE_URL =
  process.env.NODE_ENV === 'develeopment'
    ? 'http://localhost:5000'
    : 'http://localhost:5000';
// export const BASE_URL = ''; // If using proxy
export const PRODUCTS_URL = '/api/v1/products';
export const USERS_URL = '/api/v1/users';
export const ORDERS_URL = '/api/v1/orders';
export const PAYPAL_URL = '/api/v1/config/paypal';
