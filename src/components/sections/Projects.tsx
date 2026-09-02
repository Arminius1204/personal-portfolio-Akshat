"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioConfig } from "@/data/config";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-transparent">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Selected Projects</SectionHeading>
          
          <div className="mt-16 flex flex-col">
            {portfolioConfig.projects.map((project, index) => {
              const numberStr = (index + 1).toString().padStart(2, "0");
              const hasLiveDemo = project.liveDemo && project.liveDemo !== "#";
              const hasGithub = project.github && project.github !== "#";

              return (
                <div 
                  key={project.id}
                  className="group relative border-t border-[#27272a] py-10 transition-colors duration-300 hover:border-primary/50"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 transition-transform duration-300 group-hover:translate-x-2">
                    
                    {/* Left Column: Number & Title */}
                    <div className="w-full md:w-1/3 flex flex-col shrink-0">
                      <span className="text-sm font-mono text-primary mb-3 font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
                        {numberStr}
                      </span>
                      <h3 className="text-2xl font-serif font-semibold text-[#f4f4f5] transition-colors duration-300 group-hover:text-primary leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Right Column: Description, Tech, Links */}
                    <div className="w-full md:w-2/3 flex flex-col">
                      <p className="text-base text-[#a1a1aa] leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-xs font-medium text-[#a1a1aa] bg-[#18181b]/50 border border-[#27272a] px-3 py-1 rounded-full group-hover:border-primary/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {(hasLiveDemo || hasGithub) && (
                        <div className="flex items-center gap-6 mt-auto">
                          {hasLiveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-medium text-[#f4f4f5] transition-colors hover:text-primary"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          {hasGithub && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-medium text-[#a1a1aa] transition-colors hover:text-primary"
                            >
                              <FiGithub className="h-4 w-4" />
                              <span>Code</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
            
            {/* Final bottom border */}
            <div className="border-t border-[#27272a]" />
          </div>
        </div>
      </div>
    </section>
  );
}
