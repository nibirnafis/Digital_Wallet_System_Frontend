import type { ITransaction } from "../../transaction/transaction.type";
import type { IUser } from "../User/User.type";



export interface ISearchedUser {
    userInfo: IUser,
    transactions: ITransaction[]
}