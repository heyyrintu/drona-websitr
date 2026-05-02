import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Technology', href: '#technology' },
  { name: 'Industries', href: '#industries' },
  { name: 'Impact', href: '#impact' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top strip */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary-dark text-white/80 text-xs py-2 px-4 flex items-center justify-center gap-6 lg:gap-8">
        <span className="flex items-center gap-1.5"><Phone size={11} className="text-primary-200" /> +91 124-XXX-XXXX</span>
        <span className="w-px h-3 bg-white/20" />
        <span className="flex items-center gap-1.5"><Mail size={11} className="text-primary-200" /> info@dronalogitech.com</span>
        <span className="hidden sm:inline w-px h-3 bg-white/20" />
        <span className="hidden sm:inline text-white/60">Mon–Sat: 9AM–7PM IST</span>
      </div>

      <motion.nav
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <img 
              src="https://cdn.dribbble.com/userupload/46214984/file/75afac5029c85450d04825f19761f18e.png?resize=752x265&vertical=center" 
              alt="Drona Logitech Logo" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  scrolled
                    ? 'text-muted hover:text-primary hover:bg-primary-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="btn-primary">
              Get a Quote <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'text-dark hover:bg-primary-50' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-8">
                  <img 
                    src="https://cdn.dribbble.com/userupload/46214984/file/75afac5029c85450d04825f19761f18e.png?resize=752x265&vertical=center" 
                    alt="Drona Logitech Logo" 
                    className="h-8 w-auto"
                  />
                  <button onClick={() => setMobileOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-primary-50">
                    <X size={20} />
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.06 }}
                      className="px-4 py-3 text-sm font-medium text-muted hover:text-primary hover:bg-primary-50 rounded-xl transition-all"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.32 }}
                    className="btn-primary mt-4 justify-center"
                  >
                    Get a Quote
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
