"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Container } from "@components/layout/Container";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ArrowIcon } from '@/components/ui/icons/ArrowIcon';
import { Logo } from '@components/ui/Logo';
import { LocationIcon } from '@components/ui/icons/LocationIcon'
import { PhoneIcon } from '@components/ui/icons/PhoneIcon'
import { EnvelopeIcon } from '@components/ui/icons/EnvelopeIcon'

export function Footer() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = async (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubscribed(true);
        setEmail("");
    };

    return (
        <footer className="bg-background pt-15 pb-8 transition-colors duration-300 border-t border-gray-200 ">
            <Container>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    <div className="space-y-6">
                        <Logo />
                        <p className="text-sm text-gray-500 leading-relaxed max-w-[240px]">
                            Tristique lacus ullamcorper massa posuere nisl molestie. Nullam montes, tortor rhoncus massa. Nisl tellus etiam nec, urna.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: <FaFacebook size={16} />, href: "#" },
                                { icon: <FaInstagram size={16} />, href: "#" },
                                { icon: <FaTwitter size={16} />, href: "#" },
                                { icon: <FaYoutube size={16} />, href: "#" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-9 h-9 flex items-center justify-center bg-background rounded-sm shadow-sm hover:bg-brand hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-base font-bold text-title-color mb-6 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { label: "Home", href: "/", active: true },
                                { label: "About Us", href: "#" },
                                { label: "Services", href: "#" },
                                { label: "Portfolios", href: "#" },
                                { label: "Blogs", href: "#" },
                                { label: "Contact Us", href: "#" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className={`transition-colors duration-200 hover:text-brand flex items-center gap-2 ${link.active ? "text-brand font-medium" : "text-gray-500"
                                            }`}
                                    >
                                        {link.active && <span className="text-xs">—</span>}
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-base font-bold text-title-color  mb-6 uppercase tracking-wider">
                            Contact Info
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-2">
                                <LocationIcon />
                                <span>2489 Locust Court, Los Angeles</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <LocationIcon />
                                <span>3927 Red Maple Drive, Los Angeles</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <PhoneIcon />
                                <a href="tel:+636673413463" className="hover:text-brand transition-colors">
                                    +63 667 341 3463
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <EnvelopeIcon />
                                <a href="mailto:contact@templatesjungle.com" className="hover:text-brand transition-colors break-all">
                                    contact@templatesjungle.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-base font-bold text-title-color mb-6 uppercase tracking-wider">
                            Subscribe Us
                        </h4>
                        <p className="text-sm leading-relaxed">
                            Subscribe to our newsletter to stay updated for new products and stunning news.
                        </p>

                        {isSubscribed ? (
                            <p className="text-sm font-medium text-emerald-600 pt-2">
                                ✓ Thanks for subscribing!
                            </p>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex border items-stretch w-full transition-shadow duration-300 mt-4 hover:shadow-[0_15px_44px_0_rgba(0,0,0,0.2)]">                                

                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email Address"
                                    className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-gray-900  focus:outline-none focus:border-brand transition-colors placeholder-gray-400"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#1a1a1a] hover:bg-brand text-white px-6 text-xs font-bold uppercase tracking-widest transition-colors duration-300 flex items-center gap-2 shrink-0 cursor-pointer"
                                >
                                    Send <span className="text-xs"><ArrowIcon width={12} height={12} /></span>
                                </button>
                            </form>
                        )}
                    </div>

                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 dark:text-neutral-500 font-medium">
                    <p>© 2026 TemplatesJungle. All rights reserved.</p>
                    <p>
                        Designed by{" "}
                        <span className="text-gray-700 font-semibold">
                            TemplatesJungle
                        </span>
                    </p>
                </div>

            </Container>
        </footer>
    );
}