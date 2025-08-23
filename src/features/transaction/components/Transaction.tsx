import type { ITransaction } from "../transaction.type";

interface IProps {
    transaction: ITransaction
}

const Transaction = ({transaction}: IProps) => {

    // console.log(transaction)
    const { amount, from, status, to, type } = transaction

    return (
        <div className="border-1">
            <p>type: {type}</p>
            <p>amount: {amount}</p>
            <p>from: {from}</p>
            <p>to: {to}</p>
            <p>status: {status}</p>
        </div>
    );
};

export default Transaction;