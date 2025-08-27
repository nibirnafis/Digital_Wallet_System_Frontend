import { useNavigate, useParams } from "react-router-dom";
import { useTransferMoneyMutation } from "../../../redux/baseApi";
import { useDispatch, useSelector} from "react-redux";
import { setUser } from "../../../features/Auth/slice/auth.slice";
import type { IUser } from "../../../features/Modules/User/User.type";
import type { RootState } from "../../../redux/configureStore";
import { useState } from "react";

const TransactionForm = () => {

    const transactionType = useParams().type
    const user = useSelector((state: RootState) => state.auth.user)
    const dispatch = useDispatch()
    const [ updateUserWalletStatus, {isError} ] = useTransferMoneyMutation()
    const navigate = useNavigate()
    const [ er, setEr ] = useState(null)

    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const phone = form.phone.value
        const amount = Number(form.amount.value)

        
        
    try {
        const transactionInfo = await updateUserWalletStatus({phone, amount, transactionType}).unwrap()
        if(transactionInfo.success){
        const updatedUser = transactionInfo.data.senderUpdatedWallet.userId
        const updatedWallet = transactionInfo.data.senderUpdatedWallet
        console.log(updatedUser, updatedWallet)

        const payload: IUser = {
            _id: updatedUser._id,
            name: updatedUser.name,
            phone: updatedUser.phone,
            role: updatedUser.role,
            isBlocked: updatedUser.isBlocked,
            isDeleted: updatedUser.isDeleted,
            wallet: updatedWallet
        }
        dispatch(setUser(payload))
        navigate(`/dashboard/${user!.role}`)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        console.log("this is the error", err)
        setEr(err.data.message)
    }
        
    }

    return (
        <>
        <div className="absolute bg-white text-blue-900 rounded-2xl p-6 border-blue-900 border-1">
            <p className="text-4xl font-bold text-center pb-4">{transactionType && transactionType.replace("-", " ").toUpperCase()}</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label>Reciever's Number:
                    <input name="phone" type="text" />
                </label>
                <label>Amount:
                    <input name="amount" type="number" />
                </label>
                <p className="text-gray-300 text-sm">MINIMUM TRANSACTION AMOUNT IS 10</p>
                {
                isError && <p className="text-red-600">{er}</p>
                }
                <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">submit</button>
            </form>
        </div>
        </>
    );
}; 

export default TransactionForm;