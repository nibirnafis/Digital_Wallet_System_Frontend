export interface ITransaction {
    amount: number,
    from?: string,
    status: string
    to?: string,
    userId: string,
    type: string,
}