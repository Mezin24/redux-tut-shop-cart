import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 5,
  total: 0,
  isLoading: false,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    increase: (state, action) => {
      const { payload: id } = action;
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              amount:
                cartItem.amount + 1 > 10
                  ? cartItem.amount
                  : cartItem.amount + 1,
            }
          : cartItem
      );
    },
    decrease: (state, action) => {
      const { payload: id } = action;
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              amount:
                cartItem.amount - 1 > 0 ? cartItem.amount - 1 : cartItem.amount,
            }
          : cartItem
      );
    },
    calculateAmount: (state) => {
      const { total, amount } = state.cartItems.reduce(
        (acc, cur) => {
          acc.total += cur.amount * +cur.price;
          acc.amount += cur.amount;
          return acc;
        },
        { total: 0, amount: 0 }
      );
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
