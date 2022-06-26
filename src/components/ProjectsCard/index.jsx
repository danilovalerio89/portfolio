import {
  ProjectCardWrapper,
  FigureWrapper,
  ButtonProjects,
  ButtonWrapper,
} from "./style";

function ProjectCard({ name, image, vercerlLink, repositoryLink }) {
  return (
    <ProjectCardWrapper>
      <h1>{name}</h1>
      <FigureWrapper>
        <img src={image} alt={name} />
      </FigureWrapper>
      <ButtonWrapper>
        <ButtonProjects>
          <a href={vercerlLink} target="_blank" rel="noopener noreferrer">
            Ver
          </a>
        </ButtonProjects>

        <ButtonProjects>
          <a href={repositoryLink} target="_blank" rel="noopener noreferrer">
            Código
          </a>
        </ButtonProjects>
      </ButtonWrapper>
    </ProjectCardWrapper>
  );
}
export default ProjectCard;
