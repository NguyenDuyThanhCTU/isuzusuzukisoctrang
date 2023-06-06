import React, { useEffect, useState } from "react";
import { deleteDocument, getDocuments1 } from "../../../firebase/services";
import { AiTwotoneDelete } from "react-icons/ai";

const Video = ({ upload }) => {
  const [Data, setData] = useState();
  const [Delete, setDelete] = useState(false);
  useEffect(() => {
    getDocuments1("Videos")
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [Delete, upload]);

  const HandleDelete = (data) => {
    const confirmation = window.confirm("Bạn có chắc chắn muốn xóa không?");

    if (confirmation) {
      setDelete(!Delete);
      deleteDocument("Videos", data, "video");
    }
  };

  return (
    <div className="flex relative">
      <div className="shadow-inner mx-10 ">
        <div className="mt-5 mx-20">
          <h2 className="text-[25px] ">Danh sách VIDEO</h2>
          <div className="mt-5 ">
            <div className="grid-cols-4 grid gap-10  font-bold">
              <p>STT</p>
              <p>Chi tiết video</p>
              <p>Video</p>
            </div>
            <div className=" my-4 border-t  h-[750px] overflow-y-scroll">
              {Data?.map((data, index) => (
                <div className="my-2 grid grid-cols-4  gap-20   items-center border-b w-[1000px] truncate">
                  <p className="">{index + 1}</p>
                  <p className="truncate">{data.ten}</p>
                  <div className="h-[150px] w-[100px] flex justify-center items-center ">
                    <iframe
                      className=" rounded-md object-contain"
                      width="150"
                      height="100"
                      src={data.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div>
                    <button
                      className="px-6 py-3 rounded-md bg-red-500 hover:bg-red-700 text-white inline-block"
                      onClick={() => HandleDelete(data.video)}
                    >
                      <AiTwotoneDelete className="inline-block mr-2" />
                      Xóa Video
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="px-6 py-3 rounded-md bg-cyan-600 hover:bg-cyan-800 text-white inline-block absolute bottom-24 ml-20 w-44"
          onClick={() => upload(true)}
        >
          Tải lên
        </button>
      </div>
    </div>
  );
};

export default Video;
