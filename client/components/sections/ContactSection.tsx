import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Failed to send message. Please try again.");
        return;
      }

      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setFocused(null);
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's discuss your vision and turn it into reality. We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact info cards */}
          <div className="glassmorphism-md p-8 rounded-xl border border-neon-blue/30 hover:border-neon-blue hover:shadow-glow transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-neon-blue/10 group-hover:bg-neon-blue/20 group-hover:shadow-glow transition-all duration-300">
                <Mail className="h-6 w-6 text-neon-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <p className="text-slate-300 group-hover:text-neon-cyan transition-colors">
                  b.e.koranteng@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="glassmorphism-md p-8 rounded-xl border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 group-hover:shadow-glow-cyan transition-all duration-300">
                <Phone className="h-6 w-6 text-neon-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">WhatsApp/Call</h3>
                <p className="text-slate-300 group-hover:text-neon-cyan transition-colors">
                  +233 544 188 950
                </p>
              </div>
            </div>
          </div>

          <div className="glassmorphism-md p-8 rounded-xl border border-neon-purple/30 hover:border-neon-purple hover:shadow-glow-purple transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-neon-purple/10 group-hover:bg-neon-purple/20 group-hover:shadow-glow-purple transition-all duration-300">
                <MapPin className="h-6 w-6 text-neon-purple" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                <p className="text-slate-300 group-hover:text-neon-cyan transition-colors">
                  Ghana
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <div className="glassmorphism-lg p-10 rounded-xl border border-slate-700/50 hover:border-neon-cyan/30 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder=" "
                  className="w-full px-6 py-4 rounded-lg bg-slate-800/50 border-2 border-slate-700/50 text-white placeholder-transparent focus:outline-none focus:border-neon-blue focus:shadow-glow transition-all duration-300"
                />
                <label className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                  focused === "name" || formData.name
                    ? "-top-2.5 bg-slate-900 px-2 text-sm text-neon-blue"
                    : "top-4 text-slate-400"
                }`}>
                  Full Name
                </label>
              </div>

              {/* Email field */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder=" "
                  className="w-full px-6 py-4 rounded-lg bg-slate-800/50 border-2 border-slate-700/50 text-white placeholder-transparent focus:outline-none focus:border-neon-cyan focus:shadow-glow-cyan transition-all duration-300"
                />
                <label className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                  focused === "email" || formData.email
                    ? "-top-2.5 bg-slate-900 px-2 text-sm text-neon-cyan"
                    : "top-4 text-slate-400"
                }`}>
                  Email Address
                </label>
              </div>

              {/* Message field */}
              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder=" "
                  rows={5}
                  className="w-full px-6 py-4 rounded-lg bg-slate-800/50 border-2 border-slate-700/50 text-white placeholder-transparent focus:outline-none focus:border-neon-purple focus:shadow-glow-purple transition-all duration-300 resize-none"
                ></textarea>
                <label className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                  focused === "message" || formData.message
                    ? "-top-2.5 bg-slate-900 px-2 text-sm text-neon-purple"
                    : "top-4 text-slate-400"
                }`}>
                  Message
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-slate-900 font-bold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="h-5 w-5" />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
              </button>
            </form>

            {/* Privacy note */}
            <p className="text-center text-slate-400 text-sm mt-6">
              We respect your privacy. Your data is secure with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
