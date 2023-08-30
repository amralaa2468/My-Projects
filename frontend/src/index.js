import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, { productsFetch } from "./slices/productsSlice";
import cartReducer, { getTotal } from "./slices/cartSlice";
import authReducer, { loadUser } from "./slices/authSlice";
import ordersReducer from "./slices/ordersSlice";
import usersReducer from "./slices/usersSlice";
import { productsApi } from "./slices/productsApi";

//configure store allows us to combine different reducers
//automatically configure redux dev tools
const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer,
    users: usersReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotal());
store.dispatch(loadUser(null));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
