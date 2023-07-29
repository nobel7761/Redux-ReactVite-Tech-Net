import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    //reducer functions will be added here in future
    counter: counterReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
