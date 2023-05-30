import React, { useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Item/Button";
import { addDocument, getDocuments } from "../../firebase/services";

const Introduction = () => {
  const handleFetch = () => {
    // const DetailCars = {
    //   id: "FRR90E4",
    //   name: "XE ISUZU FRR90E4 Thùng kín",
    //   image:
    //     "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/isuzusuzukisoctrang/thungkin5.png",
    // };
    // addDocument("DetailCars", car);
    // const data = getDocuments("cars");
    // setData(data);
    // console.log(Data);
  };
  return (
    <>
      <div className="mt-[180px] ml-[135px] mb-[78px] mr-[113px] flex flex-col items-center ">
        <div className="flex ">
          <div className="h-[430px] w-[537px]">
            <h2 className="font-sora font-bold text-[62px] leading-[72px]">
              Xe Tải ISUZU Cẩm Phong Sóc Trăng
            </h2>
            <p className="font-poppins font-normal text-gray5a w-[486px] pt-[20px] mb-[42px]">
              <strong> Chương trình khuyến mãi đặc biệt:</strong> giảm giá tiền
              mặt lên đến 30 triệu đồng, bảo hành 3 năm không giới hạn km và
              tặng 12 phiếu bảo dưỡng miễn phí. Liên hệ ngay để tận hưởng ưu đãi
              này!
            </p>

            <Button
              text="Chi tiết"
              style="button-white h-[56px] w-[190px] hover:bg-gray-100"
            />
          </div>
          <div className="w-[528px] h-[457px] ml-[127px] ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="mySwiper"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img
                  className="bg-[#FDF5F7]"
                  src="https://firebasestorage.googleapis.com/v0/b/isuzusuzukisoctrang.appspot.com/o/slider%2F1.png?alt=media&token=c49b8914-6442-4688-9cdd-f35396847cb9&_gl=1*1n53b2*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NTQxMTc0NC44LjAuMTY4NTQxMTc0NC4wLjAuMA.."
                  alt="introduction"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="bg-[#FDF5F7]"
                  alt="introduction"
                  src="https://firebasestorage.googleapis.com/v0/b/isuzusuzukisoctrang.appspot.com/o/slider%2F2.png?alt=media&token=849133b6-97f0-418f-a373-70c6998ff75e&_gl=1*1rqomuw*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NTQxMTc0NC44LjEuMTY4NTQxMTc0Ny4wLjAuMA.."
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="bg-[#FDF5F7]"
                  alt="introduction"
                  src="https://firebasestorage.googleapis.com/v0/b/isuzusuzukisoctrang.appspot.com/o/slider%2F3.png?alt=media&token=aadca294-24ba-48fd-bdb1-3ad309afe4c2&_gl=1*79g5fo*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NTQxMTc0NC44LjEuMTY4NTQxMTc0OS4wLjAuMA.."
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img
                    className="bg-[#FDF5F7] min-w-full h-auto object-contain "
                    alt="introduction"
                    src="https://firebasestorage.googleapis.com/v0/b/isuzusuzukisoctrang.appspot.com/o/slider%2F4.png?alt=media&token=ad863c8d-08a3-4f4a-8ced-5156be084e74&_gl=1*1qi5h52*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NTQxMTc0NC44LjEuMTY4NTQxMTc1Mi4wLjAuMA.."
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img
                    className="bg-[#FDF5F7] min-w-full h-auto object-contain "
                    alt="introduction"
                    src="https://firebasestorage.googleapis.com/v0/b/isuzusuzukisoctrang.appspot.com/o/slider%2F5.png?alt=media&token=71dcab6d-665b-4281-b8dc-6763a68acbbe&_gl=1*pk6gku*_ga*MTA1MjQ5NTQ0OS4xNjg0NDAxMjc5*_ga_CW55HF8NVT*MTY4NTQxMTc0NC44LjEuMTY4NTQxMTc1NS4wLjAuMA.."
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="mt-[150px] mb-[20px] w-[985px] h-[120px] flex justify-between items-center px-10 bg-[#FDFEFF] rounded-xl ">
          <div className=" border-[1px] border-gray-200 flex items-start  flex-col p-4 rounded-lg">
            <p className="font-poppins font-light text-gray5a text-[18px]">
              Gọi ngay <strong> 0939 699 629</strong> (A Sĩ) để được hỗ trợ
              <strong> NHANH NHẤT CÓ THỂ</strong>.
            </p>

            <p className="font-poppins font-normal text-gray5a  ">
              <strong>Địa chỉ:</strong> Quốc lộ 1A,ấp Phụng Hiệp, xã An Hiệp,
              huyện Châu Thành, tỉnh Sóc Trăng.
            </p>
          </div>

          <Button
            text="Gọi ngay"
            style="button-violet w-[194px] h-[72px] hover:bg-[#270bc9]"
          />
          {/* <button
            className="button-violet w-[194px] h-[72px] hover:bg-[#270bc9]"
            onClick={() => handleFetch()}
          >
            Gọi ngay
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Introduction;
