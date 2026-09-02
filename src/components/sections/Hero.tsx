"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/data/config";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-transparent">
      {/* 1. Film Grain Overlay */}
      <div 
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />

      {/* 2. Grid/Dot Matrix Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ffffff11 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
          maskImage: `radial-gradient(ellipse 80% 50% at 50% 50%, black 10%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(ellipse 80% 50% at 50% 50%, black 10%, transparent 80%)`
        }}
      />

      {/* 3. Blurred Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none transform -translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />

      {/* 4. Topographic/Code Texture on Right */}
      <div className="absolute right-[-5%] top-[20%] z-0 pointer-events-none select-none opacity-[0.02] text-primary hidden lg:block overflow-hidden">
        <pre className="font-mono text-[10px] leading-[1.2] tracking-widest whitespace-pre">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i}>
              {`01100101011110011010010101111001101001010111100110100101`.substring(i % 10)}
              {`// sys.init(${i}) -> [OK]\n`}
              {`[ALLOC] 0x${(i * 1024).toString(16).padStart(8, '0')}...`}
            </div>
          ))}
        </pre>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start justify-center order-2 lg:order-1 pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {portfolioConfig.location}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-[#f4f4f5] mb-6 leading-[1.05]">
                {portfolioConfig.name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl font-serif text-[#f4f4f5]/90 mb-6 max-w-xl leading-snug">
                {portfolioConfig.headline}
              </p>
              <p className="text-base md:text-lg text-[#a1a1aa] mb-12 max-w-lg leading-relaxed">
                {portfolioConfig.supportingCopy}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 w-full sm:w-auto"
            >
              <Link
                href="#projects"
                className="group flex items-center justify-center gap-2 bg-[#f4f4f5] text-[#111111] px-8 py-3.5 text-sm font-medium transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0A0A0D]"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <a href={portfolioConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" aria-label="GitHub">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href={portfolioConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors" aria-label="LinkedIn">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Layered Image Composition */}
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:ml-auto lg:mr-0 flex justify-center lg:justify-end lg:-translate-x-[8vw]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-[360px]"
            >
              {/* Offset border accent */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-primary/30 hidden sm:block" />
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-2xl border border-white/5 hidden sm:block" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#18181b] border border-[#27272a] shadow-2xl z-10 group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
                <Image 
                  src="/img.jpeg" 
                  alt={`${portfolioConfig.name} - Portrait`}
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                />
              </div>

              {/* Floating Detail Card */}
              <motion.div 
                initial={{ opacity: 0, y: 10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-5 -left-4 sm:-bottom-8 sm:-left-8 z-20 bg-[#18181b]/90 backdrop-blur-md border border-[#27272a] p-4 rounded-xl shadow-2xl flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-[#a1a1aa] font-medium mb-0.5">Status</p>
                  <p className="text-sm font-semibold text-[#f4f4f5]">Available for opportunities</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
