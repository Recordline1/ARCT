"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Button } from '@/components/ui/Button';
import { slides } from '@/data/data';
import { ArrowIcon } from '@components/ui/icons/ArrowIcon';


import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



export function Hero() {
  return (
    <section className="relative  bg-background min-h-screen">

      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={800}
        navigation={{
          prevEl: '#sliderButtonPrev',
          nextEl: '#sliderButtonNext',
        }}
        pagination={{
          el: '.hero-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            const slideNumber = String(index + 1).padStart(2, '0');
            return `<span class="${className}">${slideNumber}</span>`;
          },
        }}
        className="w-full h-full absolute inset-0 z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full min-h-screen flex items-center">

            <div className="absolute z-1 inset-0 w-full h-full grid grid-cols-1 md:grid-cols-[33%_67%]">
              <div className="hidden md:block bg-background" />
              <div className="relative w-full h-full">
                <Image
                  src={slide.bg}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 67vw"
                />
              </div>
            </div>


            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-25 pt-27 pb-30 md:pt-[228px] md:pb-[123px] md:pl-[120px]">
              <h1 className="font-secondary text-[43px] md:text-[90px] leading-[1.1] mb-8 md:mb-[72px] text-brand capitalize max-w-[600px] ">
                {slide.title}
              </h1>

              <div className="bg-white p-5 md:p-[40px_60px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 max-w-[1190px] shadow-sm">
                <p className="text-gray-600 max-w-[735px] text-lg leading-[1.8]">
                  {slide.text}
                </p>
                <Link href={`Hero/${slide.id}`}>
                  <Button>
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:left-8 md:top-1/2 md:-translate-y-1/2 z-20 flex flex-col-reverse md:flex-col items-center gap-4 md:gap-10">

        <div className="hero-pagination flex flex-row md:flex-col" />

        <div className="flex flex-row md:flex-col gap-4">
          <button
            id="sliderButtonPrev"
            className="w-12 h-12 md:w-[58px] text-black md:h-[58px] rounded-full border border-gray-400 bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all hover:border-gray-900 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed group select-none"
            aria-label="Previous slide"
          >
            <ArrowIcon className='w-4 h-4 rotate-180' />
          </button>
          <button
            id="sliderButtonNext"
            className="w-12 h-12 md:w-[58px] text-black cursor-pointer md:h-[58px] rounded-full border border-gray-400 bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed group select-none"
            aria-label="Next slide"
          >
             <ArrowIcon className='w-4 h-4' />
          </button>
        </div>
      </div>

    </section>
  );
}