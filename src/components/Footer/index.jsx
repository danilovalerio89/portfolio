import { FooterWrapper, FooterHeader, WrapperIcons } from "./style";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <FooterWrapper id="Contact">
      <FooterHeader>
        <h1>Contatos</h1>
      </FooterHeader>
      <WrapperIcons>
        <div>
          <BsGithub
            size={40}
            onClick={() =>
              window.open("https://github.com/danilovalerio89", "_blank")
            }
          />
          <p>GitHub</p>
        </div>
        <div>
          <BsLinkedin
            size={40}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/danilo-valerio/",
                "_blank"
              )
            }
          />
          <p>LinkedIn</p>
        </div>
        <div>
          <AiOutlineMail size={40} />
          <p>danvalerio89@gmail.com</p>
        </div>
      </WrapperIcons>
    </FooterWrapper>
  );
}
export default Footer;
