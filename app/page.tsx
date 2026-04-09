import { ContactSection } from "@/components/ContactSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Hero } from "@/components/Hero";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Navbar } from "@/components/Navbar";
import { StatsShowcase } from "@/components/StatsShowcase";
import { ProcessSection } from "@/components/ProcessSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* SEO Internal Linking: Regional Success */}
        <section className="bg-orange-50/30 py-16 border-y border-orange-100/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Premier Software Development in <span className="text-orange-500">Gujarat, Maharashtra & Bihar</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Gujarat", href: "/software-company-gujarat", cities: "Ahmedabad, Surat, Rajkot" },
                { name: "Maharashtra", href: "/software-company-maharashtra", cities: "Pune, Mumbai, Nagpur" },
                { name: "Bihar", href: "/software-company-bihar", cities: "Patna, Muzaffarpur" }
              ].map((region) => (
                <a 
                  key={region.name} 
                  href={region.href}
                  className="group flex flex-col p-6 bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                >
                  <span className="text-xl font-bold text-slate-800 group-hover:text-orange-600 mb-1">{region.name}</span>
                  <span className="text-xs text-slate-500 font-medium">{region.cities}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <StatsShowcase />

        <ProcessSection />

        <FeaturesSection />
        <ContactSection />
      </main>
    </div>
  );
}
