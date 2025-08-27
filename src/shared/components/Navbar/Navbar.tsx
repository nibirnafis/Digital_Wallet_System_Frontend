import { useSelector } from "react-redux";
import NavRoutes from "./NavRoutes";
import type { RootState } from "../../../redux/configureStore";
import { NavLink } from "react-router-dom";
import SmallButton from "../Buttons/SmallButton";

const Navbar = () => {

    const user = useSelector((state: RootState) => state.auth.user)

    return (
        <div className="bg-blue-900 w-full sticky top-0 py-3">
            <div className="flex justify-between items-center max-w-[1280px] m-auto ">
                <p className="font-bold text-yellow-300">Logo</p>
                <NavRoutes></NavRoutes>
                {
                    !user &&
                    <div>
                        <NavLink to='/login'><SmallButton title="Sign In"></SmallButton></NavLink>
                        <NavLink to='/register'><SmallButton title="Register"></SmallButton></NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;