import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import { AllRoutes } from "./Routes";
import AppProvider from "./Context/AppProvider";
const App = () => {
  return (
    <Router>
      {/* <AppProvider> */}
      <Routes>
        {AllRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.Layout) Layout = route.Layout;
          else Layout = DefaultLayout;

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
      {/* </AppProvider> */}
    </Router>
  );
};

export default App;
