import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Dashboard from "../layout/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <PrivetRoute><Home /></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard /></PrivetRoute>
    }
]);
export default router;