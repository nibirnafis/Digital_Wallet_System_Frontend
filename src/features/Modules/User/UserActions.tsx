import { Link } from "react-router-dom";

const UserActions = () => {
    return (
        <div className="flex justify-around text-blue-900 mt-6 border-yellow-300 border-1 rounded-2xl p-8">
            <Link to='/dashboard/user/transaction-form/send-money'>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">SEND MONEY</p>
                    <p className="text-base">SEND MONEY TO ANOTHER USER</p>
                </div>
            </Link>
            <Link to="/dashboard/user/transaction-form/cash-out">
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">CASH OUT</p>
                    <p className="text-base">RECIEVE CASH FROM AGENT</p>
                </div>
            </Link>
            <Link to='/dashboard/user/add-money-form/bank-transfer'>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">BANK TRANSFER</p>
                    <p className="text-base">TRANSFER MONEY FROM YOUR BANK ACCOUNT</p>
                </div>
            </Link>
        </div>
    );
};

export default UserActions;