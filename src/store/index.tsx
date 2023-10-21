import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../reducers/bookSlice";

const store = configureStore({
  reducer: {
    bookReducer: BookSlice,
  },
});

export default store;
