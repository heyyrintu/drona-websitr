import { TrendingUp, Clock, Target, DollarSign } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import { motion } from 'framer-motion';

const metrics = [
  { icon: Clock,      value: 40,  suffix: '%',   label: 'Faster Deliveries',  desc: 'via route optimisation & real-time dispatch', color: 'from-primary to-primary-dark' },
  { icon: DollarSign, value: 30,  suffix: '%',   label: 'Cost Reduction',     desc: 'through warehouse & inventory optimisation', color: 'from-secondary to-secondary-dark' },
  { icon: Target,     value: 99,  suffix: '.2%', label: 'Order Accuracy',     desc: 'powered by automated verification systems', color: 'from-secondary-light to-secondary' },
  { icon: TrendingUp, value: 500, suffix: '+',   label: 'Shipments / Day',    desc: 'processed across our fulfillment network', color: 'from-primary-light to-primary' },
];

const Impact = () => {
  return (
    <section id="impact" className="section-py overflow-hidden relative bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle, #E0E7FF 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-wrap relative">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <p className="eyebrow">Proven Impact</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="section-h2 mb-4">
              Numbers that speak
              <br />
              <span className="text-gradient">for themselves</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="section-lead mx-auto text-center">
              Every metric reflects a real improvement delivered to our clients' operations.
            </p>
          </ScrollReveal>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group bg-white border border-border rounded-2xl p-7 hover:shadow-xl hover:border-primary/15 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}>
                  <m.icon size={18} className="text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-dark tracking-tight mb-1">
                  <AnimatedCounter end={m.value} suffix={m.suffix} />
                </div>
                <div className="text-sm font-bold text-dark/80 mb-1">{m.label}</div>
                <div className="text-xs text-muted leading-relaxed">{m.desc}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust row */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-border">
            <div className="flex -space-x-3">
              {[
                { bg: 'bg-gradient-to-br from-primary to-primary-dark', letter: 'D' },
                { bg: 'bg-gradient-to-br from-secondary-light to-secondary', letter: 'L' },
                { bg: 'bg-gradient-to-br from-secondary to-secondary-dark', letter: '3' },
                { bg: 'bg-gradient-to-br from-primary-light to-primary', letter: 'P' },
              ].map((item, i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white ${item.bg} flex items-center justify-center shadow-sm`}>
                  <span className="text-white text-xs font-bold">{item.letter}</span>
                </div>
              ))}
            </div>
            <p className="text-muted text-sm text-center sm:text-left">
              Trusted by <strong className="text-dark font-semibold">50+ businesses</strong> across India — and growing.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Impact;
