import React, { useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Item/Button";
import { addDocument, getDocuments } from "../../firebase/services";
import { listSlides } from "../../utils/ListSlides";
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
            <h2 className="font-sora font-bold text-[62px] leading-[72px] text-blue-600">
              Xe Tải ISUZU Cẩm Phong Sóc Trăng
            </h2>
            <p className="font-poppins font-normal text-gray5a w-[486px] pt-[20px] ">
              <strong> Chương trình khuyến mãi đặc biệt:</strong> giảm giá tiền
              mặt lên đến 30 triệu đồng, bảo hành 3 năm không giới hạn km và
              tặng 12 phiếu bảo dưỡng miễn phí. Liên hệ ngay để tận hưởng ưu đãi
              này!
            </p>
            <p className="font-poppins font-normal text-gray5a w-[486px] pt-[20px] mb-[42px]">
              <strong>Dịch vụ:</strong> Lắp hộp đen, Định vị xe ôtô các loại,
              Bán bảo hiểm dân sự, Thân xe, ..
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
              {listSlides.map((slide) => (
                <SwiperSlide>
                  <img
                    className="bg-[#FDF5F7]"
                    alt="introduction"
                    src={slide.image}
                  />
                </SwiperSlide>
              ))}
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
