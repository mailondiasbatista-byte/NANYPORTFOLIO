import { FormEvent, useState } from 'react';
import { Check, Copy, Mail, Phone, Send } from 'lucide-react';
import { Language, PROFILE, UI_COPY } from '../data/portfolioData';

interface ContactSectionProps {
  lang: Language;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback ignored gracefully if clipboard permission blocked
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const finalSubject =
      subject.trim() ||
      (lang === 'pt'
        ? `Contacto via Portfólio — ${senderName || 'Visitante'}`
        : `Contact via Portfolio — ${senderName || 'Visiteur'}`);
    const bodyPrefix = senderName.trim()
      ? `De: ${senderName.trim()}\n\n`
      : '';
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      finalSubject
    )}&body=${encodeURIComponent(`${bodyPrefix}${message.trim()}`)}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    window.setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <section id="contacto" className="relative py-16 lg:py-24 bg-[#080C14]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(29,78,216,0.12),transparent_70%)]"
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
                {UI_COPY.sections.contactTitle[lang]}
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                {UI_COPY.sections.contactSubtitle[lang]}
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-[#101726] rounded-2xl p-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400">E-mail</p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="mt-1 block text-sm sm:text-base font-semibold text-white hover:text-[#E2B963] truncate transition-colors"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.email, 'email')}
                  aria-label={lang === 'pt' ? 'Copiar e-mail' : 'Copier l’e-mail'}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>{lang === 'pt' ? 'Copiado' : 'Copié'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{lang === 'pt' ? 'Copiar' : 'Copier'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-[#101726] rounded-2xl p-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400">
                    {lang === 'pt' ? 'Telefone' : 'Téléphone'}
                  </p>
                  <a
                    href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                    className="mt-1 block font-mono text-sm sm:text-base font-semibold tabular-nums text-white hover:text-[#E2B963] transition-colors"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.phone, 'phone')}
                  aria-label={lang === 'pt' ? 'Copiar telefone' : 'Copier le téléphone'}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>{lang === 'pt' ? 'Copiado' : 'Copié'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{lang === 'pt' ? 'Copiar' : 'Copier'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-100 bg-[#101726] rounded-lg hover:bg-[#162033] transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#E2B963]" aria-hidden="true" />
                <span>{lang === 'pt' ? 'Ligar Agora' : 'Appeler'}</span>
              </a>
            </div>
          </div>

          {/* Direct Message Composer */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#101726] rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between gap-4 pb-3">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E2B963]" aria-hidden="true" />
                  <h3 className="text-base font-bold text-white">
                    {lang === 'pt' ? 'Enviar Mensagem Direta' : 'Envoyer un Message Direct'}
                  </h3>
                </div>
                <span className="text-xs text-slate-400">
                  {PROFILE.location[lang]} · {PROFILE.origin[lang]}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'pt' ? 'O seu nome' : 'Votre nom'}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={lang === 'pt' ? 'Ex.: Ana Silva' : 'Ex. : Jean Dupont'}
                    className="w-full px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 bg-[#080C14] rounded-lg focus:outline-none focus:bg-[#0D1422] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'pt' ? 'Assunto' : 'Objet'}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={
                      lang === 'pt'
                        ? 'Oportunidade / Cooperação / Projeto Web'
                        : 'Opportunité / Coopération / Projet Web'
                    }
                    className="w-full px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 bg-[#080C14] rounded-lg focus:outline-none focus:bg-[#0D1422] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {lang === 'pt' ? 'Mensagem' : 'Message'}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'pt'
                      ? 'Escreva os detalhes da sua proposta ou questão...'
                      : 'Décrivez les détails de votre proposition ou demande...'
                  }
                  className="w-full px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 bg-[#080C14] rounded-lg focus:outline-none focus:bg-[#0D1422] transition-colors resize-y"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#080C14] bg-[#D4A853] rounded-lg hover:bg-[#E2B963] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {lang === 'pt' ? 'Abrir no Cliente de E-mail' : 'Ouvrir dans la Messagerie'}
                  </span>
                </button>

                {sentNotice && (
                  <p role="status" className="text-xs font-medium text-emerald-400">
                    {lang === 'pt'
                      ? 'Aplicação de e-mail iniciada com a sua mensagem.'
                      : 'Client de messagerie ouvert avec votre message.'}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
