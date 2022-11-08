import Head from "next/head";
import Header from "../components/Header";
import Accent1 from "../images/decor-intersect-1.svg";
import Decortext from "../images/text-decor-hero.svg";
import Link from "next/link";

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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&family=Volkhov:wght@700&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </Head>

      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>

      <section className="relative mb-28">
        {/* accent bagian kanan */}
        <div className="absolute w-5/12 h-screen top-0 right-0 bottom-0">
          <Accent1 className="fill-accent-4"/>
        </div>
        {/* accent bulat bagian kiri */}
        <div className="w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          {/* isi hero section */}
          <div className="flex">
            {/* kiri */}
            <div className="w-6/12 pt-52">

              <h1 className="text-accent-2 font-bold text-xl uppercase mb-6">Best Destinations around the world</h1>

              <h2 className="text-gray-900 font-serif text-[84px] leading-[89px] tracking-tighter mb-8">Travel, 
              <span className="relative">enjoy
              <span className="absolute left-0 top-full -mt-8 -z-10"><Decortext className="w-[385px] h-[12px] fill-accent-2"/></span>
              </span> and live a new and full life</h2>

              <p className="text-gray-500 max-w-lg leading-8 mb-8">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

              {/* bagian bottom find out more*/}
              <div className="flex">
                <Link href="/findOutMore" className="mr-11 bg-accent-1 shadow-custom-1 px-6 py-4 text-white rounded-xl">
                  <h6>Find out more</h6>
                </Link>

                {/* bagian bottom play demo */}
                <button className="flex items-center">
                  <span className="mr-6 bg-accent-2 text-white inline-flex items-center justify-center px-4 py-4 rounded-full shadow-custom-1">
                  <span class="material-symbols-outlined">play_arrow</span>
                  </span>
                  <span className="text-gray-500">Play Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}