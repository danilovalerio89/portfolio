import {
  HeaderStyled,
  Title,
  NavStyled,
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
    currentTheme === "light" ? (
      <HiMoon size={"100%"} />
    ) : (
      <CgSun size={"100%"} />
    );
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
            SOBRE
          </Link>
          <Link smooth to="#Tecnology">
            TECNOLOGIAS
          </Link>
          <Link smooth to="#Projects">
            PROJETOS
          </Link>
          <Link smooth to="#Contact">
            CONTATOS
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
