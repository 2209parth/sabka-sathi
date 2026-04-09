"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function WebDevelopmentPage() {
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
              High-Perfomance <span className="text-orange-500">Web Development</span> Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              From high-converting eCommerce stores to sophisticated custom web applications, we build digital assets that drive revenue and scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Next.js & React Apps", desc: "Ultrafast, SEO-optimized frontends for modern web experiences.", icon: "⚡" },
              { title: "eCommerce Solutions", desc: "Scaling online stores with Shopify, Magento, or custom Headless builds.", icon: "🛒" },
              { title: "Business Web Apps", desc: "Internal tools and customer portals built with industrial-grade security.", icon: "🛡️" }
            ].map((service) => (
              <Card key={service.title} className="p-8 bg-white/80 backdrop-blur-xl border-white/60">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>

          <div className="prose prose-slate max-w-none bg-white/40 p-10 rounded-3xl backdrop-blur-md border border-white/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Strategic Web Development Partner in India</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              In today&apos;s digital landscape, your website is your most powerful salesperson. As a top **web development company in India**, Sabka Saathi focuses on a &quot;Core-First&quot; approach. We don&apos;t just build pages; we build highly-optimized, **SEO-centric conversion machines**. From **custom web app development services** to enterprise-grade digitalization, we ensure every pixel and line of code serves your business objectives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-orange-600 text-xl mb-4">Our Technology Stack</h4>
                <ul className="space-y-4 text-slate-700">
                  <li>✅ Frontend: React, Next.js, Framer Motion (Full animation stack)</li>
                  <li>✅ Backend: Node.js, MongoDB, PostgreSQL</li>
                  <li>✅ Deployment: Vercel, AWS, Google Cloud (High availability)</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Button size="lg" className="w-full md:w-auto px-12 py-8 text-xl shadow-2xl shadow-orange-500/20">
                  Get a Free Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
