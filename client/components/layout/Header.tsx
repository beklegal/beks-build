import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 glassmorphism-md border-b border-neon-blue/20 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-neon-blue/80 to-neon-cyan/80 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <span className="text-white font-bold text-lg">B</span>
            </div>
          </div>
          <span className="font-bold text-xl text-white hidden sm:inline group-hover:text-neon-cyan transition-colors duration-300">
            BEKs Build
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-slate-300 hover:text-neon-cyan transition-colors duration-300 font-medium relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-slate-900 font-bold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-neon-cyan" />
          ) : (
            <Menu className="h-6 w-6 text-slate-300 hover:text-neon-cyan transition-colors" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glassmorphism-md border-b border-neon-blue/20 md:hidden">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-slate-300 hover:text-neon-cyan transition-colors font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-slate-900 font-bold hover:shadow-glow transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
