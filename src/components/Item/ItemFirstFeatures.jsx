import React from "react";

const ItemFirstFeatures = ({ url }) => {
  return (
    <div className="h-[444px] w-[281px] flex flex-col items-center  cursor-pointer">
      <div className="h-[356px] w-[281px] relative img-container">
        <iframe
          className=" rounded-md object-contain"
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <a className="font-poppins font-normal text-center text-[19px] mt-[22px]  hover:font-bold hover:underline rounded-2xl hover cursor-pointer">
        giới thiệu
      </a>
    </div>
  );
};

export default ItemFirstFeatures;
