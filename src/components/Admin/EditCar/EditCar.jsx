import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const EditCar = ({ edit }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute">
      <div className="w-[1500px] h-[700px] absolute bg-white bottom-[15%] left-[12%] flex font-LexendDeca cursor-pointer rounded-sm ">
        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => edit(false)}
        />
      </div>
    </div>
  );
};

export default EditCar;
