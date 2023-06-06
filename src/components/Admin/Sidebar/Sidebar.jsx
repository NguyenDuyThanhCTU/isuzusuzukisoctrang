import React from "react";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
const Sidebar = ({ click, option }) => {
  return (
    <div className="w-[350px] bg-black flex items-center flex-col justify-between h-[937px] text-white font-inter">
      <div className="mx-6 mt-12">
        <h3 className="text-[26px] font-semibold text-center">
          Xe tải ISUZU <br /> Cẩm phong Sóc Trăng
        </h3>
        <div className="flex flex-col gap-3 mt-11">
          <button
            className={`py-3 px-20 ${
              option === false
                ? "bg-blueAdmin rounded-lg"
                : "text-white rounded-lg"
            }`}
            onClick={() => click(false)}
          >
            Đơn hàng
          </button>
          <button
            className={`py-3 px-20 ${
              option === true
                ? "bg-blueAdmin rounded-lg"
                : "text-white rounded-lg"
            }`}
            onClick={() => click(true)}
          >
            Danh sách video
          </button>
        </div>
      </div>
      <div className="mb-14 flex ">
        <Link to="/">
          <button className="py-3 px-28 bg-gray-700 rounded-lg">
            <BiLogOut className="inline-block mr-2" />
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
