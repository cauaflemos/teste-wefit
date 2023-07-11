import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { CartPage } from "../pages/cart";
import { CheckoutPage } from '../pages/checkout/index';

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);
