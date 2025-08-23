import SmallButton from "../Buttons/smallButton";
import NavRoutes from "./NavRoutes";

const Navbar = () => {
    return (
        <div className="bg-blue-600">
            <div className="flex justify-between w-[1280px] m-auto">
                <p className="font-bold">Logo</p>
                <NavRoutes></NavRoutes>
                <div>
                    <SmallButton title="Sign In"></SmallButton>
                    <SmallButton title="Register"></SmallButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;