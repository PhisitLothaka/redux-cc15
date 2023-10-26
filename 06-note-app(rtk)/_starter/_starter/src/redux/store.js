import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";

const store = configureStore({
  reducer: {
    note: noteReducer, // ชื่อที่ store รู้จัก
    //auth: authReducer,
    // cart: cartReducer
  },
});

export default store;
