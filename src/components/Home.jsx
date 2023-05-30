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
        <Option text="Thùng mui bạc" type="muibat" />
        <Option text="Thùng kín" type="thungkin" />
        {/*<Option text="Thùn lững" />
    <Option text="Thùn ben" />
    <Option text="Thùn cẩu" /> */}
      </div>
      {/* <div>
        <SecondFeatures />
      </div> */}
      {/* <div className="">
    <ThirdFeatures />
  </div> */}
      <div id="secondFeatures">
        <FourthFeatures />
      </div>
    </>
  );
};

export default Home;
