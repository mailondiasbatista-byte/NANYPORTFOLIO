import { useEffect, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Language, PROFILE } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-[#F8FAFC] tracking-[0.01em]">
      <Navbar lang={lang} />

      <main className="flex-1">
        <HeroSection lang={lang} onChangeLang={setLang} />
        <ProjectsSection lang={lang} />
        <SkillsSection lang={lang} />
        <ExperienceSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <footer className="bg-[#06090F] py-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © <span className="font-mono tabular-nums text-slate-300">2026</span> {PROFILE.fullName} ·{' '}
            {PROFILE.location[lang]}
          </p>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-white transition-colors">
              {lang === 'pt' ? 'Voltar ao topo' : 'Haut de page'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
