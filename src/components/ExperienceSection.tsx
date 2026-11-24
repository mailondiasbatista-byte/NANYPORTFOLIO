import {
  CERTIFICATIONS,
  EDUCATION,
  Language,
  LEADERSHIP_ROLES,
  PROFESSIONAL_EXPERIENCE,
  UI_COPY,
} from '../data/portfolioData';

interface ExperienceSectionProps {
  lang: Language;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  return (
    <section id="experiencia" className="py-16 lg:py-24 bg-[#0B111E]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Professional Experience & Leadership */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {UI_COPY.sections.experienceCol[lang]}
              </h2>

              <div className="mt-6 bg-[#11192B] rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {PROFESSIONAL_EXPERIENCE.role[lang]}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#E2B963]">
                      {PROFESSIONAL_EXPERIENCE.organization[lang]}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-medium tabular-nums text-slate-300">
                    {PROFESSIONAL_EXPERIENCE.duration[lang]}
                  </span>
                </div>

                <ul className="mt-3 space-y-3">
                  {PROFESSIONAL_EXPERIENCE.responsibilities[lang].map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-300 leading-relaxed pl-4 relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#E2B963] before:absolute before:left-0 before:top-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                {UI_COPY.sections.leadershipCol[lang]}
              </h2>

              <div className="mt-6 space-y-3">
                {LEADERSHIP_ROLES.map((item) => (
                  <div
                    key={`${item.period}-${item.organization}`}
                    className="bg-[#11192B] rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <p className="text-base font-semibold text-white">
                        {item.role[lang]}
                      </p>
                      <p className="text-sm text-slate-400">{item.organization}</p>
                    </div>
                    <span className="font-mono text-xs tabular-nums text-[#E2B963] shrink-0">
                      {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Education & Complementary Certifications */}
          <div id="formacao" className="lg:col-span-6 space-y-12 scroll-mt-24">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {UI_COPY.sections.educationCol[lang]}
              </h2>

              <div className="mt-6 space-y-4">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.year + edu.degree.pt}
                    className="bg-[#11192B] rounded-2xl p-6 sm:p-8"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-bold text-white">
                        {edu.degree[lang]}
                      </h3>
                      <span className="font-mono text-xs font-medium tabular-nums text-[#E2B963] shrink-0">
                        {edu.year}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {edu.institution[lang]}
                    </p>
                    {edu.note && (
                      <p className="mt-4 pt-3 font-serif italic text-base text-slate-200">
                        {edu.note[lang]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                {UI_COPY.sections.certificationsCol[lang]}
              </h2>

              <div className="mt-6 space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.year + cert.title.pt}
                    className="bg-[#11192B] rounded-xl px-5 py-4 flex items-start justify-between gap-6"
                  >
                    <div>
                      <p className="text-base font-semibold text-white">
                        {cert.title[lang]}
                      </p>
                      <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                        {cert.focus[lang]}
                      </p>
                    </div>
                    <span className="font-mono text-xs tabular-nums text-[#E2B963] pt-1 shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
