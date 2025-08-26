import { Link } from "react-router-dom";

const AdminActions = () => {
    return (
        <div className="flex justify-around text-blue-900 mt-6 border-yellow-300 border-1 rounded-2xl p-8">
            <Link to='/dashboard/admin/create-admin'>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">CREATE ADMIN</p>
                    <p className="text-base">CREATE ANOTHER ADMIN ACCOUNT</p>
                </div>
            </Link>
            <Link to="/dashboard/admin/all-users">
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">ALL USERS</p>
                    <p className="text-base">SEE ALL USERS</p>
                </div>
            </Link>
            <Link to='/dashboard/admin/search-user'>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">SEARCH USER</p>
                    <p className="text-base">SEARCH USER WITH PHONE NUMBER</p>
                </div>
            </Link>
        </div>
    );
};

export default AdminActions;