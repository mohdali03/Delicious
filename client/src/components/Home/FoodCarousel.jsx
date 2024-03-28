import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper'
import DeliveryCard from './DeliveryCard';

function FoodCarousel() {
    const items = [
        {
            "image": "https://s3.ap-south-1.amazonaws.com/fooddialer.cubeonebiz.com/yummytiffins/product/LightBite_6285fcba73f9b.png",
            "title": "LIGHT BITE"
        },
        {
            "image": "https://s3.ap-south-1.amazonaws.com/fooddialer.cubeonebiz.com/yummytiffins/product/BigBite_6285fc9884896.png",
            "title": "BIG BITE"
        },
        {
            "image": "https://s3.ap-south-1.amazonaws.com/fooddialer.cubeonebiz.com/yummytiffins/product/JumboFeast_6285fd03616d0.png",
            "title": "JUMBO FEAST"
        },
        {
            "image": "https://s3.ap-south-1.amazonaws.com/fooddialer.cubeonebiz.com/yummytiffins/product/buddhabowl2 (1) (1)_62ecd425cfed8.jpg",
            "title": "HEALTHY SUPER BOWL"
        },
        {
            "image": "https://s3.ap-south-1.amazonaws.com/fooddialer.cubeonebiz.com/yummytiffins/product/MiniMeal_6285fcef8b006.png",
            "title": "MINI MEAL"
        }
    ]

    

    return (
        <div>
            <h5 className='font-semibold text-2xl py-2 lg:px-16 md:px-8 px-4'>Inspiration for your first order</h5>
            <div className='px-2.5 py-5 flex items-center justify-center gap-6 flex-wrap'>
                {items.map((item) => (
                    <DeliveryCard {...item} key={item.title}></DeliveryCard>
                ))}
            </div>
        </div>
    )
}

export default FoodCarousel