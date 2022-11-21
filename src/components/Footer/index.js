
import React from 'react'
import Image from "next/image";
import Playstore from "../../../public/images/playstore.jpg";
import Appstore from "../../../public/images/appstore.jpg";
import Fb from "../../../public/images/sosmed/fb.svg";
import Ig from "../../../public/images/sosmed/ig.svg";
import Twitter from "../../../public/images/sosmed/tweeter.svg";

export default function Footer() {
    return (
        <div className='relative mb-10 flex flex-col max-w-7xl mx-auto'>
            <div className='flex justify-around pt-28 mb-20'>
                {/* Jaddo. */}
                <div className='text-gray-700'>
                    <h6 className='text-gray-900 text-4xl mb-4 font-sans hover:text-accent-1 inline-block transition duration-200'>Jaddo.</h6>
                    <p className='w-72 text-gray-500 italic'>Book your trip in minute, get full
                        Control for much longer.
                    </p>
                </div>

                {/* component */}
                <div className='text-gray-700 pt-3'>
                    <h6 className='text-gray-900 text-2xl mb-10 leading-3'>component</h6>
                    <ul className='text-gray-500'>
                        <li className='py-1 hover:cursor-pointer'>About</li>
                        <li className='py-1 hover:cursor-pointer'>Corneers</li>
                        <li className='py-1 hover:cursor-pointer'>Mobile</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className='text-gray-700 pt-3'>
                    <h6 className='text-gray-900 text-2xl mb-10 leading-3'>Contact</h6>
                    <ul className='text-gray-500'>
                        <li className='py-1 hover:cursor-pointer'>Help/FAQ</li>
                        <li className='py-1 hover:cursor-pointer'>Press</li>
                        <li className='py-1 hover:cursor-pointer'>Affilates</li>
                    </ul>
                </div>

                {/* More */}
                <div className='text-gray-700 pt-3'>
                    <h6 className='text-gray-900 text-2xl mb-10 leading-3'>More</h6>
                    <ul className='text-gray-500'>
                        <li className='py-1 hover:cursor-pointer'>Airlinefees</li>
                        <li className='py-1 hover:cursor-pointer'>Airline</li>
                        <li className='py-1 hover:cursor-pointer'>Low fare tips</li>
                    </ul>
                </div>

                {/* apps */}
                <div className='text-gray-700 pt-4'>
                    <div className='flex justify-evenly space-x-6 mb-3'>
                        {/* fb */}
                        <div className='flex rounded-full group'>
                            <span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gardient-social h-14 w-14 bg-gradient-social absolute rounded-full '>
                                <Fb className="text-gray-800 fill-black h-14 w-14 hover:fill-white transform transition-all  rounded-full p-2 rotate-180 duration-500" />
                            </span>
                            <div className='flex justify-center items-center'>
                                <Fb className="text-gray-800 fill-black h-14 w-14 bg-accent-1 rounded-full p-2 shadow-great" />
                            </div>
                        </div>
                        {/* ig */}
                        <div className='flex rounded-full group'>
                            <span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gardient-social h-14 w-14 bg-gradient-social absolute rounded-full '>
                                <Ig className="text-gray-800 fill-black h-14 w-14 hover:fill-white transform transition-all  rounded-full p-2 rotate-180 duration-500" />
                            </span>
                            <div className='flex justify-center items-center h-14 w-14'>
                                <Ig className="text-gray-800 fill-black bg-accent-1 rounded-full p-3 shadow-great" />
                            </div>
                        </div>
                        {/* tweeter */}
                        <div className='flex rounded-full group'>
                            <span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gardient-social h-14 w-14 bg-gradient-social absolute rounded-full '>
                                <Twitter className="text-gray-800 fill-black h-14 w-14 hover:fill-white transform transition-all  rounded-full pt-4 rotate-180 duration-500" />
                            </span>
                            <div className='flex justify-center items-center'>
                                <Twitter className="text-gray-800 fill-black h-14 w-14 bg-accent-1 rounded-full pt-4 shadow-great" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                    <h6 className='text-gray-400 italic text-xl mb-3'>Discover our app</h6>
                    </div>
                    <div className='flex space-x-3'>
                        {/* Playstore */}
                        <Image
                            alt="playstore"
                            layout="responsive"
                            src={Playstore}
                            priority
                            className='shadow-great'
                        />
                        {/* Appstore */}
                        <Image
                            alt="appstore"
                            layout="responsive"
                            src={Appstore}
                            priority
                            className='shadow-great'
                        />
                    </div>
                </div>
            </div>
            <div className='mx-auto'>
                <h6 className='text-gray-800 italic font-sans'>All rights reserved@jadoo.co | modified by
                    <span className='hover:text-accent-1 transition duration-300'> Kisawa16</span>
                </h6>
            </div>
            <div className='absolute rounded-full w-40 h-40 bg-accent-3 blur-3xl -z-20 top-72 -right-36'></div>
        </div>
    )
}


