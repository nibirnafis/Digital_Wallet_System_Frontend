import { Link } from "react-router-dom";

const AdminActions = () => {
    return (
        <div className="flex justify-between">
            <Link to='/transaction-form/cash-in'>
                <div>
                    <p>Cash In</p>
                </div>
            </Link>
            <Link to='/add-money-form/bank-transfer'>
                <div>
                    <p>Add Money</p>
                </div>
            </Link>
        </div>
    );
};

export default AdminActions;