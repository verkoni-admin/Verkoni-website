import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/services/Services";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const my_router = createBrowserRouter(
    [
        {
            element: <App/>,
            children : [
                {
                    path:'/',
                    element: <Home/>
                },
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path: '/services',
                    element: <Services/>
                },
            ]
        }
    ]
)

export default my_router;