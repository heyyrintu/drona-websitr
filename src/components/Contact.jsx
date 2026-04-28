import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-slate-50/50 section-py relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="section-wrap relative">

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">

          {/* ── Left: Form ── */}
          <div>
            <ScrollReveal>
              <p className="eyebrow">Get in Touch</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="section-h2 mb-4">
                Let's build your
                <br />
                <span className="text-gradient">ideal supply chain</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="section-lead text-sm mb-10">
                Share your logistics challenge and our team will come back with a tailored plan — usually within 24 hours.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-dark mb-2">Full Name</label>
                    <input
                      name="name" type="text" required
                      value={formData.name} onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-dark placeholder-light focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10 transition-all shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-dark mb-2">Work Email</label>
                    <input
                      name="email" type="email" required
                      value={formData.email} onChange={handleChange}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-dark placeholder-light focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10 transition-all shadow-xs"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-dark mb-2">Company Name</label>
                  <input
                    name="company" type="text"
                    value={formData.company} onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-dark placeholder-light focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10 transition-all shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-dark mb-2">Message</label>
                  <textarea
                    name="message" required rows={4}
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your logistics challenge…"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-dark placeholder-light focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10 transition-all resize-none shadow-xs"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  type="submit"
                  className={`btn-primary w-full sm:w-auto justify-center px-8 py-3.5 ${sent ? 'bg-green-600 shadow-none' : ''}`}
                >
                  {sent ? '✓ Message Sent!' : (<>Send Message <Send size={15} /></>)}
                </motion.button>
              </form>
            </ScrollReveal>
          </div>

          {/* ── Right: Info panel ── */}
          <ScrollReveal delay={0.1} direction="right">
            <div className="space-y-4 pt-2">
              {/* Gradient info card */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Decorative dot pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-sm" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/5" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-primary-200" />
                    <h3 className="text-base font-extrabold">Ready to get started?</h3>
                  </div>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">We respond to all inquiries within one business day.</p>
                  <a
                    href="https://maps.google.com/?q=Gurugram+Haryana+India"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary-200 hover:text-white transition-colors"
                  >
                    Open in Google Maps <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Contact rows */}
              {[
                { icon: MapPin, label: 'Address', value: 'Gurugram, Haryana 122001, India' },
                { icon: Phone,  label: 'Phone',   value: '+91 124-XXX-XXXX' },
                { icon: Mail,   label: 'Email',   value: 'info@dronalogitech.com' },
                { icon: Clock,  label: 'Hours',   value: 'Mon – Sat · 9 AM – 7 PM IST' },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border shadow-xs hover:shadow-md hover:border-primary/15 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <row.icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted mb-0.5">{row.label}</div>
                    <div className="text-sm font-semibold text-dark">{row.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
