import React, { useState } from "react";

const FirstFeatures = () => {
  const [Click, setClick] = useState(false);
  const [content, setContent] = useState("Xem thêm");

  function handleClick() {
    Click ? setContent("Xem thêm") : setContent("Ngắn gọn");
    setClick((prev) => !prev);
  }
  return (
    <div className=" px-44  bg-white flex flex-col items-center">
      <div className="flex flex-col items-center mt-[39px] ">
        <h3 className="font-poppins font-bold uppercase text-[44px] ">
          CÁC LOẠI XE
        </h3>
        <p className="font-poppins font-normal text-[16px] max-w-[479px] text-center text-gray5a">
          Chào mừng bạn đến với chúng tôi - nhà cung cấp xe tải đa dạng với các
          loại bao gồm: thùng mui bạt, thùng kín, thùng lững, thùng ben và thùng
          cẩu.
        </p>
      </div>
    </div>
  );
};

export default FirstFeatures;
