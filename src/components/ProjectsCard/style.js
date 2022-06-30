import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 0 40px 0;
  border-radius: 5px;
  border: ${(props) => props.theme.borderCard};
  transition: background-color 0.5s linear, color 0.5s linear;
  background-color: ${(props) => props.theme.cardBackGround};

  h3 {
    font-size: 0.85rem;
    margin: 10px 0;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  @media (min-width: 768px) {
    max-width: 555px;
    h3 {
      font-size: 1rem;
      margin: 20px 0;
    }
  }
  @media (min-width: 1024px) {
    width: 45%;
    h3 {
      font-size: 1.25rem;
    }
  }
`;

export const FigureWrapper = styled.figure`
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    height: 210px;
    border-radius: 5px;
    border: 1px solid var(--Black);
  }

  @media (min-width: 768px) {
    img {
      width: 80%;
      height: 300px;
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
  position: relative;
  @media (min-width: 768px) {
    margin: 20px 0;
  }
`;
export const ButtonProjects = styled.button`
  display: block;
  height: 25px;
  width: 25%;
  border-radius: 5px;
  color: var(--Black);
  border: ${(props) => props.theme.buttonCard.cardBorder};
  background-color: ${(props) => props.theme.buttonCard.backGround};
  letter-spacing: 1px;
  position: relative;
  transition: all 0.35s;
  span {
    position: relative;
    z-index: 2;
  }
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${(props) => props.theme.buttonCard.hoverBackground};
    transition: all 0.35s;
  }

  &:hover {
    color: ${(props) => props.theme.buttonCard.hoverColor};
  }

  &:hover:after {
    width: 100%;
  }
  @media (min-width: 768px) {
    font-weight: 600;
  }
`;
