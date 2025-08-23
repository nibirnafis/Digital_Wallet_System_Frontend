import { useGetMyTransactionsQuery } from "../../../redux/baseApi";
import Transaction from "./Transaction";
import type { ITransaction } from "../transaction.type";

const MyTransactions = () => {

    const { data, isLoading } = useGetMyTransactionsQuery(undefined)


    return (
        <div>
            <p>Transactions</p>
            {
                !isLoading ?
                data.data.map((transaction: ITransaction, idx: number) => <Transaction key={idx} transaction={transaction}></Transaction>)
                :
                null
            }
        </div>
    );
};

export default MyTransactions;