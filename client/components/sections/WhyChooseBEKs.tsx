import { Check } from "lucide-react";

const reasons = [
  {
    title: "Future-Proof Architecture",
    description: "Built with scalability and longevity in mind. Your software grows with your business.",
  },
  {
    title: "Clean & Scalable Code",
    description: "Well-documented, maintainable code that becomes an asset, not a liability.",
  },
  {
    title: "Security-First Mindset",
    description: "Modern security practices baked into every layer. Your data is protected.",
  },
  {
    title: "Rapid Iteration",
    description: "Fast feedback loops and continuous improvement. Build smarter, not just faster.",
  },
  {
    title: "Post-Launch Partnership",
    description: "We don't disappear after launch. We're invested in your long-term success.",
  },
  {
    title: "Modern Tech Stack",
    description: "Latest frameworks and tools that give you a competitive edge in the market.",
  },
];

export default function WhyChooseBEKs() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Forward-Thinking Teams Choose BEKs Build
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're not just developers—we're engineers building the future with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative flex gap-6 p-6 rounded-xl glassmorphism-md border border-slate-700/50 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105"
              style={{
                animation: `slide-down 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Animated check circle */}
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 border border-neon-blue/30 flex items-center justify-center group-hover:border-neon-blue transition-all duration-300">
                  <Check className="h-6 w-6 text-neon-cyan group-hover:animate-pulse" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute inset-0 rounded-xl border border-neon-blue/0 group-hover:border-neon-blue/20 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 pt-12 border-t border-slate-700/50 text-center">
          <p className="text-slate-300 mb-4 text-lg">
            Ready to build software that lasts?
          </p>
          <div className="inline-block glassmorphism px-8 py-3 rounded-lg border border-neon-cyan/30">
            <span className="text-neon-cyan font-semibold">Let's start your journey</span>
          </div>
        </div>
      </div>
    </section>
  );
}
