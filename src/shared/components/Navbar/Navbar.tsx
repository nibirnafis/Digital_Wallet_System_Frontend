import { useSelector } from "react-redux";
import NavRoutes from "./NavRoutes";
import type { RootState } from "../../../redux/configureStore";
import { NavLink } from "react-router-dom";
import SmallButton from "../Buttons/SmallButton";

const Navbar = () => {

    const user = useSelector((state: RootState) => state.auth.user)

    return (
        <div className="flex flex-col justify-center bg-blue-600 h-12 sticky top-0">
            <div className="flex justify-between w-[1280px] m-auto">
                <p className="font-bold text-yellow-300">Logo</p>
                <NavRoutes></NavRoutes>
                {
                    !user &&
                    <div>
                        <NavLink to='/login'><SmallButton title="Sign In"></SmallButton></NavLink>
                        <SmallButton title="Register"></SmallButton>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;