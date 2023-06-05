import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { getDocumentsByLoaiXe } from "../../firebase/services";
import ItemSecondFeatures from "../Item/ItemSecondFeatures";

const Option = ({ text, type }) => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    getDocumentsByLoaiXe("Products", type)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Error getting collection data:", error);
      });
  }, []);
  console.log(Data);
  return (
    <div className="desktop:mx-44 phone:mx-4">
      <div>
        <h3 className="font-poppins font-bold text-[44px] mt-[55px] mb-[25px] uppercase">
          {text}
        </h3>
      </div>

      <div className="bg-[#FDF5F7] mb-[50px] desktop:block phone:hidden">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={10}
          loop={true}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {Data?.map((data) => (
            <SwiperSlide
              key={data.id}
              //
            >
              <div className="swiper-slide2  z-0 inline-block pb-5 ">
                <ItemSecondFeatures
                  nameItem={data.tenxe}
                  image={data.hinhanh}
                  id={data.id}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-[#FDF5F7] mb-[50px] phone:block desktop:hidden z-0 ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={10}
          loop={true}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {Data?.map((data) => (
            <SwiperSlide
              key={data.id}
              //
            >
              <div className="swiper-slide2  z-0 inline-block pb-5 ">
                <ItemSecondFeatures
                  nameItem={data.tenxe}
                  image={data.hinhanh}
                  id={data.id}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Option;
