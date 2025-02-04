import { imagesApi } from '@/redux/slices/imagesSlice.ts';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [imagesApi.reducerPath]: imagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imagesApi.middleware),
});

setupListeners(store.dispatch);
