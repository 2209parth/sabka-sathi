"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ContactSection() {
  // Use environment variable for the Formspree ID, with the current ID as a fallback for dev stability.
  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xlgoknzw";
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-3xl"
          >
            <Card className="rounded-3xl p-12 text-center shadow-2xl bg-white/80 backdrop-blur-xl border-white/60">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <span className="text-4xl text-orange-600">✨</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Message Received!</h2>
              <p className="mt-4 text-lg text-slate-600">
                Thank you for reaching out to Sabka Saathi. Our software experts have been notified and will get back to you shortly.
              </p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-10"
              >
                Send Another Message
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Card className="rounded-3xl p-8 md:p-12 shadow-2xl bg-white/70 backdrop-blur-xl border-white/80">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">Get In Touch</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">Talk To Our Experts</h2>
              <p className="mt-4 text-slate-600">Have a project in mind? Let&apos;s build something extraordinary together.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="e.g. Parth Patel"
                  required
                  className="w-full rounded-2xl border border-white/80 bg-white/50 px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1 ml-1 font-semibold" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="parth@example.com"
                  className="w-full rounded-2xl border border-white/80 bg-white/50 px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1 ml-1 font-semibold" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project or inquiry..."
                  rows={4}
                  className="w-full rounded-2xl border border-white/80 bg-white/50 px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1 ml-1 font-semibold" />
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  disabled={state.submitting} 
                  className="w-full py-6 text-lg font-bold shadow-xl shadow-orange-500/20 active:scale-[0.98] transition-transform"
                >
                  {state.submitting ? "Processing..." : "Submit Inquiry"}
                </Button>
              </div>

              {state.errors && !state.succeeded && (
                <p className="mt-4 text-center text-sm font-semibold text-red-500 bg-red-50 py-2 rounded-xl border border-red-100 italic">
                  Something went wrong. Please check your fields and try again.
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
