const techCategories = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    icon: "🎨",
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Express", "Django", "PostgreSQL"],
    icon: "⚙️",
  },
  {
    category: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin"],
    icon: "📱",
  },
  {
    category: "Cloud & DevOps",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    icon: "☁️",
  },
  {
    category: "Databases",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    icon: "🗄️",
  },
  {
    category: "Tools & Services",
    techs: ["Git", "CI/CD", "Figma", "Jira", "Stripe"],
    icon: "🛠️",
  },
];

const neonColors = [
  "border-neon-blue/50 hover:border-neon-blue hover:shadow-glow hover:text-neon-blue bg-neon-blue/5 hover:bg-neon-blue/10",
  "border-neon-cyan/50 hover:border-neon-cyan hover:shadow-glow-cyan hover:text-neon-cyan bg-neon-cyan/5 hover:bg-neon-cyan/10",
  "border-neon-purple/50 hover:border-neon-purple hover:shadow-glow-purple hover:text-neon-purple bg-neon-purple/5 hover:bg-neon-purple/10",
];

export default function TechStack() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-neon-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Next-Generation Tech Stack
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build solutions that are fast, scalable, and future-proof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {techCategories.map((item, index) => (
            <div
              key={index}
              className={`glassmorphism-md p-8 rounded-xl border-2 transition-all duration-300 hover:scale-105 group cursor-pointer ${
                neonColors[index % neonColors.length]
              }`}
              style={{
                animation: `slide-down 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                  {item.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {item.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="px-4 py-2 rounded-full border border-slate-600/50 bg-slate-800/30 text-slate-300 text-sm font-medium hover:border-neon-cyan hover:text-neon-cyan hover:shadow-glow-cyan hover:bg-neon-cyan/10 transition-all duration-300 group-hover:translate-y-[-2px]"
                    style={{
                      animationDelay: `${techIndex * 0.05}s`,
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech message */}
        <div className="relative mt-12">
          <div className="glassmorphism-lg p-10 rounded-xl border-2 border-neon-cyan/30 text-center hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300">
            <p className="text-slate-300 mb-4 text-lg">
              Not seeing your preferred technology?
            </p>
            <p className="text-white font-semibold mb-6">
              We're always learning and adapting to our clients' needs. Let's discuss what works best for your vision.
            </p>
            <a
              href="https://wa.me/233544188950?text=Hi%20BEKs%20Build%2C%20I'd%20like%20to%20schedule%20a%20consultation%20about%20our%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-lg border border-neon-cyan text-neon-cyan font-semibold hover:bg-neon-cyan/10 hover:shadow-glow-cyan transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

        {/* Tech philosophy */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Performance First</h4>
              <p className="text-slate-400">Lightning-fast applications optimized for every device.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="text-lg font-bold text-white mb-2">Security Built-in</h4>
              <p className="text-slate-400">Enterprise-grade security practices from day one.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="text-lg font-bold text-white mb-2">Scalable Architecture</h4>
              <p className="text-slate-400">Systems designed to grow with your success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
