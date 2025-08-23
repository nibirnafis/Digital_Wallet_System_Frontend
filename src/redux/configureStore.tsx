import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { authSlice } from "../features/Auth/slice/auth.slice";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(baseApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch