import { useEffect } from 'react';
import { Mail, Github, Linkedin, Code2, Database, Zap, Phone, FileText, Sparkles, Terminal, Braces, Rocket } from 'lucide-react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';

const currentYear = new Date().getFullYear();
const linkedInUrl = 'https://www.linkedin.com/in/vogler-wilfried23/';
const cvRequestLink =
  'mailto:w.vogler@outlook.fr?subject=Demande%20de%20CV&body=Bonjour%20Wilfried,%0D%0A%0D%0AJe%20souhaite%20recevoir%20votre%20CV.%0D%0A%0D%0AVoici%20mes%20coordonnees%20:%0D%0A-%20Nom%20:%20%0D%0A-%20Entreprise%20:%20%0D%0A-%20Email%20:%20%0D%0A-%20Telephone%20:%20%0D%0A%0D%0AMerci.';

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-small font-semibold text-orange-700">
              <Sparkles size={16} />
              Portfolio développeur web
            </div>
            <h1 className="text-display text-gray-900 mb-6">
              Wilfried <span className="text-blue-700">VOGLER</span>
            </h1>
            <p className="text-lg font-semibold text-blue-700 mb-4">Développeur Web / Web Mobile Junior</p>
            <p className="text-body text-gray-600 mb-8 max-w-lg">
              En reconversion vers le développement web, je conçois des interfaces fonctionnelles et responsives avec JavaScript, React, Node.js et les bases de données. Mon parcours orienté logique, data et automatisation nourrit une approche rigoureuse des projets web.
            </p>
            <div className="grid w-full max-w-xl grid-cols-1 gap-4 xs:grid-cols-2 md:max-w-lg lg:max-w-xl">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-lg bg-blue-700 px-6 py-3 font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
              >
                Me contacter
              </a>
              <a
                href={cvRequestLink}
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-orange-200 px-6 py-3 font-medium text-orange-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50"
              >
                <FileText size={20} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
                Demander mon CV
              </a>
              <a
                href="https://github.com/will17lr"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50"
              >
                <Github size={20} className="transition-transform duration-200 group-hover:rotate-6" />
                GitHub
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-blue-200 px-6 py-3 font-medium text-blue-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
              >
                <Linkedin size={20} className="transition-transform duration-200 group-hover:scale-110" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="block" data-reveal>
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-950 shadow-2xl">
              <div className="flex h-11 items-center justify-between border-b border-white/10 bg-[#1f2937] pl-4">
                <div className="flex items-center gap-2 text-small font-medium text-gray-200">
                  <Terminal size={16} />
                  <span className="hidden xs:inline">Visual Studio Code</span>
                  <span className="xs:hidden">VS Code</span>
                </div>
                <div className="flex h-full">
                  <span className="flex h-full w-11 items-center justify-center text-gray-300">-</span>
                  <span className="flex h-full w-11 items-center justify-center text-gray-300">□</span>
                  <span className="flex h-full w-11 items-center justify-center bg-red-600 text-white">×</span>
                </div>
              </div>

              <div className="border-b border-white/10 bg-[#111827] px-5 py-2">
                <span className="inline-flex border-t-2 border-blue-500 bg-gray-950 px-4 py-2 text-small font-medium text-white">
                  portfolio.tsx
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-4 p-4 sm:p-5">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-4 flex items-center gap-2 text-small font-semibold text-blue-200">
                    <Braces size={16} />
                    buildInterface()
                  </div>
                  <div className="space-y-3 font-mono text-xs sm:text-sm">
                    <p className="text-gray-500">
                      <span className="text-blue-300">const</span> portfolio = {'{'}
                    </p>
                    <p className="pl-4 text-gray-300">
                      focus: <span className="text-orange-300">'web fonctionnel'</span>,
                    </p>
                    <p className="pl-4 text-gray-300">
                      method: <span className="text-orange-300">'rigueur + curiosité'</span>,
                    </p>
                    <p className="pl-4 text-gray-300">
                      output: <span className="text-green-300">'interfaces claires'</span><span className="typing-cursor"></span>
                    </p>
                    <p className="text-gray-500">{'}'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="rounded-lg bg-blue-600 p-4 text-white shadow-lg">
                    <div className="mb-3 flex items-center justify-between">
                      <Rocket size={20} className="animate-soft-float" />
                      <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold animate-soft-pulse">live</span>
                    </div>
                    <p className="text-3xl font-bold">4</p>
                    <p className="text-small text-blue-100">projets publiés</p>
                  </div>
                  <div className="rounded-lg border border-orange-300/30 bg-orange-400/10 p-4">
                    <p className="text-small font-semibold text-orange-200">Objectif</p>
                    <p className="mt-2 text-xs leading-5 text-white sm:text-sm sm:leading-6">Relier intégration, logique métier et expérience utilisateur.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 px-4 pb-4 sm:px-5 sm:pb-5 2xl:grid-cols-4">
                {[
                  ['Intégration', 'Figma vers UI'],
                  ['Responsive', 'mobile-first'],
                  ['Backend', 'Node / API'],
                  ['Data', 'MongoDB / SQL'],
                ].map(([label, detail]) => (
                  <div key={label} className="min-w-0 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-xs font-semibold text-orange-200">{label}</p>
                    <p className="mt-1 overflow-wrap-anywhere text-xs leading-5 text-gray-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container">
          <div className="mb-16" data-reveal>
            <h2 className="text-heading-lg text-gray-900 mb-4">Compétences</h2>
            <p className="text-body text-gray-600 max-w-2xl">
              Une expertise solide en développement frontend et backend, avec une compréhension approfondie des bases de données et des architectures web modernes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard
              icon={<Code2 size={24} />}
              title="Frontend"
              description="Développement d'interfaces modernes et responsives"
              skills={['HTML5/CSS3', 'JavaScript', 'React', 'Bootstrap', 'Mobile-first']}
            />
            <SkillCard
              icon={<Database size={24} />}
              title="Backend & Bases de Données"
              description="Développement serveur et gestion de données"
              skills={['Node.js', 'Express', 'MongoDB', 'MySQL', 'API REST', 'MVC']}
            />
            <SkillCard
              icon={<Zap size={24} />}
              title="Outils & Pratiques"
              description="Méthodologies modernes et outils de développement"
              skills={['Git/GitHub', 'Figma intégration', 'VS Code', 'Agile/Jira', 'UX/UI', 'Analyse']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container">
        <div className="mb-16" data-reveal>
          <h2 className="text-heading-lg text-gray-900 mb-4">Projets</h2>
          <p className="text-body text-gray-600 max-w-2xl">
            Voici mes réalisations les plus significatives, mettant en avant mes compétences en développement web et web mobile.
          </p>
        </div>

        <div className="space-y-20">
          {/* Project 1: Annabelle */}
          <ProjectCard
            title="Annabelle"
            category="Site vitrine"
            description="Un site web responsive développé en HTML, CSS et JavaScript. Ce projet m'a permis de travailler la structuration de pages, l'intégration d'interfaces et des interactions légères côté client."
            highlights={['Pages statiques structurées', 'Interface responsive', 'Chargement de composants réutilisables']}
            technologies={['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']}
            link="https://will17lr.github.io/annabelle-site-v2/"
            github="https://github.com/will17lr/annabelle-site-v2"
            image={`${import.meta.env.BASE_URL}images/annabelle-project.png`}
          />

          {/* Project 2: La Hora */}
          <ProjectCard
            title="La Hora"
            category="Fullstack"
            description="Un projet fullstack complet combinant frontend et backend. Site complet avec interface admin, gestion des réservations (CRUD), API REST et envoi d'emails via Nodemailer. Ce projet démontre ma capacité à créer une application web complète et fonctionnelle."
            highlights={['Interface admin', 'CRUD avec MongoDB', 'Envoi d’emails via Nodemailer']}
            technologies={['Node.js', 'Express', 'EJS', 'MongoDB', 'Tailwind CSS', 'Nodemailer']}
            link="https://will17lr.github.io/La_Hora/"
            github="https://github.com/will17lr/La_Hora"
            image={`${import.meta.env.BASE_URL}images/la-hora-project.png`}
            reverse
          />

          {/* Project 3: Renter Car */}
          <ProjectCard
            title="Renter Car"
            category="Frontend"
            description="Une interface de location de voitures développée en HTML, CSS et JavaScript. Elle consomme une API pour afficher les véhicules, propose un tri dynamique et une présentation claire des offres."
            highlights={['Consommation de données avec fetch', 'Tri dynamique des véhicules', 'Cartes générées côté client']}
            technologies={['HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'Tri dynamique']}
            link="https://will17lr.github.io/Renter-car/"
            github="https://github.com/will17lr/Renter-car"
            image={`${import.meta.env.BASE_URL}images/renter-car-project.png`}
          />

          {/* Project 4: Memory Game */}
          <ProjectCard
            title="Memory - Mini Jeu"
            category="Jeu web"
            description="Un mini-jeu Memory interactif développé avec React et TypeScript. Ce jeu démontre ma capacité à créer des composants dynamiques, gérer la logique de jeu et proposer une expérience utilisateur engageante. Testez votre mémoire avec ce jeu classique revisité !"
            highlights={['Composants React typés', 'Gestion de la logique de jeu', 'Interface responsive avec Vite']}
            technologies={['React', 'TypeScript', 'Vite', 'CSS3', 'Logique de Jeu']}
            link="https://will17lr.github.io/memory/"
            github="https://github.com/will17lr/memory"
            image={`${import.meta.env.BASE_URL}images/memory-project.png`}
            reverse
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="parcours" className="scroll-mt-16 py-20 bg-gray-50">
        <div className="container" data-reveal>
          <h2 className="text-heading-lg text-gray-900 mb-12">Expérience</h2>
          
          <div className="relative space-y-8 border-l-2 border-blue-100 pl-6">
            {/* Current Experience */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <span className="absolute -left-[33px] top-7 h-3.5 w-3.5 rounded-full border-4 border-white bg-orange-500 shadow"></span>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-heading-md text-gray-900">Développeur Web</h3>
                  <p className="text-body text-blue-700 font-medium">Citopia</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-small font-medium">Sept. 2025 - Oct. 2025</span>
              </div>
              <ul className="space-y-2 text-body text-gray-600">
                <li>• Intégration d'interfaces depuis Figma</li>
                <li>• Amélioration UX/UI</li>
                <li>• Correction de bugs</li>
                <li>• Travail en méthodologie Agile (Jira)</li>
              </ul>
            </div>

            {/* Past Experience */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <span className="absolute -left-[33px] top-7 h-3.5 w-3.5 rounded-full border-4 border-white bg-blue-700 shadow"></span>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-heading-md text-gray-900">Technicien de Base de Données</h3>
                  <p className="text-body text-blue-700 font-medium">Tibco</p>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-small font-medium">Sept. 2002 - Oct. 2003</span>
              </div>
              <ul className="space-y-2 text-body text-gray-600">
                <li>• Application SQL Server 2000</li>
                <li>• Analyses DATA</li>
                <li>• Création DTS</li>
                <li>• Automatisation de requêtes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="py-20 container">
        <h2 className="text-heading-lg text-gray-900 mb-12" data-reveal>Formation</h2>
        
        <div className="relative space-y-8 border-l-2 border-blue-100 pl-6">
          {/* Current Formation */}
          <div className="relative p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <span className="absolute -left-[33px] top-7 h-3.5 w-3.5 rounded-full border-4 border-white bg-orange-500 shadow"></span>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-heading-md text-gray-900">Formation DWWM</h3>
                <p className="text-body text-blue-700 font-medium">Afec La Rochelle</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-small font-medium">Mars 2025 - Déc. 2025</span>
            </div>
            <p className="text-body text-gray-600 mb-3">Développeur Web et Web Mobile</p>
            <ul className="space-y-2 text-small text-gray-600">
              <li>• HTML5 / CSS3 / JavaScript</li>
              <li>• Responsive design (mobile-first)</li>
              <li>• Bootstrap, Git & GitHub</li>
              <li>• Notions : API REST, Node.js, MySQL</li>
            </ul>
          </div>

          {/* Past Formation */}
          <div className="relative p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <span className="absolute -left-[33px] top-7 h-3.5 w-3.5 rounded-full border-4 border-white bg-blue-700 shadow"></span>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-heading-md text-gray-900">TSIG</h3>
                <p className="text-body text-blue-700 font-medium">Afpa Marseille</p>
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-small font-medium">2002 - 2003</span>
            </div>
            <ul className="space-y-2 text-small text-gray-600">
              <li>• Développement COBOL (IBM)</li>
              <li>• PowerBuilder</li>
              <li>• Analyse et traitement de données</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="container text-center" data-reveal>
          <h2 className="text-heading-lg text-white mb-4">Travaillons ensemble</h2>
          <p className="text-body text-blue-100 mb-8 max-w-2xl mx-auto">
            Je suis ouvert à de nouvelles opportunités et projets intéressants. N'hésitez pas à me contacter !
          </p>

          <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-4 sm:max-w-3xl sm:grid-cols-2 xl:max-w-4xl xl:grid-cols-3 2xl:max-w-6xl 2xl:grid-cols-5">
            <a
              href="mailto:w.vogler@outlook.fr"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-white px-5 py-3 font-medium text-blue-700 transition-colors hover:bg-gray-100"
            >
              <Mail size={20} />
              w.vogler@outlook.fr
            </a>
            <a
              href="tel:+33684959411"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-white px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone size={20} />
              +33 6 84 95 94 11
            </a>
            <a
              href={cvRequestLink}
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-orange-300 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <FileText size={20} />
              CV sur demande
            </a>
            <a
              href="https://github.com/will17lr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-white px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-white px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container text-center text-small">
          <p>© {currentYear} Wilfried VOGLER - Développeur Web Junior. Tous droits réservés.</p>
          <p className="mt-2">
            Créé avec React, Tailwind CSS et passion pour le code propre.
          </p>
        </div>
      </footer>
    </div>
  );
}
