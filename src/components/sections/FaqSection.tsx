"use client";

import { useState } from "react";
import { Container } from "@components/layout/Container";
import { Title } from "@components/ui/Title";

const faqs = [
    {
        id: 1,
        question: "What type of projects do you do?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi, augue urna, mauris elementum ligula semper enim. Tristique sed sit facilisis ultrices rhoncus eget ullamcorper tellus.",
    },
    {
        id: 2,
        question: "How much time I will spend on planning?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Сlaritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.",
    },
    {
        id: 3,
        question: "Can I specify delivery date when ordering?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
    {
        id: 4,
        question: "Are there any discounts included?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
    },
];

export function FaqSection() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (

        <section className="bg-background py-7 md:py-15 transition-colors duration-300">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">


                    <div className="lg:w-1/3 space-y-6">
                        <Title>FAQS</Title>
                        <p>
                            Id at urna non viverra eu volutpat porttitor elementum. Viverra senectus dui ultricies dolor.
                        </p>
                    </div>


                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-white text-title-color transition-all duration-300 overflow-hidden"
                            >

                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full flex items-center justify-between p-4 md:p-8 text-left cursor-pointer select-none"
                                >
                                    <span className="text-lg md:text-xl font-medium pr-4 transition-colors duration-300 group-hover:text-brend">
                                        {faq.question}
                                    </span>

                                    <span className="text-2xl font-light md:text-3xl transition-transform duration-300 shrink-0 select-none">
                                        {openId === faq.id ? "−" : "+"}
                                    </span>
                                </button>


                                <div
                                    className={`transition-all duration-300 ease-in-out px-6 md:px-8 overflow-hidden ${openId === faq.id ? "max-h-[500px] pb-6 md:pb-8 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                        )}
                    </div>

                </div>
            </Container>
        </section>
    );
}