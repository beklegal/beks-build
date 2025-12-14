import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-black"></div>

      {/* Animated glow orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-neon-cyan/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" style={{ animation: "float 4s ease-in-out infinite" }}></div>

      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(33, 150, 243, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(33, 150, 243, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <div className="glassmorphism px-6 py-2 rounded-full border border-neon-blue/30">
              <span className="text-sm font-medium text-neon-cyan animate-glow-pulse">
                ✨ Futuristic Web Engineering
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
            We Build the Software
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple animate-gradient">
              Powering Tomorrow
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Custom websites, mobile apps, and scalable software engineered for growth. Think Apple + Tesla + OpenAI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center text-lg px-8 py-6 rounded-lg font-semibold bg-gradient-to-r from-neon-blue to-neon-cyan text-slate-900 hover:shadow-glow-lg transition-all duration-300 relative group"
            >
              <span className="relative z-10 flex items-center">
                Launch Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center text-lg px-8 py-6 rounded-lg font-semibold border-2 border-neon-cyan/50 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Capabilities
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center animate-bounce">
            <div className="text-neon-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-24 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan">50+</div>
              <div className="text-sm text-slate-400 mt-1">Projects Delivered</div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-neon-blue/30 to-transparent hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue">98%</div>
              <div className="text-sm text-slate-400 mt-1">Client Satisfaction</div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-neon-blue/30 to-transparent hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple">5+</div>
              <div className="text-sm text-slate-400 mt-1">Years Building</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
