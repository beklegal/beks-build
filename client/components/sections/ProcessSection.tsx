import {
  Lightbulb,
  Pencil,
  Code,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Vision & Discovery",
    description: "Understanding your goals, audience, and unique challenges.",
    icon: Lightbulb,
  },
  {
    number: 2,
    title: "System Design",
    description: "Architecting scalable solutions with cutting-edge technologies.",
    icon: Pencil,
  },
  {
    number: 3,
    title: "Engineering & Testing",
    description: "Building robust, tested code following modern best practices.",
    icon: Code,
  },
  {
    number: 4,
    title: "Deployment",
    description: "Smooth, zero-downtime deployment to production environments.",
    icon: Rocket,
  },
  {
    number: 5,
    title: "Continuous Evolution",
    description: "Monitoring, optimization, and ongoing improvements for growth.",
    icon: TrendingUp,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We Engineer the Future
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A proven process designed to transform your vision into reality.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Step card */}
                  <div className="glassmorphism-md p-6 rounded-xl border border-slate-700/50 hover:border-neon-cyan/50 transition-all duration-300 h-full flex flex-col hover:scale-105">
                    {/* Icon container */}
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 border-2 border-neon-cyan/30 flex items-center justify-center group-hover:border-neon-cyan group-hover:shadow-glow-cyan transition-all duration-300">
                        <Icon className="w-8 h-8 text-neon-cyan group-hover:animate-pulse" />
                      </div>
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center text-slate-900 font-bold text-sm">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed flex-1 group-hover:text-slate-300 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Arrow (visible on hover) */}
                    <div className="mt-4 flex items-center text-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Connection line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-1 h-8 bg-gradient-to-b from-neon-cyan/50 to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-16 border-t border-slate-700/50 text-center">
          <p className="text-slate-300 text-lg mb-6">
            Ready to start your engineering journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-slate-900 font-bold hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              Begin Your Project
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
              className="inline-block px-8 py-3 rounded-lg border-2 border-neon-cyan/50 text-neon-cyan font-bold hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
