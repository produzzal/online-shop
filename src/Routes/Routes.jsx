import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Location from "../Pages/Location/Location";
import Shop from "../Pages/Shop/Shop";
import AddItem from "../Pages/AddItem/AddItem";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/location',
                element: <Location></Location>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/addItem',
                element: <AddItem></AddItem>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/logIn',
                element: <Login></Login>
            }
        ]
    }
])