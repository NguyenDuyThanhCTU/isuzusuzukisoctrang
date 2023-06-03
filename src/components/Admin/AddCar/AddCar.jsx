import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import { data } from "../../../utils/ListTypeCar";
import Input from "./Input/Input";
import { addDocument } from "../../../firebase/services";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";

const AddCar = ({ upload }) => {
  const [imageUrl, setImageUrl] = useState();
  const [Kythuat, setKythuat] = useState("");
  const [Trangthietbi, setTrangthietbi] = useState("");
  const [Kichthuoc, setKichthuoc] = useState("");
  const [Thongso, setThongso] = useState("");
  const [Colop, setColop] = useState("");
  const [Loaixe, setLoaixe] = useState("");
  const [Tenxe, setTenxe] = useState("");
  const [Mauson, setMauson] = useState("");
  const [Ghichu, setGhiChu] = useState("");
  const [Baohanh, setBaohanh] = useState("");
  const [error, setError] = useState(false);

  const handleDiscard = () => {
    setImageUrl();
    setKythuat("");
    setTrangthietbi("");
    setKichthuoc("");
    setThongso("");
    setColop("");
    setLoaixe("");
    setTenxe("");
    setMauson("");
    setGhiChu("");
    setBaohanh("");
  };

  const HandleSubmit = () => {
    const data = {
      hinhanh: imageUrl,
      kythuat: Kythuat,
      trangthietbi: Trangthietbi,
      kichthuoc: Kichthuoc,
      thongso: Thongso,
      colop: Colop,
      loaixe: Loaixe,
      tenxe: Tenxe,
      mauson: Mauson,
      ghichu: Ghichu,
      baohanh: Baohanh,
    };
    addDocument("Products", data).then(upload(false));
  };

  const uploadImage = async (e) => {
    let selectImage = e.target.files[0];
    const filetypes = ["image/jpeg", "image/jpg", "image/png"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      const storageRef = ref(storage, `sanpham/${selectImage.name}`);

      uploadBytes(storageRef, selectImage)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");

          getDownloadURL(snapshot.ref)
            .then((url) => {
              setImageUrl(url);
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
        <div className="justify-center   w-full flex items-center gap-20">
          <div className="">
            <div className="">
              <p className="text-2xl font-bold">Tải ảnh lên</p>
              <p className="text-md text-gray-400 mt-1">
                Chọn ảnh sản phẩm của bạn
              </p>
            </div>
            <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
              {imageUrl ? (
                <div>
                  <img
                    src={imageUrl}
                    className="w-[100%] h-[100%] object-cover"
                    alt=""
                  />
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
                        Chọn hình ảnh để tải lên
                      </p>
                    </div>
                    <p className="text-gray-400  text-center mt-10 text-sm leading-10">
                      Định dạng jpg hoặc png <br />
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
              <Input
                text="Đặt tính kỹ thuật"
                Value={Kythuat}
                setValue={setKythuat}
              />
              <Input
                text="Trang thiết bị theo tiêu chuẩn"
                Value={Trangthietbi}
                setValue={setTrangthietbi}
              />
              <Input
                text="Kích thước xe"
                Value={Kichthuoc}
                setValue={setKichthuoc}
              />
              <Input text="Thông số" Value={Thongso} setValue={setThongso} />
              <Input text="Cỡ lốp xe" Value={Colop} setValue={setColop} />
            </form>
            <div className="flex flex-col gap-3 pb-10">
              <label className="text-md font-medium ">Loại xe</label>
              <select
                className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                onChange={(e) => {
                  setLoaixe(e.target.value);
                }}
              >
                {data.map((item) => (
                  <option
                    key={item._id}
                    className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                    value={item._id}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="tenXe"
                >
                  Tên xe
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="tenXe"
                  type="text"
                  placeholder="Nhập tên xe"
                  value={Tenxe}
                  onChange={(e) => setTenxe(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="mauSon"
                >
                  Màu sơn
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mauSon"
                  type="text"
                  placeholder="Nhập màu sơn"
                  value={Mauson}
                  onChange={(e) => setMauson(e.target.value)}
                />
              </div>
              <Input text="Ghi chú" Value={Ghichu} setValue={setGhiChu} />

              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="baoHanh"
                >
                  Bảo hành
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Baohanh"
                  type="text"
                  value={Baohanh}
                  placeholder="Nhập thời gian bảo hành"
                  onChange={(e) => setBaohanh(e.target.value)}
                />
              </div>
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

export default AddCar;
