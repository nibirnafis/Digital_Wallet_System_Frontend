import { Outlet, useNavigate } from "react-router-dom";
import { useLazyUserLogoutQuery } from "../../../redux/baseApi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/configureStore";
import { clearUser } from "../../Auth/slice/auth.slice";
import UserNavs from "./UserNavs";

const UserDash = () => {

    const user = useSelector((state: RootState) => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ userLogout ] = useLazyUserLogoutQuery()

    console.log(user)

    const handleLogout = () => {
        userLogout(undefined)
        dispatch(clearUser())
        navigate('/login')
    }

    return (
        <>
        <div className="min-w-[1280px] h-full m-auto my-6">
            <div className="flex flex-col justify-between">
                {
                    user &&
                    <div className="flex justify-between">
                        <p>Name: {user.name}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Role: {user.role}</p>
                        <p>Balance: {user.wallet?.balance}</p>
                    </div>
                }
                <UserNavs></UserNavs>
                <Outlet></Outlet>
                <div>
                    {user && <button onClick={handleLogout} className="bg-red-700 text-white">Logout</button>}
                </div>
            </div>
        </div>
        
        </>
    );
};

export default UserDash;