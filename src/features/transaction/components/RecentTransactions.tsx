import { useGetMyTransactionsQuery } from "../../../redux/baseApi";
import Transaction from "./Transaction";
import type { ITransaction } from "../transaction.type";
import { useEffect, useState } from "react";

const RecentTransactions = () => {

    const { data, isLoading } = useGetMyTransactionsQuery(undefined)
    // const [ transactions, setTransactions ] = useState(!isLoading ? data.data : [])

    /* useEffect(()=>{
        setTransactions(transactions)
    }, [transactions]) */

    /* if(!isLoading){
        console.log(data, transactions)
    } */


    return (
        <> 
        <div className="flex flex-col gap-4 border-blue-100 border-2 rounded-2xl p-8 mt-8">
            <div className="text-blue-900 bg-blue-100 p-4 rounded-2xl">
                <p className="text-3xl font-bold text-center">RECENT TRANSACTIONS</p>
                <p className="text-base text-center">CLICH HERE TO SEE ALL TRANSACTIONS</p>
            </div>
            {
                !isLoading ?
                data.data.map((transaction: ITransaction, idx: number) => <Transaction key={idx} transaction={transaction}></Transaction>)
                :
                null
            }
        </div>
        </>
    );
};

export default RecentTransactions;