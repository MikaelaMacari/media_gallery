import { filesApiSlice } from '@/redux/slices/filesApiSlice.ts';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import filesReducer from '../slices/filesSlice.ts';

export const store = configureStore({
  reducer: {
    store: filesReducer,
    [filesApiSlice.reducerPath]: filesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filesApiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
