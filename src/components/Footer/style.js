import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid var(--Black-1);
  padding: 0 0 25px 0;
  @media (min-width: 440px) {
    margin: 0 auto;
  }
`;

export const FooterHeader = styled.header`
  text-align: center;
  padding: 10px 0 5px 0;
  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    cursor: default;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 1.75rem;
    }
  }
`;

export const WrapperIcons = styled.div`
  margin: 0 0 0 25px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  p {
  }
  svg {
    margin-right: 10px;
    cursor: pointer;
  }
  h3 {
    margin: 5px 0;
  }
  @media (min-width: 768px) {
    margin: 0 0 0 100px;
  }
`;

export const PStyled = styled.p`
  cursor: pointer;
`;
