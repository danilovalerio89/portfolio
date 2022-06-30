import { useState } from "react";
import {
  ProjectCardWrapper,
  FigureWrapper,
  ButtonProjects,
  ButtonWrapper,
} from "./style";

function ProjectCard({ name, image, vercerlLink, repositoryLink }) {
  return (
    <ProjectCardWrapper>
      <h3>{name}</h3>
      <FigureWrapper>
        <img src={image} alt={name} />
      </FigureWrapper>
      <ButtonWrapper>
        <ButtonProjects onClick={() => window.open(vercerlLink)}>
          <span>Ver</span>
        </ButtonProjects>
        <ButtonProjects onClick={() => window.open(repositoryLink)}>
          <span>Código</span>
        </ButtonProjects>
      </ButtonWrapper>
    </ProjectCardWrapper>
  );
}
export default ProjectCard;
