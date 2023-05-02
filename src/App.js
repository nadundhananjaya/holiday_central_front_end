import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Root from "./Root";
import ErrorPage from "./Error";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./component/auth/Login";
import FlightList from "./component/Flight/FlightList";
import FlightAdd from "./component/Flight/FlightAdd";
import FlightUpdate from "./component/Flight/FlightUpdate";
import HotelList from "./component/Hotel/HotelList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Login/>,
            },
            //   Flight Routes
            {
                path: "/flight",
                element: <FlightList/>,
            },
            {
                path: "/flight/add",
                element: <FlightAdd/>,
            },
            {
                path: "/flight/update",
                element: <FlightUpdate/>,
            },
            //     Hotel Routes
            {
                path: "/hotel",
                element: <HotelList/>,
            },
        ],
    },
]);

function App() {
    return <div className={'container mh-100'}>
        <RouterProvider router={router}/>
    </div>
}

export default App;
