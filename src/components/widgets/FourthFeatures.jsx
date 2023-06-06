import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ItemFirstFeatures from "../Item/ItemFirstFeatures";
import { getDocuments1 } from "../../firebase/services";

// import required modules

const FourthFeatures = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    getDocuments1("Videos")
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="desktop:mx-44">
      <div>
        <h3 className="font-poppins font-bold text-[44px] mt-[55px] mb-[25px] uppercase  phone:mx-4">
          Video giới thiệu
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
            <SwiperSlide>
              <div className="swiper-slide2 max-w-[200px] h-[298px] inline-block z-0 ">
                <ItemFirstFeatures url={data.video} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-[#FDF5F7] mb-[50px] phone:block desktop:hidden w-screen ">
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
            <SwiperSlide>
              <div className="swiper-slide2 flex mr-10  h-[298px]  z-0 ">
                <ItemFirstFeatures url={data.video} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FourthFeatures;
