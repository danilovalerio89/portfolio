import { createContext, useContext, useState } from "react";
import HTML from "../../assets/img/html.png";
import CSS from "../../assets/img/css.png";
import JS from "../../assets/img/js.png";
import REACT from "../../assets/img/react.png";
import DOCKER from "../../assets/img/docker.png";
import EXPRESS from "../../assets/img/express.png";
import GIT from "../../assets/img/git.png";
import NODE from "../../assets/img/node.png";
import POSTGRE from "../../assets/img/postgre.png";
import TS from "../../assets/img/ts.png";

const tecnologysArr = [
  {
    name: "HTML5",
    image: HTML,
  },
  {
    name: "CSS",
    image: CSS,
  },
  {
    name: "JavaScript",
    image: JS,
  },
  {
    name: "React",
    image: REACT,
  },
  {
    name: "Docker",
    image: DOCKER,
  },
  {
    name: "Express",
    image: EXPRESS,
  },
  {
    name: "Git",
    image: GIT,
  },
  {
    name: "Node.js",
    image: NODE,
  },
  {
    name: "PostgreSQL",
    image: POSTGRE,
  },
  {
    name: "TypeScript",
    image: TS,
  },
];

export const TecnologyContext = createContext([]);

export const TecnologyProvider = ({ children }) => {
  const [tecnology, setTecnology] = useState(tecnologysArr);

  return (
    <TecnologyContext.Provider value={{ tecnology }}>
      {children}
    </TecnologyContext.Provider>
  );
};
export const useTecnolgy = () => useContext(TecnologyContext);
