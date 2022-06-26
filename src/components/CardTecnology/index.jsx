import { CardWrapper, FigureWrapper } from "./style";

function CardTecnology({ label, image }) {
  return (
    <CardWrapper>
      <p>{label}</p>
      <FigureWrapper>
        <img src={image} alt={label} />
      </FigureWrapper>
    </CardWrapper>
  );
}
export default CardTecnology;
