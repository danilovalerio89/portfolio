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
import { HashLink as Link } from "react-router-hash-link";
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
          <Link smooth to="#AboutMe">
            <AnchorStyled>SOBRE</AnchorStyled>
          </Link>
          <Link smooth to="#Tecnology">
            <AnchorStyled>TECNOLOGIAS</AnchorStyled>
          </Link>
          <Link smooth to="#Projects">
            <AnchorStyled>PROJETOS</AnchorStyled>
          </Link>
          <Link smooth to="#Contact">
            <AnchorStyled>CONTATOS</AnchorStyled>
          </Link>
        </NavStyled>
        <ButtonTheme onClick={() => setCurrentTheme(changeTheme())}>
          {icon}
        </ButtonTheme>
      </HeaderStyled>
    </HeaderWrapper>
  );
}
export default Header;
