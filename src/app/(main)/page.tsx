import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection"
import { Portfolio } from '@components/sections/Portfolio'
import { MyService } from '@/components/sections/MyServices'
import { StatsSection } from '@/components/sections/StatsSection'
import { ClientsSays } from '@components/sections/ClientsSays'
import { FaqSection } from '@components/sections/FaqSection'
import { BlogSection } from '@components/sections/BlogSection'
import { ContactSection } from '@components/sections/ContactSection'

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <AboutSection />
      <Portfolio />
      <MyService />
      <StatsSection />
      <ClientsSays />
      <FaqSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
