import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Array gambar beda-beda
const images = [
  "miaw.png", // Foto A
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Foto B
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Foto C
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80", // Foto D
];

const Work = () => {
  return (
    <div
      name="project"
      className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 transition-colors duration-300"
    >
      <div className="w-full sm:w-10/12 mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Project
          </p>
          <p className="py-6">
            What I have done so far, check out some of my recent work
          </p>
        </div>

        {/* SLIDER START */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center items-center w-full h-[200px] sm:h-[370px] md:h-[370px] lg:h-[400px] rounded-md overflow-hidden shadow-lg shadow-[#040c16] bg-gray-200">
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* SLIDER END */}
      </div>
    </div>
  );
};

export default Work;