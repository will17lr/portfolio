import { ExternalLink, Github, Terminal } from "lucide-react";

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
    <div
      data-reveal
      className={`group grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${
        reverse ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* IMAGE CARD */}
      {image && (
        <div className={`${reverse ? "md:col-start-2" : ""}`}>
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-gray-950
              shadow-[0_10px_40px_rgba(0,0,0,0.12)]
              transition-all
              duration-500
              group-hover:-translate-y-2
              group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            "
          >
            {/* Topbar */}
            <div
              className="
                flex
                h-11
                items-center
                justify-between
                border-b
                border-white/10
                bg-[#1f2937]
                px-4
              "
            >
              <div className="flex min-w-0 items-center gap-2 text-sm font-medium text-gray-200">
                <Terminal size={15} className="flex-none" />
                <span className="truncate">{title}</span>
              </div>

              <div className="flex h-full flex-none">
                <span className="flex h-full w-10 items-center justify-center text-gray-400 transition-colors hover:bg-white/10">
                  -
                </span>
                <span className="flex h-full w-10 items-center justify-center text-gray-400 transition-colors hover:bg-white/10">
                  □
                </span>
                <span className="flex h-full w-10 items-center justify-center bg-red-500/90 text-white transition-colors hover:bg-red-500">
                  ×
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-16/09 overflow-hidden bg-neutral-950 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="
                  h-full
                  w-full
                  object-cover
                  object-top
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                "
              />

              {/* Overlay desktop uniquement */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  hidden
                  items-center
                  justify-center
                  gap-4
                  bg-black/45
                  opacity-0
                  backdrop-blur-[2px]
                  transition-all
                  duration-500
                  lg:flex
                  lg:group-hover:opacity-100
                "
              >
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      pointer-events-auto
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-gray-900
                      shadow-xl
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    <ExternalLink size={16} />
                    Voir
                  </a>
                )}

                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      pointer-events-auto
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/20
                      bg-white/10
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      backdrop-blur
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-white/20
                    "
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* CTA mobile + tablette */}
            <div
              className={`
                grid
                gap-3
                border-t
                border-white/10
                bg-gray-950
                p-3
                lg:hidden
                ${link && github ? "grid-cols-2" : "grid-cols-1"}
              `}
            >
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-gray-900
                    shadow
                  "
                >
                  <ExternalLink size={16} />
                  Voir
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className={`${reverse ? "md:col-start-1" : ""}`}>
        {category && (
          <span
            className="
              mb-4
              inline-flex
              items-center
              rounded-full
              border
              border-orange-200
              bg-orange-50
              px-4
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wide
              text-orange-700
            "
          >
            {category}
          </span>
        )}

        <h3 className="mb-5 text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h3>

        <p className="mb-6 text-base leading-7 text-gray-600">{description}</p>

        {highlights.length > 0 && (
          <ul className="mb-8 grid gap-3 text-sm text-gray-700">
            {highlights.map(highlight => (
              <li key={highlight} className="flex items-start gap-3">
                <span
                  className="
                    mt-2
                    h-2
                    w-2
                    flex-none
                    rounded-full
                    bg-orange-500
                    shadow-[0_0_10px_rgba(249,115,22,0.5)]
                  "
                />

                <span className="leading-6">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* TECH STACK */}
        <div className="mb-8 flex flex-wrap gap-3">
          {technologies.map(tech => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-blue-100
                bg-blue-50/80
                px-4
                py-2
                text-xs
                font-semibold
                tracking-wide
                text-blue-700
                backdrop-blur
                transition-all
                duration-300
                hover:border-blue-200
                hover:bg-blue-100
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
