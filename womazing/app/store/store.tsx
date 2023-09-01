"use  client";

import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filter";
import categoriesSlice from "./slices/categories";
import productsSlice from "./slices/product";
import { apiSlice } from "./slices/api";

export const store = configureStore({
  reducer: {
    filter,
    categories: categoriesSlice,
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
