"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Modern, responsive web applications built with React & Next.js. We focus on scalability and world-class UX.",
    gradient: "from-blue-600 to-indigo-500",
    span: "lg:col-span-4",
    glow: "blue",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    gradient: "from-rose-500 to-orange-500",
    span: "lg:col-span-4",
    glow: "rose",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Scalable infrastructure and cloud-native services.",
    gradient: "from-emerald-500 to-teal-400",
    span: "lg:col-span-4",
    glow: "emerald",
  },
  {
    icon: "💎",
    title: "Premium Hosting",
    description: "1 year of high-performance hosting zero cost.",
    gradient: "from-violet-600 to-purple-500",
    span: "lg:col-span-4",
    glow: "violet",
  },
  {
    icon: "⚙️",
    title: "Maintenance",
    description: "1 year of complimentary maintenance.",
    gradient: "from-amber-500 to-orange-400",
    span: "lg:col-span-4",
    glow: "amber",
  },
  {
    icon: "⚡",
    title: "Ultra-Fast Delivery",
    description: "Experience rapid development cycles and on-time delivery for every project milestone.",
    gradient: "from-sky-500 to-blue-400",
    span: "lg:col-span-4",
    glow: "sky",
  },
];

export function FeaturesSection() {
  const branches = [
    { name: "Bihar", cities: "Patna, Gaya, Biharsharif, Lakhisarai, Sheikhpura, Nawada, Warsaliganj, Nalanda, Munger, Jamui", isMain: true },
    { name: "Gujarat", cities: "Gandhinagar, Surat, Ahmedabad" },
    { name: "Uttar Pradesh" },
    { name: "Haryana", cities: "Gurugram etc" },
    { name: "Uttarakhand" },
    { name: "Madhya Pradesh" },
    { name: "Maharashtra" },
    { name: "Delhi" },
    { name: "Goa" },
    { name: "Jharkhand", cities: "Tata, Jamshedpur etc" },
    { name: "Chattisgarh" },
    { name: "Rajasthan", cities: "Jaipur etc" },
    { name: "West Bengal", cities: "Kolkata etc" },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* About Company Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 border border-orange-500/20 mb-6 backdrop-blur-sm">
             <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
             <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Corporate Identity</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 md:text-6xl flex flex-col gap-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Our Company</span>
          </h2>
          <p className="mt-6 text-slate-600 font-medium md:text-lg leading-relaxed">
            A GST registered agency committed to delivering premium digital solutions 
            across India with verified legal and administrative transparency.
          </p>
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: Branch Network (Bordered Glass) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/70 border border-white/60 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-xl shadow-slate-200/50"
          >
            <div className="mb-10">
               <div className="flex items-center gap-3 mb-2">
                  <div className="h-1 w-8 bg-orange-500 rounded-full" />
                  <p className="text-sm font-bold uppercase tracking-widest text-orange-600">Pan-India Presence</p>
               </div>
               <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">Our Strategic Locations</h3>
            </div>
 
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
              {branches.map((branch, index) => (
                <div
                  key={branch.name}
                  className={`flex flex-col p-3 rounded-xl border transition-all duration-300 ${
                    branch.isMain 
                      ? "bg-orange-500 text-white border-orange-400 shadow-xl shadow-orange-500/20" 
                      : "bg-slate-100/50 text-slate-600 border-slate-200/50 hover:border-orange-500/50 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <span className={`${branch.isMain ? "text-[10px]" : "text-[9px]"} font-bold leading-tight`}>{branch.name}</span>
                  {branch.isMain && (
                    <span className="mt-1 text-[7px] text-orange-100 uppercase font-black">Main Hub</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Business Information */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
             {/* Official Registration Card */}
             <Card className="rounded-[2.5rem] p-8 md:p-10 shadow-xl border-white/60 bg-white/70 backdrop-blur-2xl relative overflow-hidden group">
                <div className="absolute right-6 top-6 h-12 w-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all">
                  ⚖️
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Verified Legal Info</p>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Official Registration</h4>
                  <div className="mt-8">
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">GST Identification Number</p>
                     <p className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-400 tracking-tighter">10LAHPK8872L1Z3</p>
                  </div>
                </div>
             </Card>
 
             {/* Principal Place of Business Card */}
             <Card className="rounded-[2.5rem] p-8 md:p-10 shadow-xl border-white/60 bg-white/70 backdrop-blur-2xl group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-600 group-hover:rotate-12 transition-transform">📍</div>
                  <h4 className="text-2xl font-bold text-slate-900">Principal Place of Business</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    { label: "Building No.", val: "0241" },
                    { label: "Street", val: "Bypass Road" },
                    { label: "Locality", val: "Maharani Puram", span: true },
                    { label: "District", val: "Sheikhpura" },
                    { label: "State", val: "Bihar" },
                  ].map((item) => (
                    <div key={item.label} className={item.span ? "col-span-2" : ""}>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="text-sm font-bold text-slate-700">{item.val}</p>
                    </div>
                  ))}
                </div>
             </Card>
          </motion.div>
        </div>

        {/* RADICAL DARK Overhaul: Bento Grid Expertise Section */}
        <div className="mt-40">
          <div className="mx-auto max-w-4xl text-center mb-24 border-y border-orange-500/20 py-10">
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl leading-tight">
              Design <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-orange-500">Redefined.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-max">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`group relative overflow-hidden bg-white/70 border border-white/60 backdrop-blur-xl rounded-[2.5rem] transition-all duration-700 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 ${feature.span}`}
              >
                {/* Neon Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                
                <div className="h-full w-full p-10 md:p-14 flex flex-col justify-between relative z-10">
                  <div>
                    <div className={`inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-to-br ${feature.gradient} text-4xl text-white shadow-[0_10px_30px_rgba(249,115,22,0.2)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="mt-10 text-2xl font-black text-slate-900 leading-[1.1]">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="mt-16">
                     <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                        {feature.description}
                     </p>

                     <div className="mt-10 flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                        <div className={`h-[2px] rounded-full bg-gradient-to-r ${feature.gradient} w-12 group-hover:w-32 transition-all duration-700`} />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-orange-600 transition-colors">Vision 2026</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
