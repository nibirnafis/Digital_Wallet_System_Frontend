import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../shared/components/Home";
import Contact from "../shared/components/Contact";
import FAQ from "../shared/components/FAQ";
import Features from "../shared/components/Features"
import Login from "../features/Auth/components/Login";
import AdminDash from "../features/Modules/Admin/AdminDash";
import UserDash from "../features/Modules/User/UserDash";
import AgentDash from "../features/Modules/Agent/AgentDash";
import TransactionForm from "../shared/components/Forms/TransactionForm";
import AddMoneyForm from "../shared/components/Forms/AddMoneyForm";
import MyTransactions from "../features/transaction/components/MyTransactions";
// import RefreshToken from "../features/Auth/components/RefreshToken";
// import UserActions from "../features/Modules/User/UserActions";




const routes = createBrowserRouter([
    {
        element: <App></App>,
        path: '/',
        children: [
            {
                element: <Home></Home>,
                path: '/',
            },
            {
                element: <Features></Features>,
                path: '/features',
            },
            {
                element: <Contact></Contact>,
                path: '/contact',
            },
            {
                element: <FAQ></FAQ>,
                path: '/faq',
            },
            {
                element: <Login></Login>,
                path: '/login',
            },
            {
                element: <AdminDash></AdminDash>,
                path: '/dashboard/admin',
            },
            {
                element: <UserDash></UserDash>,
                path: '/dashboard/user',
                children: [
                    {
                        element: <TransactionForm></TransactionForm>,
                        path: '/dashboard/user/transaction-form/:type',
                    },
                    {
                        element: <AddMoneyForm></AddMoneyForm>,
                        path: '/dashboard/user/add-money-form/:type',
                    },
                ]
            },
            {
                element: <AgentDash></AgentDash>,
                path: '/dashboard/agent',
                children: [
                    {
                        element: <TransactionForm></TransactionForm>,
                        path: '/dashboard/agent/transaction-form/:type',
                    },
                    {
                        element: <AddMoneyForm></AddMoneyForm>,
                        path: '/dashboard/agent/add-money-form/:type',
                    },
                ]
            },
            {
                element: <MyTransactions></MyTransactions>,
                path: '/dashboard/my-transactions',
            },
            /* {
                element: <RefreshToken></RefreshToken>,
                path: '/refresh-token'
            } */
        ]
    }
])




const Routes = () => {
    return (
        <RouterProvider router={routes}></RouterProvider>
    );
};



export default Routes;