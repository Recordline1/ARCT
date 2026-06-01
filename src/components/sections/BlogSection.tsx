"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@components/layout/Container";
import { Title } from "@components/ui/Title";
import { Button } from "@components/ui/Button";
import { posts } from "@/data/data";



export function BlogSection() {
    return (
        <section className="bg-background text-white py-15 transition-colors duration-300">
            <Container>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16">
                    <div className="space-y-4 max-w-[460px]">
                        <Title>Latest Blog Posts</Title>
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                            Id at urna non viverra eu volutpat porttitor elementum. Viverra senectus dui ultricies dolor.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 pb-16">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <Button>
                        View All Blogs
                    </Button>
                </div>

            </Container>
        </section>
    );
}


function BlogCard({ post }: { post: typeof posts[0] }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className="group cursor-pointer">

            <div className="relative h-[300px] w-full overflow-hidden bg-neutral-800">
                <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="relative z-10 mx-6 bg-white text-gray-900 p-6 md:p-8 shadow-xl -mt-16 transition-all duration-300">
                <time className="block text-xs text-gray-400 font-medium mb-3">
                    {post.date}
                </time>

                <h3 className="text-lg md:text-xl font-bold leading-snug mb-4 group-hover:text-brand transition-colors duration-300">
                    {post.title}
                </h3>

                <div className="text-sm text-gray-500 leading-relaxed mb-4">
                    <p>{post.shortExcerpt}</p>

                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p>{post.fullExcerpt}</p>
                    </div>
                </div>


                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(!isExpanded);
                    }}
                    className="inline-block text-xs font-semibold uppercase tracking-wider border-b border-gray-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-all cursor-pointer select-none"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            </div>

        </article>
    );
}