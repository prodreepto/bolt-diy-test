import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    link: string;
  };
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className="group rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors duration-300">{project.title}</h3>
            <ArrowUpRight className="w-6 h-6 text-text-secondary transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110" />
          </div>
          <p className="text-text-secondary mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
