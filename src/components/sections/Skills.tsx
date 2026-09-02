"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioConfig } from "@/data/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export function Skills() {
  const { productAndDevelopment, programming, dataAndAnalysis, coreConcepts } = portfolioConfig.skills;

  const categories = [
    { title: "Product & Development", skills: productAndDevelopment },
    { title: "Programming", skills: programming },
    { title: "Data & Analysis", skills: dataAndAnalysis },
    { title: "Core Concepts", skills: coreConcepts },
  ];

  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none transform -translate-y-1/2 -z-10" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Technical Skills</SectionHeading>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col"
              >
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6 border-b border-border pb-2 inline-block max-w-max">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      className="px-3 py-1.5 rounded-sm bg-card border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
