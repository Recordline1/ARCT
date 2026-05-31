import Link from "next/link";
import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}


export function Logo({ className = '', ...props }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center flex-col gap-1 group cursor-pointer ${className}`}
    >
      <svg
        {...props}
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-brand group transition-colors "
        >
        <path d="M2.6875 4.14227C-1.27346 11.7067 -0.553152 19.3425 2.87582 24.3978C4.59147 26.9271 7.01414 28.839 9.87998 29.6725C12.769 30.5127 15.9494 30.2095 19.0541 28.5679L20.3802 27.8667L3.92871 1.771L2.6875 4.14227ZM16.0745 26.6461C14.1309 27.3605 12.3059 27.375 10.695 26.9065C8.68518 26.3219 6.84958 24.9398 5.47289 22.9101C3.06186 19.3555 2.14621 13.8999 4.34098 8.03406L16.0745 26.6461Z" className="group-hover:text-logo-hover duration-300" fill="currentColor" />
        <path d="M14.6351 2.7124C8.81524 8.92675 7.36749 16.316 9.22091 21.9212C10.1486 24.7267 11.9203 27.1067 14.4049 28.563C16.9048 30.0283 19.9839 30.4739 23.3523 29.6473L24.8091 29.2898L16.4622 0.76123L14.6351 2.7124ZM21.0257 27.0318C18.9931 27.2542 17.2708 26.8423 15.8897 26.0328C14.1688 25.0241 12.8343 23.3142 12.1042 21.1062C10.8252 17.2383 11.4515 11.9083 15.1331 6.89173L21.0257 27.0318Z" className="group-hover:text-logo-hover duration-300" fill="currentColor" />
        <path d="M27.6546 1.48047C20.2535 6.22405 16.7668 13.1878 16.973 19.1748C17.0761 22.1711 18.1138 24.9523 20.1038 26.9951C22.1073 29.0517 24.9633 30.2432 28.4642 30.2432H29.9642V0L27.6546 1.48047ZM26.9642 27.1455C24.9254 26.8734 23.3667 26.0454 22.2523 24.9014C20.8654 23.4775 20.0529 21.4482 19.971 19.0713C19.8276 14.9039 21.9596 9.75782 26.9642 5.67578V27.1455Z" className="group-hover:text-logo-hover duration-300" fill="currentColor" />
      </svg>

      <div className="font-bold text-brand uppercase tracking-wider transition-colors group-hover:text-logo-hover duration-300">
        Arct<span >.</span>
      </div>
    </Link>
  );
};