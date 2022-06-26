import { useProjects } from "../../providers/ProjectsList";
import ProjectCard from "../ProjectsCard";
import { ProjectsHeader, ProjectsWrapper, ProjectCardWrapper } from "./style";

function Projects() {
  const { projects } = useProjects();

  return (
    <ProjectsWrapper id="Projects">
      <ProjectsHeader>
        <h1>Projetos</h1>
      </ProjectsHeader>
      <ProjectCardWrapper>
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            name={item.name}
            image={item.image}
            vercerlLink={item.vercerlLink}
            repositoryLink={item.repositoryLink}
          />
        ))}
      </ProjectCardWrapper>
    </ProjectsWrapper>
  );
}
export default Projects;
