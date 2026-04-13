"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useEffect, useState } from "react";
interface SubmissionData {
  name: string;
  service: string;
  budget: string;
  timeline: string;
}

export function ContactSection() {
  // Use environment variable for the Formspree ID, with the current ID as a fallback for dev stability.
  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xlgoknzw";
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [lastSubmission, setLastSubmission] = useState<SubmissionData | null>(null);
  const [phone, setPhone] = useState("");

  // Custom handler to capture form data before submission
  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries()) as unknown as SubmissionData;
    setLastSubmission(values);
    
    // Call Formspree's handleSubmit
    handleSubmit(e);
  };

  // WhatsApp Redirect Logic
  useEffect(() => {
    if (state.succeeded && lastSubmission) {
      const { name, service, budget, timeline } = lastSubmission;
      
      const whatsappMsg = `Hello Sabka Saathi! 🚀%0A%0AI have just submitted a project inquiry on your website.%0A%0A👤 *Name:* ${name}%0A💼 *Service:* ${service}%0A💰 *Budget:* ${budget}%0A⏳ *Timeline:* ${timeline}%0A%0ALooking forward to discussing this project with you!`;
      
      const whatsappUrl = `https://wa.me/919431673018?text=${whatsappMsg}`;
      
      const redirectTimer = setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);

      return () => clearTimeout(redirectTimer);
    }
  }, [state.succeeded, lastSubmission]);

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

            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone / WhatsApp</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setPhone(val);
                    }}
                    placeholder="9876543210"
                    className="w-full rounded-2xl border border-white/80 bg-white/50 px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-red-500 mt-1 ml-1 font-semibold" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    placeholder="Your Business Name"
                    className="w-full rounded-2xl border border-white/80 bg-white/50 px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm"
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} className="text-xs text-red-500 mt-1 ml-1 font-semibold" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Service Interested In</label>
                  <div className="relative group">
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-2xl border border-white/80 bg-white/50 px-5 py-4 text-slate-950 focus:border-orange-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm custom-select"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Cloud Solutions">Cloud Solutions</option>
                      <option value="CRM & Automation">CRM & Automation</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Maintenance">Free Maintenance Policy</option>
                      <option value="Other">Other Query</option>
                    </select>
                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  <ValidationError prefix="Service" field="service" errors={state.errors} className="text-xs text-red-500 mt-1 ml-1 font-semibold" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Project Budget</label>
                  <div className="relative group">
                    <select
                      id="budget"
                      name="budget"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-2xl border border-white/80 bg-white/50 px-5 py-4 text-slate-950 focus:border-orange-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm"
                    >
                      <option value="" disabled>Select budget range</option>
                      <option value="Under ₹50k">Under ₹50,000</option>
                      <option value="₹50k - ₹2L">₹50,000 - ₹2,00,000</option>
                      <option value="₹2L - ₹5L">₹2,00,000 - ₹5,00,000</option>
                      <option value="₹5L+">₹5,00,000+</option>
                      <option value="Not Decided">Not Decided yet</option>
                    </select>
                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  <ValidationError prefix="Budget" field="budget" errors={state.errors} className="text-xs text-red-500 mt-1 ml-1 font-semibold" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Project Timeline</label>
                <div className="flex flex-wrap gap-3 pt-1">
                  {["Immediate", "1-2 Months", "3+ Months", "Just Exploring"].map((time) => (
                    <label 
                      key={time} 
                      className="relative flex cursor-pointer items-center justify-center rounded-xl border border-white/80 bg-white/40 px-4 py-3 text-xs font-bold text-slate-600 transition-all hover:bg-white/80 has-[:checked]:border-orange-500/50 has-[:checked]:bg-orange-500/5 has-[:checked]:text-orange-600 has-[:checked]:ring-2 has-[:checked]:ring-orange-500/10"
                    >
                      <input type="radio" name="timeline" value={time} className="sr-only" required />
                      {time}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Your Detailed Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project goals or any specific features you need..."
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
                  {state.submitting ? "Processing Inquiry..." : "Submit Project Inquiry"}
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
