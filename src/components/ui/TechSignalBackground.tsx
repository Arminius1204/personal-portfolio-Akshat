"use client";

import React, { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number; // absolute Y in the document
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulseOffset: number;
  depth: number;
}

export function TechSignalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let documentHeight = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // Estimate total scrollable height to distribute nodes
      documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      // Fallback if document height is not fully calculated yet
      if (documentHeight < height * 2) {
        documentHeight = height * 5; 
      }

      canvas.width = width;
      canvas.height = height;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const isMobile = width < 768;
      // Lower particle density overall, slightly more on desktop
      const baseNodeCount = isMobile ? 40 : 100;
      
      // Distribute nodes across the entire document height
      // Make the top 100vh slightly denser (the "hero" section)
      const heroHeight = height;
      
      for (let i = 0; i < baseNodeCount * (documentHeight / height); i++) {
        const isHeroNode = Math.random() < 0.4; // 40% chance to be forced into hero section
        let yPos = Math.random() * documentHeight;
        
        if (isHeroNode) {
          yPos = Math.random() * heroHeight;
        }

        const depth = Math.random(); // 0 to 1
        
        nodes.push({
          x: Math.random() * width,
          y: yPos,
          vx: (Math.random() - 0.5) * 0.15 * (1 + depth), // deeper nodes move slightly faster
          vy: (Math.random() - 0.5) * 0.15 * (1 + depth),
          size: (Math.random() * 1.2 + 0.8) * (0.5 + depth * 0.5), // tiny squares
          opacity: (Math.random() * 0.3 + 0.1) * (1 - depth * 0.5), // deeper = more transparent
          pulseOffset: Math.random() * Math.PI * 2,
          depth,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const currentScrollY = scrollYRef.current;
      const connectionDistance = 140;
      
      // Filter nodes that are currently visible in the viewport
      const visibleNodes = nodes.filter(
        node => node.y >= currentScrollY - 200 && node.y <= currentScrollY + height + 200
      );

      // Draw connection lines
      for (let i = 0; i < visibleNodes.length; i++) {
        const nodeA = visibleNodes[i];
        const screenYA = nodeA.y - currentScrollY;
        
        for (let j = i + 1; j < visibleNodes.length; j++) {
          const nodeB = visibleNodes[j];
          const screenYB = nodeB.y - currentScrollY;
          
          const dx = nodeA.x - nodeB.x;
          const dy = screenYA - screenYB;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Opacity scales with distance, connections are very subtle
            const opacity = (1 - Math.pow(distance / connectionDistance, 2)) * 0.12;
            
            ctx.beginPath();
            ctx.moveTo(nodeA.x, screenYA);
            ctx.lineTo(nodeB.x, screenYB);
            ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`; // Indigo
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Rare data pulses moving along connections
            if (!prefersReducedMotion && (i + j) % 25 === 0) {
              const time = Date.now() * 0.001;
              const progress = (time * 0.4 + nodeA.pulseOffset) % 1;
              
              const pulseX = nodeA.x + (nodeB.x - nodeA.x) * progress;
              const pulseY = screenYA + (screenYB - screenYA) * progress;
              
              ctx.beginPath();
              // Tiny data packet (rectangle)
              ctx.rect(pulseX - 1, pulseY - 1, 2, 2);
              ctx.fillStyle = `rgba(129, 140, 248, ${opacity * 5})`; 
              ctx.fill();
              
              // Slight glow around pulse
              ctx.shadowBlur = 4;
              ctx.shadowColor = "rgba(129, 140, 248, 0.8)";
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // Draw nodes
      visibleNodes.forEach((node) => {
        // Update positions (only horizontal wrapping for absolute y nodes to keep them in their vertical band)
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          // Soft boundary for y to keep them near their original spot
          if (Math.random() < 0.001) node.vy *= -1; 
        }

        const screenY = node.y - currentScrollY;

        // Slight pulsating opacity
        let currentOpacity = node.opacity;
        if (!prefersReducedMotion) {
           currentOpacity += Math.sin(Date.now() * 0.0015 + node.pulseOffset) * 0.08;
        }
        
        // Brighter nodes in hero section (y < height)
        if (node.y < height * 0.8) {
          currentOpacity *= 1.3;
        }

        ctx.beginPath();
        // Technical square pixels
        ctx.rect(node.x - node.size / 2, screenY - node.size / 2, node.size, node.size);
        ctx.fillStyle = `rgba(99, 102, 241, ${Math.max(0, currentOpacity)})`;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    // Use a small delay for resize to ensure document has reflowed
    const handleResize = () => {
      setTimeout(resize, 100);
    };

    window.addEventListener("resize", handleResize);
    // Observe DOM changes that might affect document height
    const observer = new MutationObserver(handleResize);
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Initial setup
    handleResize();
    
    if (prefersReducedMotion) {
      // Draw once if motion is reduced
      setTimeout(draw, 200);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none bg-[#050508] overflow-hidden"
      style={{ height: '100dvh', width: '100%' }}
    >
      {/* Background Subtle Radial Glows that scroll with the page */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(-${scrollY}px)`, transition: 'transform 0.1s ease-out' }}
      >
        {/* Hero glow (brighter) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-blue-900/10 blur-[100px]" />
        
        {/* Experience / Mid-page glow (calmer) */}
        <div className="absolute top-[120vh] left-[20%] w-[60vw] h-[60vw] rounded-full bg-violet-900/5 blur-[150px]" />
        
        {/* Projects / Bottom glow */}
        <div className="absolute top-[250vh] right-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/5 blur-[120px]" />
      </div>

      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block relative z-10"
      />
      
      {/* Overlay to ensure text legibility and smooth depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/40 to-[#050508]/80 z-20" />
    </div>
  );
}
