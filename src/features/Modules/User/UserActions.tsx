import { Link } from "react-router-dom";

const UserActions = () => {
    return (
        <div>
            <Link to='/transaction-form/send-money'>
                <div>
                    <p>send money</p>
                </div>
            </Link>
            <Link to='/transaction-form/cash-in'>
                <div>
                    <p>Cash In</p>
                </div>
            </Link>
            <Link to='/transaction-form/cash-out'>
                <div>
                    <p>Cash Out</p>
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

export default UserActions;