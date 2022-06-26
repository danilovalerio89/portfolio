import styled from "styled-components";

export const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutMeDiv = styled.div`
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
`;

export const KenzieAcademyText = styled.b`
  text-decoration: underline;
  text-underline-offset: 5px;
  text-transform: uppercase;
`;
export const AboutMeDivImg = styled.div``;
