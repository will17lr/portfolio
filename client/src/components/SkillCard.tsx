interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  icon,
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <div data-reveal className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-700 transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>
      <h3 className="text-heading-md text-gray-900 mb-2">{title}</h3>
      <p className="text-small text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
