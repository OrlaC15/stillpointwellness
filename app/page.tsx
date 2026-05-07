// app/page.tsx
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <main className="px-6">
      <Hero />

      <section className="grid md:grid-cols-3 gap-6 py-10">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </section>
    </main>
  );
}