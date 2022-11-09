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
                    <h6 className="px-9 text-gray-800">Destinations</h6>
                  </Link>
                </li>

                {/* Hotels */}
                <li>
                  <Link href="/Hotels" legacyBehavior>
                    <h6 className="px-9 text-gray-800">Hotels</h6>
                  </Link>
                </li>

                {/* Fligths */}
                <li>
                  <Link href="/Fligths" legacyBehavior>
                    <h6 className="px-9 text-gray-800">Fligths</h6>
                  </Link>
                </li>

                {/* Bookings */}
                <li>
                  <Link href="/Bookings" legacyBehavior>
                    <h6 className="px-9 text-gray-800">Bookings</h6>
                  </Link>
                </li>

                {/* Login */}
                <li>
                  <Link href="/Login" legacyBehavior>
                    <h6 className="px-9 text-gray-800">Login</h6>
                  </Link>
                </li>

                {/* Sign-up */}
                <li>
                  <Link href="/Sign-up" legacyBehavior>
                    <h6 className="px-5 text-gray-800 border border-gray-800 rounded-md mx-3">
                      Sign-up
                    </h6>
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
