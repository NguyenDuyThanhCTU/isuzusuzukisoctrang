import React, { useEffect, useState } from "react";
import { getDocumentsByLoaiXe } from "../../../firebase/services";
import { AiTwotoneDelete } from "react-icons/ai";

const Order = ({ edit, loaixe }) => {
  const [Data, setData] = useState();
  useEffect(() => {
    getDocumentsByLoaiXe("Products", loaixe)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [loaixe]);

  return (
    <div className="shadow-inner mx-10">
      <div className="mt-32 mx-20">
        <h2 className="text-[25px] ">Danh sách xe {loaixe}</h2>
        <div className="mt-5 ">
          <div className="flex  gap-36 font-bold">
            <p>STT</p>
            <p>Id xe</p>
            <p>Loại xe</p>
            <p>Thông tin xe</p>
          </div>
          <div className=" my-4 border-t border-b ">
            {Data?.map((data, index) => (
              <div className="my-2 grid grid-cols-5 gap-5 justify-between w-[850px] items-center">
                <p>{index + 1}</p>
                <p className="truncate">{data.id}</p>
                <p>{data.loaixe}</p>
                <div className="flex items-center truncate">
                  <img
                    className="rounded-full w-10 h-10"
                    src={data.hinhanh}
                    alt="img"
                  />
                  <p className="ml-2 truncate">{data.tenxe}</p>
                </div>
                <div>
                  <button
                    className="px-6 py-3 rounded-md bg-red-500 hover:bg-red-700 text-white inline-block"
                    onClick={() => edit(true)}
                  >
                    <AiTwotoneDelete className="inline-block mr-2" />
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
