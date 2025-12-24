import { projectData } from '@/data/projectData';
import React from 'react';
import ProjectCard from './ProjectCard';

const Index = () => {
  return (
    <div className="min-h-screen border border-amber-50">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 p-6">
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Index;
