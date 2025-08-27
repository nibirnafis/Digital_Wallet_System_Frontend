import { useNavigate } from "react-router-dom";
import { useSearchUserMutation } from "../../../redux/baseApi";
import { useDispatch } from "react-redux";
import type { ISearchedUser } from "../../../features/Modules/Admin/searchedUser.type";
import { setUserInfo } from "../../../features/Auth/slice/searchedUserInfo.slice";

const SearchUserForm = () => {
    const [ searchUser ] = useSearchUserMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const phone = (form.elements.namedItem("phone") as HTMLInputElement).value            

        const result = await searchUser({phone}).unwrap()

        if(result.success){
            const user = result.data.userInfo
            const transactions = result.data.userTransactions

            const payload: ISearchedUser = {
                userInfo:{
                    _id: user._id,
                    name: user.name,
                    phone: user.phone,
                    role: user.role,
                    isBlocked: user.isBlocked,
                    wallet: user.wallet
                },
                transactions: transactions
            }
            dispatch(setUserInfo(payload))
            navigate("/dashboard/admin/user-profil")
        }
    }

    return (
        <>
        <div className="absolute bg-white text-blue-900 rounded-2xl p-6 border-blue-900 border-1">
            <p className="text-4xl font-bold text-center pb-4">SEARCH USER</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label>Phone:
                    <input name="phone" type="text" />
                </label>
                <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">submit</button>
            </form>
        </div>
        </>
    );
};

export default SearchUserForm;