import React from "react";
import Header from "../components/widgets/Header";
import Footer from "../components/widgets/Footer";
import Subcription from "../components/widgets/Subcription";
import Hotline from "../components/widgets/Hotline";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <div id="Home">
        <Header />
      </div>
      <div> {children}</div>

      <div id="subcription">
        <Subcription />
      </div>
      <div className="fixed bottom-10 right-1 ">
        <Hotline />
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
