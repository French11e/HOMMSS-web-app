import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Shop from "./Pages/Shop.jsx";
import Product from "./Pages/Product.jsx";
import PageNotFount from "./Pages/PageNotFount.jsx";
import About from "./Pages/About.jsx";
import { SingleProduct } from "./Pages/SingleProduct.jsx";
import HomePage from "./Pages/Homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFount />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Product />,
      },
    ],
  },
  {
    path: "product/:id",
    element: <SingleProduct />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
