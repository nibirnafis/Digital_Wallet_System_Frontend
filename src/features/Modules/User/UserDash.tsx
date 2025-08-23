import { useNavigate } from "react-router-dom";
import { useLazyUserLogoutQuery } from "../../../redux/baseApi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/configureStore";
import { clearUser } from "../../Auth/slice/auth.slice";
import { Link } from "react-router-dom";
import UserActions from "./UserActions";

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
        <p className="bg-green-700 text-white">Personal Info</p>
        {
            user &&
            <div className="">
                <p>Name: {user.name}</p>
                <p>Phone: {user.phone}</p>
                <p>Role: {user.role}</p>
                <p>Balance: {user.wallet?.balance}</p>
            </div>
        }
        <div>
            <p className="bg-blue-700 text-white">Actions</p>
            <UserActions></UserActions>
        </div>
        <div>
            <p className="bg-orange-600 text-white">Transactions</p>
            <Link to="/transactions/me">My Transactions</Link>
        </div>
        {user && <button onClick={handleLogout} className="bg-red-700 text-white">Logout</button>}
        
        </>
    );
};

export default UserDash;