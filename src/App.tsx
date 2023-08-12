import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AppLayout from "./components/layout/AppLayout";
import Error from "./components/error/Error";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";

import "./styles/global.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
