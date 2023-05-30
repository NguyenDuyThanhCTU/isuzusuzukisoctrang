import Home from "../components/Home";
import Detail from "../components/Detail";

export const AllRoutes = [
  { path: "/", component: Home },
  { path: "/post/:id", component: Detail },
];
