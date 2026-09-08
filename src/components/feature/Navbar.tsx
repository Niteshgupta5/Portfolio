import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname === '/') {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
      }
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background-950/90 backdrop-blur-xl border-b border-background-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground-950 whitespace-nowrap"
          >
            Nitesh<span className="text-primary-400">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground-700 hover:text-primary-400 transition-colors rounded-md whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Niteshgupta5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/Niteshgupta5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600 hover:text-primary-400 hover:bg-background-800 transition-all"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill text-lg" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 text-sm font-semibold border border-primary-400/50 text-primary-400 rounded-lg hover:bg-primary-500/10 transition-colors whitespace-nowrap inline-flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/80 animate-ping"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              </span>
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground-950"
            aria-label="Toggle menu"
          >
            <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-4-line'} text-2xl`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background-950/95 backdrop-blur-xl border-t border-background-800/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-foreground-700 hover:text-primary-400 hover:bg-background-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex items-center gap-4 px-3">
              <a
                href="https://github.com/Niteshgupta5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600"
                aria-label="GitHub"
              >
                <i className="ri-github-fill text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/Niteshgupta5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background-800/60 text-foreground-600"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-xl" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}