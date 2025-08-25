import { useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../../../redux/baseApi";
import type { IUser } from "../slice/auth.slice";
import { useDispatch } from "react-redux";
import { setUser } from "../slice/auth.slice";


const Login = () => {

    const [ userLogin ] = useUserLoginMutation()
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
                name: userInfo.data.name,
                phone: userInfo.data.phone,
                role: userInfo.data.role,
                wallet: userInfo.data.wallet
            }
            console.log(userInfo)
            dispatch(setUser(payload))
            navigate(`/dashboard/${userInfo.data.role.toLowerCase()}`)
        }
    }



    return (
        <>
        <div className="flex flex-col items-center border-blue-900 border-[2px] rounded-2xl p-5 gap-2 mb-10">
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
        </>
    );
};

export default Login;