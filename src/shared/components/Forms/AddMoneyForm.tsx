import { useParams } from "react-router-dom";
import { useAddMoneyMutation } from "../../../redux/baseApi";

const AddMoneyForm = () => {

    const transactionType = useParams().type
    const [ addMoney ] = useAddMoneyMutation()
    console.log(transactionType)


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
            const amount = Number(form.amount.value)
    
            
            const transactionInfo = await addMoney({amount, transactionType}).unwrap()
            console.log(transactionInfo)  
        }

    return (
        <div className="absolute bg-white text-blue-900 rounded-2xl p-6 border-blue-900 border-1">
            <p className="text-4xl font-bold text-center pb-4">{transactionType && transactionType.replace("-", " ").toUpperCase()}</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label>Amount:
                    <input name="amount" type="number" />
                </label>
                <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">submit</button>
            </form>
        </div>
    )
};

export default AddMoneyForm;