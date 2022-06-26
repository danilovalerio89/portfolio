import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Tecnology from "../../components/Tecnology";
import { MainContainer } from "../../styles/MainContainer/style";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../../styles/themes";

function Home() {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />

      <MainContainer>
        <AboutMe />
        <Tecnology />
      </MainContainer>
      {/* <main> */}
      {/* <Projects /> */}
      {/* </main> */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default Home;
