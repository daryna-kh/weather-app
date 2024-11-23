import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GetGeolocationList } from "./components/GetGeolocationList/GetGeolocationList";
import { HomePage } from "./components/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        // path: "/:location",
        // element: </>,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
