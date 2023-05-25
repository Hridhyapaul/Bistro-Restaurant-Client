import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'


const CategorySlider = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="max-w-md mx-auto bg-white overflow-hidden rounded-md cursor-pointer">
                    <div className="relative">
                        <img
                            className="w-full h-full object-cover"
                            src={slider1}
                            alt="Card Image"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                            <h2 className="font-bold text-sm lg:text-xl text-center bg-white w-full py-2 lg:py-4 text-black m-2 rounded-md">
                                Salads
                            </h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="max-w-md mx-auto bg-white overflow-hidden rounded-md cursor-pointer">
                    <div className="relative">
                        <img
                            className="w-full h-full object-cover"
                            src={slider2}
                            alt="Card Image"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                            <h2 className="font-bold text-sm lg:text-xl text-center bg-white w-full py-2 lg:py-4 text-black m-2 rounded-md">
                            Pizzas
                            </h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="max-w-md mx-auto bg-white overflow-hidden rounded-md cursor-pointer">
                    <div className="relative">
                        <img
                            className="w-full h-full object-cover"
                            src={slider3}
                            alt="Card Image"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                            <h2 className="font-bold text-sm lg:text-xl text-center bg-white w-full py-2 lg:py-4 text-black m-2 rounded-md">
                            Soups
                            </h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="max-w-md mx-auto bg-white overflow-hidden rounded-md cursor-pointer">
                    <div className="relative">
                        <img
                            className="w-full h-full object-cover"
                            src={slider4}
                            alt="Card Image"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                            <h2 className="font-bold text-sm lg:text-xl text-center bg-white w-full py-2 lg:py-4 text-black m-2 rounded-md">
                            Desserts
                            </h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="max-w-md mx-auto bg-white overflow-hidden rounded-md cursor-pointer">
                    <div className="relative">
                        <img
                            className="w-full h-full object-cover"
                            src={slider5}
                            alt="Card Image"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                            <h2 className="font-bold text-sm lg:text-xl text-center bg-white w-full py-2 lg:py-4 text-black m-2 rounded-md">
                                Salads
                            </h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default CategorySlider;