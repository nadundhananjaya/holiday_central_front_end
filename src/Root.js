import {Outlet} from "react-router-dom";
import NavigationBar from "./component/NavigationBar/NavigationBar";
// import TopNav from "./components/TopNav/TopNav";

const Root = () => {
    return <>
        <main>
            <Outlet/>
        </main>
    </>
}
export default Root
