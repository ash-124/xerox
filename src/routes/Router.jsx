import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import AddProduct from "../pages/AddProduct";
import AllProductPage from "../pages/AllProductPage";

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
            },
            {
                path:'add-product',
                element:<AddProduct/>
            },
            {
                path:'all-products',
                element:<AllProductPage/>
            }
        ]
    }
])