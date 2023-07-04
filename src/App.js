import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Contect from "./pages/contect/Contect";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Product from "./pages/product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: true ? <Layout /> : <p>Please Authenticate!</p>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [{
          path: "/home/:id",
          element: <Home />
        }]
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/contect",
        element: <Contect />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <h1>Page not found!</h1>,
  },
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;