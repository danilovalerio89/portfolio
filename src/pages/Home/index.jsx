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
  const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
      <MainContainer id="AboutMe">
        <AboutMe />
        <Tecnology />
        <Projects
          setCurrentTheme={setCurrentTheme}
          currentTheme={currentTheme}
        />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
}

export default Home;
