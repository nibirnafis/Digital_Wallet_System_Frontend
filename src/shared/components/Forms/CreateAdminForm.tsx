import { useNavigate, useParams } from "react-router-dom";
import { useCreateAdminMutation } from "../../../redux/baseApi";

const CreateAdminForm = () => {
    const actionType = useParams().type
        const [ createAdmin ] = useCreateAdminMutation()
        const navigate = useNavigate()
    
    
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
            const name = (form.elements.namedItem("name") as HTMLInputElement).value
            const phone = (form.elements.namedItem("phone") as HTMLInputElement).value
            const pin = (form.elements.namedItem("pin") as HTMLInputElement).value
            const role = "ADMIN"
                

            const result = await createAdmin({name, phone, pin, role}).unwrap()

            if(result.success){

                console.log(result)
                navigate("/")
            }
        }
    
        return (
            <>
            <div className="absolute bg-white text-blue-900 rounded-2xl p-6 border-blue-900 border-1">
                <p className="text-4xl font-bold text-center pb-4">{actionType && actionType.replace("-", " ").toUpperCase()}</p>
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
                    <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">submit</button>
                </form>
            </div>
            </>
    );
};

export default CreateAdminForm;