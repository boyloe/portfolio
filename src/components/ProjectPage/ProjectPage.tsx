import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectPage:React.FC = () => {
    return (
        <div className="h-screen bg-blue-line-wave bg-cover justify-center">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}