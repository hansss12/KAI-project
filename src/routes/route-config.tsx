import { Navigate, RouteObject } from "react-router";
import DashboardLayout from "../_layouts/dashboard.layout";
import LoggedInRoute from "../_utils/logged-in-route";
import InputRencanaPage, { inputRencanaPath } from "../pages/input-rencana/index.page";
import LoginPage, { LoginPath } from "../pages/login/login.page";

const routeConfig: RouteObject[] = [
  {
    path: "",
    element:
      <LoggedInRoute>
        <DashboardLayout />
      </LoggedInRoute>,
    children: [
      { path: inputRencanaPath, element: <InputRencanaPage /> },
      { path: "not-found", element: <>Page Not Found</> },
      { path: "*", element: <Navigate to="/not-found" /> },
    ],
  },
  {
    path: LoginPath,
    element: <LoginPage />
  },
  {
    path: "*", element: <Navigate to={LoginPath} />
  }
];

export { routeConfig };

