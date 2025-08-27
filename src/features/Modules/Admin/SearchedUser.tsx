import type { RootState } from "../../../redux/configureStore";
import { useSelector } from "react-redux";
import type { ITransaction } from "../../transaction/transaction.type";
import Transaction from "../../transaction/components/Transaction";
import { useState } from "react";
import ActionsOnUser from "./ActionsOnUser";
import { Outlet, useNavigate } from "react-router-dom";

const SearchedUser = () => {


    const userInfo = useSelector((state: RootState) => state.searchedUserInfo.userInfo)
    const transactions = useSelector((state: RootState) => state.searchedUserInfo.transactions)
    const navigate = useNavigate()
    const [ isDisplayed, setIsDisplayed ] = useState(false)


    const handleOpenForm = () =>{
        setIsDisplayed(!isDisplayed)
    }
    
    
    const handleCloseForm = () =>{
        setIsDisplayed(!isDisplayed)
        navigate(`/dashboard/${userInfo?.role.toLowerCase()}`)
    }


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
            {
                isDisplayed ?
                <div className="flex justify-center items-center h-full w-full fixed">
                    <div className="bg-white opacity-80 h-full w-full"></div>
                    <Outlet></Outlet>
                    <button onClick={handleCloseForm} className="bg-red-700 rounded-full leading-none text-white p-2 absolute top-12 right-12">X</button>
                </div>
                :
                null
            }
            <div className="flex flex-col max-w-[1280px] mx-auto mt-8">
                
                <div className="flex justify-between bg-blue-100 rounded-2xl p-8">
                    <div className="flex flex-col text-blue-900">
                        <p className="text-5xl font-bold">{userInfo?.name}</p>
                        <p className="text-xl font-normal">+88{userInfo?.phone}<span className="text-base font-normal">({userInfo?.role})</span></p>
                        <div>
                            {
                            userInfo?.isDeleted ?
                            <p className="text-xl font-normal text-white">{userInfo?.isDeleted ? "DELETED" : "ACTIVE"}</p>
                            :
                            <p className="text-xl font-normal text-white">{userInfo?.isBlocked ? "BLOCKED" : "ACTIVE"}</p>
                            }
                        </div>
                    </div>
                    <div className={
                        userInfo?.wallet?.status === "DELETED" || userInfo?.wallet?.status === "BLOCKED" || userInfo?.wallet?.status === "SUSPENDED" || userInfo?.wallet?.status === "INACTIVE" ?
                        "flex flex-col justify-center items-center bg-red-500 rounded-2xl p-4"
                        :
                        userInfo?.wallet?.status === "PENDING" ?
                        "flex flex-col justify-center items-center bg-fuchsia-500 rounded-2xl p-4"
                        :
                        "flex flex-col justify-center items-center bg-blue-900 rounded-2xl p-4"
                        }>
                        <p className="text-white text-4xl font-bold">{userInfo?.wallet?.balance}<span className="text-base font-normal">tk</span></p>
                        <p className="text-yellow-300 text-base font-normal">{userInfo?.wallet?.status} WALLET</p>
                    </div>
                </div>
                <button onClick={handleOpenForm}>
                    <ActionsOnUser></ActionsOnUser>
                </button>
                <div className="flex flex-col gap-4 w-full border-blue-100 border-2 rounded-2xl p-8 mt-8 mx-auto">
                    <div className="text-blue-900 bg-blue-100 p-4">
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