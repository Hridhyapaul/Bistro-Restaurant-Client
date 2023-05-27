import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderFoods from "../Pages/OrderFoods/OrderFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: 'order/:category',
                element: <OrderFoods></OrderFoods>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
]);

export default router;