import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import ItemFirstFeatures from "../Item/ItemFirstFeatures";

// import required modules

const FourthFeatures = () => {
  const slides = [
    {
      uid: "id1",
      url: "https://www.youtube.com/embed/KXu0F0sNDJM",
    },
    {
      uid: "id1",
      url: "https://www.youtube.com/embed/CD7CqidP86s",
    },
    {
      uid: "id1",
      url: "https://www.youtube.com/embed/VpC1MrySar8",
    },
  ];
  return (
    <div className="mx-44">
      <div>
        <h3 className="font-poppins font-bold text-[44px] mt-[55px] mb-[25px] uppercase">
          Video giới thiệu
        </h3>
      </div>

      <div className="bg-[#FDF5F7] mb-[50px]">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={10}
          loop={true}
          className="mySwiper"
        >
          {slides.map((data) => (
            <SwiperSlide key={data.uid}>
              <div className="swiper-slide2 max-w-[200px] h-[298px] inline-block z-0 ">
                <ItemFirstFeatures url={data.url} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FourthFeatures;
