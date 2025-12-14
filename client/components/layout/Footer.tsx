import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-slate-950 to-slate-900 text-white border-t border-neon-blue/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4 group">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-neon-blue/80 to-neon-cyan/80 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                </div>
                <span className="font-bold text-xl group-hover:text-neon-cyan transition-colors duration-300">
                  BEKs Build
                </span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Engineering the future of digital products. Building software that powers tomorrow.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glow-cyan transition-all duration-300 border border-slate-700/50 hover:border-neon-cyan/50"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-neon-cyan">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => {
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="text-slate-400 hover:text-neon-cyan transition-colors duration-300 relative group"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-neon-cyan transition-colors duration-300 relative group"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-neon-blue">Services</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-neon-blue transition-colors duration-300 cursor-pointer relative group">
                  Web Development
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
                </li>
                <li className="hover:text-neon-blue transition-colors duration-300 cursor-pointer relative group">
                  Mobile Apps
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
                </li>
                <li className="hover:text-neon-blue transition-colors duration-300 cursor-pointer relative group">
                  UI/UX Design
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
                </li>
                <li className="hover:text-neon-blue transition-colors duration-300 cursor-pointer relative group">
                  Cloud Solutions
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-neon-purple">Contact</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a
                    href="mailto:b.e.koranteng@gmail.com"
                    className="hover:text-neon-purple transition-colors duration-300 relative group"
                  >
                    b.e.koranteng@gmail.com
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+233544188950"
                    className="hover:text-neon-purple transition-colors duration-300 relative group"
                  >
                    +233 544 188 950
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li className="text-slate-400">Ghana</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500">
              &copy; {currentYear} BEKs Build. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-neon-cyan transition-colors duration-300 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="hover:text-neon-cyan transition-colors duration-300 relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
      </div>
    </footer>
  );
}
