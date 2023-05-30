import React from "react";

const ItemFirstFeatures = () => {
  const handleClick = () => {
    window.location.href = "http://zalo.me/0907115677";
  };
  return (
    <div
      className="h-[444px] w-[281px] flex flex-col items-center  cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-[356px] w-[281px] relative img-container">
        <video
          className="h-[356px] w-[281px] rounded-3xl"
          src="https://www.youtube.com/watch?v=KXu0F0sNDJM"
          alt="xe tải chở thuê giá rẻ"
        />
      </div>
      <a className="font-poppins font-normal text-center text-[19px] mt-[22px]  hover:font-bold hover:underline rounded-2xl hover cursor-pointer">
        giới thiệu
      </a>
    </div>
  );
};

export default ItemFirstFeatures;
