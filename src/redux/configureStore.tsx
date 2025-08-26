import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { authSlice } from "../features/Auth/slice/auth.slice";
import { transactionSlice } from "../features/Auth/slice/transaction.slice";
import { searchedUserInfoSlice } from "../features/Auth/slice/searchedUserInfo.slice";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authSlice.reducer,
        transactions: transactionSlice.reducer,
        searchedUserInfo: searchedUserInfoSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(baseApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch