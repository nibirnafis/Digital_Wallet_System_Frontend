import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateUserStatusMutation } from "../../../redux/baseApi";
import type { RootState } from "../../../redux/configureStore";
import { setUpdatedUserStatus } from "../../../features/Auth/slice/searchedUserInfo.slice";
import type { IUser } from "../../../features/Modules/User/User.type";


const UpdateUserStatusFrom = () => {

    const id = useParams().id
    const userInfo = useSelector((state: RootState) => state.searchedUserInfo.userInfo)
    const dispatch = useDispatch()
    const [ updateUserStatus ] = useUpdateUserStatusMutation()
    const navigate = useNavigate()
        


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
            const isBlocked = form.isBlocked.value === "True" ? true : false
            
            const updatedUser = await updateUserStatus({isBlocked, id}).unwrap()

            if(updatedUser.success){
                const user = updatedUser.data

                const payload: IUser = {
                    _id: user._id,
                    name: user.name,
                    phone: user.phone,
                    role: user.role,
                    isBlocked: user.isBlocked,
                    isDeleted: user.isDeleted,
                    wallet: user?.wallet
                }
                dispatch(setUpdatedUserStatus(payload))
                navigate("/dasboard/admin")
            }
        }

    return (
        <div className="absolute bg-white text-blue-900 rounded-2xl p-6 border-blue-900 border-1">
            <p className="text-4xl font-bold text-center pb-4">UPDATE USER STATUS</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                {
                !userInfo?.isBlocked ?
                <div>
                    <p>USER IS CORRENTLY UNBLOCKED. BLOCK USER?</p>
                    <label>YES
                        <input name="isBlocked" type="checkbox" value="True"/>
                    </label>
                </div>
                :
                <div>
                    <p>USER IS CORRENTLY BLOCKED. UNBLOCK USER?</p>
                    <label>YES
                        <input name="isBlocked" type="checkbox" value="Fasle"/>
                    </label>
                </div>
                }
                <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">submit</button>
            </form>
        </div>
    )
};

export default UpdateUserStatusFrom;