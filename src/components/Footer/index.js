
import React from 'react'
import Image from "next/image";
import Playstore from "../../../public/images/playstore.jpg";
import Appstore from "../../../public/images/appstore.jpg";

export default function Footer() {
    return (
        <div className='relative px-12 mb-10 flex flex-col'>
            <div className='flex justify-around pt-28 px-12 mb-20'>
                {/* Jaddo. */}
                <div className='text-gray-700'>
                    <h6 className='text-gray-900 text-4xl mb-4 font-sans'>Jaddo.</h6>
                    <p className='w-72 text-gray-500 italic'>Book your trip in minute, get full
                        Control for much longer.
                    </p>
                </div>

                {/* component */}
                <div className='text-gray-700 pt-3'>
                    <h6 className='text-gray-900 text-2xl mb-10 leading-3'>component</h6>
                    <ul className='text-gray-500'>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Corneers</li>
                        <li className='py-1'>Mobile</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className='text-gray-700 pt-3'>
                    <h6 className='text-gray-900 text-2xl mb-10 leading-3'>Contact</h6>
                    <ul className='text-gray-500'>
                        <li className='py-1'>Help/FAQ</li>
                        <li className='py-1'>Press</li>
                        <li className='py-1'>Affilates</li>
                    </ul>
                </div>

                {/* More */}
                <div className='text-gray-700 pt-3'>
                    <h6 className='text-gray-900 text-2xl mb-10 leading-3'>More</h6>
                    <ul className='text-gray-500'>
                        <li className='py-1'>Airlinefees</li>
                        <li className='py-1'>Airline</li>
                        <li className='py-1'>Low fare tips</li>
                    </ul>
                </div>

                {/* apps */}
                <div className='text-gray-700 pt-4'>
                    <div className='flex justify-evenly space-x-6 mb-3'>
                        {/* fb */}
                        <div className='flex justify-between'>
                            <div className='p-2 flex justify-center items-center rounded-full hover:bg-accent-1 transform transition-all duration-300'>
                                <img src="https://img.icons8.com/material-rounded/24/null/facebook-f--v2.png" />
                            </div>
                        </div>
                        {/* ig */}
                        <div className='flex justify-between'>
                            <div className='p-2 flex justify-center items-center rounded-full hover:bg-accent-1 transform transition-all duration-300'>
                                <img src="https://img.icons8.com/metro/26/null/instagram-new.png" />
                            </div>
                        </div>
                        {/* tweeter */}
                        <div className='flex justify-between'>
                            <div className='p-2 flex justify-center items-center rounded-full hover:bg-accent-1 transform transition-all duration-300'>
                                <img src="https://img.icons8.com/ios-glyphs/30/null/twitter--v1.png" />
                            </div>
                        </div>
                    </div>
                    <h6 className='text-gray-400 italic text-xl mb-3'>Discover our app</h6>
                    <div className='flex space-x-3'>
                        {/* Playstore */}
                        <Image
                            alt="plane"
                            layout="responsive"
                            src={Playstore}
                            priority
                        />
                        {/* Appstore */}
                        <Image
                            alt="plane"
                            layout="responsive"
                            src={Appstore}
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className='mx-auto'>
                <h6 className='text-gray-800 italic font-sans'>All rights reserved@jadoo.co | modified by
                <span className='hover:text-accent-1 transition duration-300'> Kisawa16</span>
                </h6>
            </div>
            <div className='absolute rounded-full w-40 h-40 bg-accent-3 blur-3xl -z-20 top-72 -right-12'></div>
        </div>
    )
}


