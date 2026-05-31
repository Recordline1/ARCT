"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Title } from '@components/ui/Title';
import { Container } from '@/components/layout/Container'
import { projects } from '@/data/data';
import Link from 'next/link';
import { PortfolioCard } from '@components/ui/PrtfolioCard';



const categories = ["All", "Architecture", "Interior", "Landscape"];


export function Portfolio() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section className="py-15 bg-background">
            <Container>
                <Title className='mb-6'>My Portfolio</Title>

                <div className="flex gap-8 mb-12 overflow-x-auto pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`text-lg font-medium cursor-pointer transition-colors ${activeTab === cat ? "text-brand" : "text-gray-400 hover:text-gray-900"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </Container>
            <Container size='wide'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filteredProjects.map((project) => (
                        <PortfolioCard key={project.id} item={project} />
                    ))}
                </div>
            </Container>
        </section>
    );
}