"use client";

import { motion } from "motion/react";
import { Navbar } from "./Navbar";
import { InteractiveBackground } from "./InteractiveBackground";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import Link from "next/link";
import { DetailedContent } from "@/lib/content";

interface DetailLayoutProps {
  content: DetailedContent;
  category: string;
}

export function DetailLayout({ content, category }: DetailLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col selection:bg-orange-100 selection:text-orange-900">
      <InteractiveBackground />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4">
          
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-500">{category}</span>
            <span>/</span>
            <span className="text-orange-500">{content.title}</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1">
                {content.subtitle}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                {content.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">{content.icon}</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl font-medium">
                {content.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-2xl px-8 shadow-xl shadow-orange-500/20">
                  Start Your Project
                </Button>
                {content.deliverable && (
                  <div className="flex items-center gap-3 px-6 py-4 bg-white/50 border border-white/60 rounded-2xl backdrop-blur-sm">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deliverable</span>
                    <span className="text-sm font-bold text-slate-800">{content.deliverable}</span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute -inset-4 bg-gradient-to-br ${content.gradient || 'from-orange-500 to-rose-500'} opacity-10 blur-3xl rounded-[3rem]`} />
              <Card className="relative overflow-hidden border-white/60 bg-white/40 backdrop-blur-2xl rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="h-2 w-8 bg-orange-500 rounded-full" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {content.features.map((feature, i) => (
                    <motion.div 
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs">✓</div>
                      <p className="text-slate-700 font-semibold group-hover:text-orange-600 transition-colors">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Deep Dive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <Card className="p-8 bg-white/60 border-white/60 backdrop-blur-xl rounded-[2.5rem]">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center text-2xl mb-6">🎯</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Core Benefits</h4>
              <ul className="space-y-3">
                {content.benefits.map(benefit => (
                  <li key={benefit} className="text-sm text-slate-600 font-medium flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-blue-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-white/60 border-white/60 backdrop-blur-xl rounded-[2.5rem] md:col-span-2">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center text-2xl mb-6">🛠️</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Technology Stack & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {(content.technologies || ["Next.js", "Tailwind", "TypeScript", "Framer Motion", "MongoDB"]).map(tech => (
                  <span key={tech} className="px-5 py-2 rounded-xl bg-white border border-slate-100 text-sm font-bold text-slate-700 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-default uppercase tracking-tight">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-slate-500 text-sm leading-relaxed font-medium">
                We utilize enterprise-grade technologies to ensure your {content.title} is not only functional but also future-proof and highly secure. Our team stays updated with the latest industry standards to provide the most efficient solutions.
              </p>
            </Card>
          </div>

          {/* Detailed Content Section (Prose) */}
          <div className="max-w-4xl mx-auto bg-white/30 p-8 md:p-16 rounded-[3rem] border border-white/50 backdrop-blur-md">
            <h2 className="text-3xl font-black text-slate-900 mb-8 md:text-5xl tracking-tight">
              Why Choose Sabka Saathi for <span className="text-orange-500">{content.title}</span>?
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 font-medium space-y-6 text-lg leading-relaxed">
               <p>
                 In the digital age, {content.title.toLowerCase()} is more than a technical requirement—it&apos;s a strategic advantage. At Sabka Saathi, we approach every {content.slug} project with a unique blend of creativity and engineering excellence. As a GST-registered agency, we bring corporate transparency and high-fidelity results to every collaboration.
               </p>
               <p>
                 Our process for {content.slug} is rooted in deep industry research and user-centric design principles. Whether we are building a complex SaaS platform or a localized CRM, we ensure that the final product drives actual business revenue and simplifies your operations.
               </p>
            </div>
            
            <div className="mt-16 pt-12 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h5 className="text-xl font-bold text-slate-900">Ready to Deep Dive?</h5>
                <p className="text-slate-500">Let&apos;s discuss how {content.title} can transform your business.</p>
              </div>
              <Button size="lg" className="rounded-2xl px-12 py-8 text-lg font-bold shadow-2xl shadow-orange-500/20">
                Book a Free Call
              </Button>
            </div>
          </div>

        </div>
      </main>
      
      {/* Regional Footer Section for better SEO */}
      <footer className="bg-slate-950 py-20 text-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">SABKA SAATHI</h3>
              <p className="text-slate-400 max-w-sm mb-8">
                Premium software development agency specializing in Next.js, CRM automation, and high-fidelity digital transformation.
              </p>
              <div className="flex gap-4">
                {/* Social links placeholder */}
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10" />
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10" />
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-orange-500">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#expertise" className="hover:text-white transition-colors">Expertise</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-white transition-colors">Process</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-orange-500">Contact</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li>Email: contact@sabkasathi.com</li>
                <li>Bihar Office: Sheikhpura</li>
                <li>Gujarat Office: Bhavnagar</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
            © 2026 Sabka Saathi. All rights reserved. GST: 10LAHPK8872L1Z3
          </div>
        </div>
      </footer>
    </div>
  );
}
