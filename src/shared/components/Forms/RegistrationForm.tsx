import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../redux/baseApi";
import { toast } from 'react-toastify';




const Registration = () => {

    const [ registerUser ] = useRegisterUserMutation()
    const navigate = useNavigate()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const name = (form.elements.namedItem("name") as HTMLInputElement).value
        const phone = (form.elements.namedItem("phone") as HTMLInputElement).value
        const pin = (form.elements.namedItem("pin") as HTMLInputElement).value
        const role = (form.elements.namedItem("role") as HTMLInputElement).value

        
        const userInfo = await registerUser({name, phone, pin, role}).unwrap()
        
        if(userInfo.success){
            console.log(userInfo)
            toast('Registration Successfull')
            navigate("/login")
        }
    }



    return (
        <>
        <div className="w-full">
            <div className="flex flex-col bg-white text-blue-900 max-w-[640px] m-auto rounded-2xl p-6 border-blue-900 border-1">
                <p className="text-4xl font-bold text-center pb-4">Register User</p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label>Name:
                        <input name="name" type="text" />
                    </label>
                    <label>Phone:
                        <input name="phone" type="text" />
                    </label>
                    <label>Pin:
                        <input name="pin" type="number" />
                    </label>
                    <div>
                        <label>
                            <input type="radio" name="role" value="USER"></input>
                        </label> USER
                        <label>
                            <input type="radio" name="role" value="AGENT"></input>
                        </label> AGENT
                    </div>
                    <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">Login</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Registration;