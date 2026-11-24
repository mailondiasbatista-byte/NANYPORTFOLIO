import { useEffect, useState } from 'react';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import {
  Language,
  PROFILE,
  ProjectCategory,
  ProjectItem,
  PROJECTS,
  UI_COPY,
} from '../data/portfolioData';

interface ProjectsSectionProps {
  lang: Language;
}

export function ProjectsSection({ lang }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const filters: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: UI_COPY.sections.filters.all[lang] },
    { id: 'diplomacy', label: UI_COPY.sections.filters.diplomacy[lang] },
    { id: 'tech', label: UI_COPY.sections.filters.tech[lang] },
    { id: 'leadership', label: UI_COPY.sections.filters.leadership[lang] },
  ];

  return (
    <section id="projetos" className="py-16 lg:py-24 bg-[#0B111E]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
              {UI_COPY.sections.projectsTitle[lang]}
            </h2>
            <p className="mt-2.5 text-base text-slate-300 leading-relaxed">
              {UI_COPY.sections.projectsSubtitle[lang]}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={lang === 'pt' ? 'Filtrar projetos' : 'Filtrer les projets'}
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#11192B] rounded-lg self-start lg:self-auto"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === f.id
                    ? 'bg-[#1E293B] text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured && filter === 'all';
            return (
              <article
                key={project.id}
                className={`group rounded-2xl transition-colors duration-200 flex flex-col justify-between p-6 sm:p-8 ${
                  isFeatured
                    ? 'lg:col-span-2 bg-[linear-gradient(135deg,#13203B_0%,#0E172A_60%,#111B2E_100%)] text-white hover:bg-[linear-gradient(135deg,#162544_0%,#111B30_60%,#142036_100%)]'
                    : 'bg-[#11192B] text-slate-100 hover:bg-[#152036]'
                }`}
              >
                <div>
                  <div
                    className={`flex items-center justify-between gap-4 text-xs ${
                      isFeatured ? 'text-[#E2B963]' : 'text-slate-400'
                    }`}
                  >
                    <span>{project.kicker[lang]}</span>
                    <span className="font-mono tabular-nums shrink-0 text-slate-300">
                      {project.year}
                    </span>
                  </div>

                  <h3
                    className={`mt-4 font-bold tracking-tight leading-snug text-balance ${
                      isFeatured
                        ? 'font-serif text-2xl sm:text-3xl font-semibold text-white'
                        : 'text-xl text-white'
                    }`}
                  >
                    {project.title[lang]}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {project.summary[lang]}
                  </p>
                </div>

                <div className="mt-8 pt-5 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    {project.competencies[lang].slice(0, 3).join(' · ')}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E2B963] hover:text-[#F3D78C] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A853]"
                  >
                    <span>{lang === 'pt' ? 'Ver Dossier' : 'Voir le Dossier'}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#0F172A] text-slate-100 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5">
              <div>
                <p className="text-xs font-medium text-[#E2B963]">
                  {selectedProject.kicker[lang]} ·{' '}
                  <span className="font-mono tabular-nums text-slate-300">{selectedProject.year}</span>
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white text-balance"
                >
                  {selectedProject.title[lang]}
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">
                  {selectedProject.institution[lang]}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={lang === 'pt' ? 'Fechar janela' : 'Fermer la fenêtre'}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-[#182338] text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400">
                  {lang === 'pt' ? 'Enquadramento' : 'Contexte'}
                </h4>
                <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed">
                  {selectedProject.summary[lang]}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400">
                  {lang === 'pt' ? 'Atividades & Resultados' : 'Activités & Contributions'}
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {selectedProject.details[lang].map((line, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-300 leading-relaxed pl-4 relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#E2B963] before:absolute before:left-0 before:top-2"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <h4 className="text-xs font-semibold text-slate-400">
                  {lang === 'pt' ? 'Competências Mobilizadas' : 'Compétences Mobilisées'}
                </h4>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  {selectedProject.competencies[lang].join(' · ')}
                </p>
              </div>
            </div>

            <div className="pt-5 flex flex-wrap items-center justify-between gap-4">
              {selectedProject.externalUrl ? (
                <a
                  href={selectedProject.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#080C14] bg-[#D4A853] rounded-lg hover:bg-[#E2B963] transition-colors whitespace-nowrap"
                >
                  <span>{selectedProject.externalLabel?.[lang]}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ) : (
                <a
                  href={PROFILE.cvPdfPath}
                  download="CV_Gomes_Isnane_Waldires_Ntcholba.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#080C14] bg-[#D4A853] rounded-lg hover:bg-[#E2B963] transition-colors whitespace-nowrap"
                >
                  <span>{UI_COPY.nav.downloadCv[lang]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {lang === 'pt' ? 'Fechar' : 'Fermer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
