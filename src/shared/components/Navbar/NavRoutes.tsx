import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { RootState } from "../../../redux/configureStore";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import LogoutButton from "../LogoutButton";



const NavRoutes = () => {
    
    const user = useSelector((state: RootState) => state.auth.user)
    const [ display, setDisplay ] = useState(false)

    const handleDisplayMenu = () => {
        setDisplay(!display)
    }

    return (
        <>
        <div className="hidden text-yellow-300 md:flex gap-4">
            <NavLink to='/'>Home</NavLink>
            
            {
            user?.role === "USER" || user?.role === "AGENT" ?
            <NavLink to={`/dashboard/${user?.role.toLocaleLowerCase()}`}>Dashboard</NavLink>
            :
            null
            }
            
            {
            user?.role === "SUPERADMIN" || user?.role === "ADMIN" ?
            <NavLink to={`/dashboard/${user?.role.toLocaleLowerCase()}`}>Admin Pannel</NavLink>
            :
            null
            }
            
            <NavLink to='/features'>Features</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            {
            user &&
            <div className="bg-red-700 rounded-xl px-2">
                <NavLink to='/login'><LogoutButton ></LogoutButton></NavLink>
            </div>
            }
        </div>


        <div onClick={handleDisplayMenu} className="flex flex-col text-yellow-300 text-2xl md:hidden">
            <RxAvatar></RxAvatar>
            {
            display && 
            <ul className="bg-yellow-300 flex flex-col gap-4 text-blue-900 p-8 absolute top-6 right-6">
                <li ><NavLink to='/'>Home</NavLink></li>
                <li >
                    {
                    user?.role === "USER" || user?.role === "AGENT" ?
                    <NavLink to={`/dashboard/${user?.role.toLocaleLowerCase()}`}>Dashboard</NavLink>
                    :
                    null
                    }
                </li>
                <li >
                    {
                    user?.role === "SUPERADMIN" || user?.role === "ADMIN" ?
                    <NavLink to={`/dashboard/${user?.role.toLocaleLowerCase()}`}>Admin Pannel</NavLink>
                    :
                    null
                    }
                </li>
                <li ><NavLink to='/features'>Features</NavLink></li>
                <li ><NavLink to='/contact'>Contact</NavLink></li>
                <li ><NavLink to='/faq'>FAQ</NavLink></li>
                <li className="text-red-700"><NavLink to='/login'><LogoutButton ></LogoutButton></NavLink></li>
            </ul>
            }
        </div>
        </>
    );
};

export default NavRoutes;