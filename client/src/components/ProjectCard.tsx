import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
  reverse?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
  github,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:grid-cols-2' : ''}`}>
      {/* Image Section */}
      {image && (
        <div className={`${reverse ? 'md:order-2' : ''}`}>
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <h3 className="text-heading-md text-gray-900 mb-4">{title}</h3>
        <p className="text-body text-gray-600 mb-6">{description}</p>

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
