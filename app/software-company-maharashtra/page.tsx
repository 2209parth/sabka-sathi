"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function MaharashtraSEOPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-950 mb-6">
              Leading Software Development Company in <span className="text-orange-500">Maharashtra</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering high-performance IT solutions across Pune, Mumbai, and Nagpur. We bridge the gap between complex engineering and elegant business experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { city: "Pune", focus: "Automotive & Manufacturing Tech", icon: "🏙️" },
              { city: "Mumbai", focus: "FinTech & Media Digitalization", icon: "🎞️" },
              { city: "Nagpur", focus: "Logistics & Emerging Tech", icon: "📦" }
            ].map((loc) => (
              <Card key={loc.city} className="p-8 bg-white/80 backdrop-blur-xl border-white/60">
                <span className="text-4xl mb-4 block">{loc.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{loc.city}</h3>
                <p className="text-slate-600">Enterprise-grade solutions for {loc.focus}.</p>
              </Card>
            ))}
          </div>

          <div className="prose prose-slate max-w-none bg-white/40 p-10 rounded-3xl backdrop-blur-md border border-white/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Partner with the Premier IT Company in Maharashtra</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Maharashtra is the powerhouse of the Indian economy, and as a top-tier **software development company in Maharashtra**, Sabka Sathi provides the technical backbone your business needs. From **web development in Mumbai** to specialized **IT services in Pune**, we deliver custom CRM, SaaS, and Cloud native applications that drive revenue and scale effortlessly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-orange-600 text-xl mb-4">Scaled for Success</h4>
                <ul className="space-y-4 text-slate-700">
                  <li>✅ High-availability cloud infrastructure for the Mumbai market.</li>
                  <li>✅ Performance-tuned systems built for national scale.</li>
                  <li>✅ Integrated security protocols (GDPR/SOC2 compliant logic).</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Button size="lg" className="w-full md:w-auto px-12 py-8 text-xl shadow-2xl shadow-orange-500/20">
                  Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
