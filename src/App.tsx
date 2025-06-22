import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header /Header";
import { Footer } from "./components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        // path: "/:location",
        // element: </>,
      },
    ],
  },
]);

export function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
