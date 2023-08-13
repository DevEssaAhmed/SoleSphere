export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate Items Price
  state.itemPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // Calculate Shipping Price
  state.shippingPrice = addDecimals(
    state.itemPrice > 100 ? 0 : state.itemPrice === 0 ? 20 : 0
  );
  // Calculate Tax Price
  state.taxPrice = addDecimals(Number(0.15 * state.itemPrice).toFixed(2));

  // Calculate Total Price
  state.totalPrice = (
    Number(state.itemPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));
};
