import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--Dark-1);
`;

export const HeaderStyled = styled.header`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  height: 3.75rem;
  align-items: center;
  cursor: default;
  p,
  b,
  a {
    font-size: var(--Font-3);
  }
`;
export const Title = styled.div`
  width: 40%;
`;

export const NavStyled = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  min-width: 60%;
`;

export const AnchorStyled = styled.a`
  display: block;
  position: relative;
  color: var(--White);
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
`;

//Box Line Border
// color: var(--Dark-5);
// padding: 8px;
// position: relative;
// display: block;
// overflow: hidden;

// &::before {
//   position: absolute;
//   content: "";
//   left: 0;
//   bottom: 0;
//   height: 2px;
//   width: 100%;
//   border-bottom: 2px solid transparent;
//   border-left: 2px solid transparent;
//   box-sizing: border-box;
//   transform: translateX(100%);
// }
// &::after {
//   position: absolute;
//   content: "";
//   top: 0;
//   left: 0;
//   height: 2px;
//   width: 100%;
//   border-top: 2px solid transparent;
//   border-right: 2px solid transparent;
//   box-sizing: border-box;
//   transform: translateX(-100%);
// }

// &:hover::before {
//   border-color: white;
//   height: 100%;
//   transform: translateX(0);
//   transition: 0.2s transform linear, 0.2s height linear 0.2s;
// }
// &:hover::after {
//   border-color: white;
//   height: 100%;
//   transform: translateX(0);
//   transition: 0.2s transform linear, 0.2s height linear 0.2s;
