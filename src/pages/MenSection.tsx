import ApiComponentMen from "../components/ApiComponentMen";
import CarruselComponent from "../components/CarruselComponent";
import Rebajas from "../components/Rebajas";
import men1 from "../assets/imagesCarrusel/men1.webp"
import men2 from "../assets/imagesCarrusel/men2.jpeg"
export default function MenSection() {
  const imagenes1 = [
    men1,
    men2,
  ];

  return (
    <>
      <Rebajas />
        <h3 className="text-center mt-40 mb-24 text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Productos más destacados de esta semana
        </h3>
        <CarruselComponent images={imagenes1} />
      <ApiComponentMen />
    </>
  );
}
