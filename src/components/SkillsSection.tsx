import {
  INTERESTS,
  Language,
  LANGUAGES_SPOKEN,
  SKILL_GROUPS,
  UI_COPY,
} from '../data/portfolioData';

interface SkillsSectionProps {
  lang: Language;
}

export function SkillsSection({ lang }: SkillsSectionProps) {
  return (
    <section id="competencias" className="py-16 lg:py-24 bg-[#080C14]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
            {UI_COPY.sections.skillsTitle[lang]}
          </h2>
          <p className="mt-2.5 text-base text-slate-300 leading-relaxed">
            {UI_COPY.sections.skillsSubtitle[lang]}
          </p>
        </div>

        {/* 3-Column Architectural Skills Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.id}
              className="bg-[#101726] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-5">
                  <span className="font-mono text-xs tabular-nums text-slate-500">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-medium text-[#E2B963]">
                    {group.items.length} {lang === 'pt' ? 'competências' : 'compétences'}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-white">
                  {group.title[lang]}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {group.subtitle[lang]}
                </p>

                <dl className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name.pt} className="bg-[#0B111E] rounded-xl px-4 py-3">
                      <dt className="text-sm font-semibold text-slate-100">
                        {item.name[lang]}
                      </dt>
                      <dd className="mt-0.5 text-xs text-slate-400 tabular-nums">
                        {item.meta[lang]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Interests Strip */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#101726] rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-bold tracking-tight text-white">
              {UI_COPY.sections.languagesTitle[lang]}
            </h3>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {LANGUAGES_SPOKEN.map((spoken) => (
                <div key={spoken.name.pt} className="bg-[#0B111E] rounded-xl p-4">
                  <p className="text-base font-semibold text-white">
                    {spoken.name[lang]}
                  </p>
                  <p className="mt-1 text-sm text-[#E2B963]">
                    {spoken.level[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#101726] rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-bold tracking-tight text-white">
              {UI_COPY.sections.interestsTitle[lang]}
            </h3>
            <div className="mt-5 pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-3 text-sm text-slate-200">
              {INTERESTS[lang].map((interest, i) => (
                <div key={interest} className="flex items-center gap-2.5 bg-[#0B111E] rounded-xl px-4 py-3">
                  <span className="font-mono text-xs tabular-nums text-[#E2B963]">
                    0{i + 1}.
                  </span>
                  <span className="font-medium text-slate-100">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
