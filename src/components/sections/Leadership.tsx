"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioConfig } from "@/data/config";

export function Leadership() {
  const { roles, achievements, certifications } = portfolioConfig.leadership;

  return (
    <section id="leadership" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Leadership & Achievements</SectionHeading>
          
          <div className="mt-12 space-y-16">
            
            {/* Leadership Roles */}
            {roles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6 flex items-center gap-4">
                  Leadership
                  <div className="h-px bg-border flex-1" />
                </h3>
                <div className="space-y-8">
                  {roles.map((role, index) => (
                    <div key={index}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="font-medium text-foreground">{role.title}</h4>
                        <span className="text-sm text-muted-foreground">{role.duration}</span>
                      </div>
                      <p className="text-sm text-primary mb-3">{role.organization} &bull; {role.location}</p>
                      <ul className="space-y-2">
                        {role.bullets.map((bullet, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-3">
                            <span className="text-border mt-1.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Achievements */}
            {achievements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6 flex items-center gap-4">
                  Achievements
                  <div className="h-px bg-border flex-1" />
                </h3>
                <ul className="space-y-4">
                  {achievements.map((item, index) => {
                    const [title, context] = item.split(" — ");
                    return (
                      <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <strong className="font-medium text-foreground">{title}</strong>
                          {context && <span> — {context}</span>}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6 flex items-center gap-4">
                  Certifications
                  <div className="h-px bg-border flex-1" />
                </h3>
                <ul className="space-y-4">
                  {certifications.map((item, index) => {
                    const parts = item.split(", ");
                    const title = parts[0];
                    const meta = parts.slice(1).join(", ");
                    return (
                      <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <strong className="font-medium text-foreground block">{title}</strong>
                          {meta && <span className="text-xs">{meta}</span>}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
