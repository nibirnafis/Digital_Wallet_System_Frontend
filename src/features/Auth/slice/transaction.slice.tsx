import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "./auth.slice";


export interface ITransaction {
    amount: number,
    from?: IUser,
    status: string
    to?: IUser,
    userId: IUser,
    type: string,
}


interface IState {
    transactions: ITransaction[] | null
}

export const initialState: IState = {
    transactions: JSON.parse(localStorage.getItem("transactions") || "null")
}


export const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload
            localStorage.setItem("transactions", JSON.stringify(action.payload))
        },
        clearTransactions: (state) => {
            state.transactions = null
            localStorage.removeItem("transactions")
        }
    }
})

export const { setTransactions, clearTransactions } = transactionSlice.actions