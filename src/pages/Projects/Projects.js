import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <ul>
                    {user.projects.map((project,i) => (
                        <ProjectItem key={i}>
                          <a href={project.githubUrl}><ProjectTitle>{project.name}</ProjectTitle></a>
                          <p>{project.state}</p> 
                            <a href={project.videos.map(video => Object.values(video.url).join(''))} name={project.name}>{project.videos.map(video => Object.values(video.url).join(''))} name={project.name}</a>
                          <SkillContainer>
                              {[...project.languages, ...project.libraries].map((item, j) => (
                                  <Pill key={j}>{item}</Pill>
                              ))}
                          </SkillContainer>
                        </ProjectItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Projects;