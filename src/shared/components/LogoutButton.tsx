import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/configureStore";
import { useNavigate } from "react-router-dom";
import { useLazyUserLogoutQuery } from "../../redux/baseApi";
import { clearUser } from "../../features/Auth/slice/auth.slice";

const LogoutButton = () => {

    const user = useSelector((state: RootState) => state.auth.user)
    const [ userLogout ] = useLazyUserLogoutQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogout = () => {
        userLogout(undefined)
        dispatch(clearUser())
        navigate('/login')
    }

    return (
        <div>
            {user && <button onClick={handleLogout} className="bg-red-700 text-white">Logout</button>}
        </div>
    );
};

export default LogoutButton;