import Home from "../components/Home";
import Detail from "../components/Detail";
import Admin from "../components/Admin/Admin";
import EmptyLayout from "../Layout/EmptyLayout";
import Login from "../components/Login/Login";

export const AllRoutes = [
  { path: "/", component: Home },
  { path: "/post/:id", component: Detail },
  { path: "/admin", component: Admin, Layout: EmptyLayout },
  { path: "/login", component: Login, Layout: EmptyLayout },
];
