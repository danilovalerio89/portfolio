import { AboutMeWrapperDiv } from "../../styles/MainContainer/style";
import Img from "../../assets/img/filhote-de-jacare.webp";
import {
  AboutMeDiv,
  AboutMeSection,
  KenzieAcademyText,
  FigureContainer,
} from "./style";

function AboutMe() {
  return (
    <>
      <AboutMeSection id="AboutMe">
        <AboutMeWrapperDiv>
          <AboutMeDiv>
            <h1>Olá, eu sou o Danilo (ele/dele)</h1>
            <h3>Desenvolvedor Front-End</h3>
            <p>
              Futuro desenvolvedor FullStack pela{" "}
              <KenzieAcademyText>Kenzie Academy Brasil</KenzieAcademyText>.
              Sempre buscando mais conhecimento e novos desafios. A constante
              evolução e a possibilidade de resolver problemas de várias
              maneiras, são coisas que me fazem me apaixonar cada vez mais pela
              área.
            </p>
          </AboutMeDiv>
        </AboutMeWrapperDiv>
        <AboutMeWrapperDiv>
          <FigureContainer>
            <img src={Img} alt="" />
          </FigureContainer>
        </AboutMeWrapperDiv>
      </AboutMeSection>
    </>
  );
}
export default AboutMe;
