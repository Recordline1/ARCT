import {ArrowIcon} from './icons/ArrowIcon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
    
  
  export function Button({ children, className = '', ...props }: ButtonProps) {
    return (
      <button
        {...props}
        className={`inline-flex font-medium items-center px-[35px] gap-[7px] h-[67px] border border-[#b8b8b8] text-brand uppercase tracking-[0.04em] transition-all duration-300 hover:bg-[#201f1f] cursor-pointer hover:text-white select-none ${className}`}
      >
        {children}
        <ArrowIcon width={18} height={11}/>
      </button>
    );
  }