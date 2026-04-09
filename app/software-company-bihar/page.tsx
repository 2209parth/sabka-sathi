"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function BiharSEOPage() {
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
              Best Software Development Company in <span className="text-orange-500">Bihar</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Pioneering digital growth in Patna and Muzaffarpur with high-fidelity custom software, web design, and mobile app development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            {[
              { city: "Patna", focus: "EduTech & Government Solutions", icon: "🏛️" },
              { city: "Muzaffarpur", focus: "AgriTech & Rural Digitalization", icon: "🚜" }
            ].map((loc) => (
              <Card key={loc.city} className="p-8 bg-white/80 backdrop-blur-xl border-white/60">
                <span className="text-4xl mb-4 block">{loc.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{loc.city}</h3>
                <p className="text-slate-600">Dynamic software solutions for {loc.focus} sectors.</p>
              </Card>
            ))}
          </div>

          <div className="prose prose-slate max-w-none bg-white/40 p-10 rounded-3xl backdrop-blur-md border border-white/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Building the Digital Future of Bihar</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              As the premier **IT company in Bihar**, Sabka Sathi is dedicated to bringing world-class technology to the region. Whether you&apos;re looking for a **software company in Patna** to build your next startup or **web development in Muzaffarpur** to take your local business online, we provide affordable yet premium software services that compete on a global stage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-orange-600 text-xl mb-4">Commitment to Growth</h4>
                <ul className="space-y-4 text-slate-700">
                  <li>✅ EduTech expertise for the thriving Bihar education sector.</li>
                  <li>✅ Lean development models for startups in Patna.</li>
                  <li>✅ Scalable infrastructure that grows with your business.</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Button size="lg" className="w-full md:w-auto px-12 py-8 text-xl shadow-2xl shadow-orange-500/20">
                  Start Building
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
