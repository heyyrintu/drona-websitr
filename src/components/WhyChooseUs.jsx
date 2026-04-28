import { Cpu, Route, Building2, HeartHandshake } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const reasons = [
  { icon: Cpu,           n: '01', title: 'Tech-First by Design',      body: 'Automation, AI routing and real-time dashboards aren\'t extras — they\'re standard in everything we do.', iconBg: 'from-primary-100 to-primary-50', iconColor: 'text-primary' },
  { icon: Route,         n: '02', title: 'One Partner, Full Chain',   body: 'From factory gate to customer door — every link of the supply chain managed under a single SLA.', iconBg: 'from-secondary-100 to-secondary-50', iconColor: 'text-secondary' },
  { icon: Building2,     n: '03', title: 'Infinitely Scalable',       body: 'Whether you\'re shipping 10 parcels or 10,000, our cloud-native infrastructure flexes with demand.', iconBg: 'from-primary-100 to-primary-50', iconColor: 'text-primary' },
  { icon: HeartHandshake,n: '04', title: 'Committed Partnership',     body: 'Dedicated account managers, weekly reviews, and full operational transparency at every step.', iconBg: 'from-secondary-100 to-secondary-50', iconColor: 'text-secondary' },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white section-py relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[300px] h-[300px] bg-primary/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="section-wrap relative">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-14 lg:gap-20 items-center">

          {/* Left sticky column */}
          <div className="lg:sticky lg:top-28">
            <ScrollReveal>
              <p className="eyebrow">Why Drona</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="section-h2 mb-6">
                The Drona{' '}
                <span className="text-gradient">difference</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="section-lead text-sm mb-8">
                We built Drona Logitech to solve the exact problems traditional 3PLs have failed to fix — speed, visibility and cost.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a href="#contact" className="btn-primary">
                Work with us
              </a>
            </ScrollReveal>
          </div>

          {/* Right: reason cards */}
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex gap-5 p-6 bg-white rounded-2xl border border-border hover:shadow-xl hover:border-primary/15 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${r.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <r.icon size={20} className={`${r.iconColor} transition-colors duration-300`} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-[0.14em] text-primary/40 mb-1">{r.n}</div>
                    <h3 className="font-bold text-dark text-sm mb-1.5 group-hover:text-primary transition-colors">{r.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{r.body}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
