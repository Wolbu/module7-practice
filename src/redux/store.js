import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer/rootReducer";
import { picturesApi } from "./pictures/picturesApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(picturesApi.middleware),
});

setupListeners(store.dispatch);
