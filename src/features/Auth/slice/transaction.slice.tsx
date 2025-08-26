import { createSlice } from "@reduxjs/toolkit";
import type { ITransaction } from "../../transaction/transaction.type";


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