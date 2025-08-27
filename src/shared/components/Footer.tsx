
const Footer = () => {
    return (
        <div className="bg-blue-900 w-full py-12 px-4">
            <div className="flex flex-col items-center md:flex-row md:justify-between max-w-[1280px] m-auto">
                <p className="font-bold text-yellow-300 text-lg md:text-2xl">CURRENCER</p>

                <div className="flex md:flex-col text-yellow-300 gap-2">
                    <p>HOME</p>
                    <p>FEATURES</p>
                    <p>CONTACT</p>
                    <p>FAQ</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;