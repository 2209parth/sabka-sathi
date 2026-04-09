"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function CustomSoftwarePage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-slate-950 mb-6 font-poppins">
              Tailored <span className="text-orange-500">Custom Software</span> Development
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Solving complex business challenges with custom CRM, ERP, and bespoke SaaS platforms built for industrial scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Bespoke SaaS Platforms", desc: "Subscription-based software with multi-tenant architecture and dynamic billing.", icon: "☁️" },
              { title: "CRM & ERP Systems", desc: "Automate your sales, inventory, and operations with custom-built management tools.", icon: "📊" },
              { title: "Digital Transformation", desc: "Modernize legacy systems with scalable, API-first architecture.", icon: "🏗️" }
            ].map((service) => (
              <Card key={service.title} className="p-8 bg-white/80 backdrop-blur-xl border-white/60">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>

          <div className="prose prose-slate max-w-none bg-white/40 p-10 rounded-3xl backdrop-blur-md border border-white/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert Custom Software Development Company in India</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Generic software often forces you to change your business processes. At Sabka Saathi, we do the opposite: we build software that adapts to YOUR business. As a top **custom software development company**, we specialize in high-fidelity solutions that automate complex workflows and drive revenue. Whether you need a SaaS product for a global market or a localized CRM for your Gujarat branch, we provide the technical excellence to make it happen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-orange-600 text-xl mb-4">Enterprise-Ready Architecture</h4>
                <ul className="space-y-4 text-slate-700">
                  <li>✅ Microservices and Serverless architectures for unlimited scaling.</li>
                  <li>✅ Advanced data visualization and real-time analytics dashboards.</li>
                  <li>✅ Robust API integrations with third-party tools and legacy systems.</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Button size="lg" className="w-full md:w-auto px-12 py-8 text-xl shadow-2xl shadow-orange-500/20">
                  Start Your Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
