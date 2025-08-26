import type { IUser } from "../Auth/slice/auth.slice";

export interface ITransaction {
    amount: number,
    from?: IUser,
    status: string
    to?: IUser,
    userId: IUser,
    type: string,
    createdAt: string
}