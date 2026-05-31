


export const LanguageSwitcher = () => {
    return (
        <div className="flex items-center gap-2 text-sm font-medium ">
            <button className="hover:text-amber-700 transition-colors cursor-pointer">
                EN
            </button>
            <span className="opacity-50">/</span>
            <button className="hover:text-amber-700 transition-colors cursor-pointer">
                UA
            </button>
        </div>
    )
}