import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionTitle/SectionHeader";

import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Rating, ThinRoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTestimonials(data)
            })
    }, [])

    const customStyles = {
        itemShapes: ThinRoundedStar,
        activeFillColor: '#f59e0b',
        inactiveFillColor: '#ffedd5',
    };

    return (
        <div className="mt-16 lg:mt-28">
            <SectionHeader heading="TESTIMONIALS" subHeading="What Our Clients Say"></SectionHeader>
            <div className="mt-5">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // When screen size is at least 992px (lg size)
                        992: {
                            slidesPerView: 2,
                        },
                        // When screen size is less than 992px (sm size)
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {
                        testimonials.map(testimonial => <SwiperSlide key={testimonial._id}  >
                            <div className="card mb-10 shadow-lg lg:mt-10 mx-4 lg:mx-2">
                                <div className="card-body h-[520px] lg:h-[450px] text-center">
                                    <img className="w-36 object-cover rounded-full mx-auto" src={testimonial.image} alt="" />
                                    <div className="mt-5 space-y-4">
                                        <p>{testimonial.review}</p>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={testimonial.rating}
                                            itemStyles={customStyles}
                                            readOnly
                                            className="mx-auto"
                                        />
                                        <h1 className="text-xl font-bold">{testimonial.customerName}</h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;