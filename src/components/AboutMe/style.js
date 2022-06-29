import styled from "styled-components";

export const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
  height: 85vh;
  h1 {
    font-size: var(--Font-3);
    font-family: var(--SecondaryFont);
    font-weight: 600;
  }
  h3 {
    margin: 8px 0;
    font-size: var(--Font-2);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  p {
    font-family: var(--SecondaryFont);
    line-height: 28px;
    font-weight: 300;
  }

  @media (min-width: 440px) {
    max-width: 440px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    padding: 0;
    max-width: 80%;
    margin: 0 auto;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;

export const AboutMeDiv = styled.div`
  h1 {
    font-size: var(--fontSize-2);
    font-family: var(--SecondaryFont);
    font-weight: 600;
  }
  h3 {
    margin: 8px 0;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  p {
    font-family: var(--SecondaryFont);
    line-height: 28px;
    font-weight: 300;
  }
  @media (min-width: 768px) {
    min-width: 60%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: var(--fontSize-3);
    }
    h3 {
      font-size: var(--fontSize-2);
    }
  }
`;
export const FigureContainer = styled.figure`
  margin: 25px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
    width: 80%;
    height: 80%;
  }
  @media (min-width: 768px) {
    min-width: 40%;
    justify-content: flex-end;

    img {
      border-radius: 50%;
      max-width: 280px;
      max-height: 180px;
    }
  }
`;

export const KenzieAcademyText = styled.b`
  text-decoration: underline;
  text-underline-offset: 5px;
  text-transform: uppercase;
`;
export const AboutMeDivImg = styled.div``;
