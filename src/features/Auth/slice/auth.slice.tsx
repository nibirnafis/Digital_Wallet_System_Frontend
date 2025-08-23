import { createSlice } from "@reduxjs/toolkit";


export interface IUser {
    name: string,
    phone: string,
    role: string,
    wallet?: {
        _id: string,
        userId: string,
        balance: number,
        status: string,
    }
}

interface IState {
    user: IUser | null
}

export const initialState: IState = {
    user: JSON.parse(localStorage.getItem("user") || "null")
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        clearUser: (state) => {
            state.user = null
            localStorage.removeItem("user")
        }
    }
})

export const { setUser, clearUser } = authSlice.actions