import React, { useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Item/Button";
import { addDocument, getDocuments } from "../../firebase/services";
import { listSlides } from "../../utils/ListSlides";
const Introduction = () => {
  return (
    <>
      <div className="mt-[180px] ml-[135px] mb-[78px] mr-[113px] flex flex-col  items-center ">
        <div className="flex phone:flex-col desktop:flex-row items-center ">
          <div className="h-[430px] desktop:w-[537px] phone:w-screen phone:mb-10">
            <h2 className="font-sora font-bold text-[62px] phone:text-[40px] leading-[72px] text-blue-600">
              Xe Tải ISUZU Cẩm Phong Sóc Trăng
            </h2>
            <p className="font-poppins font-normal text-gray5a desktop:w-[486px] pt-[20px] phone:w-screen">
              <strong> Chương trình khuyến mãi đặc biệt:</strong> giảm giá tiền
              mặt lên đến 30 triệu đồng, bảo hành 3 năm không giới hạn km và
              tặng 12 phiếu bảo dưỡng miễn phí. Liên hệ ngay để tận hưởng ưu đãi
              này!
            </p>
            <p className="font-poppins font-normal text-gray5a desktop:w-[486px] pt-[20px] mb-[42px] phone:w-screen">
              <strong>Dịch vụ:</strong> Lắp hộp đen, Định vị xe ôtô các loại,
              Bán bảo hiểm dân sự, Thân xe, ..
            </p>

            <Button
              text="Chi tiết"
              style="button-white h-[56px] w-[190px] hover:bg-gray-100"
            />
          </div>
          <div className="desktop:w-[528px] desktop:h-[457px] desktop:ml-[127px] phone:mr-5 phone:w-[70vw] phone:h-[300px]">
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
        <div className="desktop:mt-[150px] phone:mt-[50px] mb-[20px] desktop:w-[985px] h-[120px] flex justify-between items-center px-10 bg-[#FDFEFF] rounded-xl phone:flex-col phone:w-screen desktop:flex-row">
          <div className=" border-[1px] border-gray-200 flex items-start  flex-col p-4 rounded-lg ">
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
            style="button-violet w-[194px] desktop:h-[72px] hover:bg-[#270bc9] phone:mt-10 desktop:mt-0 phone:p-5"
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
