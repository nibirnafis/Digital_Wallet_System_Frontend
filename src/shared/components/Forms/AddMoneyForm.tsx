import { useNavigate, useParams } from "react-router-dom";
import { useAddMoneyMutation } from "../../../redux/baseApi";
import { setUser, type IUser } from "../../../features/Auth/slice/auth.slice";
import { useDispatch } from "react-redux";

const AddMoneyForm = () => {

    const transactionType = useParams().type
    const dispatch = useDispatch()
    const [ addMoney ] = useAddMoneyMutation()
    const navigate = useNavigate()
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
            const amount = Number(form.amount.value)
    
            
            const transactionInfo = await addMoney({amount, transactionType}).unwrap()

            if(transactionInfo.success){
                const updatedUser = transactionInfo.data.recieverUpdatedWallet.userId
                const updatedWallet = transactionInfo.data.recieverUpdatedWallet
                // console.log(updatedUser, updatedWallet)

                const payload: IUser = {
                    name: updatedUser.name,
                    phone: updatedUser.phone,
                    role: updatedUser.role,
                    wallet: updatedWallet
                }
                dispatch(setUser(payload))
                navigate("/")
            }
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