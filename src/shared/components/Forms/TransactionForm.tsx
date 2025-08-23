import { useParams } from "react-router-dom";
import { useTransferMoneyMutation } from "../../../redux/baseApi";

const TransactionForm = () => {

    const transactionType = useParams().type
    const [ transferMoney ] = useTransferMoneyMutation()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
            const phone = form.phone.value
            const amount = Number(form.amount.value)
    
            
            const transactionInfo = await transferMoney({phone, amount, transactionType}).unwrap()
            console.log(transactionInfo)
            
        }

    return (
        <div className="flex flex-col items-center border-blue-900 border-[2px] rounded-2xl p-5 gap-2 mb-10">
            <p className="text-4xl font-bold text-center pb-4">{transactionType}</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label>Reciever's Number:
                    <input name="phone" type="text" />
                </label>
                <label>Amount:
                    <input name="amount" type="number" />
                </label>
                <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">submit</button>
            </form>
        </div>
    );
};

export default TransactionForm;