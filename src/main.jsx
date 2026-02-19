import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import projects from "./projects.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App hasSubdirectory={false} projectData={null} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tempo",
    element: <App hasSubdirectory={true} projectData={projects[0]} />,
  },
  {
    path: "/sircles",
    element: <App hasSubdirectory={true} projectData={projects[1]} />,
  },
  {
    path: "/emusic",
    element: <App hasSubdirectory={true} projectData={projects[2]} />,
  },
  {
    path: "/resumes",
    element: <App hasSubdirectory={true} projectData={projects[3]} />,
  },
  {
    path: "/luka",
    element: <App hasSubdirectory={true} projectData={"luka"} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
