import { useState } from "react";
import { useGetAllUserQuery } from "../../../redux/baseApi";
import User from "./User";
import type { IUser } from "../../Auth/slice/auth.slice";

const AllUsers = () => {
    const { data, isLoading } = useGetAllUserQuery(undefined)
    
    
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
                <p className="text-3xl font-bold text-center">ALL USER</p>
                <p className="text-base text-center">ALL TRANSACTIONS</p>
            </div>
            {
            !isLoading &&
            <div className="flex flex-col gap-4 max-w-[1280px] border-blue-100 border-2 rounded-2xl p-8 mt-8 mx-auto">
                {
                data.data.slice(0+limit, 11+limit).map((user: IUser, idx: number) => <User key={idx} user={user}></User>)
                }
                <div className="flex gap-2 m-auto">
                    {
                        limit > 0 &&
                        <button onClick={handlePrev} className="bg-yellow-300 rounded-xl p-1 font-bold">PREV</button>
                    }
                    <button onClick={handleNext} className="bg-yellow-300 rounded-xl p-1 font-bold">NEXT</button>
                </div>
            </div>
            }
        </div>
        </>
    );
};

export default AllUsers;