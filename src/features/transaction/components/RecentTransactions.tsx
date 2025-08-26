import { useGetMyTransactionsQuery } from "../../../redux/baseApi";
import Transaction from "./Transaction";
import type { ITransaction } from "../transaction.type";
import { Link } from "react-router-dom";
import SmallButton from "../../../shared/components/Buttons/SmallButton";

const RecentTransactions = () => {

    const { data, isLoading } = useGetMyTransactionsQuery(undefined)


    return (
        <> 
        <div className="flex flex-col gap-4 border-blue-100 border-2 rounded-2xl p-8 mt-8">
            <div className="text-blue-900 bg-blue-100 p-4 rounded-2xl">
                <p className="text-3xl font-bold text-center">RECENT TRANSACTIONS</p>
                <p className="text-base text-center">YOUR RECENT TRANSACTIONS</p>
            </div>
            {
                !isLoading ?
                data.data.slice(0, 3).map((transaction: ITransaction, idx: number) => <Transaction key={idx} transaction={transaction}></Transaction>)
                :
                null
            }
            <div className="m-auto">
                <Link to="/dashboard/my-transactions">
                    <SmallButton title="ALL TRANSACTIONS"></SmallButton>
                </Link>
            </div>
        </div>
        </>
    );
};

export default RecentTransactions;