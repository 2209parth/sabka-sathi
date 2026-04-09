"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: "WD",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with the latest technologies like React and Next.js.",
  },
  {
    icon: "MA",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that provide seamless experiences on iOS and Android.",
  },
  {
    icon: "CS",
    title: "Cloud Solutions",
    description:
      "Scalable infrastructure and cloud-native services to ensure your business stays online and secure.",
  },
  {
    icon: "HD",
    title: "Free Hosting & Domain",
    description:
      "Get 1 year of high-performance hosting and your preferred domain at zero cost with every project.",
  },
  {
    icon: "MT",
    title: "Free Maintenance",
    description:
      "Enjoy 1 year of complimentary maintenance and technical support to keep your app running smoothly.",
  },
  {
    icon: "FD",
    title: "Ultra-Fast Delivery",
    description:
      "We value your time. Experience rapid development cycles and on-time delivery for every milestone.",
  },
];


export function FeaturesSection() {
  return (
    <section id="features">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">Building Your Digital Future</h2>
        </div>

        <div className="mt-8 lg:mt-12 grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <Card className="h-full rounded-2xl p-4 lg:p-6 shadow-sm hover:shadow-xl transition-all border-white/60 bg-white/40 backdrop-blur-sm">
                <div className="inline-flex h-8 w-8 lg:h-12 lg:w-12 items-center justify-center rounded-lg lg:rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 text-sm lg:text-2xl text-white font-bold">
                  {feature.icon}
                </div>
                <h3 className="mt-3 lg:mt-5 text-sm lg:text-xl font-bold text-slate-900 leading-tight">{feature.title}</h3>
                <p className="mt-2 text-[10px] lg:text-base text-slate-600 leading-relaxed line-clamp-2 lg:line-clamp-none whitespace-normal">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
