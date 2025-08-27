import { Link } from "react-router-dom";

const AgentActions = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-blue-900 mt-6 border-yellow-300 border-1 rounded-2xl p-8">
            <Link to="/dashboard/agent/transaction-form/cash-in">
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">CASH IN</p>
                    <p className="text-base">SEND MONEY TO USER</p>
                </div>
            </Link>
            <Link to='/dashboard/agent/add-money-form/bank-transfer'>
                <div className="bg-yellow-300 p-4 rounded-2xl hover:scale-120 transition delay-150 duration-300 ease-in-out">
                    <p className="text-3xl font-bold">BANK TRANSFER</p>
                    <p className="text-base">TRANSFER MONEY FROM YOUR BANK ACCOUNT</p>
                </div>
            </Link>
        </div>
    );
};

export default AgentActions;