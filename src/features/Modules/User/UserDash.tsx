import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/configureStore";
import UserActions from "./UserActions";
import { useState } from "react";
import LogoutButton from "../../../shared/components/LogoutButton";
import RecentTransactions from "../../transaction/components/RecentTransactions";

const UserDash = () => {

    const user = useSelector((state: RootState) => state.auth.user)
    const navigate = useNavigate()
    const [ isDisplayed, setIsDisplayed ] = useState(false)

    

    const handleOpenForm = () =>{
        setIsDisplayed(!isDisplayed)
    }
    
    
    const handleCloseForm = () =>{
        setIsDisplayed(!isDisplayed)
        navigate(`/dashboard/${user?.role.toLowerCase()}`)
    }


    return (
        <>
        <div className="grow">
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
                {
                    user &&
                    <div className="flex justify-between bg-blue-100 rounded-2xl p-8">
                        <div className="flex flex-col text-blue-900">
                            <p className="text-white text-xl font-bold">Welcome</p>
                            <p className="text-5xl font-bold">{user.name}</p>
                            <p className="text-xl font-normal">+88{user.phone}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-blue-900 rounded-2xl p-4">
                            <p className="text-white text-4xl font-bold">{user.wallet?.balance}<span className="text-base font-normal">tk</span></p>
                            <p className="text-blue-100 text-base font-normal">BALANCE</p>
                        </div>
                    </div>
                }
                <button onClick={handleOpenForm}>
                    <UserActions></UserActions>
                </button>
                <RecentTransactions></RecentTransactions>
                <LogoutButton></LogoutButton>
            </div>
        </div>
        
        </>
    );
};

export default UserDash;












{/* <div className="h-full w-full relative">
    <div className="absolute">
        <Outlet></Outlet>
    </div>
    <button onClick={handleCloseForm} className="bg-red-700 rounded-full leading-none text-white p-2 absolute top-12 right-12">X</button>
    <div className="h-full w-full opacity-80 bg-blue-600 relative"></div>
</div> */}