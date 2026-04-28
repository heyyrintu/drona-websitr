import { Warehouse, Truck, Package, ClipboardList, MapPin, RotateCcw } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Warehouse,
    title: 'Warehousing & Storage',
    description: 'Strategically located, tech-managed facilities with real-time inventory visibility, FIFO/FEFO controls, and climate options.',
    tags: ['WMS-driven', 'Real-time stock'],
    span: 'lg:col-span-2',
    gradient: 'from-primary-50 to-white',
  },
  {
    icon: Truck,
    title: 'Transportation Management',
    description: 'Route-optimized, GPS-tracked freight across road, rail and air modes.',
    tags: ['Multi-modal', 'Live tracking'],
    span: '',
    gradient: 'from-amber-50 to-white',
  },
  {
    icon: Package,
    title: 'Packaging & In-plant Ops',
    description: 'Custom kitting, labelling and in-plant logistics for manufacturing partners.',
    tags: ['Value-added', 'Kitting'],
    span: '',
    gradient: 'from-primary-50 to-white',
  },
  {
    icon: ClipboardList,
    title: 'Inventory & Order Management',
    description: 'Automated forecasting and omni-channel order routing via our OMS platform.',
    tags: ['OMS integrated', 'Omni-channel'],
    span: '',
    gradient: 'from-violet-50 to-white',
  },
  {
    icon: MapPin,
    title: 'Last-Mile Delivery',
    description: 'Customer-centric delivery with real-time tracking, digital POD and customer notifications.',
    tags: ['Digital POD', 'Pan-India'],
    span: '',
    gradient: 'from-secondary-50 to-white',
  },
  {
    icon: RotateCcw,
    title: 'Reverse Logistics',
    description: 'Smooth returns processing, quality checks, and re-integration into forward supply chain.',
    tags: ['Returns mgmt', 'QC enabled'],
    span: '',
    gradient: 'from-primary-50 to-white',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-50/50 section-py relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-wrap relative">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <p className="eyebrow">Our Services</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="section-h2">
                Everything your supply<br />chain needs, <span className="text-gradient">under one roof</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.14} direction="right">
            <p className="section-lead max-w-sm text-sm sm:text-right">
              Comprehensive 3PL services designed to eliminate complexity and scale effortlessly.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 0.06} className={svc.span}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`group h-full bg-gradient-to-br ${svc.gradient} rounded-2xl p-7 border border-border hover:shadow-xl hover:border-primary/15 transition-all duration-300 flex flex-col ${svc.span === 'lg:col-span-2' ? 'lg:flex-row lg:gap-10 lg:items-center' : ''}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-primarySm transition-all duration-300 flex-shrink-0 lg:mb-0">
                  <svc.icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="flex-1 lg:ml-0">
                  <h3 className="font-bold text-dark text-base mb-2 group-hover:text-primary transition-colors duration-200">
                    {svc.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{svc.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {svc.tags.map((t) => (
                      <span key={t} className="tag-neutral text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
