import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* 1. Philosophy Section: The "Numra" Statement */}
      <section className="py-24 md:py-40 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-px h-16 bg-rose-900/30 mb-10"></div>
          <h4 className="text-rose-900 text-[10px] md:text-xs tracking-[0.5em] font-bold uppercase mb-8">
            The Philosophy
          </h4>
          <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 mb-10 italic tracking-tighter leading-tight">
            Defined by Panache. <br/> 
            Refined by Artistry.
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto italic">
            "We focus on enhancing the most unique features of your face, creating perfect harmony between colour and tone. 
            Our definitive finishing will give you the individuality you desire and let you stand out from the crowd."
          </p>
        </div>
      </section>

      {/* 2. Services: Editorial Alternating Layout */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32 md:space-y-48">
        
        {/* Category 01: Makeup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <span className="text-zinc-300 text-5xl md:text-7xl font-serif mb-6 opacity-50">01</span>
            <h3 className="text-3xl md:text-5xl font-serif mb-6 italic text-zinc-900">The Makeup Suite</h3>
            <p className="text-zinc-500 font-light leading-loose mb-8 text-base md:text-lg">
              Bridal, party, editorial, and private lessons tailored to your specific occasion. Fulfilling your beauty needs with great panache.
            </p>
            <ul className="grid grid-cols-1 gap-4 text-[11px] tracking-[0.3em] uppercase text-rose-900 font-semibold mb-10">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Bridal Masterclass
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Editorial & Headshots
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Private Makeovers
              </li>
            </ul>
            <Link href="/bridal" className="text-zinc-900 text-[10px] tracking-[0.4em] uppercase font-bold border-b border-zinc-900 pb-1 hover:text-rose-800 hover:border-rose-800 transition-all">
              View Portfolio
            </Link>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden bg-zinc-100 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200" 
              alt="Makeup Artistry" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
            />
          </div>
        </div>

        {/* Category 02: Hair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-zinc-100 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200" 
              alt="Hair Artistry" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-zinc-300 text-5xl md:text-7xl font-serif mb-6 opacity-50">02</span>
            <h3 className="text-3xl md:text-5xl font-serif mb-6 italic text-zinc-900">Hair Artistry</h3>
            <p className="text-zinc-500 font-light leading-loose mb-8 text-base md:text-lg">
              From precision cuts to bespoke colour and styling treatments. We create perfect harmony between your style and our definitive finish.
            </p>
            <ul className="grid grid-cols-1 gap-4 text-[11px] tracking-[0.3em] uppercase text-rose-900 font-semibold mb-10">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Couture Styling
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Technical Colour
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Luxury Treatments
              </li>
            </ul>
          </div>
        </div>

        {/* Category 03: Skin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <span className="text-zinc-300 text-5xl md:text-7xl font-serif mb-6 opacity-50">03</span>
            <h3 className="text-3xl md:text-5xl font-serif mb-6 italic text-zinc-900">Skin & Essentials</h3>
            <p className="text-zinc-500 font-light leading-loose mb-8 text-base md:text-lg">
              Rejuvenating facials and grooming performed with meticulous attention to detail, ensuring your natural beauty shines through.
            </p>
            <ul className="grid grid-cols-1 gap-4 text-[11px] tracking-[0.3em] uppercase text-rose-900 font-semibold mb-10">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Signature Facials
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Luxury Manicure
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-rose-900"></span> Precision Waxing
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden bg-zinc-100 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1698681296890-a772cdec87f8?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Skin Care" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
            />
          </div>
        </div>

      </section>

      {/* 3. Global CTA */}
      <section className="bg-zinc-50 py-32 px-6 text-center border-t border-zinc-100">
        <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-10 italic">Begin Your Transformation</h2>
        <Link 
          href="/contact"
          className="inline-block px-14 py-5 bg-zinc-900 text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-rose-900 transition-all duration-500 shadow-2xl"
        >
          Book An Appointment
        </Link>
      </section>
    </main>
  );
}