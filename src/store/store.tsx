import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menuSlice';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;
