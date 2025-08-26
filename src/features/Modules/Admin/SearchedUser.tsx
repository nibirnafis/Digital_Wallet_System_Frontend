import type { RootState } from "../../../redux/configureStore";
import { useSelector } from "react-redux";
import type { ITransaction } from "../../transaction/transaction.type";
import Transaction from "../../transaction/components/Transaction";
import { useState } from "react";

const SearchedUser = () => {


    const userInfo = useSelector((state: RootState) => state.searchedUserInfo.userInfo)
    const transactions = useSelector((state: RootState) => state.searchedUserInfo.transactions)
    console.log(transactions)


    const [ limit, setLimit ] = useState(0)
    
    const handlePrev = () => {
    setLimit(limit-10)
    }
    
    const handleNext = () => {
        setLimit(limit+10)
    }

    

    return (
        <>
        <div className="grow">
            <div className="text-blue-900 bg-blue-100 p-4 sticky top-12">
                <p className="text-3xl font-bold text-center">SEARCHED USER</p>
                <p className="text-base text-center">SEE ALL YOUR ACTIVITIES</p>
            </div>
            <div className="flex flex-col max-w-[1280px] mx-auto mt-8">
                
                <div className="flex justify-between bg-blue-100 rounded-2xl p-8">
                    <div className="flex flex-col text-blue-900">
                        <p className="text-5xl font-bold">{userInfo?.name}</p>
                        <p className="text-xl font-normal">+88{userInfo?.phone}</p>
                        <p className="text-xl font-normal text-white">{userInfo?.role}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-blue-900 rounded-2xl p-4">
                        <p className="text-white text-4xl font-bold">{userInfo?.wallet?.balance}<span className="text-base font-normal">tk</span></p>
                        <p className="text-blue-100 text-base font-normal">BALANCE</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-4 w-full border-blue-100 border-2 rounded-2xl p-8 mt-8 mx-auto">
                    <div className="text-blue-900 bg-blue-100 p-4 sticky top-12">
                        <p className="text-3xl font-bold text-center">ALL TRANSACTIONS</p>
                        <p className="text-base text-center">ALL TRANSACTIONS</p>
                    </div>
                    {
                    transactions!.slice(0+limit, 11+limit).map((transaction: ITransaction, idx: number) => <Transaction key={idx} transaction={transaction}></Transaction>)
                    }
                    <div className="flex gap-2 m-auto">
                    {
                        limit > 0 &&
                        <button onClick={handlePrev} className="bg-yellow-300 rounded-xl p-1 font-bold">PREV</button>
                    }
                    {
                        limit < transactions!.length &&
                        <button onClick={handleNext} className="bg-yellow-300 rounded-xl p-1 font-bold">NEXT</button>
                    }
                </div>
                </div>
            </div>
        </div>
        
        </>
    );

};

export default SearchedUser;