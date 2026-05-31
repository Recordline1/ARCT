"use client";
import { useState, useEffect, useRef } from "react";
import { Header } from "./Header";
import { Footer } from './Footer';
import { ThemeSwitcher } from '@components/ui/ThemeSwitcher';
import { LanguageSwitcher } from '@components/ui/LanguageSwitcher';


export function PageWrapper({ children }: { children: React.ReactNode }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setIsScrolled(el.scrollTop > 20);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-[#1a1a1a] [perspective:1500px]">
      <div className="absolute inset-0 z-0 flex flex-col justify-center  items-end p-10 pr-12">
        <nav className="flex flex-col gap-8 text-white text-right text-4xl font-medium mb-12">
          <a href="#" className="hover:text-amber-500 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            Portfolio
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex  md:hidden flex-col items-end gap-6 text-white ">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>

      <div
        ref={scrollRef}
        className={`absolute inset-0 w-full h-full bg-white dark:bg-neutral-800 z-10 
           overscroll-none
          transition-all duration-600 ease-[cubic-bezier(0.2,1,0.3,1)] origin-right
          ${isMenuOpen
            ? "overflow-hidden  [transform:translateX(-65%)_scale(0.8)_rotateY(-10deg)] md:[transform:translateX(-30%)_scale(0.8)_rotateY(-10deg)] rounded-[30px] pointer-events-none shadow-[-30px_0_50px_rgba(0,0,0,0.5)]"
            : "overflow-y-auto"
          }
        `}
      >
        <div className="sticky top-0 left-0 w-full z-50 pointer-events-auto bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md">
          <Header
            isMenuOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            isScrolled={isScrolled}
          />
        </div>

        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
