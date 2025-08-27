import { useNavigate } from "react-router-dom";
import { useLazyGetMyTransactionsQuery, useUserLoginMutation } from "../../../redux/baseApi";
import { useDispatch } from "react-redux";
import { setUser } from "../slice/auth.slice";
import type { IUser } from "../../Modules/User/User.type";


const Login = () => {

    const [ userLogin ] = useUserLoginMutation()
    const [ getMyTransactions ] = useLazyGetMyTransactionsQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const phone = form.phone.value
        const pin = form.pin.value

        
        const userInfo = await userLogin({phone, pin}).unwrap()
        
        if(userInfo.success){
            const payload: IUser = {
                _id: userInfo.data._id,
                name: userInfo.data.name,
                phone: userInfo.data.phone,
                role: userInfo.data.role,
                isBlocked: userInfo.data.isBlocked,
                wallet: userInfo.data.wallet
            }
            dispatch(setUser(payload))
            getMyTransactions(undefined)
            navigate(`/dashboard/${userInfo.data.role.toLowerCase()}`)
        }
    }



    return (
        <>
        <div className="w-full">
            <div className="flex flex-col bg-white text-blue-900 max-w-[640px] m-auto rounded-2xl p-6 border-blue-900 border-1">
                <p className="text-4xl font-bold text-center pb-4">Login</p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label>Enter Phone Number:
                        <input name="phone" type="text" />
                    </label>
                    <label>Enter Pin Number:
                        <input name="pin" type="text" />
                    </label>
                    <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">Login</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;