import styled from "styled-components";

export const HeaderSectionTecnology = styled.header`
  display: flex;
  width: 100%;

  justify-content: center;
  padding: 40px 0;
  h1 {
    font-size: var(--fontSize-2);
  }
  @media (min-width: 1024px) {
    padding: 75px 0;
    h1 {
      font-size: var(--fontSize-3);
    }
  }
`;
export const TecnologySectionWrap = styled.section`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 440px) {
    max-width: 440px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    max-width: 80%;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
    margin-bottom: 50px;
  }
`;

export const DivTecnologyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    max-width: 100%;
  }
`;
