import {
  HeaderStyled,
  Title,
  NavStyled,
  AnchorStyled,
  HeaderWrapper,
  ButtonTheme,
} from "./style";
import { useCallback } from "react";
import { HiMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";
function Header({ setCurrentTheme, currentTheme }) {
  const changeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );
  const icon =
    currentTheme === "light" ? <HiMoon size={20} /> : <CgSun size={20} />;
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <Title>
          <p>
            &lt;Danilo<b>Valério</b>/&gt;
          </p>
        </Title>
        <NavStyled>
          <AnchorStyled href="#AboutMe">SOBRE</AnchorStyled>
          <AnchorStyled href="#Tecnology">TECNOLOGIAS</AnchorStyled>
          <AnchorStyled href="#Projects">PROJETOS</AnchorStyled>
          <AnchorStyled href="#Contact">CONTATOS</AnchorStyled>
        </NavStyled>
        <ButtonTheme onClick={() => setCurrentTheme(changeTheme())}>
          {icon}
        </ButtonTheme>
      </HeaderStyled>
    </HeaderWrapper>
  );
}
export default Header;
