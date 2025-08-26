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
        <div className="flex justify-between items-center border-blue-100 border-2 rounded-xl p-4 text-base text-blue-900">
            <p>TYPE: {type}</p>
            <p>AMOUNT: {amount}TK</p>

            { type !== "BANK TRANSFER" &&
                <div>
                    <p>FROM: {from?.name}</p>
                    <p>PHONE: {from?.phone}</p>
                </div> 
            }
            { type !== "BANK TRANSFER" && 
                <div>
                    <p>TO: {to?.name}</p>
                    <p>PHONE: {from?.phone}</p>
                </div> 
            }

            <div>
                <p>Time: {time}</p>
                <p>Date: {date}</p>
            </div> 
            
            <p>STATUS: {status}</p>
        </div>
    );
};

export default Transaction;