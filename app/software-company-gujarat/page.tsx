"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function GujaratSEOPage() {
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
              Best Software Development Company in <span className="text-orange-500">Gujarat</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Empowering Ahmedabad, Surat, and Rajkot with world-class custom software solutions, SaaS products, and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { city: "Ahmedabad", focus: "FinTech & Enterprise SaaS", icon: "🏙️" },
              { city: "Surat", focus: "Diamond & Textile ERPs", icon: "💎" },
              { city: "Rajkot", focus: "Manufacturing & Industrial Tech", icon: "⚙️" }
            ].map((loc) => (
              <Card key={loc.city} className="p-8 bg-white/80 backdrop-blur-xl border-white/60">
                <span className="text-4xl mb-4 block">{loc.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{loc.city}</h3>
                <p className="text-slate-600">Specialized software solutions for {loc.focus} markets.</p>
              </Card>
            ))}
          </div>

          <div className="prose prose-slate max-w-none bg-white/40 p-10 rounded-3xl backdrop-blur-md border border-white/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Sabka Saathi in Gujarat?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              As a leading **software company in Ahmedabad**, we understand the unique business landscape of Gujarat. Our team of expert developers provides end-to-end services from **web development in Rajkot** to scalable **IT company services in Surat**. We focus on building high-ROI digital assets that help startups and established enterprises reach their global potential.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-orange-600 text-xl mb-4">Localized Expertise</h4>
                <ul className="space-y-4 text-slate-700">
                  <li>✅ Business-centric logic tailored for Gujarat&apos;s industrial roots.</li>
                  <li>✅ Regional market analysis to beat your local competitors.</li>
                  <li>✅ Support for regional languages and business practices.</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Button size="lg" className="w-full md:w-auto px-12 py-8 text-xl shadow-2xl shadow-orange-500/20">
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
