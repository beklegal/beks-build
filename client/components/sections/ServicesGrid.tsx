import {
  Code2,
  Globe,
  Smartphone,
  Palette,
  Plug,
  Cloud,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Engineering",
    description: "Tailored solutions engineered from the ground up to solve your unique challenges.",
    icon: Code2,
    accent: "neon-blue",
  },
  {
    title: "Web Applications",
    description: "Next-gen web apps built with cutting-edge technologies for blazing performance.",
    icon: Globe,
    accent: "neon-cyan",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform apps that feel like the future in your users' hands.",
    icon: Smartphone,
    accent: "neon-purple",
  },
  {
    title: "UI/UX & Product Design",
    description: "Beautiful, intuitive interfaces that drive engagement and conversions.",
    icon: Palette,
    accent: "neon-blue",
  },
  {
    title: "API & System Integration",
    description: "Robust APIs and seamless integrations with third-party systems.",
    icon: Plug,
    accent: "neon-cyan",
  },
  {
    title: "Cloud & DevOps Infrastructure",
    description: "Scalable cloud infrastructure and modern deployment pipelines for rapid evolution.",
    icon: Cloud,
    accent: "neon-purple",
  },
  {
    title: "Ongoing Maintenance & Support",
    description: "Post-launch partnership to keep your applications running at peak performance.",
    icon: Wrench,
    accent: "neon-blue",
  },
];

const accentColors = {
  "neon-blue": "border-neon-blue/40 hover:border-neon-blue hover:shadow-glow hover:bg-neon-blue/5",
  "neon-cyan": "border-neon-cyan/40 hover:border-neon-cyan hover:shadow-glow-cyan hover:bg-neon-cyan/5",
  "neon-purple": "border-neon-purple/40 hover:border-neon-purple hover:shadow-glow-purple hover:bg-neon-purple/5",
};

const iconColors = {
  "neon-blue": "text-neon-blue",
  "neon-cyan": "text-neon-cyan",
  "neon-purple": "text-neon-purple",
};

export default function ServicesGrid() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Future Services
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions engineered for forward-thinking teams building the next generation of software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClass = accentColors[service.accent as keyof typeof accentColors];
            const iconColor = iconColors[service.accent as keyof typeof iconColors];

            return (
              <div
                key={index}
                className={`glassmorphism-md p-8 rounded-xl border-2 transition-all duration-300 group hover:scale-105 ${colorClass}`}
              >
                <div className={`mb-6 inline-block p-4 rounded-lg bg-gradient-to-br ${
                  service.accent === "neon-blue" ? "from-neon-blue/20 to-neon-blue/10" :
                  service.accent === "neon-cyan" ? "from-neon-cyan/20 to-neon-cyan/10" :
                  "from-neon-purple/20 to-neon-purple/10"
                } group-hover:from-opacity-30 transition-all duration-300`}>
                  <Icon className={`w-8 h-8 ${iconColor} group-hover:animate-pulse`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>

                <div className={`mt-6 pt-6 border-t border-slate-700/50 flex items-center ${iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
