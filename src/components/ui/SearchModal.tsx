"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { SearchIcon } from "@/components/ui/icons/SearchIcon";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32">
     
      <div
        className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

     
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 shadow-2xl rounded-2xl overflow-hidden ring-1 ring-black/5 mx-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-4 border-b border-gray-100 dark:border-neutral-800">
          <span className="text-search cursor-pointer text-xl mr-3">
            <SearchIcon className="w-4 h-4" />
          </span>
          <input
            ref={inputRef}
            type="text"
            className=" w-full border-b-1 border-search  flex-1 bg-transparent text-lg text-gray-900 dark:text-white placeholder:text-sm placeholder:text-gray-400 focus:outline-none"
            placeholder="Search projects, services, or news..."
          />
          <button
            onClick={onClose}
            className="cursor-pointer ml-1 text-xs px-2 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-500 rounded border border-gray-200 dark:border-neutral-700"
          >
            ESC
          </button>
        </div>

        <div className="p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
            Quick Links
          </p>
          <div className="flex flex-col">
            <button className="flex items-center text-left px-2 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg transition-colors">
              <span className="mr-3 opacity-50">#</span> About Me
            </button>
            <button className="flex items-center text-left px-2 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg transition-colors">
              <span className="mr-3 opacity-50">#</span> Architecture Portfolio
            </button>
            <button className="flex items-center text-left px-2 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg transition-colors">
              <span className="mr-3 opacity-50">#</span> Planning Process
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
