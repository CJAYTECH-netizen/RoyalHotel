// import React from 'react'
import premiumroom from "../../assets/images/premiumroom.jpg";
import CEO from "../../assets/images/CEO.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {};
const About_us = (_props: Props) => {
  const slides = [
    {
      image: "/images/kingroom.jpg",
      caption: "Elegant Suites with Vintage Charm",
    },
    {
      image: "/images/poolside.jpg",
      caption: "Swim in our rooftop pool with skyline views",
    },
    {
      image: "/images/img006.jpg",
      caption: "Fine Hiking Section Beyond Imagination",
    },
    {
      image: "/images/img001.jpg",
      caption: "Fine Receptionist",
    },
    {
      image: "/images/pool.jpg",
      caption: "Swim in a the very Fresh Water",
    },
  ];

  return (
    <div className="font-sans text-black">
      {/*Banner*/}
      <section className="relative h-[70vh] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#131111] bg-capacity-500" />
        <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-center pt-32 mt-30">
          ABOUT US
        </h1>
        {/* V-shaped Curve */}
        <svg
          className="absolute bottom-0 w-full h-23"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,160L720,320L1440,160L1440,320L720,320L0,320Z"
          ></path>
        </svg>
      </section>
      <div>
        <section className="w-full px-4 py-10 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Right Write-up */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h1 className="text-5xl md:text-3xl font-bold text-left">
                WHO WE ARE
              </h1>
              <p className="mt-5 text-justify leading-relaxed max-w-prose">
                At RoyalHotel, we blend timeless elegance with modern comfort to
                deliver a truly regal experience. Nestled in the heart of the
                city, our establishment serves as a peaceful sanctuary for
                business travelers, vacationers, and luxury seekers alike. With
                attention to detail and unwavering hospitality, we ensure every
                guest feels like royalty from check-in to farewell.
              </p>
              <p className="mt-5 text-justify leading-relaxed max-w-prose">
                Our premium suites, gourmet cuisine, spa retreats, and dedicated
                staff come together to offer an experience that goes beyond the
                ordinary. Whether you're here for leisure or business,
                RoyalHotel is your destination for elegance, comfort, and
                unforgettable memories.
              </p>
              <img
                src={premiumroom}
                alt="premiumroom"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
            </div>
            <div>
              {/* Right: Image */}
              <img
                src={CEO}
                width={100}
                height={100}
                alt="CEO"
                className="w-100 h-100 shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Carousel */}
      <br />
      <section className="bg-white pb-24 px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-xl w-full h-80 object-cover shadow-md"
                />
                <p className="mt-4 text-sm">{slide.caption}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default About_us;
