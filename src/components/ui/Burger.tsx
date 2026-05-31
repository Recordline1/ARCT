interface BurgerProps {
    toggleMenu: () => void;
    isMenuOpen: boolean;
}


export const Burger = ({ toggleMenu, isMenuOpen }: BurgerProps) => (
    <button
        onClick={toggleMenu}
        className="group cursor-pointer relative z-50 w-[44px] h-[44px] flex flex-col justify-center items-center gap-[1px] rounded-full bg-bg-burger text-white transition-all duration-300 hover:bg-burger-hover select-none "
    >
        <span
            className={`group-hover:bg-brand block w-[14px] h-[3px] bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[4px]" : ""}`}
        />
        <span
            className={`group-hover:bg-brand block w-[14px] h-[3px] bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
            className={`group-hover:bg-brand block w-[14px] h-[3px] bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
        />
    </button>
)