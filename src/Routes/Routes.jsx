import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Location from "../Pages/Location/Location";
import Shop from "../Pages/Shop/Shop";


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
            }
        ]
    }
])