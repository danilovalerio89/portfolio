import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--Dark-1);
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
  font-size: var(--fontSize-3);
  @media (min-width: 1024px) {
    font-size: var(--fontSize-4);
  }
`;
export const ButtonTheme = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
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
  }
  @media (min-width: 768px) {
    top: 20px;
  }
`;
export const NavStyled = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 50%;
  }
`;

export const AnchorStyled = styled.p`
  display: block;
  position: relative;
  color: ${(props) => props.theme.color};
  transition: background-color 0.5s linear, color 0.5s linear;
  font-size: var(--fontSize-1);
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
  @media (min-width: 1024px) {
    font-size: var(--fontSize-2);
  }
`;
