import Rebajas from "../components/Rebajas";
import ApiComponentWomen from "../components/ApiComponentWomen";
import CarruselComponent from "../components/CarruselComponent";
import women1 from '../assets/imagesCarrusel/women1.jpeg';
import women2 from '../assets/imagesCarrusel/women2.jpg';

export default function WomenSection() {
  const imagenes1 = [
    women1,
    women2,
  ];
  return (
    <>
        <Rebajas/>
                <CarruselComponent images={imagenes1} />
        
      <ApiComponentWomen/>
    </>
  );
}
