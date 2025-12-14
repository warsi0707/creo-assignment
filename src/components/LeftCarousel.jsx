import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function LeftCarousel({className, img1, img2, img3}){
    return (
        <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={` w-full object-cover rounded-md mx-auto ${className}`}
      >
        <SwiperSlide className={`text-center text-2xl object-center rounded-3xl ${className}`}>
          <img
            className="h-full w-full object-fill"
            src={img1}
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide className={`text-center text-2xl object-center rounded-3xl ${className}`}>
          <img
            className="h-full w-full object-fill"
            src={img2}
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide className={`text-center text-2xl object-center rounded-3xl ${className}`}>
          <img
            className="h-full w-full object-fill"
            src={img3}
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        
      </Swiper>
    </>
    )
}