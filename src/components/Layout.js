import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <button className="navbutton">
                        <Link to="/">API Based Implementation</Link>
                    </button>
                    <button className="navbutton">
                        <Link to="/Socket">Socket Based Implementation</Link>
                    </button>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;