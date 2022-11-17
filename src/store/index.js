import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth";
import { userApi } from "./apis/user";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (detDefaultMiddleware) =>
    detDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export default store;
