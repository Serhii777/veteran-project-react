import {
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
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
// import { reducer as formReducer } from "redux-form";

import storage from "redux-persist/lib/storage";

import authReducer from "./auth/authReducer";
// import { announcementReducer } from "./announcement";
// import { newsReducer } from "./news";
// import { homecontentReducer } from "./homecontent";

// import logger from "redux-logger";


const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    // announcement: announcementReducer,
    // homecontents: homecontentReducer,
    // news: newsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    // form: formReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // logger,
  ],
});

// const reducers = combineReducers({
//   form: formReducer, // mounted under "form"
// });
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));
// const store = createStore(reducers);

//* store.subscribe(() => console.log(store.getState()));

export const persistor = persistStore(store);
