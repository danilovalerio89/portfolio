import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  padding-top: 80px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.5s linear, color 0.5s linear;
`;

export const AboutMeWrapperDiv = styled.div`
  width: 80%;
`;
