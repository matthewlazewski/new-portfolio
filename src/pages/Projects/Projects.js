import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ User }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <ul>
                    {user.projects.map((project,i) => (
                        <ProjectItem key={i}>
                          <ProjectTitle>{project.name}</ProjectTitle> 
                          <p>{project.state}</p> 
                          <SkillContainer>
                              {[...project.languages, ...project.libraries].mapt((item, j) => (
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