import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../../redux/configureStore";



const ActionsOnUser = () => {


    const userInfo = useSelector((state: RootState) => state.searchedUserInfo.userInfo)


    return (
        <div className="flex justify-around text-blue-900 mt-6 border-yellow-300 border-1 rounded-2xl p-8">
            <Link to={`/dashboard/admin/user-profil/update-user-status/${userInfo?._id}`}>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">UPDATE USER STATUS</p>
                </div>
            </Link>
            <Link to="/dashboard/admin/all-users">
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">DELETE USERS</p>
                </div>
            </Link>
            <Link to='/dashboard/admin/search-user'>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">SEARCH USER</p>
                </div>
            </Link>
        </div>
    );
};

export default ActionsOnUser;