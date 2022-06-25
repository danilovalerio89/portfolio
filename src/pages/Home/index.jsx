import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Tecnology from "../../components/Tecnology";
import { MainContainer } from "../../styles/MainContainer/style";

function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <AboutMe />
        <Tecnology />
      </MainContainer>
      {/* <main> */}
      {/* <Projects /> */}
      {/* </main> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
