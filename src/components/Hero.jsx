import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Award, TrendingUp, Package2, Sparkles } from 'lucide-react';

// Reduced, well-padded ticker item list
const TICKER = [
  'Warehousing & Storage', '·', 'Transportation Management', '·',
  'Last-Mile Delivery', '·', 'Reverse Logistics', '·',
  'Order Fulfillment', '·', 'Cold Chain Logistics', '·',
  'Inventory Management', '·', 'Fleet Tracking', '·',
];



const statsRow = [
  { value: '500+', label: 'Orders / Day' },
  { value: '99.2%', label: 'Accuracy Rate' },
  { value: '50+', label: 'Clients Served' },
  { value: '2023', label: 'Established' },
];

const badges = [
  { icon: Award, text: 'ISO Compliant' },
  { icon: TrendingUp, text: '40% Cost Savings' },
  { icon: Package2, text: 'Pan-India Coverage' },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* ── Background layers ── */}
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle, #E0E7FF 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Indigo glow top-right */}
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />
      {/* Cyan glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[100px] pointer-events-none" />
      {/* Amber warm glow */}
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-secondary/[0.05] blur-[80px] pointer-events-none" />

      {/* Decorative floating shapes */}
      <div className="absolute top-32 right-[15%] w-20 h-20 rounded-2xl bg-primary/[0.06] border border-primary/10 rotate-12 animate-float hidden lg:block" />
      <div className="absolute bottom-48 right-[25%] w-14 h-14 rounded-full bg-accent/[0.08] border border-accent/10 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-[10%] w-10 h-10 rounded-lg bg-secondary/[0.08] border border-secondary/10 -rotate-12 animate-float hidden lg:block" style={{ animationDelay: '4s' }} />

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center">
        <div className="section-wrap w-full pt-44 pb-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            {/* Location badge */}
            <motion.div variants={fadeUp} className="mb-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.08em] uppercase border border-primary/15 rounded-full px-4 py-2 bg-primary-50/80 backdrop-blur-sm shadow-sm">
                <MapPin size={12} className="text-primary" />
                Gurugram, Haryana · India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-dark leading-[1.04] tracking-tight mb-7"
            >
              Smarter Logistics.
              <br />
              <span className="text-gradient">Measurable Results.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mb-10"
            >
              Drona Logitech delivers IT-enabled third-party logistics solutions — 
              from warehousing to last-mile delivery — that cut costs, accelerate delivery, 
              and scale with your business.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-14">
              <a href="#contact" className="btn-primary px-7 py-4 text-sm rounded-xl">
                Start a Conversation <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
              <a href="#services" className="btn-ghost-light px-7 py-4 text-sm rounded-xl">
                Explore Services
              </a>
            </motion.div>

            {/* Badge row */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <div
                  key={b.text}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border shadow-xs text-muted text-xs font-medium hover:shadow-sm hover:border-primary/20 transition-all duration-200"
                >
                  <b.icon size={12} className="text-primary" />
                  {b.text}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="border-t border-border bg-white/60 backdrop-blur-xl"
      >
        <div className="section-wrap">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
            {statsRow.map((s) => (
              <div key={s.label} className="py-6 px-6 first:pl-0 last:pr-0">
                <div className="text-2xl sm:text-3xl font-black text-dark tracking-tight">{s.value}</div>
                <div className="text-xs text-muted mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Ticker ── */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-3 overflow-hidden select-none" style={{ height: '40px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            width: 'max-content',
            animation: 'ticker 36s linear infinite',
          }}
        >
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} style={{ padding: '0 20px', color: 'rgba(255,255,255,0.9)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1 }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
