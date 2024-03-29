import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  padding-bottom: 25px;
  @media (min-width: 440px) {
    max-width: 440px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    max-width: 80%;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;

export const ProjectsHeader = styled.header`
  padding: 40px 0;
  text-align: center;
  h1 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1024px) {
    padding: 10% 0;
    h1 {
      font-size: 1.75rem;
    }
  }
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
