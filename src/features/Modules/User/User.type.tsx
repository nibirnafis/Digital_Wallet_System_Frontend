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