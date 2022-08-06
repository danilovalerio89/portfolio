import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  border-bottom: 2px solid var(--clr-400);
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.5s linear, color 0.5s linear;
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0;
  cursor: default;

  @media (min-width: 440px) {
    max-width: 440px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 80%;
  }
`;
export const Title = styled.div`
  h1 {
    font-size: var(--fs-500);
  }
  @media (min-width: 768px) {
    h1 {
      font-size: var(--fs-600);
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: var(--fs-700);
    }
  }
`;

export const NavStyled = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  a {
    display: block;
    position: relative;
    color: ${(props) => props.theme.color};
    transition: background-color 0.5s linear, color 0.5s linear;
    font-size: var(--fs-100);
    font-weight: 500;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1rem;
      background-color: hotpink;
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
    }
    &::after {
      opacity: 1;
      transform: scale(0);
      transform-origin: center;
    }
    &:hover::after {
      transform: scale(1.1);
    }
    @media (min-width: 768px) {
      font-size: var(--fs-200);
      font-weight: 400;
    }
    @media (min-width: 1024px) {
      font-size: var(--fs-200);
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 60%;
    justify-content: space-around;
  }
  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

export const ButtonTheme = styled.button`
  cursor: pointer;
  position: absolute;
  top: 30%;
  left: 92%;
  transform: translate(-50%, -50%);
  padding: 5px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: none;
  transition: background-color 0.5s linear, color 0.5s linear;
  color: ${(props) => props.theme.buttonThemeColor};
  background-color: ${(props) => props.theme.buttonThemeBackgroundColor};
  @media (min-width: 440px) {
    top: 35%;
    height: 35px;
    width: 35px;
  }
  @media (min-width: 768px) {
    top: 50%;
    left: 97%;
  }
`;
