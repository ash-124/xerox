import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            }
        ]
    }
])