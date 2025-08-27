
const Features = () => {

    return (
        <>
        <div className="grow">
            <div className="text-blue-900 bg-blue-100 p-4 ">
                <p className="text-3xl font-bold text-center">FEATURES</p>
                <p className="text-base text-center">SEE ALL YOUR FEATURES</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-900 mt-6 max-w-[1280px] border-yellow-300 border-1 rounded-2xl p-8  m-auto">
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">SEND MONEY</p>
                    <p className="text-base">SEND MONEY TO ANOTHER USER</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">CASH IN</p>
                    <p className="text-base">SEND MONEY TO USER</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">CASH OUT</p>
                    <p className="text-base">RECIEVE CASH FROM AGENT</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">BANK TRANSFER</p>
                    <p className="text-base">TRANSFER MONEY FROM YOUR BANK ACCOUNT</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Features;