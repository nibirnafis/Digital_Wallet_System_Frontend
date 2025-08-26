import { createSlice } from "@reduxjs/toolkit";
import type { ITransaction } from "../../transaction/transaction.type";
import type { IUser } from "./auth.slice";


interface IState {
    userInfo: IUser | null
    transactions: ITransaction[] | null
}

export const initialState: IState = {
    userInfo: JSON.parse(localStorage.getItem("user") || "null"),
    transactions: JSON.parse(localStorage.getItem("transactions") || "null")
}


export const searchedUserInfoSlice = createSlice({
    name: "searchedUserInfo",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload.userInfo
            localStorage.setItem("userInfo", JSON.stringify(action.payload.userInfo))
            state.transactions = action.payload.transactions
            localStorage.setItem("transactions", JSON.stringify(action.payload.transactions))
            
        },
        clearUserInfo: (state) => {
            state.userInfo = null
            localStorage.removeItem("userInfo")
            state.transactions = null
            localStorage.removeItem("transactions")
        }
    }
})

export const { setUserInfo, clearUserInfo } = searchedUserInfoSlice.actions