import { ArrowUpRight, Globe, Share2, Mail } from 'lucide-react';

const col1 = [
  { name: 'About Us',    href: '#about' },
  { name: 'Technology',  href: '#technology' },
  { name: 'Impact',      href: '#impact' },
  { name: 'Contact',     href: '#contact' },
];
const col2 = [
  { name: 'Warehousing',       href: '#services' },
  { name: 'Transportation',    href: '#services' },
  { name: 'Last-Mile Delivery',href: '#services' },
  { name: 'Reverse Logistics', href: '#services' },
];
const col3 = [
  { name: 'E-Commerce',    href: '#industries' },
  { name: 'Retail',        href: '#industries' },
  { name: 'Manufacturing', href: '#industries' },
  { name: 'Healthcare',    href: '#industries' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12 pb-12 border-b border-white/[0.07]">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <img 
                src="https://cdn.dribbble.com/userupload/46214984/file/75afac5029c85450d04825f19761f18e.png?resize=752x265&vertical=center" 
                alt="Drona Logitech Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              IT-enabled 3PL logistics for modern businesses. Reliable. Scalable. Technology-driven.
            </p>
            <div className="flex gap-2">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-primary/40 hover:border-primary/30 transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[{ title: 'Company', links: col1 }, { title: 'Services', links: col2 }, { title: 'Industries', links: col3 }].map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/25 mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <a href={l.href} className="text-sm text-white/40 hover:text-white transition-colors duration-150">{l.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} Drona Logitech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a key={l} href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors">{l}</a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-200 hover:text-primary-light transition-colors"
            >
              Get a Quote <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
