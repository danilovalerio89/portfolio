import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  p {
    font-family: var(--SecondaryFont);
    font-size: 0.875rem;
  }
  img {
    width: 50%;
  }
  @media (min-width: 440px) {
    max-width: 440px;
    margin: 10px 0;
  }
  @media (min-width: 768px) {
    max-width: 20%;
    margin: 0 0 20px 0;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const FigureWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;
