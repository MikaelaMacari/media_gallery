import { filesApiSlice } from '@/redux/slices/filesApiSlice.ts';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import filesReducer from '../slices/filesSlice.ts';
import filterReducer from '../slices/filterSlice.ts';
import foldersReducer from '../slices/folderSlice.ts';

export const store = configureStore({
  reducer: {
    filesReducer: filesReducer,
    foldersReducer: foldersReducer,
    filterReducer: filterReducer,
    [filesApiSlice.reducerPath]: filesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filesApiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
