"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioConfig } from "@/data/config";

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none transform -translate-x-1/2 -z-10" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeading>Profile & Education</SectionHeading>
          
          <div className="mt-8 space-y-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {portfolioConfig.about}
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-semibold text-foreground border-b border-border pb-2">Education</h3>
              <div className="space-y-8">
                {portfolioConfig.education.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h4 className="font-medium text-foreground">{edu.institution}</h4>
                      <p className="text-primary text-sm mt-1">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground shrink-0">
                      {edu.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
