import { Container } from "@components/layout/Container";
import { Title } from "@components/ui/Title";

const services = [
    { id: "01", title: "Architecture Portfolio", desc: "Crafting visual narratives for complex structural designs." },
    { id: "02", title: "Planning Process", desc: "From conceptual sketches to precise technical documentation." },
    { id: "03", title: "Unique Design", desc: "Bespoke spatial solutions tailored to your philosophy." },
    { id: "04", title: "Consultation", desc: "Expert analysis of architectural feasibility and aesthetics." },
];

export function MyService() {
    return (
        <section className="py-24 bg-white text-neutral-900">
            <Container>

                <Title className="mb-20">View My Services</Title>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative flex gap-8 border-b border-neutral-200 pb-12 hover:border-brand transition-colors"
                        >
                            <span className="text-neutral-400 font-mono text-sm mt-1">{service.id}</span>

                            <div>
                                <h3 className="text-xl font-medium uppercase tracking-wide mb-3 group-hover:text-brand transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-500 leading-relaxed max-w-sm">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-brand transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}