import { Cpu, Satellite, BarChart3, Layers, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Satellite,
    label: 'Real-Time Tracking',
    desc: 'GPS-enabled visibility from warehouse to doorstep — zero blind spots across the entire journey.',
    metric: '24 / 7',
    metricLabel: 'Live Monitoring',
  },
  {
    icon: BarChart3,
    label: 'Predictive Analytics',
    desc: 'Demand forecasting, route scoring and performance dashboards powered by historical data.',
    metric: '40 %',
    metricLabel: 'Efficiency Gain',
  },
  {
    icon: Cpu,
    label: 'Integrated Platforms',
    desc: 'WMS + TMS + OMS — a single connected stack, seamlessly synced with your ERP or e-commerce.',
    metric: '3 +',
    metricLabel: 'Platforms Linked',
  },
  {
    icon: Layers,
    label: 'Elastic Scalability',
    desc: 'Cloud-native architecture that handles 100 orders today and 100,000 tomorrow without friction.',
    metric: '100 K+',
    metricLabel: 'Order Capacity',
  },
];

const techBadges = ['WMS', 'TMS', 'OMS', 'API-First', 'Cloud Native', 'Real-time GPS', 'AI Routing'];

const Technology = () => {
  return (
    <section id="technology" className="section-py overflow-hidden relative bg-gradient-to-br from-primary-50 via-white to-slate-50">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle, #C7D2FE 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-wrap relative">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <ScrollReveal>
              <p className="eyebrow">Technology Stack</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="section-h2">
                Powered by technology.
                <br />
                <span className="text-gradient">Built for reliability.</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.14} direction="right">
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {techBadges.map((b) => (
                <span key={b} className="px-3 py-1.5 rounded-full bg-white border border-border text-xs font-semibold text-muted shadow-xs hover:border-primary/20 hover:text-primary transition-all duration-200">
                  {b}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <ScrollReveal key={f.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group bg-white border border-border rounded-2xl p-7 hover:shadow-xl hover:border-primary/15 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark group-hover:shadow-primarySm transition-all duration-300">
                    <f.icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-dark tracking-tight leading-none">{f.metric}</div>
                    <div className="text-[10px] font-semibold text-muted mt-1 uppercase tracking-wider">{f.metricLabel}</div>
                  </div>
                </div>
                <h3 className="font-bold text-dark text-sm mb-2 group-hover:text-primary transition-colors">{f.label}</h3>
                <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-muted/40 group-hover:text-primary transition-colors">
                  Learn more <ArrowRight size={11} />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
