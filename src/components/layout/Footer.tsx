import * as React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { portfolioConfig } from "@/data/config";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background py-12 mt-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-foreground font-semibold">
            {portfolioConfig.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {portfolioConfig.headline}
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href={portfolioConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="h-5 w-5" />
          </a>
          <a
            href={portfolioConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="h-5 w-5" />

          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 text-center md:text-left text-sm text-muted-foreground">
        &copy; {year} {portfolioConfig.name.split(" ")[0]}. All rights reserved.
      </div>
    </footer>
  );
}
