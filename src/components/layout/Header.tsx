"use client";

import { useState } from "react";
import { SearchModal } from "@/components/ui/SearchModal";
import { SearchIcon } from "@/components/ui/icons/SearchIcon";
import { ThemeSwitcher } from '@components/ui/ThemeSwitcher';
import { LanguageSwitcher } from '@components/ui/LanguageSwitcher';
import { Logo } from '@components/ui/Logo';
import { Burger } from '@components/ui/Burger';


interface HeaderProps {
  isMenuOpen: boolean;
  isScrolled: boolean;
  toggleMenu: () => void;
}

export function Header({ isMenuOpen, toggleMenu, isScrolled }: HeaderProps) {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <header
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 z-50 transition duration-300
          ${isScrolled
            ? "bg-white/80 backdrop-blur-md transition shadow-sm py-5 transition-colors duration-300 border-b border-gray-100 box-shadow-md"
            : "bg-transparent py-5 transition duration-300 border-b border-transparent"
          }
        `}
      >
        <Logo />

        <div className="flex gap-[24px]">
          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer w-[44px] h-[44px] flex justify-center items-center rounded-full bg-bg-burger text-white transition-color duration-300 hover:bg-burger-hover hover:text-brand"
          >
            <SearchIcon className="w-4 h-4" />
          </button>
          <Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
      </header>
    </>
  );
}
