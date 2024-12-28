import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './reducer';
import { createApi } from '../api/service';

const api = createApi();

const store = configureStore({
  reducer: {
    offers: offersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
