import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--Black-1);
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.5s linear, color 0.5s linear;
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 4rem;
  cursor: default;

  @media (min-width: 440px) {
    max-width: 440px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 90%;
  }
`;
export const Title = styled.div`
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const NavStyled = styled.ul`
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
    font-size: 0.75rem;
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
      font-size: 1rem;
      font-weight: 400;
    }
    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 50%;
    justify-content: space-around;
  }
`;

export const ButtonTheme = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: none;
  transition: background-color 0.5s linear, color 0.5s linear;
  color: ${(props) => props.theme.buttonThemeColor};
  background-color: ${(props) => props.theme.buttonThemeBackgroundColor};
  @media (min-width: 440px) {
    top: 15px;
    right: 15px;
    height: 35px;
    width: 35px;
  }
  @media (min-width: 768px) {
    top: 15px;
  }
`;
