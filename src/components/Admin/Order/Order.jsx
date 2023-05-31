import React from "react";

const Order = ({ edit }) => {
  return (
    <div className="shadow-inner mx-10">
      <div className="mt-32 mx-20">
        <h2 className="text-[25px] ">Danh sách xe thùng lững</h2>
        <div className="mt-5 ">
          <div className="flex  gap-36 font-bold">
            <p>STT</p>
            <p>Id xe</p>
            <p>Thông tin xe</p>
          </div>
          <div className=" my-4 border-t border-b">
            <div className="my-2 flex  gap-32 items-center">
              <p>1</p>
              <p>NPR85KE4</p>
              <div className="flex items-center">
                <img
                  className="rounded-full w-10 h-10"
                  src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/isuzusuzukisoctrang/muibac6.png"
                  alt="img"
                />
                <p>XE ISUZU NPR85KE4 Thùng Mui bạt</p>
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
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Order;
