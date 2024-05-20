import {combineReducers, configureStore} from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import authReducer from './AuthSlice';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";
import statusReducer from './StatusSlice ';

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whitelist:['themeReducer','authReducer','statusReducer'],
    blacklist:['']
}

const rootReducer = combineReducers({
    themeReducer,
    authReducer,
    statusReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export const persistor = persistStore(store);
