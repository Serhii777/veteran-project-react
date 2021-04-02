import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { announNewsReducer } from "./announNews/announNewsReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    announNews: announNewsReducer,
  },
});

export default store;
