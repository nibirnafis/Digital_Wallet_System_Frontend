import { NavLink } from "react-router-dom";

const UserNavs = () => {
    return (
        <div>
            <NavLink to="/dashboard/user">Action</NavLink>
            <NavLink to="/dashboard/user/transactions/me">My Transactions</NavLink>
        </div>
    );
};

export default UserNavs;