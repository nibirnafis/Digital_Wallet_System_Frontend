export interface IUser {
    _id: string,
    name: string,
    phone: string,
    role: string,
    isBlocked: boolean,
    isDeleted: boolean,
    wallet?: {
        _id: string,
        userId: string,
        balance: number,
        status: string,
    }
}