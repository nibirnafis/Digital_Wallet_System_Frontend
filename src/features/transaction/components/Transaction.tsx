import type { ITransaction } from "../transaction.type";

interface IProps {
    transaction: ITransaction
}

const Transaction = ({transaction}: IProps) => {

    // console.log(transaction)
    const { amount, from, status, to, type, createdAt } = transaction

    const date = createdAt.slice(0, 10)
    const time = createdAt.slice(11, 16)

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-blue-100 border-2 rounded-xl p-4 text-base text-blue-900">
            <p>Type: {type}</p>
            <p>Amount: {amount}TK</p>

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

            <div>
                <p>Time: {time}</p>
                <p>Date: {date}</p>
            </div> 
            
            <p>Status: {status}</p>
        </div>
    );
};

export default Transaction;