import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-cyan/20 to-neon-purple/20 blur-3xl animate-gradient" style={{ backgroundSize: "200% 200%" }}></div>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 bg-neon-blue/30 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl" style={{ animation: "pulse-glow 3s ease-in-out infinite", animationDelay: "0.5s" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="glassmorphism-lg p-16 rounded-2xl border-2 border-neon-cyan/40 text-center hover:border-neon-cyan transition-all duration-300 group">
          {/* Main heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple animate-gradient">
              Ready to Build What's Next?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's turn your idea into a powerful digital product that drives real business results. The future starts here.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative inline-flex items-center justify-center px-10 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-slate-900 overflow-hidden group/btn hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Your Build
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue opacity-0 group-hover/btn:opacity-20 blur transition-opacity"></div>
            </a>

            <a
              href="https://wa.me/233544188950?text=Hi%20BEKs%20Build%2C%20I'd%20like%20to%20schedule%20a%20call%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-bold text-lg border-2 border-neon-cyan/50 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glow-cyan transition-all duration-300 backdrop-blur-sm"
            >
              Schedule a Call
            </a>
          </div>

          {/* Bottom text */}
          <p className="text-slate-400 text-sm">
            No commitment. No pressure. Just a conversation about what's possible.
          </p>

          {/* Decorative elements */}
          <div className="mt-8 pt-8 border-t border-slate-700/50 flex justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-neon-cyan">✓</span>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-cyan">✓</span>
              <span>Custom Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-cyan">✓</span>
              <span>Expert Team</span>
            </div>
          </div>
        </div>

        {/* Trust elements */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-blue mb-1">50+</div>
            <div className="text-sm">Companies Transformed</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-neon-blue/30 to-transparent"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-cyan mb-1">500M+</div>
            <div className="text-sm">Users Served</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-purple mb-1">5+ years</div>
            <div className="text-sm">Building Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
