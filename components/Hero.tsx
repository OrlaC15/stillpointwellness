
export default function Hero() {
  return (
    <section className="bg-ivory min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 py-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase tracking-[0.3em] text-sage text-sm mb-6">
            Therapy • Breathwork • Holistic Wellness
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight text-charcoal">
            Supporting healing through connection and embodied wellbeing.
          </h1>

          <p className="mt-8 text-lg text-charcoal/80 leading-relaxed max-w-xl">
            Integrative counselling and holistic practices designed to support
            emotional healing, nervous system regulation, and whole-person wellness.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-sage text-white px-8 py-4 rounded-full hover:opacity-90 transition">
              Book a Session
            </button>

            <button className="border border-sage text-sage px-8 py-4 rounded-full hover:bg-sage hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/hero.jpg"
            alt="Therapeutic wellness"
            className="w-full h-[700px] object-cover rounded-[2rem] shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}