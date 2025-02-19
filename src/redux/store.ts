

import { configureStore } from '@reduxjs/toolkit';
import messageReducer from "./features/message/messageSlice";
import { baseApi } from './api/baseApi';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const messagePersistConfig = {
    key: 'message', 
    storage: storage, 
    whitelist: ['name', 'email', 'message'],
};


const persistedCardReducer = persistReducer(messagePersistConfig, messageReducer);


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        messages: persistedCardReducer, 
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store);
