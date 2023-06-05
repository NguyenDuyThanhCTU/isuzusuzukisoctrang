import Home from "../components/Home";
import Detail from "../components/Detail";
import AdminPage from "../components/Admin/AdminPage";
import EmptyLayout from "../Layout/EmptyLayout";
import Login from "../components/Login/Login";

export const AllRoutes = [
  { path: "/", component: Home },
  { path: "/post/:id", component: Detail },
  { path: "/admin ", component: AdminPage, Layout: EmptyLayout },
  { path: "/control ", component: AdminPage, Layout: EmptyLayout },
  { path: "/login", component: AdminPage, Layout: EmptyLayout },
];
