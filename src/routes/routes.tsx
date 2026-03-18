import { createBrowserRouter } from "react-router-dom";
import BootPage from "../pages/bootPage";
import HomePage from "../pages/home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <BootPage />
  },
  {
    path: '/home',
    element: <HomePage />
  }
]);

export default router;