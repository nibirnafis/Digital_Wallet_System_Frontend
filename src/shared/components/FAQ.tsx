
const FAQ = () => {
    return (
        <>
        <div className="grow">
            <div className="text-blue-900 bg-blue-100 p-4">
                <p className="text-3xl font-bold text-center">FAQ's</p>
                <p className="text-base text-center">SEE FREQUENTLY ASKED QUESTIONS</p>
            </div>
            <div className="mx-4">
                <div className="grid grid-row-1 gap-8 text-blue-900 mt-6 max-w-[1280px] border-yellow-300 border-1 rounded-2xl p-8 m-auto">
                    <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                        <p className="text-3xl font-bold">How can I add money to my wallet?</p>
                        <p className="text-base">You can add money directly from your linked bank account, debit/credit card, or by giving cash to a registered agent who will load the balance into your wallet.</p>
                    </div>
                    <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                        <p className="text-3xl font-bold">How do I send money to another user?</p>
                        <p className="text-base">Simply log in, choose Send Money, enter the recipient’s phone number or wallet ID, and confirm the transfer. The money will instantly reflect in the recipient’s wallet.</p>
                    </div>
                    <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                        <p className="text-3xl font-bold">How does cash out through an agent work?</p>
                        <p className="text-base">Go to a nearby agent, enter the amount you want to withdraw in your app, confirm the request, and give the confirmation code to the agent. The agent will give you cash immediately.</p>
                    </div>
                    <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                        <p className="text-3xl font-bold">Can I deposit cash to my wallet using an agent?</p>
                        <p className="text-base">Yes. Hand over the cash to a verified agent. The agent will initiate a transaction, and the equivalent balance will appear in your wallet instantly.</p>
                    </div>
                    <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                        <p className="text-3xl font-bold">Are there any fees for transactions?</p>
                        <p className="text-base">1. Send money to users: Usually free or minimal fee. 2. Cash out from agents: A small service charge applies. 3.Add money from bank: Depends on the bank integration. You’ll always see the fee before confirming.</p>
                    </div>
                    <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                        <p className="text-3xl font-bold">Is my money safe in the wallet?</p>
                        <p className="text-base">Yes. Your wallet is protected with PIN/OTP verification, encryption, and transaction monitoring. Even if your phone is lost, your account cannot be accessed without your PIN/password.</p>
                    </div>
                    <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                        <p className="text-3xl font-bold">What happens if I send money to the wrong user?</p>
                        <p className="text-base">Once confirmed, transactions cannot be reversed automatically. Contact our support team immediately; we’ll try to assist, but always double-check recipient details before sending.</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default FAQ;