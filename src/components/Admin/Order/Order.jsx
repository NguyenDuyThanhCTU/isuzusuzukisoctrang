import React, { useEffect, useState } from "react";
import { getDocuments1 } from "../../../firebase/services";

const Order = ({ edit }) => {
  const [Data, setData] = useState();
  useEffect(() => {
    getDocuments1("Products")
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="shadow-inner mx-10">
      <div className="mt-32 mx-20">
        <h2 className="text-[25px] ">Danh sách xe </h2>
        <div className="mt-5 ">
          <div className="flex  gap-36 font-bold">
            <p>STT</p>
            <p>Id xe</p>
            <p>Thông tin xe</p>
          </div>
          <div className=" my-4 border-t border-b ">
            {Data?.map((data, index) => (
              <div className="my-2 flex  justify-between w-[850px] items-center">
                <p>{index + 1}</p>
                <p>{data.id}</p>
                <div className="flex items-center">
                  <img
                    className="rounded-full w-10 h-10"
                    src={data.hinhanh}
                    alt="img"
                  />
                  <p className="ml-2">{data.tenxe}</p>
                </div>
                <div>
                  <button
                    className="px-6 py-3 rounded-md bg-blueAdmin text-white"
                    onClick={() => edit(true)}
                  >
                    Chỉnh sửa
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Order;
