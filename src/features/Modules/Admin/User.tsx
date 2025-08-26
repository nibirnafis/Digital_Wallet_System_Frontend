import type { IUser } from "../../Auth/slice/auth.slice";

interface IProps {
    user: IUser
}


const User = ({user}: IProps) => {

    const { name, phone, role, wallet } = user


    return (
        <div className="flex justify-between items-center border-blue-100 border-2 rounded-xl p-4 text-base text-blue-900">
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Role: {role}</p>
            {
                role === "USER" ||  role === "AGENT" ?
                <div>
                    <p>Balance: {wallet?.balance}TK</p>
                    <p>Wallet: {wallet?.status}</p>
                </div>
                :
                null
            }
        </div>
    );
};

export default User;