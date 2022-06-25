import { useTecnolgy } from "../../providers/TecnologyList";
import CardTecnology from "../CardTecnology";
import {
  TecnologySectionWrap,
  HeaderSectionTecnology,
  DivTecnologyWrapper,
} from "./style";

function Tecnology() {
  const { tecnology } = useTecnolgy();

  return (
    <TecnologySectionWrap>
      <HeaderSectionTecnology>
        <h1>Tecnologias</h1>
      </HeaderSectionTecnology>
      <DivTecnologyWrapper>
        {tecnology.map((item, index) => (
          <CardTecnology key={index} label={item.name} image={item.image} />
        ))}
      </DivTecnologyWrapper>
    </TecnologySectionWrap>
  );
}
export default Tecnology;
