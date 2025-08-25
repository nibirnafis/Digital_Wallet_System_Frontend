import { useNavigate } from "react-router-dom";
import { useLazyRefreshTokenQuery } from "../../../redux/baseApi";
import { useDispatch } from "react-redux";

const RefreshToken = () => {

    const [ refreshToken ] = useLazyRefreshTokenQuery()
    const dispatch = useDispatch
    const navigate = useNavigate()

    const handleRefresh = () => {
        refreshToken(undefined)
        navigate('/features')
        dispatch()
    }


    return (
        <button className="bg-blue-900" onClick={handleRefresh}>
            Token Refreshed
        </button>
    );
};

export default RefreshToken;