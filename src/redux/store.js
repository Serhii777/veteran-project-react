import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  FLUSH,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authReducer";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
