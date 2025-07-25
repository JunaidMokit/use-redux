
import App from "@/App";
import Task from "@/Feature/Task";
import User from "@/Feature/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/user",
        element: <User/>
      },
      {
        path: "/task",
        element: <Task/>
      }
    ]
  },
]);

export default router;
