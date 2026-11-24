import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, PROFILE, UI_COPY } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
}

export function Navbar({ lang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '#projetos', label: UI_COPY.nav.projects[lang] },
    { href: '#experiencia', label: UI_COPY.nav.experience[lang] },
    { href: '#competencias', label: UI_COPY.nav.skills[lang] },
    { href: '#formacao', label: UI_COPY.nav.education[lang] },
    { href: '#contacto', label: UI_COPY.nav.contact[lang] },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#080C14]/90 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A853]"
        >
          {PROFILE.wordmark}
        </a>

        <nav
          aria-label={lang === 'pt' ? 'Navegação principal' : 'Navigation principale'}
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white hover:underline underline-offset-4 decoration-[#D4A853] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A853]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#101726] text-slate-200 hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-[#D4A853]"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0E1525] px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-200 hover:text-[#E2B963]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
