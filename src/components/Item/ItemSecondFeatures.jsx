import React from "react";
import { useNavigate } from "react-router-dom";
function ItemSecondFeatures(props) {
  const navigate = useNavigate();
  const { nameItem, image, id } = props;

  const handleClick = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div
      className="w-[360px] h-[450px] bg-[#FDF5F7] img-container  p-5 rounded-b-xl cursor-pointer "
      onClick={handleClick}
    >
      <div className="w-[360px] h-[352px]   p-5">
        <img
          className=" rounded-xl object-contain h-full"
          src={image}
          alt="img"
        />
        <a className=" hover:scale-125 transition duration-500 absolute top-16 right-24 bg-white text-violetf9 rounded-2xl py-[9px] px-[11px]">
          Mua ngay
        </a>
      </div>

      <h3 className="font-poppins font-semibold text-[20px] py-[10px]    hover:font-bold hover:underline">
        {nameItem}
      </h3>
    </div>
  );
}

export default ItemSecondFeatures;
