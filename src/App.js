import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Root from "./Root";
import ErrorPage from "./Error";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./component/auth/Login";
import FlightList from "./component/Flight/FlightList";
import HotelList from "./component/Hotel/HotelList";
import PackageList from "./component/Package/PackageList";
import Cart from "./component/Cart/Cart";


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
            //     Hotel Routes
            {
                path: "/hotel",
                element: <HotelList/>,
            },
            //     Package Routes
            {
                path: "/package",
                element: <PackageList/>,
            },
            //     Cart Routes
            {
                path: "/cart",
                element: <Cart/>,
            },
            //     Customer Routes
        ],
    },
]);

function App() {
    return <div className={'container mh-100'}>
        <RouterProvider router={router}/>
    </div>
}

export default App;
