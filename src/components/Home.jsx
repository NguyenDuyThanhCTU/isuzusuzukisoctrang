import React from "react";
import Introduction from "./widgets/Introduction";
import FirstFeatures from "./widgets/FirstFeatures";
import Option from "./widgets/Option";
import FourthFeatures from "./widgets/FourthFeatures";

const Home = () => {
  return (
    <>
      {" "}
      <Introduction />
      <div id="firstFeatures">
        <FirstFeatures />
      </div>
      <div>
        <Option text="Thùng mui bạc" type="thùng mui bạt" />
        <Option text="Thùng kín" type="thùng kín " />
        <Option text="Thùng lững" type="Thùng lững" />
        <Option text="Thùng chuyên dụng" type="thùng chuyên dụng" />
        <Option text="Xe suzuki" type="xe suzuki" />
      </div>
      <div id="secondFeatures">
        <FourthFeatures />
      </div>
    </>
  );
};

export default Home;
