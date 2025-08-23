import { useNavigate } from "react-router-dom";
import { useLazyUserLogoutQuery } from "../../../redux/baseApi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/configureStore";
import { clearUser } from "../../Auth/slice/auth.slice";

const AgentDash = () => {
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
        {
            user &&
            <div>
                <p>Name: {user.name}</p>
                <p>Phone: {user.phone}</p>
                <p>Role: {user.role}</p>
                {
                    user.wallet?.status === "PENDING" ?
                    <p>Your Wallet is not Active Yet</p>
                    :
                    <p>Balance: {user.wallet?.balance}</p>
                }
            </div>
        }
        {
            user &&
            <button onClick={handleLogout} className="bg-red-700">Logout</button>
        }
        </>
    );
};

export default AgentDash;