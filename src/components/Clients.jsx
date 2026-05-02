import { useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, useInView } from 'framer-motion';
import { MapPin, ArrowRight, Building2, TrendingUp, Users, Globe } from 'lucide-react';

/* ───────────────────────────────────────────
   Client data
   ─────────────────────────────────────────── */

const getIcon = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const clients = [
  { name: 'Ashok Leyland',       color: '#2E7D32', logo: getIcon('ashokleyland.com') },
  { name: 'KICL',                color: '#1565C0', logo: getIcon('kotharipetrochemicals.com') },
  { name: 'Craftsman Automation',color: '#7B1FA2', logo: getIcon('craftsmanautomation.com') },
  { name: 'EShopBox',            color: '#E65100', logo: getIcon('eshopbox.com') },
  { name: 'REDTAPE',             color: '#C62828', logo: getIcon('redtape.com') },
  { name: 'Tata Motors',         color: '#0D47A1', logo: getIcon('tatamotors.com') },
  { name: 'CNH Industrial',      color: '#37474F', logo: getIcon('cnhindustrial.com') },
  { name: 'Lifelong',            color: '#00796B', logo: getIcon('lifelongindia.com') },
  { name: 'Fine Organics',       color: '#558B2F', logo: getIcon('fineorganics.com') },
];

const timeline = [
  { date: "DEC '23", client: 'Ashok Leyland',       loc: null },
  { date: "JAN '24", client: 'KICL',                loc: null },
  { date: "MAR '24", client: 'Craftsman Automation', loc: null },
  { date: "JUL '24", client: 'EShopBox',            loc: null },
  { date: "JUL '24", client: 'REDTAPE',             loc: null },
  { date: "OCT '24", client: 'Tata Motors',         loc: 'Multiple Locations' },
  { date: "JAN '25", client: 'Ashok Leyland',       loc: null },
  { date: "JUN '25", client: 'CNH Industrial',      loc: null },
  { date: "JUN '25", client: 'REDTAPE',             loc: 'Hyderabad' },
  { date: "JUL '25", client: 'Lifelong',            loc: null },
  { date: "AUG '25", client: 'Fine Organics',       loc: 'Mumbai' },
  { date: "OCT '25", client: 'Fine Organics',       loc: 'Hyderabad' },
  { date: "DEC '25", client: 'Ashok Leyland',       loc: 'Pantnagar' },
  { date: "JAN '26", client: 'Ashok Leyland',       loc: 'Pantnagar' },
];

const getColor = (name) => clients.find((c) => c.name === name)?.color || '#888';
const getLogo = (name) => clients.find((c) => c.name === name)?.logo;

const stats = [
  { icon: Building2, value: '9+', label: 'Enterprise Clients' },
  { icon: TrendingUp, value: '14', label: 'Active Engagements' },
  { icon: Globe, value: '6+', label: 'Cities Covered' },
  { icon: Users, value: '3+', label: 'Years of Trust' },
];

/* ─── Animated number ─── */
const AnimNum = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >{value}</motion.span>
      ) : '0'}
    </span>
  );
};

/* ──────────────────────────────────────
   MARQUEE — light theme
   ────────────────────────────────────── */
const Marquee = ({ speed = 45, reverse = false }) => {
  const items = [...clients, ...clients, ...clients];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />

      <div
        className="flex items-center gap-5"
        style={{
          width: 'max-content',
          animation: `${reverse ? 'tickerReverse' : 'tickerMarquee'} ${speed}s linear infinite`,
        }}
      >
        {items.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-border shadow-xs hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none"
          >
            {c.logo && (
              <img 
                src={c.logo} 
                alt={c.name} 
                className="h-5 w-auto max-w-[60px] object-contain rounded-sm" 
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} 
              />
            )}
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ background: c.color, display: c.logo ? 'none' : 'block' }}
            />
            <span className="text-sm font-semibold text-dark whitespace-nowrap">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ──────────────────────────────────────
   TIMELINE — modern animated artwork
   ────────────────────────────────────── */
const TimelineSection = () => {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 350, behavior: 'smooth' });
  };

  const ITEM_WIDTH = 180;
  const SVG_WIDTH = timeline.length * ITEM_WIDTH;

  return (
    <div className="relative mt-20" ref={containerRef}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-[2px] bg-primary rounded-full" />
        <span className="text-xs font-bold text-muted uppercase tracking-[0.15em]">Growth Journey</span>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-border text-muted hover:bg-primary hover:text-white hover:shadow-md transition-all duration-300 hover:-translate-x-0.5"
          >
            <ArrowRight size={16} className="rotate-180" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-border text-muted hover:bg-primary hover:text-white hover:shadow-md transition-all duration-300 hover:translate-x-0.5"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Scrollable track */}
      <div className="relative bg-gradient-to-b from-white to-surface/30 rounded-3xl border border-border shadow-sm p-4 overflow-hidden group">
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-br-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-tl-full pointer-events-none" />

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-none relative z-10"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex items-start min-w-max relative px-10 pb-16 pt-12" style={{ width: SVG_WIDTH + 100 }}>
            
            {/* ── Modern Animated SVG Path Artwork ── */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 right-10 h-[100px] pointer-events-none">
              <svg width={SVG_WIDTH} height="100" viewBox={`0 0 ${SVG_WIDTH} 100`} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background soft track */}
                <path 
                  d={`M 0 50 ${timeline.map((_, i) => `C ${i * ITEM_WIDTH + 60} ${i % 2 === 0 ? 20 : 80}, ${i * ITEM_WIDTH + 120} ${i % 2 === 0 ? 80 : 20}, ${(i + 1) * ITEM_WIDTH} 50`).join(' ')}`}
                  stroke="rgba(222, 28, 28, 0.1)" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                
                {/* Animated colored wave */}
                {inView && (
                  <motion.path 
                    d={`M 0 50 ${timeline.map((_, i) => `C ${i * ITEM_WIDTH + 60} ${i % 2 === 0 ? 20 : 80}, ${i * ITEM_WIDTH + 120} ${i % 2 === 0 ? 80 : 20}, ${(i + 1) * ITEM_WIDTH} 50`).join(' ')}`}
                    stroke="url(#gradientPulse)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                )}

                <defs>
                  <linearGradient id="gradientPulse" x1="0" y1="0" x2={SVG_WIDTH} y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DE1C1C" />
                    <stop offset="0.5" stopColor="#FEA418" />
                    <stop offset="1" stopColor="#DE1C1C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Nodes */}
            {timeline.map((item, i) => {
              const isActive = activeIdx === i;
              const color = getColor(item.client);
              const isAbove = i % 2 === 0;

              return (
                <div
                  key={`${item.date}-${item.client}-${i}`}
                  className="absolute"
                  style={{ 
                    left: `${i * ITEM_WIDTH + 10}px`,
                    top: isAbove ? '20%' : '80%',
                    transform: 'translateY(-50%)',
                    width: '160px'
                  }}
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.5, type: 'spring' }}
                    className={`flex flex-col items-center ${isAbove ? '' : 'flex-col-reverse'}`}
                  >
                    {/* Modern Card */}
                    <div className={isAbove ? 'mb-4' : 'mt-4'}>
                      <motion.div
                        animate={{
                          y: isActive ? (isAbove ? -6 : 6) : 0,
                          scale: isActive ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative rounded-2xl px-5 py-3.5 text-center transition-all duration-300 bg-white"
                        style={{
                          border: `1px solid ${isActive ? color : '#F1F5F9'}`,
                          boxShadow: isActive 
                            ? `0 10px 30px -5px ${color}25, 0 0 0 2px ${color}10` 
                            : '0 4px 15px -3px rgba(0,0,0,0.05)',
                          minWidth: '140px',
                        }}
                      >
                        {isActive && (
                          <motion.div 
                            layoutId="activeGlow"
                            className="absolute -inset-1 rounded-2xl opacity-20 blur-sm -z-10"
                            style={{ background: color }}
                          />
                        )}
                        
                        <div className="flex items-center justify-center gap-2.5 mb-1.5">
                          {getLogo(item.client) && (
                            <img 
                              src={getLogo(item.client)} 
                              alt={item.client} 
                              className="h-5 w-auto max-w-[45px] object-contain rounded-sm"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          )}
                        </div>
                        <div
                          className="text-[13px] font-extrabold leading-tight transition-colors duration-200"
                          style={{ color: isActive ? color : '#334155' }}
                        >
                          {item.client}
                        </div>
                        {item.loc && (
                          <div className="flex items-center justify-center gap-1 mt-1.5 pt-1.5 border-t border-border text-[10px] font-semibold text-muted">
                            <MapPin size={10} className={isActive ? '' : 'text-primary/70'} style={isActive ? {color} : {}} />
                            {item.loc}
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Node on the curved path */}
                    <div className="flex flex-col items-center relative">
                      {/* Connecting dotted line */}
                      {isAbove && (
                        <div className="w-px h-6 border-l-2 border-dashed border-border mb-1" />
                      )}

                      <motion.div
                        animate={{
                          scale: isActive ? 1.4 : 1,
                          boxShadow: isActive
                            ? `0 0 0 6px ${color}20, 0 0 15px ${color}30`
                            : `0 0 0 4px rgba(222,28,28,0.1)`,
                        }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4 rounded-full relative z-10 border-[3px] border-white"
                        style={{ background: isActive ? color : '#DE1C1C' }}
                      />

                      {/* Connecting dotted line */}
                      {!isAbove && (
                        <div className="w-px h-6 border-l-2 border-dashed border-border mt-1" />
                      )}

                      <div
                        className={`absolute ${isAbove ? 'top-10' : 'bottom-10'} whitespace-nowrap text-[11px] font-black tracking-widest uppercase transition-all duration-300 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full`}
                        style={{ 
                          color: isActive ? color : '#94A3B8',
                          boxShadow: isActive ? `0 2px 8px ${color}15` : 'none',
                          border: `1px solid ${isActive ? `${color}30` : 'transparent'}`
                        }}
                      >
                        {item.date}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


/* ──────────────────────────────────────
   MAIN CLIENTS SECTION — light theme
   ────────────────────────────────────── */
const Clients = () => {
  return (
    <section id="clients" className="bg-surface section-py relative overflow-hidden">
      {/* Background deco */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-wrap relative">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <p className="eyebrow justify-center">Our Clients</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="section-h2 mb-4">
              Trusted by{' '}
              <span className="text-gradient">Industry Leaders</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="section-lead mx-auto">
              From automotive giants to D2C brands — we've been powering supply chains
              since 2023, growing stronger every quarter.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Stats row ── */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/15 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center bg-primary-50">
                  <s.icon size={20} className="text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-dark tracking-tight mb-1">
                  <AnimNum value={s.value} />
                </div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Marquee ── */}
        <ScrollReveal delay={0.15}>
          <div className="space-y-4 mb-2">
            <Marquee speed={50} />
            <Marquee speed={55} reverse />
          </div>
        </ScrollReveal>

        {/* ── Timeline ── */}
        <ScrollReveal delay={0.2}>
          <TimelineSection />
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Clients;
