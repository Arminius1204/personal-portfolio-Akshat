"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioConfig } from "@/data/config";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none -z-10" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Experience</SectionHeading>
          
          <div className="mt-12 space-y-12">
            {portfolioConfig.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline line for mobile */}
                <div className="absolute left-[11px] top-2 bottom-0 w-px bg-border md:hidden" />
                {/* Timeline dot for mobile */}
                <div className="absolute left-2 top-2 w-2 h-2 rounded-full bg-primary md:hidden" />

                <div className="flex flex-col md:flex-row md:gap-8">
                  <div className="md:w-48 shrink-0 mb-4 md:mb-0">
                    <p className="text-sm font-medium text-muted-foreground">{job.duration}</p>
                    <p className="text-xs text-muted-foreground mt-1">{job.location}</p>
                  </div>
                  
                  <div className="flex-1 pb-12 border-b border-border/50 last:border-0 last:pb-0">
                    <h3 className="text-xl font-serif font-bold text-foreground">{job.role}</h3>
                    <p className="text-primary font-medium mb-4">{job.company}</p>
                    <ul className="space-y-3">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                          <span className="text-border mt-1.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
