import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import AdminLayout from "./Layout/AdminLayout";
import { AllRoutes } from "./Routes";
const App = () => {
  return (
    <Router>
      <Routes>
        {AllRoutes.map((route, index) => {
          let Layout = DefaultLayout;

          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
