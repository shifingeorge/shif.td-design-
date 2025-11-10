import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../types/project';

export default function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  return (
    <motion.div className="group text-left text-cream" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.2 }}>
      <div className="relative bg-gray-200 rounded-2xl aspect-[4/3] mb-4 overflow-hidden group-hover:bg-gray-300 transition-colors">
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: project.imageObjectPosition || 'center' }}
            loading="lazy"
          />
        )}
      </div>

      <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline" aria-label={`Open live preview of ${project.title}`}>
          <h4 className="text-xl font-bold text-cream">{project.title}</h4>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      { (project.caseStudies?.notion || project.caseStudies?.medium) && (
        <p className="text-sm mt-1 text-cream">
          Case study :
          {project.caseStudies?.notion && (
            <a href={project.caseStudies.notion} target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline inline-flex items-center gap-1">
              Notion <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {project.caseStudies?.notion && project.caseStudies?.medium && <span className="mx-1">•</span>}
          {project.caseStudies?.medium && (
            <a href={project.caseStudies.medium} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
              Medium <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </p>
      )}
    </motion.div>
  );
}
