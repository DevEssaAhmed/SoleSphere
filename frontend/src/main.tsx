//@ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PAYPAL_URL } from './constants';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '/';

// Fetch function to get PayPal client ID
// async function fetchPaypalClientId() {
//   try {
//     const response = await fetch(PAYPAL_URL);
//     if (!response.ok) {
//       throw new Error('Failed to fetch PayPal client ID');
//     }
//     const data = await response.json();
//     return data.clientId;
//   } catch (error) {
//     console.error('Error fetching PayPal client ID:', error);
//     return null;
//   }
// }

// const clientId = await fetchPaypalClientId();

const initialOptions = {
  clientId: "",
  currency: 'USD',
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider options={initialOptions} deferLoading={true}>
        <App />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
