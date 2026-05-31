import { slides } from '@/data/data';
import { Container } from '@components/layout/Container';
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params;

  const project = slides.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white selection:bg-brend selection:text-white">

      <section className="relative w-full h-[60vh] lg:h-[80vh] flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.bg}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/40 to-transparent" />
        </div>


        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 font-light max-w-2xl">
            {project.text}
          </p>
        </div>
      </section>


      <section className="container mx-auto px-6 md:px-12 py-20 border-b border-neutral-800">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "Location", value: project.location },
            { label: "Year", value: project.year },
            { label: "Area", value: project.area },
            { label: "Style", value: project.style },
          ].map((item) => (
            <div key={item.label} className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                {item.label}
              </h3>
              <p className="text-sm md:text-base text-neutral-200">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white with_decor_line">
            The Concept
          </h2>
          <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.gallery.map((img, index) => (
            <div key={index} className="relative h-[400px] md:h-[500px] w-full group overflow-hidden bg-neutral-900">
              <Image
                src={img}
                alt={`${project.title} gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white text-gray-900 py-24 transition-colors duration-300  border-t border-neutral-200 ">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest with_decor_line">
              Architectural Plan
            </h2>
            
          </div>

          <div className="relative w-full h-[50vh] md:h-[70vh] bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={project.planImg}
              alt="Architectural Blueprint"
              fill
              className="object-contain md:object-cover opacity-90"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

    </main>
  );
}