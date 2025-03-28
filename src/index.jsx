import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products", element: <Products /> },
  { path: "products/:productId", element: <ProductDetails /> },
  { path: "/about", element: <About /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
