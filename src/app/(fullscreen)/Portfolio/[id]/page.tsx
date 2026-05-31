import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/data";
import { Container } from "@/components/layout/Container";
import { Title } from "@/components/ui/Title";

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) notFound();

  return (
    <main className="bg-white text-neutral-900 min-h-screen">

      <section className="relative h-[80vh] w-full">
        <Container>
          <Image src={project.img} alt={project.title} fill className="object-cover" priority />
          <div className="absolute bottom-12 left-12">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">{project.title}</h1>
          </div>
        </Container>
      </section>
      <Container>
        <section className="border-b border-neutral-200 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><p className="text-[10px] uppercase text-neutral-400">Location</p><p className="font-medium">{project.location}</p></div>
            <div><p className="text-[10px] uppercase text-neutral-400">Year</p><p className="font-medium">{project.year}</p></div>
            <div><p className="text-[10px] uppercase text-neutral-400">Area</p><p className="font-medium">{project.specs.area}</p></div>
            <div><p className="text-[10px] uppercase text-neutral-400">Client</p><p className="font-medium">{project.client}</p></div>
          </div>
        </section>

        <section className="py-10">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-8">
              <Title className=" uppercase tracking-widest  mb-6">Concept</Title>

              <p className="leading-relaxed font-light text-neutral-700">{project.description}</p>
            </div>

            <div className="md:col-span-4 bg-neutral-50 p-4 md:p-8 h-fit">
              <h3 className="text-lg uppercase tracking-widest mb-4 text-neutral-500">Materials Used</h3>
              <ul className="space-y-2">
                {project.specs.materials.map(m => (
                  <li key={m} className="border-b border-neutral-200 py-2 text-sm">{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-24 grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.gallery.map((src, i) => (
            <div key={i} className={`relative overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2 h-[500px]' : 'h-[240px]'}`}>
              <Image src={src} fill className="object-cover" alt="Detail" />
            </div>
          ))}
        </section>
      </Container>
    </main>
  );
}