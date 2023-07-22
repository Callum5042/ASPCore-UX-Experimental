import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <h1>Root File</h1>
            <div>
                Hello, I am root
            </div>
            <Outlet />
            <div>
                <Link to="/">Home Link</Link>
            </div>
            <div>
                <Link to="/test">Test Link</Link>
            </div>
        </>
    )
}