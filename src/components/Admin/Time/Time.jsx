import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
const Time = ({ upload }) => {
  const [select, setSelect] = useState("");

  const style = "border py-3 hover:border-blue-400 uppercase";
  const Selected =
    "bg-blue-400 text-white py-3 uppercase border border-blue-900";
  return (
    <div className="w-[350px] bg-yelloAdmin flex items-center flex-col justify-between h-[937px] text-white font-inter">
      <div className="mx-6 mt-12">
        <div className="text-grayAdmin">
          <h3 className="text-[38px] text-grayAdmin1">Chào buổi sáng !</h3>
          <p className="text-[16px]">Ngày ...</p>
        </div>
        <div className="mt-5 bg-white rounded-md ">
          <h3 className="text-center text-[20px] uppercase bg-blue-100 text-black py-7">
            Chọn loại xe
          </h3>

          <div className="text-black flex flex-col gap-1">
            <button
              className={`${select === 1 ? Selected : style}`}
              onClick={() => setSelect(1)}
            >
              thùng lững
            </button>
            <button
              className={`${select === 2 ? Selected : style}`}
              onClick={() => setSelect(2)}
            >
              thùng mui bạt
            </button>
            <button
              className={`${select === 3 ? Selected : style}`}
              onClick={() => setSelect(3)}
            >
              thùng kín
            </button>
            <button
              className={`${select === 4 ? Selected : style}`}
              onClick={() => setSelect(4)}
            >
              thùng chuyên dụng
            </button>
            <button
              className={`${select === 5 ? Selected : style}`}
              onClick={() => setSelect(5)}
            >
              xe suzuki
            </button>
          </div>
        </div>
      </div>
      <div className="mb-36 flex ">
        <button
          className="py-3 px-20 bg-orange-500 rounded-lg"
          onClick={() => upload(true)}
        >
          <AiOutlineUpload className="inline-block mr-2 text-[25px]" />
          Thêm mới
        </button>
      </div>
    </div>
  );
};

export default Time;
{
  /* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 14H14V21H21V14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14H3V21H10V14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 3H14V10H21V3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 3H3V10H10V3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */
}
