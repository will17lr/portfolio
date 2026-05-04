import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  highlights?: string[];
  image?: string;
  link?: string;
  github?: string;
  reverse?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  category,
  highlights = [],
  image,
  link,
  github,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div data-reveal className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:grid-cols-2' : ''}`}>
      {/* Image Section */}
      {image && (
        <div className={`${reverse ? 'md:order-2' : ''}`}>
          <div className="group overflow-hidden rounded-lg border border-gray-200 bg-gray-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex h-9 items-center justify-between border-b border-white/10 bg-gray-800 pl-3">
              <span className="text-xs font-medium text-gray-200">{title}</span>
              <div className="flex h-full">
                <span className="flex h-full w-9 items-center justify-center text-xs text-gray-300">-</span>
                <span className="flex h-full w-9 items-center justify-center text-xs text-gray-300">□</span>
                <span className="flex h-full w-9 items-center justify-center bg-red-600 text-xs text-white">×</span>
              </div>
            </div>
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain bg-white transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        {category && (
          <span className="mb-3 inline-flex rounded-full bg-orange-50 px-3 py-1 text-small font-semibold text-orange-700">
            {category}
          </span>
        )}
        <h3 className="text-heading-md text-gray-900 mb-4">{title}</h3>
        <p className="text-body text-gray-600 mb-6">{description}</p>

        {highlights.length > 0 && (
          <ul className="mb-6 grid gap-2 text-small text-gray-700">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-orange-500"></span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-small font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium text-sm"
            >
              <ExternalLink size={16} />
              Voir le projet
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
