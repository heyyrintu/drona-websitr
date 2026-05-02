import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, ChevronRight, Truck, Warehouse, BarChart3 } from 'lucide-react';

const TICKER = [
  'Warehousing & Storage', '·', 'Transportation Management', '·',
  'Last-Mile Delivery', '·', 'Reverse Logistics', '·',
  'Order Fulfillment', '·', 'Cold Chain Logistics', '·',
  'Inventory Management', '·', 'Fleet Tracking', '·',
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const counterVariant = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: '500+', label: 'Orders/Day', icon: Truck },
  { value: '99.2%', label: 'Accuracy', icon: BarChart3 },
  { value: '50+', label: 'Clients', icon: Warehouse },
];

const Hero = () => {
  const [trackingId, setTrackingId] = useState('');

  return (
    <section id="hero" className="relative overflow-hidden bg-dark" style={{ minHeight: '100vh' }}>

      {/* ── Background image with cinematic overlay ── */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 35%', filter: 'brightness(0.35) saturate(1.15)' }}
        />
        {/* Multi-stop gradient for depth & text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, rgba(30,27,75,0.92) 0%, rgba(30,27,75,0.65) 50%, rgba(30,27,75,0.35) 100%),
              linear-gradient(to bottom, rgba(30,27,75,0.7) 0%, transparent 35%, transparent 65%, rgba(30,27,75,0.92) 100%)
            `,
          }}
        />
        {/* Subtle brand-colored glow */}
        <div className="absolute -top-20 -left-20 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(222,28,28,0.08) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(254,164,24,0.06) 0%, transparent 70%)' }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: '100vh' }}>

        {/* ── Main hero area ── */}
        <div className="flex-1 flex items-center">
          <div className="section-wrap w-full pt-36 sm:pt-40 pb-12 lg:pb-16">
            <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-16 items-center">

              {/* ── Left: Headline block ── */}
              <motion.div variants={stagger} initial="hidden" animate="show">

                {/* Eyebrow */}
                <motion.div variants={fadeUp} className="mb-6">
                  <div
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.1em]"
                    style={{
                      background: 'rgba(222,28,28,0.12)',
                      border: '1px solid rgba(222,28,28,0.2)',
                      color: '#F04848',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    India's IT-Enabled 3PL Partner
                  </div>
                </motion.div>

                {/* Headline — massive, confident */}
                <motion.h1
                  variants={fadeUp}
                  className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.25rem] font-black leading-[1.06] tracking-tight text-white mb-6"
                >
                  Your Supply Chain,{' '}
                  <br className="hidden sm:block" />
                  <span className="text-gradient">Reimagined.</span>
                </motion.h1>

                {/* Sub copy */}
                <motion.p
                  variants={fadeUp}
                  className="text-base sm:text-lg leading-relaxed max-w-lg mb-8"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  From warehousing to last-mile delivery — Drona Logitech's tech-driven 
                  logistics cuts costs by up to 40% while delivering 99.2% order accuracy 
                  across India.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-10">
                  <a
                    href="#contact"
                    className="btn-primary px-7 py-4 text-sm rounded-xl"
                  >
                    Get a Free Quote <ArrowUpRight size={16} strokeWidth={2.5} />
                  </a>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-200"
                    style={{
                      color: 'rgba(255,255,255,0.85)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    }}
                  >
                    Our Services
                    <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </motion.div>

                {/* Tracking bar — utility-driven hero */}
                <motion.div variants={fadeUp}>
                  <div
                    className="flex items-center rounded-2xl overflow-hidden max-w-md"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    <div className="flex items-center gap-2.5 flex-1 px-4 py-3">
                      <Search size={16} style={{ color: 'rgba(255,255,255,0.35)' }} />
                      <input
                        type="text"
                        placeholder="Track your shipment..."
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="bg-transparent border-none outline-none text-sm text-white placeholder-white/30 w-full"
                      />
                    </div>
                    <button
                      className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-white flex-shrink-0 transition-colors duration-200"
                      style={{ background: 'rgba(222,28,28,0.9)' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(222,28,28,1)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(222,28,28,0.9)'}
                    >
                      Track
                    </button>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── Right: Image composition ── */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="hidden lg:flex flex-col gap-3"
              >
                {/* Main image card */}
                <motion.div variants={scaleIn} className="relative group">
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 32px 64px rgba(0,0,0,0.4)',
                    }}
                  >
                    <img
                      src="/warehouse.png"
                      alt="Drona Logitech warehouse operations"
                      className="w-full h-52 xl:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent rounded-2xl" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{ background: 'rgba(222,28,28,0.85)', color: 'white' }}
                      >
                        Warehousing
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Live
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Two smaller image cards */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div variants={scaleIn} className="relative group">
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      }}
                    >
                      <img
                        src="/fleet.png"
                        alt="Transportation fleet"
                        className="w-full h-32 xl:h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent rounded-2xl" />
                      <div className="absolute bottom-2.5 left-2.5">
                        <span
                          className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(254,164,24,0.85)', color: 'white' }}
                        >
                          Fleet
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={scaleIn} className="relative group">
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      }}
                    >
                      <img
                        src="/tech.png"
                        alt="Technology-driven logistics"
                        className="w-full h-32 xl:h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent rounded-2xl" />
                      <div className="absolute bottom-2.5 left-2.5">
                        <span
                          className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(6,182,212,0.85)', color: 'white' }}
                        >
                          Tech
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Mini stats strip */}
                <motion.div
                  variants={fadeUp}
                  className="flex items-center justify-between rounded-2xl px-5 py-3.5"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      custom={i}
                      variants={counterVariant}
                      className="flex items-center gap-2.5"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: 'rgba(222,28,28,0.12)' }}
                      >
                        <s.icon size={14} className="text-primary-light" />
                      </div>
                      <div>
                        <div className="text-sm font-black text-white leading-none">{s.value}</div>
                        <div className="text-[10px] font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* ── Trust strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="py-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="section-wrap">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Trusted by brands across India
              </span>
              <div className="flex items-center gap-6 sm:gap-8">
                {['ISO 9001 Certified', 'GST Compliant', 'FSSAI Licensed', 'Pan-India Network'].map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-semibold tracking-wide"
                    style={{ color: 'rgba(255,255,255,0.25)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Ticker ── */}
        <div className="bg-gradient-to-r from-primary to-primary-dark overflow-hidden select-none" style={{ height: '40px' }}>
          <div
            className="flex items-center h-full"
            style={{
              whiteSpace: 'nowrap',
              width: 'max-content',
              animation: 'ticker 36s linear infinite',
            }}
          >
            {[...TICKER, ...TICKER].map((item, i) => (
              <span
                key={i}
                className="px-5 text-[11px] font-bold tracking-[0.1em] uppercase leading-none"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
