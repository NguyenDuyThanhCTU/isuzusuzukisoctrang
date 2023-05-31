import React from "react";
import { BiLogOut } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="w-[350px] bg-black flex items-center flex-col justify-between h-[937px] text-white font-inter">
      <div className="mx-6 mt-12">
        <h3 className="text-[26px] font-semibold text-center">
          Xe tải ISUZU <br /> Cẩm phong Sóc Trăng
        </h3>
        <div className="flex flex-col gap-3 mt-11">
          <button className="py-3 px-20 bg-blueAdmin rounded-lg">
            Dashboard
          </button>
          <button className="py-3 px-20 text-white rounded-lg">
            Notification
          </button>
        </div>
      </div>
      <div className="mb-14 flex ">
        <button className="py-3 px-28 bg-gray-700 rounded-lg">
          <BiLogOut className="inline-block mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
