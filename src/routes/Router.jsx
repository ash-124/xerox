import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    }
])