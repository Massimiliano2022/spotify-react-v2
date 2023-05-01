import favReducer from "../reducers/favReducer";
import searchReducer from "../reducers/searchReducer";
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["querySearch"]
};

const rootReducer = combineReducers({
  favAlbums:favReducer,
  querySearch:searchReducer
});
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});


export const persistor = persistStore(store);
  