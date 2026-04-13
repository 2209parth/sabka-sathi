import { ContactSection } from "@/components/ContactSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Hero } from "@/components/Hero";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Navbar } from "@/components/Navbar";
import { StatsShowcase } from "@/components/StatsShowcase";
import { ProcessSection } from "@/components/ProcessSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* SEO Internal Linking: Regional Success */}
        <section className="bg-orange-50/30 py-16 border-y border-orange-100/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full -mr-32 -mt-32" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Premier Software Development in <span className="text-orange-500">Gujarat, Maharashtra & Bihar</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Gujarat", slug: "gujarat", cities: "Ahmedabad, Surat, Rajkot, Bhavnagar" },
                { name: "Maharashtra", slug: "maharashtra", cities: "Pune, Mumbai, Nagpur" },
                { name: "Bihar", slug: "bihar", cities: "Patna, Muzaffarpur, Gaya, Sheikhpura" }
              ].map((region) => (
                <Link 
                  key={region.name} 
                  href={`/location/${region.slug}`}
                  className="group flex flex-col p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 min-w-[240px]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">{region.name}</span>
                    <span className="text-orange-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium text-left">{region.cities}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StatsShowcase />

        <ProcessSection />

        <FeaturesSection />
        <ContactSection />
      </main>

      {/* Shared Footer for Home Page */}
      <footer className="bg-slate-950 py-20 text-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 tracking-tighter uppercase font-poppins">SABKA-SAATHI</h3>
              <p className="text-slate-400 max-w-sm mb-8 font-medium">
                Premium software development agency specializing in Next.js, CRM automation, and high-fidelity digital transformation.
              </p>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-orange-500/20 hover:border-orange-500/30 transition-all cursor-pointer">📱</div>
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-orange-500/20 hover:border-orange-500/30 transition-all cursor-pointer">📧</div>
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-orange-500/20 hover:border-orange-500/30 transition-all cursor-pointer">🔗</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-orange-500 text-xs">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 font-semibold text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#expertise" className="hover:text-white transition-colors">Expertise</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-white transition-colors">Our Process</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Get Started</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-orange-500 text-xs">Our Hubs</h4>
              <ul className="space-y-4 text-slate-400 font-semibold text-sm text-balance">
                <li><Link href="/location/bihar" className="hover:text-white transition-colors">Bihar: Sheikhpura, Patna</Link></li>
                <li><Link href="/location/gujarat" className="hover:text-white transition-colors">Gujarat: Bhavnagar, Ahmedabad</Link></li>
                <li><Link href="/location/maharashtra" className="hover:text-white transition-colors">Maharashtra: Pune, Mumbai</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2026 Sabka Saathi. All rights reserved.</p>
            <p>GST: 10LAHPK8872L1Z3</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
