import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../components/Home/Home";
import AllProduct from "../components/AllProducts/AllProduct";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyProducts from "../components/MyProducts/MyProducts";
import MyBids from "../components/MyBids/MyBids";
import CreateProducts from "../components/CreateProducts/CreateProducts";
import PrivitePage from "../components/PrivitePage/PrivitePage";
import ProductsDitails from "../components/ProductsDitails/ProductsDitails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allproduct",
        Component: AllProduct,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/myProducts",
        element: (
          <PrivitePage>
            <MyProducts />
          </PrivitePage>
        ),
      },
      {
        path: "/myBids",
        element: (
          <PrivitePage>
            <MyBids />
          </PrivitePage>
        ),
      },
      {
        path: "/createProducts",
        element: (
          <PrivitePage>
            <CreateProducts />
          </PrivitePage>
        ),
      },
      {
        path: "/product-ditails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: (
          <PrivitePage>
            <ProductsDitails />
          </PrivitePage>
        ),
      },
    ],
  },
]);
