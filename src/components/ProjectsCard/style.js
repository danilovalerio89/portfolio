import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 0 40px 0;
  border-radius: 5px;
  transition: background-color 0.5s linear, color 0.5s linear;
  box-shadow: ${(props) => props.theme.borderColor};
  h3 {
    font-size: var(--fontSize-1);
    margin: 0 0 20px 0;
  }
  @media (min-width: 768px) {
    max-width: 555px;
  }
  @media (min-width: 1024px) {
    width: 45%;
    h3 {
      font-size: var(--fontSize-2);
    }
  }
`;

export const FigureWrapper = styled.figure`
  display: flex;
  justify-content: center;
  img {
    width: 80%;
    border-radius: 5px;
    border: 1px solid var(--Black);
  }
  @media (min-width: 768px) {
    img {
      width: 80%;
      height: 350px;
      border-radius: 5px;
      border: 1px solid var(--Black);
    }
  }
  @media (min-width: 1024px) {
    img {
      width: 80%;
      height: 350px;
      border-radius: 5px;
      border: 1px solid var(--Black);
    }
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
`;
export const ButtonProjects = styled.button`
  height: 25px;
  width: 25%;
  border-radius: 5px;
  transition: background-color 0.5s linear, color 0.5s linear;
  background-color: ${(props) => props.theme.buttonThemeBackgroundColor};
  color: ${(props) => props.theme.buttonThemeColor};
  &:hover {
    transition: all 0.3s ease;
    color: var(--White);
    background-color: var(--Dark-1);
  }
`;
