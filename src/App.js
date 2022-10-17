import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Profile from "./pages/Profile";
import Page404 from "./pages/Page404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopAut from "./components/ScrollToTopAut";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <ScrollToTopAut />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/*",
        element: <Page404 />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/profile/*",
        element: <Page404 />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/post/*",
        element: <Page404 />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
