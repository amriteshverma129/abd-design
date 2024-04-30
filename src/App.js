import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
