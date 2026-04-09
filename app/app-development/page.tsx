"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AppDevelopmentPage() {
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
              Premium <span className="text-orange-500">App Development</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Building native and cross-platform mobile apps that users love. We turn your ambitious ideas into polished mobile experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "iOS & Android", desc: "Native performance for both iPhone and Android users with consistent UI.", icon: "📱" },
              { title: "Hybrid Cross-Platform", desc: "Cost-effective, high-speed apps using Flutter or React Native.", icon: "🔄" },
              { title: "App UI/UX Design", desc: "High-fidelity, modern interfaces that ensure high retention and engagement.", icon: "🎨" }
            ].map((service) => (
              <Card key={service.title} className="p-8 bg-white/80 backdrop-blur-xl border-white/60">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>

          <div className="prose prose-slate max-w-none bg-white/40 p-10 rounded-3xl backdrop-blur-md border border-white/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert App Development Company in India</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Mobile presence is no longer optional. As a leading **mobile app development company in India**, Sabka Sathi delivers end-to-end solutions. We manage the entire lifecycle from brainstorming and design to **App Store optimization** and launch. Whether you&apos;re a startup in Pune or an established business in Patna, we build apps that sit on the home screens of your most valuable customers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-orange-600 text-xl mb-4">Mobile Experience Core</h4>
                <ul className="space-y-4 text-slate-700">
                  <li>✅ Custom APIs specifically optimized for mobile networks.</li>
                  <li>✅ Push notification systems for high user retention.</li>
                  <li>✅ Biometric security and offline capabilities.</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Button size="lg" className="w-full md:w-auto px-12 py-8 text-xl shadow-2xl shadow-orange-500/20">
                  Discuss Your App Idea
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
