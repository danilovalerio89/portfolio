import { createContext, useContext, useState } from "react";
import NUKENZIE from "../../assets/img/nu-kenzie.png";
import KENZIEHUB from "../../assets/img/kenzie-hub.png";
import KENZIESHOP from "../../assets/img/kenzie-shop.png";
import KENZIEBURGUER from "../../assets/img/kenzie-burguer.png";

const projectsArr = [
  {
    name: "Nu Kenzie",
    image: NUKENZIE,
    vercerlLink: "https://nu-kenzie-alpha.vercel.app/",
    repositoryLink: "https://github.com/danilovalerio89/Nu-Kenzie",
  },
  {
    name: "Kenzie Hub",
    image: KENZIEHUB,
    vercerlLink: "https://kenzie-hub-jet.vercel.app/",
    repositoryLink: "https://github.com/danilovalerio89/Kenzie-Hub",
  },
  {
    name: "Kenzie Shop",
    image: KENZIESHOP,
    vercerlLink: "https://kenzie-shop-liard.vercel.app/",
    repositoryLink: "https://github.com/danilovalerio89/Kenzie-Shop",
  },
  {
    name: "Kenzie Burguer",
    image: KENZIEBURGUER,
    vercerlLink: "https://kenzie-burguer-one.vercel.app/",
    repositoryLink: "https://github.com/danilovalerio89/Kenzie-Burguer",
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
