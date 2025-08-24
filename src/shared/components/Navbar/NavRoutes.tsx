import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { RootState } from "../../../redux/configureStore";

const NavRoutes = () => {
    
    const user = useSelector((state: RootState) => state.auth.user)

    return (
        <div className="flex gap-4 text-yellow-300">
            <NavLink to='/'>Home</NavLink>
            {
                user &&
                <NavLink to={`/dashboard/${user.role.toLocaleLowerCase()}`}>Dashboard</NavLink>
            }
            <NavLink to='/features'>Features</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
        </div>
    );
};

export default NavRoutes;