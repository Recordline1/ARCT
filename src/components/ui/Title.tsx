export function Title({ children, className= '' }: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={`title select-none leading-[1.29] tracking-[-0.02em] capitalize flex items-center  after:content-[''] after:w-[28px] after:h-[3px] after:bg-brand ${className}`}>
            {children}
        </h2>
    )
}