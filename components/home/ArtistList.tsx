import React from 'react'
import { ArtistCard } from '../utilsComponents/ArtistCard'
import { Artist_list } from '@/data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from './tyles.module.css';
import { FaArrowRight } from "react-icons/fa";
import { ReservCard } from '../utilsComponents/ReservCard';

export const ArtistList = () => {
  return (
    <div className='text-[#FAFAFA] bg-custom-gradient'>
      <div className='mt-[-60px] relative z-10 px-4'>
        <ReservCard/>
      </div>
      <div className='px-4 sm:px-12 lg:px-24 pt-16 sm:pt-24 flex flex-col lg:flex-row justify-between'>
        <div>
        <h2 className='font-bold text-xl sm:text-4xl'>¿Qué artista quieres en tu ciudad?</h2>
        <p className='mt-6 font-semibold text-base  sm:text-xl'>Vota por tus favoritos y los llevamos en concierto.</p>
        </div>
        <button className='hidden mt-4 text-[#18181B] py-2 px-4 rounded-lg lg:flex items-center w-fit h-fit gap-2 bg-[#E4E4E7] hover:bg-transparent hover:text-[#E4E4E7] hover:border-[1px] hover:border-[#E4E4E7]'>Ver todos los artistas <FaArrowRight /></button>
      </div>
      <div className='px-4 sm:px-0 sm:pl-12 lg:pl-24 flex mt-16'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          460:{
            slidesPerView: 1.2
          },
          640:{
            slidesPerView: 1.5
          },
          768:{
            slidesPerView: 2
          },
          850:{
            slidesPerView: 2.2
          },
          1024:{
            slidesPerView: 2.5
          },
          1440: {
            slidesPerView: 3.5
          },
          1536: {
            slidesPerView: 4
          }
        }}
      >
        {
          Artist_list.map(({id, image, title, description, label_tag}) =>(
            <SwiperSlide key={id} className={`${styles['swiper-slide']}`}>
            <ArtistCard
            id={id}
            image={image}
            title={title}
            description={description}
            label_tag={label_tag}
            />
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
      <div className='flex justify-center lg:hidden py-8'>
      <button className='mt-4 text-[#18181B] py-2 px-4 rounded-lg flex items-center w-fit h-fit gap-2 bg-[#E4E4E7] hover:bg-transparent hover:text-[#E4E4E7] hover:border-[1px] hover:border-[#E4E4E7]'>Ver todos los artistas <FaArrowRight /></button>
      </div>
    </div>
  )
}
