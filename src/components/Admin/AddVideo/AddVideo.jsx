import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCloudUploadAlt, FaSpinner } from "react-icons/fa";
import { data } from "../../../utils/ListTypeCar";
import Input from "../AddCar/Input/Input";
import { addDocument } from "../../../firebase/services";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";

const AddVideo = ({ upload }) => {
  const [videoUrl, setVideoUrl] = useState();
  const [tenvideo, setTenVideo] = useState("");
  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const handleDiscard = () => {
    setVideoUrl();
    setTenVideo("");
  };

  const HandleSubmit = () => {
    if (!videoUrl || !tenvideo) {
      alert("Video và tên video không được trống");
    } else {
      const data = {
        video: videoUrl,
        ten: tenvideo,
      };
      console.log(data);
      addDocument("Videos", data).then(upload(false));
    }
  };
  console.log(videoUrl);
  const uploadImage = async (e) => {
    let selectImage = e.target.files[0];
    const filetypes = ["video/mp4", "video/webm", "video/ogg"];

    if (filetypes.includes(selectImage.type)) {
      setLoading(true);
      const storage = getStorage();
      const storageRef = ref(storage, `videos/${selectImage.name}`);

      uploadBytes(storageRef, selectImage)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");

          getDownloadURL(snapshot.ref)
            .then((url) => {
              setVideoUrl(url);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute">
      <div className="w-[1500px] h-[700px] absolute bg-white bottom-[15%] left-[12%] flex font-LexendDeca cursor-pointer rounded-sm ">
        {Loading && (
          <div class="z-[100] fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 flex justify-center items-center">
              <div className="text-xl font-bold text-primary flex flex-col items-center">
                <FaSpinner className="animate-spin text-2xl text-black " />
                <div className="text-xl font-bold text-white animate-pulse pt-1 text-center">
                  Đang tải lên video...
                  <p>Có thể mất 3-5p.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="justify-center   w-full flex items-center gap-20">
          <div className="">
            <div className="">
              <p className="text-2xl font-bold">Tải Video lên</p>
              <p className="text-md text-gray-400 mt-1">
                Chọn ảnh sản phẩm của bạn
              </p>
            </div>
            <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
              {videoUrl ? (
                <div>
                  <iframe
                    className="w-[100%] h-[100%] object-cover rounded-lg"
                    width="150"
                    height="100"
                    src={videoUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <label>
                    <p className="bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                      Chọn lại
                    </p>
                    <input
                      id="fileInput"
                      type="file"
                      onChange={(e) => uploadImage(e)}
                      className="w-0 h-0"
                    />
                  </label>
                </div>
              ) : (
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-xl">
                        <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                      </p>
                      <p className="text-xl font-semibold">
                        Chọn hình video để tải lên
                      </p>
                    </div>
                    <p className="text-gray-400  text-center mt-10 text-sm leading-10">
                      Định dạng video/mp4, video/webm hoặc video/ogg <br />
                    </p>
                    <p className="bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                      Chọn từ thiết bị
                    </p>
                  </div>
                  <input
                    type="file"
                    onChange={(e) => uploadImage(e)}
                    className="w-0 h-0"
                    id="fileInput"
                  />
                </label>
              )}
            </div>
            {error && (
              <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                Vui lòng chọn đúng định dạng
              </p>
            )}
          </div>
          <div className="flex items-center gap-10">
            <form class=" max-w-lg w-[500px]">
              <Input text="Tên video" Value={tenvideo} setValue={setTenVideo} />
            </form>
            <div className="flex flex-col gap-3 pb-10">
              <div className="flex gap-6 mt-10">
                <button
                  onClick={() => handleDiscard()}
                  type="button"
                  className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
                >
                  Xóa
                </button>
                <button
                  //disabled={videoAsset?.url ? false : true}
                  onClick={() => HandleSubmit()}
                  type="button"
                  className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
                >
                  Tải lên
                </button>
              </div>
            </div>
          </div>
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => upload(false)}
        />
      </div>
    </div>
  );
};

export default AddVideo;
