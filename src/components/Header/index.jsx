import {
  HeaderStyled,
  Title,
  NavStyled,
  AnchorStyled,
  HeaderWrapper,
} from "./style";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <Title>
          <p>
            &lt;Danilo<b>Valério</b>/&gt;
          </p>
        </Title>
        <NavStyled>
          <AnchorStyled href="#">SOBRE</AnchorStyled>
          <AnchorStyled href="#">TECNOLOGIAS</AnchorStyled>
          <AnchorStyled href="#">PROJETOS</AnchorStyled>
          <AnchorStyled href="#">CONTATOS</AnchorStyled>
        </NavStyled>
      </HeaderStyled>
    </HeaderWrapper>
  );
}
export default Header;
