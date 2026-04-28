import { ShoppingCart, Store, Factory, Apple, HeartPulse } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const industries = [
  { icon: ShoppingCart, name: 'E-Commerce', description: 'High-velocity fulfillment and precise last-mile delivery for online-first brands.', gradient: 'from-primary-50 to-white', iconBg: 'bg-primary-50', iconColor: 'text-primary' },
  { icon: Store, name: 'Retail', description: 'Omni-channel logistics that bridges your physical and digital storefronts.', gradient: 'from-secondary-50 to-white', iconBg: 'bg-secondary-50', iconColor: 'text-secondary' },
  { icon: Factory, name: 'Manufacturing', description: 'JIT delivery, raw material handling and in-plant logistics for production lines.', gradient: 'from-primary-50 to-white', iconBg: 'bg-primary-50', iconColor: 'text-primary' },
  { icon: Apple, name: 'FMCG', description: 'High-velocity distribution with cold chain options for perishable goods.', gradient: 'from-secondary-50 to-white', iconBg: 'bg-secondary-50', iconColor: 'text-secondary' },
  { icon: HeartPulse, name: 'Healthcare', description: 'GDP-compliant, temperature-controlled logistics for pharma and medical devices.', gradient: 'from-primary-50 to-white', iconBg: 'bg-primary-50', iconColor: 'text-primary' },
];

const Industries = () => {
  return (
    <section id="industries" className="bg-white section-py relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-wrap relative">
        <div className="mb-14">
          <ScrollReveal>
            <p className="eyebrow">Industries We Serve</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="section-h2 max-w-xl">
              Deep expertise across{' '}
              <span className="text-gradient">every vertical</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className={`group p-6 rounded-2xl border border-border bg-gradient-to-br ${ind.gradient} hover:shadow-xl hover:border-primary/15 transition-all duration-300 flex flex-col h-full`}
              >
                <div className={`w-12 h-12 rounded-xl ${ind.iconBg} ${ind.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                  <ind.icon size={22} />
                </div>
                <h3 className="font-bold text-dark text-sm mb-2 group-hover:text-primary transition-colors">{ind.name}</h3>
                <p className="text-xs text-muted leading-relaxed flex-1">{ind.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
