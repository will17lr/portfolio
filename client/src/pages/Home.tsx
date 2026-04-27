import { Mail, Github, Linkedin, Code2, Database, Zap, Phone } from 'lucide-react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-display text-gray-900 mb-6">
              Wilfried <span className="text-blue-700">VOGLER</span>
            </h1>
            <p className="text-lg font-semibold text-blue-700 mb-4">Développeur Web / Web Mobile Junior</p>
            <p className="text-body text-gray-600 mb-8 max-w-lg">
              Initié très tôt à l'informatique, je développe des solutions web fonctionnelles et performantes avec JavaScript, Node.js, React et les bases de données. En reconversion, j'allie rigueur et curiosité pour bâtir un web plus juste et performant.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                Me contacter
              </a>
              <a
                href="https://github.com/will17lr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative h-96 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-900 rounded-2xl opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                {['React', 'Node.js', 'JavaScript', 'MongoDB', 'MySQL', 'Express'].map((tech, i) => (
                  <div
                    key={tech}
                    className="p-4 bg-white border border-gray-200 rounded-lg text-center text-sm font-medium text-gray-700 shadow-lg hover:shadow-xl transition-shadow"
                    style={{
                      animation: `fadeIn 0.6s ease-out ${i * 0.1}s forwards`,
                      opacity: 0,
                    }}
                  >
                    {tech}
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
          <div className="mb-16">
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
              skills={['HTML5/CSS3', 'JavaScript', 'React', 'Bootstrap', 'Responsive Design']}
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
              skills={['Git/GitHub', 'Figma', 'VS Code', 'Agile/Jira', 'UX/UI']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container">
        <div className="mb-16">
          <h2 className="text-heading-lg text-gray-900 mb-4">Projets</h2>
          <p className="text-body text-gray-600 max-w-2xl">
            Voici mes réalisations les plus significatives, mettant en avant mes compétences en développement web et web mobile.
          </p>
        </div>

        <div className="space-y-20">
          {/* Project 1: Annabelle */}
          <ProjectCard
            title="Annabelle"
            description="Une application web interactive développée avec React. Ce projet m'a permis de maîtriser les hooks React, la gestion d'état et les composants réutilisables. L'interface est intuitive et responsive sur tous les appareils."
            technologies={['React', 'JavaScript', 'CSS', 'Responsive Design']}
            link="https://will17lr.github.io/annabelle-site-v2/"
            github="https://github.com/will17lr"
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
          />

          {/* Project 2: La Hora */}
          <ProjectCard
            title="La Hora"
            description="Un projet fullstack complet combinant frontend et backend. Site complet avec interface admin, gestion des réservations (CRUD), API REST et envoi d'emails via Nodemailer. Ce projet démontre ma capacité à créer une application web complète et fonctionnelle."
            technologies={['Node.js', 'Express', 'MongoDB', 'API REST', 'Nodemailer']}
            github="https://github.com/will17lr"
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=croph=300https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=cropfit=crop"
            reverse
          />

          {/* Project 3: ToDo React */}
          <ProjectCard
            title="ToDo React"
            description="Une application de gestion de tâches dynamique développée avec React. Inclut la gestion complète des tâches (CRUD), des filtres avancés et l'intégration d'une API externe. Ce projet illustre ma maîtrise de React et de la manipulation d'APIs."
            technologies={['React', 'JavaScript', 'API externe', 'CRUD', 'Filtres']}
            github="https://github.com/will17lr"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-heading-lg text-gray-900 mb-12">Expérience</h2>
          
          <div className="space-y-8">
            {/* Current Experience */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
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
            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
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
        <h2 className="text-heading-lg text-gray-900 mb-12">Formation</h2>
        
        <div className="space-y-8">
          {/* Current Formation */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
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
          <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
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
        <div className="container text-center">
          <h2 className="text-heading-lg text-white mb-4">Travaillons ensemble</h2>
          <p className="text-body text-blue-100 mb-8 max-w-2xl mx-auto">
            Je suis ouvert à de nouvelles opportunités et projets intéressants. N'hésitez pas à me contacter !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <a
              href="mailto:w.vogler@outlook.fr"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              <Mail size={20} />
              w.vogler@outlook.fr
            </a>
            <a
              href="tel:+33684959411"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              <Phone size={20} />
              +33 6 84 95 94 11
            </a>
            <a
              href="https://github.com/will17lr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container text-center text-small">
          <p>© 2024 Wilfried VOGLER - Développeur Web Junior. Tous droits réservés.</p>
          <p className="mt-2">
            Créé avec React, Tailwind CSS et passion pour le code propre.
          </p>
        </div>
      </footer>
    </div>
  );
}
