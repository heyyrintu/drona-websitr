import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

const pillars = [
  { number: '01', title: 'Founded in Gurugram', body: 'Born in 2023, headquartered in the heart of India\'s logistics corridor — Gurugram, Haryana.' },
  { number: '02', title: 'IT-First DNA', body: 'Technology isn\'t an add-on for us. WMS, TMS and OMS are baked into every workflow from day one.' },
  { number: '03', title: 'End-to-End Coverage', body: 'One partner for warehousing, transportation, packaging, fulfillment and reverse logistics.' },
  { number: '04', title: 'Pan-India Operations', body: 'Operational across major metros and Tier-2 cities — delivering wherever your customers are.' },
];

const checkpoints = [
  'Real-time shipment visibility',
  'AI-assisted route planning',
  'Dedicated account managers',
  'SLA-backed service levels',
  'Scalable warehouse capacity',
  'Temperature-controlled storage',
];

const About = () => {
  return (
    <section id="about" className="bg-white section-py relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="section-wrap relative">

        {/* ── Top: Label + Headline ── */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <ScrollReveal>
            <p className="eyebrow">About Drona Logitech</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="section-h2 mb-5">
              A new kind of 3PL — built for{' '}
              <span className="text-gradient">the digital era</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="section-lead">
              We combine deep logistics expertise with enterprise-grade technology 
              to help brands operate faster, leaner supply chains — without compromise.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Body: 2 columns ── */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

          {/* Left: Numbered pillars & Image */}
          <div className="flex flex-col gap-10">
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.number} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="group p-6 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="text-[11px] font-black tracking-[0.14em] text-primary/40 mb-3">{p.number}</div>
                    <h3 className="text-sm font-bold text-dark mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{p.body}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-sm border border-border group h-48 md:h-64">
                  <img 
                    src="/warehouse.png" 
                    alt="3PL Warehouse Operations" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-40"></div>
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-sm border border-border group h-32 md:h-48">
                  <img 
                    src="/fleet.png" 
                    alt="Logistics Fleet" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-40"></div>
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-sm border border-border group h-32 md:h-48">
                  <img 
                    src="/tech.png" 
                    alt="Logistics Technology" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-40"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Feature list + CTA */}
          <ScrollReveal delay={0.1} direction="right">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 lg:p-10 border border-primary/10 shadow-sm">
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-primary mb-6">What we bring</p>
              <div className="space-y-3.5 mb-8">
                {checkpoints.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={13} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-dark/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-primary/10">
                <a href="#contact" className="btn-primary w-full justify-center">
                  Talk to our team <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
