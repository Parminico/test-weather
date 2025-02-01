import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from '../route/Error';
import Home from '../route/Home';
import SelectedCityRouter from '../route/SelectedCityRouter';
import NotFound from '../route/NotFound';

export default function AppRouter() {
    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <Error />,
            children: [
                {index: true, element: <Home/>},
                {path: 'city', element: <SelectedCityRouter />},
            ],
        },
        {path: '*', element: <NotFound />}
    ])

    return (
        <RouterProvider router={router}/>
    )
}