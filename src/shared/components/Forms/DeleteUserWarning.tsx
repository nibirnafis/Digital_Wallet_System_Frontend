import { useNavigate, useParams } from "react-router-dom";
import { useLazyDeleteUserQuery } from "../../../redux/baseApi";
import { useState } from "react";
import { toast } from 'react-toastify';

const DeleteUserWarning = () => {
    const id = useParams().id
        const [ deleteUser, {isError} ] = useLazyDeleteUserQuery()
        const navigate = useNavigate()
        const [ er, setEr ] = useState(null)            
    
    
        const handleDelete = async () => {

        try {
            const result = await deleteUser({id}).unwrap()
            if(result){
                console.log(result)
                toast('User Successfully Deleted')
                navigate("/dashboard/admin")
            }
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.log("this is the error", err)
            setEr(err.data.message)
        }       
        }
    

        return (
            <div className="absolute bg-white text-blue-900 rounded-2xl p-6 border-blue-900 border-1">
                <p className="text-4xl font-bold text-center pb-4">DELETE THIS USER?</p>
                
                <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">NO</button>
                <button onClick={handleDelete} className="bg-red-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">YES</button>
                {
                    isError && <p className="text-red-600">{er}</p>
                }
            </div>
        )
};

export default DeleteUserWarning;