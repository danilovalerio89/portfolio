import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 25px 0;
  h1 {
    margin: 0 0 0 25px;
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
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
`;
export const ButtonProjects = styled.button`
  /* padding: 8px; */
  /* position: relative;
  display: block;
  overflow: hidden; */
  height: 25px;
  width: 25%;
  border-radius: 5px;
  transition: background-color 0.5s linear, color 0.5s linear;

  background-color: ${(props) => props.theme.buttonThemeBackgroundColor};
  a {
    color: ${(props) => props.theme.buttonThemeColor};
  }
  /* &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }
  &:hover::before {
    border-color: red;
    height: 100%;
    transform: translateX(0);
    transition: 0.5s transform linear, 0.5s height linear 0.5s;
  }
  &:hover::after {
    border-color: red;
    height: 100%;
    transform: translateX(0);
    transition: 0.5s transform linear, 0.5s height linear 0.5s;
  } */
`;
