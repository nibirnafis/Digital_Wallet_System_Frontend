const Contact = () => {
    return (
        <>
        <div className="grow">
            <div className="text-blue-900 bg-blue-100 p-4">
                <p className="text-3xl font-bold text-center">CONTACT</p>
                <p className="text-base text-center">We’re here to help! Reach out to us through any of the options below.</p>
            </div>
            <div className="mx-4">
                <div className="grid grid-row-1 gap-8 text-blue-900 mt-6 max-w-[1280px] border-yellow-300 border-1 rounded-2xl p-8 m-auto">
                    <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 text-center transition delay-150 duration-300 ease-in-out">
                        <p className="text-3xl font-bold">Send us a Message</p>
                        <p className="text-base">Email: currencer@gmail.com</p>
                        <p className="text-base">Phone: 012357894542</p>
                        <p className="text-base">Whatsapp: 012357894542</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;