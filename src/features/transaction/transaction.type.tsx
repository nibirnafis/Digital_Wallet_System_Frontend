import type { IUser } from "../Modules/User/User.type"

export interface ITransaction {
    amount: number,
    from?: IUser,
    status: string
    to?: IUser,
    userId: IUser,
    type: string,
    createdAt: string
}


