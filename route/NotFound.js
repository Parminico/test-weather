import { NavLink } from "react-router-dom";

export default function NotFound () {
    return (
        <>
            <h1>Page not found!</h1>
            <button>
                <NavLink to='/'>
                    Go to Home
                </NavLink>
            </button>
        </>
    )
}