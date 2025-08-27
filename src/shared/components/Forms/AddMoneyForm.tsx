import { useNavigate, useParams } from "react-router-dom";
import { useAddMoneyMutation } from "../../../redux/baseApi";
import { useDispatch } from "react-redux";
import type { IUser } from "../../../features/Modules/User/User.type";
import { setUser } from "../../../features/Auth/slice/auth.slice";

const AddMoneyForm = () => {

    const transactionType = useParams().type
    const dispatch = useDispatch()
    const [ addMoney, {isError, error} ] = useAddMoneyMutation()
    const navigate = useNavigate()
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const amount = Number(form.amount.value)

    try {

        const transactionInfo = await addMoney({amount, transactionType}).unwrap()

        if(transactionInfo.success){
            const updatedUser = transactionInfo.data.recieverUpdatedWallet.userId
            const updatedWallet = transactionInfo.data.recieverUpdatedWallet

            const payload: IUser = {
                _id: updatedUser._id,
                name: updatedUser.name,
                phone: updatedUser.phone,
                role: updatedUser.role,
                isBlocked: updatedUser.isBlocked,
                wallet: updatedWallet
            }
            dispatch(setUser(payload))
            navigate("/")
        }
    } catch (err) {
        console.log("this is the error", err, error)
    }}

    

    return (
        <div className="absolute bg-white text-blue-900 rounded-2xl p-6 border-blue-900 border-1">
            <p className="text-4xl font-bold text-center pb-4">{transactionType && transactionType.replace("-", " ").toUpperCase()}</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label>Amount:
                    <input name="amount" type="number" />
                </label>
                {
                isError && <p className="text-red-600">{error.data.message}</p>
                }
                <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">submit</button>
            </form>
        </div>
    )
};

export default AddMoneyForm;