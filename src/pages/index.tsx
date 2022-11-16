import Head from "next/head";
import Header from "../components/Header";

// hero section
import Accent1 from "../images/decor-intersect-1.svg";
import Decortext from "../images/text-decor-hero.svg";
import Link from "next/link";
import Image from "next/image";
import Plane from "../../public/images/plane.png";
import Traveler from "../../public/images/hero_traveller-1.png";

// category section
import DecorPlus1 from "../images/decor-plus-style-1.svg";
import Radar from "../../public/images/ilustration-satellite.png";
import Mic from "../../public/images/ilustration-mic.png";
import Gear from "../../public/images/ilustration-gear.png";

// top selling section
import Squirel from "../images/decor-Squirel-style-1.svg";
import Destination1 from "../../public/images/Destination1.jpg";
import Destination2 from "../../public/images/Destination2.jpg";
import Destination3 from "../../public/images/Destination3.jpg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Jadoo</title>
        <meta name="description" content="Jadoo app Travel" />
        <link rel="icon" href="/favicon.ico" />

        {/* import font manual */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&family=Volkhov:wght@700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>

      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>

      <section className="relative mb-28">
        {/* accent bagian kanan */}
        <div className="absolute w-5/12 h-screen top-0 right-0 bottom-0">
          <Accent1 className="fill-accent-4" />
        </div>
        {/* accent bulat bagian kiri */}
        <div className="w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          {/* isi hero section */}
          <div className="flex">
            {/* kiri */}
            <div className="w-6/12 pt-52">
              <h1 className="text-accent-2 font-bold text-xl uppercase mb-6">
                Best Destinations around the world
              </h1>

              <h2 className="text-gray-900 font-serif text-[84px] leading-[89px] tracking-tighter mb-8">
                Travel,
                <span className="relative">
                  {" "}
                  enjoy
                  <span className="absolute left-0 top-full -mt-8 -z-10">
                    <Decortext className="w-[385px] h-[12px] fill-accent-2" />
                  </span>
                </span>{" "}
                and live a new and full life
              </h2>

              <p className="text-gray-500 max-w-lg leading-8 mb-8">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>

              {/* bagian bottom find out more*/}
              <div className="flex">
                <Link href="/findOutMore" legacyBehavior>
                  <a
                    href="findOutMore"
                    className="mr-11 bg-accent-1 shadow-custom-1 px-6 py-4 text-white rounded-xl"
                  >
                    Find Out More
                  </a>
                </Link>

                {/* bagian bottom play demo */}
                <button className="flex items-center">
                  <span className="mr-6 bg-accent-2 text-white inline-flex items-center justify-center px-4 py-4 rounded-full shadow-custom-1">
                    <span className="material-symbols-outlined">
                      play_arrow
                    </span>
                  </span>
                  <span className="text-gray-500">Play Demo</span>
                </button>
              </div>
            </div>

            {/* kanan */}
            <div className="w-6/12 pt-24 relative">
              <div className="absolute w-[137px] h-[95px] z-30">
                {/* pesawat 1 */}
                <Image
                  alt="plane"
                  layout="responsive"
                  src={Plane}
                  priority
                  className="max-w-md relative left-[60px]"
                />
              </div>
              {/* pesawat 2 */}
              <div className="absolute w-[137px] h-[95px] z-10">
                <Image
                  alt="plane"
                  layout="responsive"
                  src={Plane}
                  priority
                  className="max-w-md relative left-[460px] -bottom-24"
                />
              </div>
              {/* traveller */}
              <div className="relative z-20 transform translate-x-16">
                <Image
                  alt="plane"
                  layout="responsive"
                  src={Traveler}
                  priority
                  className="max-w-2xl relative -left-40 -bottom-14"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* category */}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="absolute w-36 h-36 lg:right-10 -top-10">
            <DecorPlus1 clasName="decor-plus-style-1" />
          </div>
          <div className="text-center flex-col mb-16">
            <h3 className="uppercase mb-2 text-gray-500 text-lg">CATEGORY</h3>
            <h3 className="font-serif leading-snug text-gray-900 text-7xl">
              We Offer Best Services
            </h3>
          </div>
          <div className="flex text-gray-900">
            <div className="flex justify-between">
              {/* radar */}
              <div className="px-6">
                <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                  <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-2 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                  <div className="relative mb-6 inline-flex h-28">
                    <div className="absolute z-10 transform translate-y-1/2 translate-x-1/2 -right-11 w-20">
                      <Image
                        alt="Radar"
                        layout="fixed"
                        width={60}
                        height={60}
                        src={Radar}
                      />
                    </div>
                    <div className="absolute bottom-0 left-5 transform translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bottom-14"></div>
                  </div>
                  <h4 className="text-xl mb-3">Calculated Weather</h4>
                  <h5 className="px-8 mb-8">
                    Built Wicket longer admire do barton vanity itself do in it.
                  </h5>
                </div>
              </div>

              {/* plane */}
              <div className="px-6">
                <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                  <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-2 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                  <div className="relative mb-6 inline-flex h-28">
                    <div className="absolute z-10 transform translate-y-1/2 translate-x-1/2 -right-11 w-36 -top-20">
                      <Image
                        alt="Plane"
                        layout="fixed"
                        width={700}
                        height={700}
                        src={Plane}
                      />
                    </div>
                    <div className="absolute bottom-12 left-5 transform translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12 transition-all duration-300 opacity-0 group-hover:opacity-100 bo12 group-hover:-bottom-1"></div>
                  </div>
                  <h4 className="text-xl mb-3">Best Flights</h4>
                  <h5 className="px-8 mb-8">
                    Engrossed listening. Park gate sell they west hard for the.
                  </h5>
                </div>
              </div>

              {/* event */}
              <div className="px-6">
                <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                  <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-2 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28 "></div>
                  <div className="relative mb-6 inline-flex h-28">
                    <div className="absolute z-10 transform translate-y-1/2 translate-x-1/2 -right-11 w-12 -top-5">
                      <Image
                        alt="Radar"
                        layout="fixed"
                        width={60}
                        height={60}
                        src={Mic}
                      />
                    </div>
                    <div className="absolute bottom-0 left-5 transform translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bottom-14"></div>
                  </div>
                  <h4 className="text-xl mb-3">Local Events</h4>
                  <h5 className="px-8 mb-8">
                    Barton vanity itself do in it. Preferd to men it engrossed
                    listening.{" "}
                  </h5>
                </div>
              </div>

              {/* costumization */}
              <div className="px-6">
                <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                  <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-2 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                  <div className="relative mb-6 inline-flex h-28">
                    <div className="absolute z-10 transform translate-y-1/2 translate-x-1/2 -right-11 w-20">
                      <Image
                        alt="Gear"
                        layout="fixed"
                        width={60}
                        height={60}
                        src={Gear}
                      />
                    </div>
                    <div className="absolute bottom-12 left-5 transform translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-bottom-1"></div>
                  </div>
                  <h4 className="text-xl mb-3">Customization</h4>
                  <h5 className="px-8 mb-8">
                    We deliver outsourced aviation services for military
                    customers
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* top selling */}
      <section className="mb-28">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="text-center flex flex-col mb-16">
            <h3 className="uppercase mb-2 text-gray-500 text-lg">
              TOP SELLING
            </h3>
            <h3 className="font-serif leading-snug text-gray-900 text-7xl">
              Top Destinations
            </h3>
          </div>
          <div className="flex relative pr-10">
            <div className="absolute w-[96px] h-[252px] bottom-10 right-0">
              <Squirel className="stroke-gray-500" />
            </div>

            {/* Destination1 */}
            <div className="w-4/12 relative px-4 z-20">
              <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                <div className="rounded-tr-3xl overflow-hidden rounded-tl-3xl relative h-96">
                  <Image
                    layout="fill"
                    alt="picture1"
                    src={Destination1}
                    className="object-cover"
                  />
                </div>
                <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                  <div className="pt-7 px-5 flex justify-between">
                    <h6 className="text-lg">Rome, Italty</h6>
                    <h6 className="text-lg">$5,42k</h6>
                  </div>
                  <div className="pt-4 px-5 items-center">
                    <span className="material-symbols-outlined mr-2 relative">near_me</span>
                    <span className="absolute">10 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Destination2 */}
            <div className="w-4/12 relative px-4 z-20">
              <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                <div className="rounded-tr-3xl overflow-hidden rounded-tl-3xl relative h-96">
                  <Image
                    layout="fill"
                    alt="picture1"
                    src={Destination2}
                    className="object-cover"
                  />
                </div>
                <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                  <div className="pt-7 px-5 flex justify-between">
                    <h6 className="text-lg">London, UK</h6>
                    <h6 className="text-lg">$4.2k</h6>
                  </div>
                  <div className="pt-4 px-5 items-center">
                    <span className="material-symbols-outlined mr-2 relative">near_me</span>
                    <span className="absolute">12 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Destination1 */}
            <div className="w-4/12 relative px-4 z-20">
              <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                <div className="rounded-tr-3xl overflow-hidden rounded-tl-3xl relative h-96">
                  <Image
                    layout="fill"
                    alt="picture1"
                    src={Destination3}
                    className="object-cover"
                  />
                </div>
                <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                  <div className="pt-7 px-5 flex justify-between">
                    <h6 className="text-lg">Full Europe</h6>
                    <h6 className="text-lg">$15k</h6>
                  </div>
                  <div className="pt-4 px-5 items-center">
                    <span className="material-symbols-outlined mr-2 relative">near_me</span>
                    <span className="absolute">28 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
