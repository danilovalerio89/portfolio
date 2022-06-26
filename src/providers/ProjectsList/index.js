import { createContext, useContext, useState } from "react";
import NUKENZIE from "../../assets/img/nu-kenzie.png";
import KENZIEHUB from "../../assets/img/kenzie-hub.png";
import KENZIESHOP from "../../assets/img/kenzie-shop.png";
import KENZIEBURGUER from "../../assets/img/kenzie-burguer.png";

const projectsArr = [
  {
    name: "Nu Kenzie",
    image: NUKENZIE,
    vercerlLink:
      "https://react-entrega-s1-nu-kenzie-danilovalerio89.vercel.app/",
    repositoryLink: "https://github.com/danilovalerio89/Nu-Kenzie",
  },
  {
    name: "Kenzie Hub",
    image: KENZIEHUB,
    vercerlLink:
      "https://react-entrega-s2-kenzie-hub-danilovalerio89.vercel.app/",
    repositoryLink: "https://github.com/danilovalerio89/kenzie-hub",
  },
  {
    name: "Kenzie Shop",
    image: KENZIESHOP,
    vercerlLink:
      "https://react-entrega-s3-kenzieshop-danilovalerio89.vercel.app/",
    repositoryLink: "https://github.com/danilovalerio89/kenzie-shop",
  },
  {
    name: "Nu Kenzie",
    image: KENZIEBURGUER,
    vercerlLink:
      "https://react-entrega-s1-hamburgueria-da-kenzie-danilovalerio89.vercel.app/",
    repositoryLink: "https://github.com/danilovalerio89/kenzie-burguer",
  },
];

export const ProjectsContext = createContext([]);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsArr);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
export const useProjects = () => useContext(ProjectsContext);
