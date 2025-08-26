import { useNavigate } from "react-router-dom";
import { useLazyRefreshTokenQuery } from "../../../redux/baseApi";

const RefreshToken = () => {

    const [ refreshToken ] = useLazyRefreshTokenQuery()
    const navigate = useNavigate()

    const handleRefresh = () => {
        refreshToken(undefined)
        navigate('/')
    }


    return (
        <button className="bg-blue-900" onClick={handleRefresh}>
            Token Refreshed
        </button>
    );
};

export default RefreshToken;