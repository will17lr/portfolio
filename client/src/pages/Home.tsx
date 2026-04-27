import { Mail, Github, Linkedin, Code2, Database, Zap } from 'lucide-react';
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
              Développeur Web <span className="text-blue-700">Junior</span>
            </h1>
            <p className="text-body text-gray-600 mb-8 max-w-lg">
              Je crée des expériences web modernes et performantes avec JavaScript, React, Vue.js et les bases de données. Passionné par le code propre et l'apprentissage continu.
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
                {['React', 'Vue.js', 'JavaScript', 'MongoDB', 'MariaDB', 'SQL'].map((tech, i) => (
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
              Une expertise solide en développement frontend et une compréhension des bases de données pour créer des applications complètes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard
              icon={<Code2 size={24} />}
              title="Frontend"
              description="Développement d'interfaces modernes et réactives"
              skills={['JavaScript', 'React', 'Vue.js', 'HTML/CSS', 'Tailwind CSS']}
            />
            <SkillCard
              icon={<Database size={24} />}
              title="Bases de Données"
              description="Conception et gestion de données relationnelles et NoSQL"
              skills={['MongoDB', 'MariaDB', 'SQL', 'DBEaver']}
            />
            <SkillCard
              icon={<Zap size={24} />}
              title="Outils & Pratiques"
              description="Méthodologies modernes et outils de développement"
              skills={['Git', 'GitHub', 'Responsive Design', 'RESTful APIs']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container">
        <div className="mb-16">
          <h2 className="text-heading-lg text-gray-900 mb-4">Projets</h2>
          <p className="text-body text-gray-600 max-w-2xl">
            Voici mes réalisations les plus significatives, mettant en avant mes compétences en développement web.
          </p>
        </div>

        <div className="space-y-20">
          {/* Project 1 */}
          <ProjectCard
            title="Annabelle"
            description="Une application web interactive développée avec React. Ce projet m'a permis de maîtriser les hooks React, la gestion d'état et les composants réutilisables. L'interface est intuitive et responsive sur tous les appareils."
            technologies={['React', 'JavaScript', 'CSS', 'Responsive Design']}
            github="https://github.com/will17lr"
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
          />

          {/* Project 2 */}
          <ProjectCard
            title="La Hora"
            description="Un projet Vue.js mettant en avant mes compétences en développement frontend. Cette application démontre ma capacité à créer des interfaces dynamiques, gérer les données en temps réel et implémenter des animations fluides."
            technologies={['Vue.js', 'JavaScript', 'Tailwind CSS', 'API Integration']}
            github="https://github.com/will17lr"
            image="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop"
            reverse
          />

          {/* Project 3 */}
          <ProjectCard
            title="Rapport de Stage"
            description="Un projet fullstack combinant frontend et backend. J'ai travaillé avec React pour l'interface utilisateur et j'ai géré une base de données MongoDB et MariaDB. Ce projet m'a permis de comprendre l'architecture complète d'une application web moderne."
            technologies={['React', 'Node.js', 'MongoDB', 'MariaDB', 'SQL']}
            github="https://github.com/will17lr"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="container text-center">
          <h2 className="text-heading-lg text-white mb-4">Travaillons ensemble</h2>
          <p className="text-body text-blue-100 mb-8 max-w-2xl mx-auto">
            Je suis ouvert à de nouvelles opportunités et projets intéressants. N'hésitez pas à me contacter !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              <Mail size={20} />
              Me contacter par email
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
          <p>© 2024 Will - Développeur Web Junior. Tous droits réservés.</p>
          <p className="mt-2">
            Créé avec React, Tailwind CSS et passion pour le code propre.
          </p>
        </div>
      </footer>
    </div>
  );
}
