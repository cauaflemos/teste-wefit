import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/index.tsx";
import { GlobalStyle } from "./themes/globalStyle/index.tsx";
import { CartProvider } from "./context/cartContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <GlobalStyle />
      <CartProvider>
        <RouterProvider router={AppRoutes} />
      </CartProvider>
  </React.StrictMode>
);
