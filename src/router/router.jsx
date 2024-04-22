import Market from "../pages/Market.jsx";
import {createBrowserRouter} from "react-router-dom";
import Product from "../pages/Product.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Market/>
    },
    {
        path: "/product/:id",
        element: <Product/>
    },
]);

export default router;