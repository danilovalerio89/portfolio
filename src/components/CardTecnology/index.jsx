import { CardWrapper, FigureWrapper } from "./style";

function CardTecnology({ label, image }) {
  return (
    <CardWrapper>
      <h3>{label}</h3>
      <FigureWrapper>
        <img src={image} alt={label} />
      </FigureWrapper>
    </CardWrapper>
  );
}
export default CardTecnology;
