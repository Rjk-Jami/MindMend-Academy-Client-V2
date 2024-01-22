import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

 
const Banner = () => {
    return (
        <>
        <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>

        <div className='  flex gap-1 flex-col md:flex-row-reverse justify-center items-center container mx-auto'>
                <div className=" w-1/2">
                <img className=' w-fit  mx-auto' src="https://i.ibb.co/Vggpj7h/landing.png" alt="" />
                </div>
                <div className=" w-1/2">
                <div className=" text-sm text-center lg:text-3xl font-semibold mb-2">
            <p>
            Anywhere, anytime. Start learning today!
            </p>
            </div>
                    
                </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className='  flex gap-1 flex-col md:flex-row  justify-center items-center container mx-auto'>
                <div className=" w-1/2">
                <img className=' w-fit  mx-auto' src="https://i.ibb.co/Vggpj7h/landing.png" alt="" />
                </div>
                <div className=" w-1/2">
                <div className=" text-sm text-center lg:text-3xl font-semibold mb-2">
            <p>
            Anywhere, anytime. Start learning today!
            </p>
            </div>
                    
                </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
       
        </>
    );
};

export default Banner;