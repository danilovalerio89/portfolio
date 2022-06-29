import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  img {
    width: 50%;
  }
  @media (min-width: 440px) {
    max-width: 440px;
    margin: 0 auto;
  }
  @media (min-width: 770px) {
    max-width: 20%;
    margin: 0 0 20px 0;
  }
`;

export const FigureWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
