"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Container } from "@components/layout/Container";
import { Title } from "@components/ui/Title";
import { Button } from "@components/ui/Button";

export function ContactSection() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    
    <section className="bg-background pt-10 lg:pt-32 pb-0 overflow-hidden transition-colors duration-300">
      <Container>
        <div className="flex flex-col lg:flex-row items-stretch">
          
          
          <div className="bg-white p-8 lg:mt-[128px] lg:translate-x-[100px] md:p-16 lg:w-1/2 z-10 shadow-2xl transition-colors duration-300">
            <Title className="mb-6">Contact Me</Title>
            <p className="md:block text-contact-subtitle hidden text-sm md:text-base leading-relaxed mb-12">
              Get in touch by staying connected with us. If you have any question about our process or company? Let us know how we can help. Feel free to contact us.
            </p>

            {status === "success" ? (
              <div className="p-6 bg-emerald-50 text-emerald-700 font-medium rounded-sm">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your First Name*"
                      className="w-full bg-transparent border-b border-gray-300  py-3 text-sm focus:outline-none focus:border-amber-700 transition-colors placeholder-gray-400"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your Last Name*"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-amber-700  transition-colors placeholder-gray-400"
                    />
                  </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email Address*"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-amber-700 transition-colors placeholder-gray-400"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-amber-700  transition-colors placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message*"
                    className="w-full bg-transparent border-b border-gray-300  py-3 text-sm focus:outline-none focus:border-amber-700  transition-colors placeholder-gray-400 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="transition-colors duration-300 disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "Submit"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="relative min-h-[400px] lg:w-1/2 bg-neutral-800 hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
              alt="Architectural spiral staircase view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}