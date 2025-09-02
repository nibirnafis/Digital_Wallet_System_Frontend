import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-blue-900 w-full py-12 px-4">
            <div className="flex flex-col items-center md:flex-row md:justify-between max-w-[1280px] m-auto">
                <p className="font-bold text-yellow-300 text-lg md:text-2xl">CURRENCER</p>

                <div className="flex md:flex-col text-yellow-300 gap-2">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/features'>Features</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;