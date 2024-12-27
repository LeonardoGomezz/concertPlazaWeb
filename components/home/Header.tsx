import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Concerts } from "@/data/data";
import CalendarIcon from "@/public/icons/calendarIcon";
import LocationIcon from "@/public/icons/locationIcon";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Header = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        className="mySwiper"
        loop={true}
      >
        {Concerts.map(({ id, cover_photo, title, subtitle, dates }) => (
          <SwiperSlide key={id}>
            <div className="relative flex flex-col items-center h-[680px] sm:h-[640px]">
              <img className="w-full h-full object-cover" src={cover_photo} alt={title} />
              <div className="absolute px-4 lg:px-24 w-full mt-20">
                <div className="bg-[#11111399] p-5 rounded-lg max-w-3xl mx-auto lg:mx-0">
                  <h2 className="font-bold text-2xl lg:text-5xl">{title}</h2>
                  <h3 className="font-bold text-lg lg:text-[25px] mt-6">
                    {subtitle}
                  </h3>
                  <p className="font-bold text-base flex gap-2 items-center text-[#9CF3E6]">
                    Ver detalles del evento <MdKeyboardArrowRight />
                  </p>
                </div>
                <div className="mt-4 bg-[#11111399] rounded-lg p-5 w-fit mx-auto lg:mx-0">
                  <ul className="flex flex-col gap-6">
                    {dates.map((it, index) => (
                      <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b-2 border-b-white pb-2 sm:border-b-0">
                        <span className="flex gap-3 items-center font-normal text-base">
                          <CalendarIcon /> {it.date}
                        </span>
                        <span className="flex gap-3 items-center font-normal text-base">
                          <LocationIcon /> {it.location}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
