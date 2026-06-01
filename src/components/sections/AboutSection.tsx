'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Title } from '@components/ui/Title'
import { Container } from '@/components/layout/Container'
import { aboutData } from '@/data/data';



export function AboutSection() {

	const [activeTab, setActiveTab] = useState(aboutData[0].id);
	return (
		<section className="py-15 bg-background overflow-hidden">
			<Container>
				<div className="grid md:grid-cols-2 gap-16">

						<div className="flex flex-col overflow-hidden">
						<Title className='mb-4'>about me</Title>

						<div className="flex gap-8 mb-8 border-b border-gray-200 overflow-x-auto scrollbar-hidden">
							{aboutData.map(tab => (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`pb-4 uppercase tracking-widest cursor-pointer shrink-0 ${activeTab === tab.id ? 'text-brand border-b-2 border-brand' : ''}`}
								>
									{tab.label}
								</button>
							))}
						</div>

						<motion.div key={activeTab} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
							<p>{aboutData.find(t => t.id === activeTab)?.text}</p>
						</motion.div>
					</div>
					<div className="relative h-[600px] overflow-hidden rounded-sm">
						<AnimatePresence mode="wait">
							<motion.img
								key={activeTab}
								alt={aboutData.find(t => t.id === activeTab)?.label}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								src={aboutData.find(t => t.id === activeTab)?.image}
								className="w-full h-full object-cover"
							/>
						</AnimatePresence>
					</div>				
				</div>

			</Container>
		</section>
	)
}
