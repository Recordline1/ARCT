import Link from "next/link";
import Image from "next/image";

export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    img: string;
}

export const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
    return (
        <Link href={`Portfolio/${item.id}`}>
            <div className="relative overflow-hidden border border-gray-300 p-1 group cursor-pointer">  
                <div className="relative h-[400px] overflow-hidden bg-gray-100">
                    <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 transition-all duration-500 group-hover:opacity-100 flex items-center justify-center p-6">
                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg text-center transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-700">Discover the story</p>
                    </div>
                </div>
                <div className='p-4 flex justify-between items-center flex-wrap gap-2'>
                    <h3 className="text-xl font-secondary">{item.title}</h3>
                    <p className="text-main-color">{item.category}</p>
                </div>
            </div>
        </Link>
    );
}   