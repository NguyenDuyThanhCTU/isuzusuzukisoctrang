import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { getDocuments } from "../../firebase/services";
import ItemSecondFeatures from "../Item/ItemSecondFeatures";

const Option = ({ text, type }) => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const data = getDocuments("cars", type);
    data
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Error getting collection data:", error);
      });
  }, []);
  console.log(Data);

  return (
    <div className="mx-44 ">
      <div>
        <h3 className="font-poppins font-bold text-[44px] mt-[55px] mb-[25px] uppercase">
          {text}
        </h3>
      </div>

      <div className="bg-[#FDF5F7] mb-[50px] ">
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
                  nameItem={data.name}
                  image={data.image}
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
