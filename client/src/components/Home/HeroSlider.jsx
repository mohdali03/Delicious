import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroSliderCard from './HeroSliderCard';

function HeroSlider() {
  const slidesData = [
    {
      title: "Get Your Meals Delivered from Curated Home Chefs Around You",
      img: "https://static.toiimg.com/thumb/msid-79064951,imgsize-356946,width-400,resizemode-4/79064951.jpg"
    },
    {
      title: "Food Is Our Common Ground, Universal Experience",
      img: "https://img.freepik.com/free-vector/hand-drawn-indian-cuisine-illustration_23-2149323580.jpg?size=626&ext=jpg"
    },
    {
      title: "Happiness Is The Smell Of Your Favourite Food. Get It Here",
      img: "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-36027.jpg?size=626&ext=jpg"
    },
  ]
  return (
    <div className='px-2 py-2'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((data, index) => (
          <SwiperSlide key={index}>
            <HeroSliderCard title={data.title} img={data.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
