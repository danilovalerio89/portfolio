import { TecnologyProvider } from "./TecnologyList";
import { ProjectsProvider } from "./ProjectsList";

const Providers = ({ children }) => {
  return (
    <ProjectsProvider>
      <TecnologyProvider>{children}</TecnologyProvider>
    </ProjectsProvider>
  );
};

export default Providers;
