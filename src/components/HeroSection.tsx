import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react';
import { Language, PROFILE, UI_COPY } from '../data/portfolioData';

interface HeroSectionProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

export function HeroSection({ lang, onChangeLang }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#080C14]"
    >
      {/* Subtle architectural ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-12%,rgba(30,64,175,0.22),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_85%_18%,rgba(212,168,83,0.08),transparent_65%)]"
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 pt-10 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-300">
                  {UI_COPY.hero.kicker[lang]}
                </p>

                <div
                  role="group"
                  aria-label="Idioma"
                  className="inline-flex items-center gap-1 p-1 bg-[#101726] rounded-lg"
                >
                  <button
                    type="button"
                    onClick={() => onChangeLang('pt')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      lang === 'pt'
                        ? 'bg-[#1E293B] text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Português
                  </button>
                  <button
                    type="button"
                    onClick={() => onChangeLang('fr')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      lang === 'fr'
                        ? 'bg-[#1E293B] text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Français
                  </button>
                </div>
              </div>

              <h1 className="text-[clamp(2.25rem,4vw,3.75rem)] font-bold tracking-tight leading-[1.08] text-white text-balance max-w-2xl">
                {PROFILE.fullName}
              </h1>

              <p className="mt-4 font-serif italic text-2xl sm:text-[1.75rem] leading-snug text-[#E2B963] text-balance">
                {UI_COPY.hero.subtitle[lang]}
              </p>

              <p className="mt-6 text-base leading-relaxed text-slate-300 max-w-[65ch]">
                {UI_COPY.hero.bio[lang]}
              </p>
            </div>

            <div className="mt-8 pt-6 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#080C14] bg-[#D4A853] rounded-lg hover:bg-[#E2B963] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A853]"
              >
                <span>{UI_COPY.hero.primaryCta[lang]}</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-100 bg-[#101726] rounded-lg hover:bg-[#162033] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A853]"
              >
                <span>{UI_COPY.hero.secondaryCta[lang]}</span>
                <ArrowUpRight className="w-4 h-4 text-[#E2B963]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Identity Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 bg-[#101726] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 pb-5">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    {PROFILE.nationality[lang]} · <span className="font-mono tabular-nums text-slate-200">{PROFILE.age}</span>{' '}
                    {lang === 'pt' ? 'anos' : 'ans'}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#E2B963] shrink-0" aria-hidden="true" />
                    <span>{PROFILE.location[lang]} ({PROFILE.origin[lang]})</span>
                  </p>
                </div>
                <span className="font-mono text-xs tabular-nums text-slate-400">
                  2021 — 2026
                </span>
              </div>

              <div className="my-8 flex items-center justify-center">
                {!imgFailed ? (
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden bg-[#080C14]">
                    <img
                      src={PROFILE.portraitPath}
                      alt={PROFILE.fullName}
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover scale-[1.16]"
                    />
                  </div>
                ) : (
                  <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-[#080C14] text-white flex flex-col items-center justify-center p-6 text-center">
                    <span className="font-serif text-4xl font-semibold tracking-tight text-[#E2B963]">GN</span>
                    <span className="mt-2 text-xs text-slate-300">{PROFILE.fullName}</span>
                  </div>
                )}
              </div>

              <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
                <span>{UI_COPY.hero.portraitCaption[lang]}</span>
                <span className="font-mono tabular-nums text-[#E2B963] font-medium">12,4/20</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Key Credentials Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UI_COPY.metrics.map((metric, idx) => {
            const val = typeof metric.value === 'string' ? metric.value : metric.value[lang];
            return (
              <div key={idx} className="bg-[#0D1422] rounded-2xl p-6 flex flex-col justify-between gap-2">
                <span className="text-xs font-medium text-[#E2B963]">
                  {metric.label[lang]}
                </span>
                <span className="text-2xl font-bold tracking-tight text-white tabular-nums">
                  {val}
                </span>
                <span className="text-xs text-slate-400 leading-relaxed">
                  {metric.detail[lang]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
