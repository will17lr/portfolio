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
    <div
      data-reveal
      className="
      group
      rounded-3xl
      border
      border-white/60
      bg-white/80
      p-6
      backdrop-blur
      shadow-[0_10px_30px_rgba(0,0,0,0.06)]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-blue-200
      hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]
      "
    >
      <div
        className="
    mb-5
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-2xl
    bg-blue-100
    text-blue-700
    shadow-inner
    transition-all
    duration-500
    group-hover:scale-110
    group-hover:rotate-3
  "
      >
        {icon}
      </div>
      <h3 className="text-heading-md text-gray-900 mb-2">{title}</h3>
      <p className="text-small text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="
  rounded-full
  border
  border-gray-200
  bg-gray-50
  px-3
  py-1
  text-xs
  font-medium
  text-gray-700
  transition-colors
  duration-300
  hover:border-blue-200
  hover:bg-blue-50
  hover:text-blue-700
"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
