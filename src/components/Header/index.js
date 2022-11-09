import React from 'react'
import Link from "next/link";
import Logo from "../../../src/images/Logo.svg";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-28">
              {/* logo brand */}
              <Logo className="logo-style-1" />
            </div>
            <div className="w-auto">
              <ul className="flex items-center">
                <li className="">
                  {/* Destinations */}
                  <Link href="/Destinations" legacyBehavior>
                    <a href="/Destinations" className=' px-9 text-gray-800'>Destinations</a>
                  </Link>
                </li>

                {/* Hotels */}
                <li>
                  <Link href="/Hotels" legacyBehavior>
                    <a href="/Hotels" className=' px-9 text-gray-800'>Hotels</a>
                  </Link>
                </li>

                {/* Fligths */}
                <li>
                  <Link href="/Fligths" legacyBehavior>
                  <a href="/Flights" className=' px-9 text-gray-800'>Flights</a>
                  </Link>
                </li>

                {/* Bookings */}
                <li>
                  <Link href="/Bookings" legacyBehavior>
                  <a href="/Bookings" className=' px-9 text-gray-800'>Bookings</a>
                  </Link>
                </li>

                {/* Login */}
                <li>
                  <Link href="/Login" legacyBehavior>
                  <a href="/Login" className=' px-9 text-gray-800'>Login</a>
                  </Link>
                </li>

                {/* Sign-up */}
                <li>
                  <Link href="/Sign-up" legacyBehavior>
                    <a href="/Sign-up" className="px-5 text-gray-800 border border-gray-800 rounded-md mx-3">Sign Up</a>
                  </Link>
                </li>

                <li>
                  <button className="px-9 relative text-gray-800">
                    EN
                    <span className="absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-2"></span>
                  </button>
                </li>
              </ul>
            </div>
            {/* navbar */}
          </div>
        </header>
  );
}
