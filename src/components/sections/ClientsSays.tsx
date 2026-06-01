"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { IMG } from "../../../public/images";
import { Title } from "@components/ui/Title";
import { Quotes } from '@/components/ui/icons/Quotes';

import "swiper/css";

const clientsSays = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est et nibh eleifend neque ultrices. Sit nulla eget vulputate bibendum sit. Fringilla lacus rhoncus posuere lectus. Sectetur adipi elit proin est et nibh",
    name: "Armando González",
    position: "CEO, Unity Real State",
  },
  {
    id: 2,
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    name: "Maria Fernández",
    position: "Director, Horizon Properties",
  },
  {
    id: 3,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Pellentesque habitant morbi tristique senectus et netus.",
    name: "James Whitmore",
    position: "Founder, Apex Architecture",
  },
];

export function ClientsSays() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">

      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-[55%_45%]">
        <div className="relative w-full h-full">
          <Image
            src={IMG.saysBg}
            alt="Building"
            fill
            className="object-cover object-center"
            sizes="55vw"
          />
        </div>
        <div className="hidden md:block bg-background" />
      </div>


      <div className="absolute inset-0 bg-black/50 md:hidden" />

      <div className="relative md:mt-23 md:translate-x-[-150px] z-10 flex justify-end min-h-[600px]">
        <div className="w-full md:w-[45%] bg-[#f9f8f6] px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">

          <Title>
            What Clients Says
          </Title>


          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              el: ".clientsSays-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            loop
            className="w-full"
          >
            {clientsSays.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex flex-col gap-8">

                  <Quotes className="text--main-color opacity-40 mt-3" width={40} height={32} />

                  <p className="text-gray-600 text-lg leading-[1.9]">
                    "{t.quote}"
                  </p>

                  <div>
                    <p className="font-bold text-[#201F1F] text-lg">{t.name}</p>
                    <p className="text-sm text-gray-400 mt-1">{t.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="clientsSays-pagination flex flex-row gap-2 mt-10" />

        </div>
      </div>

    </section>
  );
}
