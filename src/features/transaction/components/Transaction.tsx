import type { ITransaction } from "../transaction.type";

interface IProps {
    transaction: ITransaction
}

const Transaction = ({transaction}: IProps) => {

    // console.log(transaction)
    const { amount, from, status, to, type } = transaction

    return (
        <div className="flex justify-between items-center border-1">
            <p>Type: {type}</p>
            <p>Amount: {amount}</p>

            { type !== "BANK TRANSFER" &&
                <div>
                    <p>From: {from?.name}</p>
                    <p>Phone: {from?.phone}</p>
                </div> 
            }
            { type !== "BANK TRANSFER" && 
                <div>
                    <p>To: {to?.name}</p>
                    <p>Phone: {from?.phone}</p>
                </div> 
            }

            <p>status: {status}</p>
        </div>
    );
};

export default Transaction;