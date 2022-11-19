import React, { useState, useRef } from 'react'
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const items = [
    {
        id: "1",
        desc: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        author: "Khalid Kashimiri.jpg",
        role: "Lahore, Pakistan",
    },
    {
        id: "2",
        desc: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        author: "Khidir Karawita.jpg",
        role: "Jeddah, Arab Saudi",
    },
    {
        id: "3",
        desc: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        author: "Ismail Ahmad Kanabawi.jpg",
        role: "Istambul, Turky",
    },
];
export default function Testimonial() {
    const [realSlide, setrealSlide] = useState(0)
    const swiper = useRef()
    return (
        <section className='mb-28'>
            <div className='max-w-7xl mx-auto relative px-4'>
                <div className=' flex flex-col mb-16'>
                    <div className='text-left flex flex-col mb-16 w-5/12'>
                        <h3 className="mb-2 text-gray-500 text-lg">Testimonial</h3>
                        <h3 className="font-serif leading-snug text-gray-900 text-5xl mb-10">
                            What people say about Us.
                        </h3>
                        <ul className='flex gap-x-6'>
                            {items.map((item, i) => {
                                return (
                                    <li
                                        key={item.id}
                                        className={[
                                            'w-2 h-2 rounded-full',
                                            i === realSlide ? "bg-gray-800" : "bg-gray-300",
                                        ].join(" ")}
                                        onClick={() => i !== realSlide && swiper?.current?.slideTo(i)}
                                    ></li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className='w-6/12 flex items-center justify-center relative'>
                    <div className=' absolute -inset-10 -top-20'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                items.map(item => {
                                    return <SwiperSlide key={item.id}>
                                        <div className='relative px-32 pt-20 pb-48'>
                                            <div className='bg-white shadow-great rounded-xl p-6 relative z-20'>
                                                <span className='w-12 h-12 rounded-full absolute top-0 left-0 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 flex-none mr-3'>
                                                    <Image
                                                        alt={item.author}
                                                        layout="responsive"
                                                        height={100}
                                                        width={100}
                                                        src={'/images/testimonial/'+item.author}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
