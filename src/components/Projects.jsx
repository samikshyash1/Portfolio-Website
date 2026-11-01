
import {
  ArrowUpRight,
  ShoppingBag,
  ListTodo,
  Coins,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Shopping Cart",
    category: "STATE MANAGEMENT",
    description:
      "A shopping cart application built with React and Redux Toolkit. Users can add products, remove items, and update quantities while managing cart state.",
    technologies: ["React", "Redux Toolkit", "JavaScript", "CSS"],
    icon: ShoppingBag,
    githubRepo:
      "https://github.com/Samikshyash/React-projects/tree/main/cartReduxTool",
  },
  {
    number: "02",
    title: "Toolkit Todo",
    category: "TASK MANAGEMENT",
    description:
      "A task management application built with React and Redux Toolkit, exploring centralized state management and reusable React components.",
    technologies: ["React", "Redux Toolkit", "JavaScript"],
    icon: ListTodo,
    githubRepo:
      "https://github.com/Samikshyash/React-projects/tree/main/reduxToolkit-todo",
  },
  {
    number: "03",
    title: "Currency Converter",
    category: "CURRENCY CONVERSION",
    description:
      "A currency converter project built with React. Explore the implementation and features in the project repository.",
    technologies: ["React", "JavaScript", "CSS"],
    icon: Coins,
    githubRepo:
      "https://github.com/Samikshyash/React-projects/tree/main/react-app/currency-converter",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#faf6f2] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c99fa3]" />
            <p className="text-[13px] font-medium tracking-[0.25em] text-[#b88a8e]">
              SELECTED WORK
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-[42px] font-semibold leading-tight tracking-tight text-[#493b3b] md:text-[54px]">
              Things I've{" "}
              <span className="font-serif font-normal italic text-[#c99fa3]">
                built.
              </span>
            </h2>

            <p className="max-w-sm text-[16px] leading-8 text-[#897773]">
              A collection of projects where I've been learning,
              experimenting, and turning ideas into working applications.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-[#eadeda] bg-[#fffdfb] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9c2bd] hover:shadow-[0_18px_45px_rgba(73,59,59,0.06)]"
              >
                {/* Project visual area */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#f3e7e4] md:h-72">
                  <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#e8cfcc]/60 blur-3xl" />
                  <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[#faf6f2] blur-3xl" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/70 bg-[#faf6f2]/80 text-[#bd8990] shadow-sm transition duration-500 group-hover:scale-110">
                    <Icon size={48} strokeWidth={1.2} />
                  </div>

                  <span className="absolute left-7 top-7 text-sm tracking-widest text-[#a58f89]">
                    {project.number}
                  </span>

                  <span className="absolute bottom-7 right-7 rounded-full border border-[#dfc7c3] bg-[#faf6f2]/70 px-4 py-2 text-[11px] font-medium tracking-widest text-[#897773]">
                    {project.category}
                  </span>
                </div>

                {/* Project details */}
                <div className="p-7 md:p-9">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-[29px] font-semibold text-[#493b3b]">
                      {project.title}
                    </h3>

                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadeda] text-[#897773] transition duration-300 hover:border-[#c99fa3] hover:bg-[#f3e7e4] hover:text-[#bd8990]"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  </div>

                  <p className="text-[15px] leading-8 text-[#897773]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#eadeda] bg-[#faf6f2] px-3.5 py-2 text-[13px] font-medium text-[#725f5b]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project-specific GitHub link */}
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[#493b3b] transition-colors hover:text-[#bd8990]"
                  >
                    <FaGithub size={17} />
                    View source code
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#eadeda] pt-7">
          <p className="text-[14px] text-[#897773]">
            More ideas are always in progress.
          </p>

          <a
            href="https://github.com/Samikshyash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#493b3b] transition-colors hover:text-[#bd8990]"
          >
            <FaGithub size={17} />
            Explore my GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
