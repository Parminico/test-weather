import {useRouteError} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default function Error () {
    const error = useRouteError();
    return (
        <>
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <button>
                <NavLink to='/'>
                    Go to Home
                </NavLink>
            </button>
        </>
    )
}