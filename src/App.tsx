import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GetGeolocationList } from "./components/GetGeolocationList/GetGeolocationList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetGeolocationList />,
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
