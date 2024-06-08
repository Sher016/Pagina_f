// import { useContext } from "react";
// import { Outlet, useOutletContext } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { UserContext } from "../../contexts/userContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout() {

    // const [setIsLogged] = useOutletContext()
    // const user = useContext(UserContext);

    return (
        <>
            <Navbar></Navbar>
            {/* <header>
                <h1>X Clone</h1>
                <p>{user?.name}</p>
                <button onClick={() => setIsLogged(false)}>Log Out</button>
            </header> */}
            <Outlet />
            <Footer></Footer>
        </>
    )
}

export default Layout