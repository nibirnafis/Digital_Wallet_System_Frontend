import { useNavigate, useParams } from "react-router-dom";
import { useUpdateUserWalletStatusMutation } from "../../../redux/baseApi";


const UpdateWalletStatusForm = () => {

    const id = useParams().id
    const [ registerUser, {isError, error} ] = useUpdateUserWalletStatusMutation()
    const navigate = useNavigate()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const status = (form.elements.namedItem("status") as HTMLInputElement).value

        try {
            const updatefWallet = await registerUser({status, id}).unwrap()
        
            if(updatefWallet.success){
                console.log(updatefWallet)
                navigate("/dashboard/admin")
            }
        } catch (error) {
            console.log("this is the error", error)
        }
        
    }



    return (
        <>

        <div className="absolute bg-white text-blue-900 rounded-2xl p-6 border-blue-900 border-1">
            <p className="text-4xl font-bold text-center pb-4">UPDATE USER WALLET STATUS</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex justify-between">
                    <label>
                        <input type="radio" name="status" value='ACTIVE'></input>
                    </label> ACTIVE
                    <label>
                        <input type="radio" name="status" value='INACTIVE'></input>
                    </label> INACTIVE
                    <label>
                        <input type="radio" name="status" value='PENDING'></input>
                    </label> PENDING
                    <label>
                        <input type="radio" name="status" value='BLOCKED'></input>
                    </label> BLOCKED
                    <label>
                        <input type="radio" name="status" value='SUSPENDED'></input>
                    </label> SUSPENDED
                </div>
                {
                isError && <p className="text-red-600">{error.data.message}</p>
                }
                <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">SUBMIT</button>
            </form>
        </div>

        </>
    );
};

export default UpdateWalletStatusForm;



